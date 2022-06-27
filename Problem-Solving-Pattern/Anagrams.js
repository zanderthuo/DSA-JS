function validAnagram(first, second) {
    // create an object to hold string
    const lookup = {};

    // loop over the first string and count number of letters
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        // check if letter is appearing once and incrementing it AND create a new letter if not found
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    // Loop over the second string and count number of letters
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

validAnagram('anagram', 'nagaram')
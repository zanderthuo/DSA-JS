const anagraam = (first, second) => {
    // check if first string is same as second string
    if (first.length !== second.length) {
        return false;
    }
    // create an object to hold string
    let lookup = {};
    // loop over the first string and count number of letters
    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        // check if letter is appearing once and incrementing it AND create a new letter if not found
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    // console.log(lookup);

    // Loop over the second string and count number of letters
    for (let i = 0; i < second.length; i++) {
        const letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(anagraam("ooppppergf", "ooppppergf"))
// Write a function which takes in a string and
// returns counts of each character in the string

function charCount(str) {
    // make object to return at end of string
    var result = {};
    // loop over string, for character...
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        // if char is something else (space, period etc.) don't do anything
        if (/[a-z0-9]/.test(char)) {
            // if the char is a number/letter AND is a key in object, add one to count
            if (result[char] > 0) {
                result[char]++;
            }
            // if the char is a number/letter AND not in object, add it to object and set value to 1
            else {
                result[char] = 1;
            };
        }
    }
    // return object at end
    return result;
}

console.log(charCount("Hi AlexXx xander!!"));
















function CountString(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 1) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

console.log(CountString("Hi AlexXx xander"))




























// function charCount(str) {
//     // make object to return at end of string
//     var result = {};
//     // loop over string, for character...
//     for (var char of str) {
//         char = char.toLowerCase();
//         // if char is something else (space, period etc.) don't do anything
//         if (isAlphaNumeric(char)) {
//             // if the char is a number/letter AND is a key in object, add one to count
//             result[char] = ++result[char] || 1;
//         }
//     }
//     // return object at end
//     return result;
// }

// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0);
//     if (!(code > 47  && code < 58) && 
//         !(code > 64 && code < 91) && 
//         !(code > 96 && code < 123)) {
//             return false;
//         }
//         return true;
// }

// console.log(charCount("Hi AlexXx xander!!"))
// Method 1

// const collectOddValues = (arr) => {
//     // create an array to store numbers
//     let result = [];

//     function helper(helperInput) {
//         // check if length is 0
//         if (helperInput.length === 0) {
//             return;
//         }
//         // check if array input is not even
//         if (helperInput[0] % 2 !== 0) {
//             // if not push to array
//             result.push(helperInput[0]);
//         }
//         helperInput(helperInput.slice(1));
//     }
//     helper(arr)
//     return result;
// }

// console.log(collectOddValues([3, 4, 7, 6, 88, 34, 121]))



// Method 2:PURE RECURSION

const collectOddValues = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr

    // Check if array element is odd
    if (arr[0] % 2 !== 0) {
        // if odd push element to new array
        newArr.push(arr[0])
    }
    // concatinate the whole array int one
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([3, 4, 7, 6, 88, 34, 121]))
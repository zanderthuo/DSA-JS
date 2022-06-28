// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique 
//values in the array. There can be negative numbers in the 
// array, but it will always be sorted.
const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 7, 99]));
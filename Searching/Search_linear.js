// function that accepts an array and a value
const linearSearch = (arr, val) => {
    // loop through the array and check if current array element is equal to the value
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // if it is equal,return the index at which the element is found
        if (element === val) return i
    }
    // if the value is never found,return -1
    return -1
}
console.log(linearSearch([3, 5, 7, 8, 9, ], 4))
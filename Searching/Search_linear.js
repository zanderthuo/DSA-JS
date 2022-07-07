// function that accepts an array and a value
// loop through the array and check if current array element is equal to the value

// if it is equal,return the index at which the element is found

// if the value is never found,return-1
const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === val) return i
    }
    return -1
}
console.log(linearSearch([3, 5, 7, 8, 9, ], 4))
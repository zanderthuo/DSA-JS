// Write a function that calculates the sum of all numbers
// from 1 up to (and including) some number n

// const addUpTo = (n) => {
//     return n * (n + 1) / 2;
// }

// console.log(addUpTo(3))

const addUpTo = (n) => {
    // initialize total number of elements
    let total = 0;
    // loop through elements
    for (let i = 0; i <= n; i++) {
        // add all the numbers 
        total += i
    }
    return total;
}

console.log(addUpTo(4))
// 1) An array of numbers
// 2) Set a target on the Array
// 3)Set a start and end
// console.log(middle)

function BinarySearch(myArr, target) {

    let start = 0
    let end = myArr.length - 1;
    let middle = Math.floor((start + end) / 2);
    console.log(middle); // index of middle
    console.log(myArr[middle]); // middle value
    // while (myArr[middle] !== target && start <= end) {

    // }

}

console.log(BinarySearch([20, 30, 40, 50, 60, 70, 80], 140))
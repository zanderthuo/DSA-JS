// the function accepts a sorted array and a value
const searchBinary = (arr, val) => {
    // create a left pointer at the start of the array, and a right pointer at the end of the array
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    // While the leftpointer comes before the right pointer:/
    while (arr[middle] !== val && start <= end) {
        //if you find the value you want, return the index
        if (val < arr[middle]) {
            // if the value is too small, move the left pointer up
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        console.log(start, middle, end);
        // create a pointer in the middle
        middle = Math.floor((start + end) / 2);
        // if the value is too large, move the right pointer down
        if (arr[middle] === val) {
            return middle;
        }
        // if you never find the value, return -1
        return -1
    };
}
console.log(searchBinary([30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], 36));
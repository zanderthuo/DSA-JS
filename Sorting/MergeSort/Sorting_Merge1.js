/**
 * - Create a function that accepts two inputs
 * - Create an empty array, take a look at the smallest values in each input array
 * - While there are still values we haven't looked at ...
 *   - iF THE VALUE IN THE FIRST ARRAY IS SMALLER THAN THE VALUE IN THE SECOND Array, 
 *     PUSH THE VALUE IN THE FIRST ARRAY INTO OUR RESULTS AND MOVE ON TO THE NEXT VALUE IN THE FIRST ARRAY
 *   - If the value in the first array is larger than the value in the second array, push the value in the 
 *     second array into our results and move on to the next value in the second array
 */

const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}
console.log(merge([100], [1, 2, 3, 4]));
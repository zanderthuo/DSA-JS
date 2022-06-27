// 2. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//     You can return the answer in any order.
//     Example 1:
//     Input: nums = [2,7,11,15], target = 9
//     Output: [0,1]
//     Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:
//     Input: nums = [3,2,4], target = 6
//     Output: [1,2]
//     Example 3:
//     Input: nums = [3,3], target = 6
//     Output: [0,1]

const twoSum = (nums, target) => {
    // initiaize an empty object
    let storage = {};
    // Iterate over the elements of the given array
    for(let i = 0; i < nums.length; i++) {
        // check if the elements complement exists in the object
        if(storage[target-nums[i]] !== undefined) {
            // If yes return the indices of the complement and current element
            return [storage[target-nums[i]], i]
        }
        // If not, put the element into object with index in array
        // the key is the value of num's elements and
        // the value is the index of num's elements
        storage[nums[i]] = i
        //Move to the next iteration

    }
};

console.log(twoSum([2,7,11,15], 9))
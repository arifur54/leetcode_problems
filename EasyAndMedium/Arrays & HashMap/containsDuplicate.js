
// LeetCode Question #: 217


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


let nums = [1, 2, 3, 4]
function containsDuplicate(nums) {
    let seen = new Map();

    for(let i = 0; i < nums.length; i++){
        if(!seen.has(nums[i])){
            seen.set(i, nums[i])
        }else{
            return true
        }
    }
    return false;
}

console.log(containsDuplicate(nums));


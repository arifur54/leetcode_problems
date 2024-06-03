
// LeetCode Question #: 26
nums = [0,0,1,1,1,2,2,3,3,4]

function leetCodeRemoveDuplicate(nums) {
    let nextCount = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[nextCount - 1]){
            nums[nextCount] = nums[i]
            nextCount++;
        }
    }
    return nextCount;
}

console.log(leetCodeRemoveDuplicate(nums));


// LeetCode Question #: 3151

nums = [4,3,1,6]

function isArraySpecial(nums) {
    for(let i = 0; i < nums.length; i++){
        //console.log(nums[i])
        console.log(nums[i], nums[i] % 2)
        console.log(nums[i - 1] == nums[i - 1] % 2)
    //    if(nums[i] % 2 === nums[i - 1] % 2){
    //     return false;
    //    }
    }

    // return true;
    
}

console.log(isArraySpecial(nums));

  
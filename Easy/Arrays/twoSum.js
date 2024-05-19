nums = [2,7,11,15]
target = 6

function twoSum(nums, target) {
    const resultArr = []
    for(let i = 0; i < nums.length; i++){
       for(let j = i + 1; j < nums.length; j++){   
            let sum = nums[i] + nums[j]
            if(sum === target){
                resultArr.push(i, j)
            }
       }
    }

    return resultArr;
}

function twoSum2(nums, target){
    let bucket = new Map()
    for(let i = 0; i < nums.length; i++){
        let num_to_find = target - nums[i];

        if(bucket.has(num_to_find)){
            return [bucket.get(num_to_find), i]
        }

        bucket.set(nums[i], i)
    }
}

function twoSumSlidingWindow(nums, target) {
    // Use a sliding window of size 2
    for (let i = 0; i < nums.length - 1; i++) {
        // The window contains the elements nums[i] and nums[i + 1]
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1];
        }
    }
    return [];
}

// // console.log(twoSum(nums, target))
// console.log(twoSum2(nums, target))

console.log(twoSumSlidingWindow(nums, target))
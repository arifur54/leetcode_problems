nums = [4,5,6], target = 10

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


function twoSum3(nums, target){

}

// // console.log(twoSum(nums, target))
// console.log(twoSum2(nums, target))

console.log(twoSum3(nums, target))
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
    // Initialize a new Map to store the numbers and their indices
    let bucket = new Map()
    
    // Iterate through the array of numbers
    for(let i = 0; i < nums.length; i++){
        // Calculate the number needed to reach the target sum
        let num_to_find = target - nums[i];

        // Check if the needed number is already in the Map
        if(bucket.has(num_to_find)){
            // If found, return the indices of the two numbers that add up to the target
            return [bucket.get(num_to_find), i]
        }

        // If not found, add the current number and its index to the Map
        bucket.set(nums[i], i)
    }
}


function twoSum3(nums, target){

}

// // console.log(twoSum(nums, target))
// console.log(twoSum2(nums, target))

console.log(twoSum3(nums, target))
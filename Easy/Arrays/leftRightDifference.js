
const nums = [10, 4, 8, 3]

function leftRightDifference(nums) {
    // step1. Loop through the array
    // step2. find the leftSum = [0 + nums[0] + nums[1] + nums[2]] ==> nums[i - 1]
    // step3. find the rightSum = [nums[3] + nums[2] + nums[1]+ 0] ==> nums[i + 1]
    // step4. find the difference
    let leftSumArr = [0]
    let leftSum = 0
    let rightSumArr = [0]
    rightSum = 0;
    let result = []
    for(let i = 0; i< nums.length - 1; i++){
        leftSum += nums[i]
        leftSumArr.push(leftSum)
    }
    for(let i = nums.length - 1; i > 0; i--){
        rightSum += nums[i]
        rightSumArr.unshift(rightSum)
    }

    for(let i = 0; i < nums.length; i++){
        result.push(Math.abs(leftSumArr[i] - rightSumArr[i]))
    }

    return result
} 
        
function leftRightDifference2(nums){
    let n = nums.length
    const totalSum = nums.reduce((acc, currentVal) => {
        return acc + currentVal
    }) 
    const result = new Array(n)
    
    leftSum = 0
    rightSum = totalSum

    for(let i = 0; i < n; i++){
        result[i] = Math.abs(leftSum - rightSum)
        leftSum += nums[i]

        if(i < (n-1)){
            rightSum -= nums[i + 1]
        }
    }

    return result;

}


console.log(leftRightDifference2(nums))
    
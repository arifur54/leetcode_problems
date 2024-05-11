nums = [1, 4, 3, 2]

function arrayPairSum(nums) {
    sortedNums = nums.sort((a,b) => a-b);
    result = 0
    for(let i=0; i < sortedNums.length; i += 2){
        result += sortedNums[i]
    }

    return result;
}

console.log(arrayPairSum(nums))

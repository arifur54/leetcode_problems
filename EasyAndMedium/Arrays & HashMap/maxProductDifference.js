// // LeetCode Question #: 1913

nums = [5,6,2,7,4]

function maxProductDifference(nums) {
    const sortedArray = nums.sort((a,b) => a-b)
    return sortedArray[nums.length-2] * sortedArray[nums.length-1] - sortedArray[0] * sortedArray[1]
}

console.log(maxProductDifference(nums));

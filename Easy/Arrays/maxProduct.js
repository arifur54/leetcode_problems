
// LeetCode Question #: 1464
nums = [3,4,5,2]

function maxProduct(nums) {
    const sortedArray = nums.sort((a,b) => a - b).reverse()
    return (sortedArray[0] - 1) * (sortedArray[1]-1)
}

console.log(maxProduct(nums));
   
  
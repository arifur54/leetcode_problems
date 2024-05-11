
// LeetCode Question #: 2656
nums = [4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4]
k = 6
function maximizeSum(nums, k) {
    let maxElement = Math.max(...nums)
    result = 0
    for(let counter = 0; counter <= (k - 1); counter++) {
        result += maxElement + counter
    }
    return result
}

console.log(maximizeSum(nums, k));


  
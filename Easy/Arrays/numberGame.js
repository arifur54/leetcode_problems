nums = [17,2,4,11,14,18];

function numberGame(nums) {
    outputArray = []
    sortedArray = nums.sort((a,b) => a-b);
    for(let i = 0; i < sortedArray.length; i += 2){
       outputArray.push(sortedArray[i + 1], sortedArray[i])
    }
    return outputArray;
}

console.log(numberGame(nums))
    
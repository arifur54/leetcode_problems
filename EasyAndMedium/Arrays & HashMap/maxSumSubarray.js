
nums = [4, 2, 2, 7, 8, 1, 2, 8, 10];


// sliding window with fixed length
function maxSumSubarray(nums) {
    k = 3;
    maxValue = 0;
    currentsum = 0;
    for(let i = 0; i < nums.length; i++){
        currentsum += nums[i]
        if(i >= k - 1){
            maxValue = Math.max(maxValue, currentsum);
            currentsum -= nums[i - (k - 1)]
        }
    }
    return maxValue
}

// Sliding window with dynamic length;
function smalletSubArray(nums){
    target = 8
    startPointer = 0;
    currentSum = 0;
    minSize = nums.length;
    for(let endPointer = 0; endPointer < nums.length; endPointer++){
         currentSum += nums[endPointer]
         while(currentSum >= target){
            minSize = Math.min(minSize, endPointer - startPointer + 1 )
            currentSum -= nums[startPointer]
            startPointer++
         }
    }

    return minSize

}

// console.log(maxSumSubarray(nums));
console.log(smalletSubArray(nums));

  
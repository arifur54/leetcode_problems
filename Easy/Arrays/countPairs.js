
const nums = [-6,2,5,-2,-7,-1,3]
const target = -2

function countPairs (nums, target){
    // Time complexity: O(n^2)
    // Space Complexity: O(n^2)
    let indexes = []
    let startingPointer = 0;
    let nextPointer = 1;
    while(nextPointer < nums.length){
        let sumValue = nums[startingPointer] + nums[nextPointer]
        if(sumValue < target){
            indexes.push([startingPointer, nextPointer])
        }
        nextPointer += 1;
        if(nextPointer === nums.length){
            startingPointer = startingPointer + 1
            nextPointer = startingPointer + 1
        }
    }
    
    return indexes.length;
}


function alternateCountPairs(nums, target){
    // Time complexity: O(n^2)
    // Space Complexity: O(1) 
    count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] < target){
                count++
            }
        }
    }

    return count;
}


function sortedCountPairs(nums, target){
    nums.sort((a, b) => a - b)
    let left = 0;
    let right = nums.length - 1
    let count = 0;
    while(left < right){
        if(nums[left] + nums[right] < target) {
            count = count + (right - left) 
            left++
        }
        else {
            right--
        }
    }
    return count;


}

console.time('Time')
console.log(countPairs(nums, target))
console.timeEnd('Time')
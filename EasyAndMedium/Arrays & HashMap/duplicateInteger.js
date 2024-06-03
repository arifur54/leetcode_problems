
// LeetCode Question #: 0


nums = [1,1,1,3,3,4,3,2,4,2]
function duplicateInteger(nums) {
    let sortedArray = nums.sort((a,b) => a-b);

    // increment both pointers by one until the end,
    // if both contais the same duplicates return true. else return false;
    for(startPointer = 0; startPointer < sortedArray.length; startPointer++){
        console.log(sortedArray[startPointer], sortedArray[nextPointer])

        if(nums[startPointer] == nums[nextPointer]){
            return true;
        }

        nextPointer++;
    }

    return false;

}

function duplicateInteger2(nums){
    let numsSet = new Set();

    for(let num of nums){
        if(numsSet.has(num)){
            return true;
        }
        numsSet.add(num)
    }
    return false
}

console.log(duplicateInteger2(nums));

  
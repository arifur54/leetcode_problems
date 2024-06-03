
// LeetCode Question #: 347
nums = [4,1,-1,2,-1,2,3], k = 2
function topKFrequent(nums, k) {
    let numMap = {};
    for(let num of nums){
        if(numMap[num] === undefined){
            numMap[num] = 1
        }else{
            numMap[num]++;
        }
    }

    // let sortedVaues = Object.entries(numMap).sort((a, b) => a[1] - b[1])
    // Second
    let sortedPairs = Object.entries(numMap).sort((a, b) => b[1] - a[1]);
    let topKeys = sortedPairs.slice(0, k).map(pair => parseInt(pair[0]));
    
   return topKeys;
}

console.log(topKFrequent(nums, k));


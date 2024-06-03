const measureExecutionTime = require('./executionTime');

const nums = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100) + 1);
// const nums = [1,1,2,4,9]
const k = 30

function minOpertaion(nums, k) {
    sortedArray = nums.sort((a,b) => a-b)
    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i] >= k){
            return i
        }
    }

}

function minOpertaion2(nums, k) {
    let count = 0;
    for(let num of nums) {
        if(num < k){
            count++
        }
    }
    return count
}



let time = measureExecutionTime(minOpertaion, nums, k);
console.log(`timer1: ${time}`)


let time2 = measureExecutionTime(minOpertaion2, nums, k);
console.log(`timer2: ${time2}`)


const executionTime = require('./executionTime');

// const nums = [4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4]
// const nums = Array.from({ length: 100000000 }, () => Math.floor(Math.random() * 10) + 1);
const nums = ["Arif", "Arif", "Yash", "Yash", "Hark", "Hark"]

function removeDuplicatesSortedArray(nums) {
    leftPointer = 0
    rightPointer = nums.length - 1;
    const resultArray = {};
    
    while(leftPointer < rightPointer){
        leftNumber = nums[leftPointer];
        rightNumber = nums[rightPointer];
        // if(!resultArray.has(leftNumber)){
          
        // }
        resultArray[`${leftNumber}-Key:`] = leftNumber
        // if(!resultArray.has(rightNumber)){
        //     resultArray.push(rightNumber)
        //   }
        resultArray[`${rightNumber}-Key:`] = rightNumber
        leftPointer++
        rightPointer--
    }

    console.log(resultArray['Arif-Key:'])
}


function removeDuplicatesSortedArray2(nums) {
   
    let resultArray = []
    for(let num of nums){
        if(!resultArray.includes(num)){
            resultArray.push(num)
        }
    }

    return resultArray
}

const time = executionTime(removeDuplicatesSortedArray, nums);
console.log(`execution #1:  ${(time)}`)
const time2 = executionTime(removeDuplicatesSortedArray2, nums);
console.log(`execution #2: ${(time2)}}`)


// const sortedNums = nums.sort((a,b) => a-b)
// console.log(sortedNums)
// let startPointer = 0;
// let endPointer = nums.length;
// const newArray = []
// while(startPointer < endPointer){
//    if(sortedNums[startPointer] === sortedNums[startPointer + 1]){
//     startPointer++;
//    }else if(sortedNums[endPointer] === sortedNums[endPointer - 1]){
//     endPointer--;
//    }else {
//     newArray.push(sortedNums[startPointer]);
//     newArray.push(sortedNums[endPointer]);
//     startPointer++;
//     endPointer--;
//    }
// }
// console.log(`newArray: ${newArray}`)
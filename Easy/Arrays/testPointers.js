newNums = [4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4]

// newNums = [1, 2, 3, 4, 10, 7, 8];

target = 17;

// Goal is to find the middle section using two pointers- Complete (We found the middle)
// Now I want to find the max Value of an array using two pointers.

function testPointers(nums, target) {
    let newNums = nums.sort((a,b) => a-b)
    let startPointer = 0;
    endPointer = nums.length - 1;
    foundIndexes = []
    while(startPointer < endPointer){
        const sum = newNums[startPointer] + newNums[endPointer]
        if(sum === target){
            foundIndexes.push(newNums[startPointer], newNums[endPointer]) 
            break;
        }else if(sum < target){
            startPointer++
        }else{
            endPointer--
        }
        
    }
    console.log(`Found a value of: ${target} at index: ${startPointer}, ${endPointer}`)
    if(foundIndexes){
        return foundIndexes
    }
    return null

   
   
    // return foundMiddle


}

console.log(testPointers(newNums, target));


// Found Middle
 // //console.log(`start: ${newNums[startPointer]}, End: ${newNums[endPointer]}`)
        // if(newNums[startPointer] === newNums[endPointer]){
        //     foundMaxAtStartPointer = startPointer;
        //     foundMaxAtendPointer = endPointer;
        // }
        // startPointer++;
        // endPointer--;
        
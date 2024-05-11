const measureExecutionTime = require('./executionTime')
const height = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100) + 1);

// const height = [1,8,6,2,5,4,8,3,7];

function maxArea(height) {
    let maxA = 0
    for(let i = 0; i < height.length; i++){
        let h1 = height[i]
        for(let j = i + 1; j < height.length; j++){
            let h2 = height[j]
            let w = j - i;
            let h = h2 > h1 ? h1 : h2
            if(h*w > maxA){
                maxA = h * w
            }
        }
    }
    return maxA;
}

function maxArea2(height){
    
    let leftPointer = 0
    let rightPointer = height.length - 1

    let maxA = 0

    for (let i = 0; i < height.length ; i++){

        if (leftPointer === rightPointer) break 

        let currentLeftStick = height[leftPointer]
        let currentRightStick = height[rightPointer]
        
        let h = currentLeftStick < currentRightStick ? currentLeftStick : currentRightStick
        
        let w = (rightPointer - leftPointer)
        
        let a = h * w

        if (a > maxA) {
            maxA = a
        }

        if (currentLeftStick < currentRightStick) {
            leftPointer ++ 
        } else {
            rightPointer--
        }
    }

    return maxA
}

let time = measureExecutionTime(maxArea, height)
console.log(time)


let time2 = measureExecutionTime(maxArea2, height)
console.log(time2)
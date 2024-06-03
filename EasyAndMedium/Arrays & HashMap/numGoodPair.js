const numsArr = [1,2,1,2,3,1];

function numberOfGoodPair(nums){
    const similarArray = []
    const totalElement = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                similarArray.push([i,j])
            }
            
        }
    }

    for(let k = 0; k < similarArray.length; k++){
        totalElement.push(similarArray[k])
    }
    return totalElement.length;
}

console.log(numberOfGoodPair(numsArr));

nums = [6,5,4,8]


function smallerNumbersThanCurrent(nums){
    let array = []
    for(let i = 0; i < nums.length; i++){
       let total = 0
       for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                total++
            }
       }
       array.push(total)
    }
    return array;
}


console.log(smallerNumbersThanCurrent(nums))
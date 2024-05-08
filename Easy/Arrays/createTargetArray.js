nums = [0, 1, 2, 3, 4]
indexs = [0, 1, 2, 2, 1]


function createTargetArray(nums, index) {
    const newArray = [];

    for(let i = 0; i < nums.length; i++){
        // // newArray.splice(index[i], 0, nums[i])
        // console.log(index[i], nums[i])
        const num = nums[i]
        const idx = index[i]

        for(let j = newArray.length; j > idx; j--){
            newArray[j] = newArray[j - 1]
        }

        newArray[idx] = num
    }
    return newArray

}

console.log(createTargetArray(nums, indexs))
    
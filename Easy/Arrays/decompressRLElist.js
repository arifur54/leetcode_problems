nums = [1,1,2,3]

function decompressRLElist(nums) {  
    const result = []
    for(let i = 0; i < nums.length -1; i = i + 2){
        let freq = nums[i];
        let val = nums[i + 1]
        console.log(`freq: ${freq}, val: ${val}`)
        for(let i = 0; i < freq; i++){
            result.push(val)
        }
    }
    return result
}

console.log(decompressRLElist(nums))



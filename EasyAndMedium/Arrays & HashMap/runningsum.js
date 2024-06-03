let nums = [1, 2, 3, 4]

function runningsum(nums) {

    const result = []
    let counter = 0
    // loop through the array
    for(let num of nums){
        counter += num
        result.push(counter)
    }

    return result;
}
        
console.log(runningsum(nums))
    
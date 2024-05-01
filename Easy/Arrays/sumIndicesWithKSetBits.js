nums = [5,10,1,5,2];
k = 1;


function sumIndicesWithKSetBits(nums, k) {

    let result = 0;
    for(let i = 0; i < nums.length; i++){
        // convert indices to binary, 
        let binaryRepresentation = decimalToBinary(i)
        let sum = 0;       
        // to check for k, sum the total value of elements so it matches with k
        for(let j =0; j < binaryRepresentation.length; j++){
          sum += parseInt(binaryRepresentation[j])
        }
        // check with k
        if(sum === k){
            // add the values to the result.
            result += nums[i]
        }
    }
    return result;
}


function decimalToBinary(number) {
    return number.toString(2);
}

console.log(sumIndicesWithKSetBits(nums, k))

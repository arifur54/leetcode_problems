encoded = [1,2,3];
first = 1;

function decode(encoded, first){
    let result = [first]

    for(let i = 0; i < encoded.length; i++){
        result.push(result[i] ^ encoded[i])
    }

    return result
}

console.log(decode(encoded, first))
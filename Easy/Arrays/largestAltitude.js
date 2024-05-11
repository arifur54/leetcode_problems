gain = [-5, 1, 5, 0, -7]


function largestAltitude(gain) {
    
    let newGain = []
    newGain[0] = 0
    for(let i = 0; i < gain.length;i++){
        newGain[i + 1] = newGain[i] + gain[i]
    }

    return Math.max(...newGain)

}


console.log(largestAltitude2(gain))
    
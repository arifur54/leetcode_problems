const s = "Hello how are you Contestant"
const k = 4

function truncateSentence(s, k) {
    output = ''
    let strArray = s.split(" ")
    for(let i = 0; i < k; i++){
       output += (strArray[i] + " ")
    
    }
    return output.trim()
}

console.log(truncateSentence(s, k))
    
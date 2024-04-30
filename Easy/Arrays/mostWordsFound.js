const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

function mostWordsFound(sentences) {
    // sentences.forEach(sentence => {
    //     // each sentence split the sentence between _____ .
    //     Math.max(sentence.map(el => {
    //         console.log(el)
    //     }))
    // });
    return Math.max(...sentences.map(el => {
        conuter = 0;
        for(let e of el){
            if(e == ' '){
                conuter++     
            }
        }
        return conuter + 1
    }))
}
        
console.log(mostWordsFound(sentences))
    
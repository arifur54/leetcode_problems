
// LeetCode Question #: 692


words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
function topKfrequent(words, k) {
    let wordMap = {};
    sortedWord = words.sort();
    for(let word of words){
        if(!wordMap[word]){
            wordMap[word] = 1;
        }else{
            wordMap[word]++
        }
    }
    
    let freq = Object.entries(wordMap).sort((a,b) => b[1]-a[1]).map(pair => pair[0]).slice(0, k);
    return freq;
}

console.log(topKfrequent(words, k));


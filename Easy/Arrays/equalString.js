word1 = ["ab", "c"];
word2 = ["a", "bc"];

function equalString(word1, word2) {
    return word1.join('') === word2.join('')    
}

console.log(equalString(word1, word2))
    
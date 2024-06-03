
// LeetCode Question #: 49
// find the anagrams and group them in subArray.

strs = ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(strs) {
    // sort each word with in string array. 
    // add the sorted words in a hashMap,
    // key will be the anogram and values will be a subArray.
    // i.e aet => [eat, ate, tea]
    // output the result.

    const wordMap = new Map();
    for(let word of strs){
        // n*logn time complexity. 
        let sortedWord = word.split('').sort().join('');
        if(!wordMap.has(sortedWord)){
            wordMap.set(sortedWord, [word])
        }else{
            wordMap.get(sortedWord).push(word)
        }
        
    }
    return Array.from(wordMap.values())
}

console.log(groupAnagrams(strs));

  
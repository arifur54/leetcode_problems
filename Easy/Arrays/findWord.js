let words = ['leet', 'code', 'Heello']
let x = 'e'

// function findWords(words,x){
//     let arr = []
//     words.forEach((word, i) => {
//         for(let char of word){
//             if(char === x){
//                 arr.push(i)
//             }
//         }
//     })

//     let result = removeDuplicates(arr)
//     return result;
// }

// function removeDuplicates(arr){
//     return arr.filter((value, index, self) => {
//         return self.indexOf(value) === index
//     })
// }

function findWords(words, x){
    let arr = []
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }

    return arr
}

console.log(findWords(words, x));
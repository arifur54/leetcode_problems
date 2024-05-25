// LeetCode Question #: 2744

words = ["cd","ac","dc","ca","zz"]
// words = [1, 2, 3, 4, 5]
// function maximumNumberOfStringPairs(words) {
//     let sortedString = words.map(str => str.split('').sort().join(''))
//     counter = 0
//     for(let i = 0; i < sortedString.length; i++){
//         for(let j = i + 1; j < sortedString.length; j++){
//             console.log(sortedString[i] , sortedString[j])
//             if(sortedString[i] === sortedString[j]){
//                 counter++
//             }
//         }
//     }
//     return counter
// }

function maximumNumberOfStringPairs(words) {
    let mySet = new Map();

    for(let i = 0; i < words.length; i++){
        mySet.set(words[i].split('').sort().join(''));
    }
    console.log(mySet)
    return words.length - mySet
}

console.log(maximumNumberOfStringPairs(words));

  
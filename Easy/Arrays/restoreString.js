
// LeetCode Question #: 1528

let s = "codeleet"
let indices = [4,5,6,7,0,2,1,3]

// function restoreString(s, indices) {
//     let resArr = [];
   
//     for(let i = 0; i < s.length; i++){
//         resArr[indices[i]] = s[i]
//     }

//     return resArr.join("");
// }


function restoreString(s, indices) {
    result = '';
    for(let i = 0; i < s.length; i++){
        let z = indices.indexOf(i)
        result += s[z]
    }

    return result
}

console.log(restoreString(s, indices));


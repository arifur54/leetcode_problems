
// LeetCode Question #: 242

s = "anagram", t = "nagaram"

function validAnagram(s, t) {
    // sort both s and t
    // find if the charcters matches if it is then return true else return false.

   let sortedS = s.split("").sort().join("")
   let sortedT = t.split("").sort().join("")
 
    console.log(sortedS === sortedT)

    // Time complexity is (O(n) x O(nLogn) x O(n)) ==> O(nlogn)
    // Space complexity is (O(n) x 2) ==> O(n)
}

function validAnagram2(s, t){
    // Goal is to make it O(n): Time and O(1) for space
    // we need to find a way to sort the s and t without using build in method. and must be 0(n)
    if(s.length !== t.length){
        return false;
    }
    const count = {}

    for(let char of s){
        if(count[char] === undefined){
            count[char] = 1;
        }else {
            count[char]++
        }
    }

    for(let char of t){
       if(!count[char]){
        return false;
       }
       count[char]--;
    }
    return true;
}


function validAnagram3(s, t){
    if(s.length !== t.length){
        return true;
    }
    const count = new Map()
    for(let sChar of s){
        if(count[sChar] === undefined){
            count[sChar] = 1;
        }else{
            count[sChar]++;
        }
    }
    console.log(count)
    // now I want to check if the chars_Count of t exists within count map;
    for(let tChar of t){
        if(!count[tChar]){
            return false;
        }
        count[tChar]--
    }
    return true;
}

console.log(validAnagram3(s, t));


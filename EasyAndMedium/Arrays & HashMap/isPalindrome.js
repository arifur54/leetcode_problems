
// LeetCode Question #: 9
x = 121

// function isPalindrome(x) {
//     let r = x.toString().split('').reverse().join('');
//     r1 = parseInt(r);
   
//     if(r1 != x){
//         return false;
//     }

//     return true;
// }

function isPalindrome(x){
    var reverse = 0;
    var copy = x;

    while(copy > 0){
        const dig = copy % 10;
        reverse = reverse * 10 + dig;
        copy = Math.floor(copy/10)
    }

    return reverse == x
}

console.log(isPalindrome(x));
   
  
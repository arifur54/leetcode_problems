
let str = "Your PIN number is 1234."

function charCount(str) {
    // make object to return at the end.
    // make all the string into lowerCase.
    // loop over the string. 
        // if the char is a number/letter And is a key in object, add one to count.
        // if the char is a number/ letter And not in Object, add it to object and set the value to 1.
        //if char is something else (space, period, etc.) do nothing
    // return the object

    let obj = new Map()
    let lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    for(let char of lowerStr){
        if(!obj[char]){ 
            obj[char] = 1
        }else{
            obj[char] = obj[char] + 1
        }
    }
    return obj;
}

console.log(charCount(str));
   
  
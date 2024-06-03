
// LeetCode Question #: 506

score = [10,3,8,9,4]
function relativeRank(score) {
    let map = new Map();
    const copyArray = Array.from(score);
    let sortedScore = copyArray.sort((a,b) => b-a)
    let result = [];
    
    for(let i = 0; i < sortedScore.length; i++){
        map.set(sortedScore[i], i + 1)
    }
    
    for(let s of score){
       let pos = map.get(s)
       if(pos == 1){
        result.push("Gold Medal")
       }else if(pos == 2){
        result.push("Silver Medal")
       }else if(pos == 3){
        result.push("Bronze Medal")
       }else{
        result.push(`${pos}`)
       }
    }
   
    return result;

}

console.log(relativeRank(score));

  
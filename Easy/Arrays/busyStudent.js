
// LeetCode Question #: 1450

startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
function busyStudent(startTime, endTime, queryTime) {
    let counter = 0;
    for(let i = 0; i < startTime.length; i++){
        if(queryTime <= endTime[i] && queryTime >= startTime[i]){
            counter++
        }
    }
    return counter;
}

console.log(busyStudent(startTime, endTime, queryTime));


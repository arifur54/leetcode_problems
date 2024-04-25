const hours = [1, 2, 3, 4, 5]
target = 2


function numberOfEmployeesWhoMetTarget(hours, target){
    // loop through the hours
    
    numberOfEmployees = []

    hours.forEach((hour) => {
        // find the employees greater then the target
        if(hour > target){
            numberOfEmployees.push(hour)
        }
    })

    //return the output
    return numberOfEmployees.length;
   
}

console.log(numberOfEmployeesWhoMetTarget(hours, target))


const operations = ["X++","++X","++X"]

function finalValueAfterOperation(operations){
    let X = 0;
    operations.forEach((operation) => {

       switch(operation){
            case "X++": 
                X += 1
                break;
            case "++X": 
                X += 1
                break;
            case "--X":
                X -= 1
                break;
            default:
                X -= 1
       }
   
    })
    return X
}


console.log(finalValueAfterOperation(operations))
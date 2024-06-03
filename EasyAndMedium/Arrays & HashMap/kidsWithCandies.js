candies = [2,3,5,1,3] 
extraCandies = 3

function kidsWithCandies(candies, extraCandies){

    const array = []
    // Find the maximum number of candaies each kid already has
    let maxCandies = Math.max(...candies)
    for(let candie of candies){
        // let addedCandies = candie + extraCandies
        // // Check if having extraCandies will make the candeis even greater
        // if(addedCandies >= maxCandies){
        //     array.push(true)
        // }else{
        //     array.push(false)
        // }

        // improvement 
        array.push(candie + extraCandies >= maxCandies)
       
    }
    
    // return boolean array of results

    return array;
}


// shortes way I can think of
function kidsWithCandies2(candies, extraCandies){

   maxCandies = Math.max(...candies);
   return candies.map((candie) => candie + extraCandies >= maxCandies)
}



console.log(kidsWithCandies2(candies, extraCandies))
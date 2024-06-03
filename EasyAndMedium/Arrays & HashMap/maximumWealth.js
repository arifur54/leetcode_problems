accounts = [[1,2,3],[3,2,1]]

function maxWealth(accounts) {
    let wealth = []
    for(let account of accounts){
        let sum = 0;
        for(let wealth of account){
            sum += wealth
        }
        wealth.push(sum)
    }
    
    let maxWealth = Math.max(...wealth)
    return maxWealth
}


console.log(maxWealth(accounts))
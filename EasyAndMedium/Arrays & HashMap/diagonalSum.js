const mat = [[1,2,3],
        [4,5,6],
        [7,8,9]]

function diagonalSum(mat) {
    const n = mat.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(i == n - 1 - i){
            sum += mat[i][i]
        }else {
            sum += mat[i][i] + mat[i][n - 1 - i]
        }
    }
    return sum
}

console.log(diagonalSum(mat))
    
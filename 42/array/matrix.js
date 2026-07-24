function createMatrix(row, column){
    const result = [];
    for(let i=0; i<4; i++){
    const row = [i+1]
       for(let j=0; j<4; j++){
        row.push(i+1)
       } 
       result.push(row)
    }

    return result
}

console.log(createMatrix())
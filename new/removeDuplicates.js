const arr = [1, 2, 3, 4, 2]

function removeDuplicates(arr){
    return [... new Set(arr)]
}

function removeDuplicates2(arr){
    const seen = {};
    const result = [];

    for(let num of arr){
       if(!seen[num]){
        seen[num] = true
        result.push[num]
       }
    }

    return result
}

console.log(removeDuplicates2(arr))


function isPalindrome(str){
    let cleanedStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            cleanedStr += str[i].toLowerCase()
        }
    }
    let left = str.length - 1;
    let right = 0

    while(left > right){
        if(str[left] !== str[right]){
            return false
        }

        return true
    }
}


const arr = [1,3,0,4,0,4,3,9]

function getMaxNumber(arr) {
   const maxNumber = arr.reduce((prev, curr) => curr > prev ? curr : prev);
   return maxNumber;
}

function moveZeros(arr){
    let index = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[index] = arr[i];
            index++
        }
    }
    while(arr.length > index){
        arr[index] = 0;
        index++
    }
    return arr
    
}
// console.log(moveZeros(arr))

function removeDuplicates(arr){
    const seen = {};
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        if(!seen[arr[i]]){
        newArr.push(arr[i])
        seen[arr[i]] = true
        }
    }

    // return {seen, newArr}
    return [... new Set(arr)]
}
console.log(removeDuplicates(arr))


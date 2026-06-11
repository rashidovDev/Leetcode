
// 1-way
const reverseString = (str) => {
    return str.split('').reverse().join('')
}

// 2-way 
const reverseString2 = (str) => {
    let reverseStr = ''

    let left = str.length-1;
    while(left >= 0){
        reverseStr += str[left]
        left--
    }

    // for(let i=str.length-1; i>=0; i--){
    //     reverseStr += str[i]
    // }

    return reverseStr
}

console.log(reverseString2('Anvar'))





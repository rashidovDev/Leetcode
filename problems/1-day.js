// PRIMITIVE AND REFERENCE VALUES

let a = { name : 'Anvar'}

// console.log(a.name) // Anvar

let b = a

b.name = "John"

// console.log(a.name) // John

let user = {name : 'Anvar', age : 34}

// REVERSE STRING WITH METHOD
function reverse(str){
    return str.split('').reverse().join('-')
}

// REVERSE STRING WITHOUT METHOD
function reverseWithoutReverseMethod(str){
 let reverseString = ''

 for (let i = str.length-1; i >= 0; i++){
    reverseString += str[i]
 }
 return reverseString
}


function isPalindrome(str){
let reverseString = ''
let cleanedString = str.toLowerCase()
for (let i = cleanedString.length -1; i >= 0; i--){
    reverseString += cleanedString[i]
}
return reverseString === cleanedString
}





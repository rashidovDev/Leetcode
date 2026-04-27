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


function isPalindrome2(str){
    let cleanedStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i]!== ' '){
            cleanedStr += str[i].toLowerCase()
        }
    }
    let left = 0;
    let right = cleanedStr.length-1

    while(left < right){
        if(cleanedStr[left] !== cleanedStr[right]){
            return false
        }
        left++
        right--
    }
    return true
}


function reverseStr1(str){
    let reverseStr = ''
    for(let i=str.length-1; i>=0; i--){
    reverseStr += str[i]
    }
    return reverseStr
}
// console.log(reverseStr1("hello"))

let nums = [1,2,2,3,3]
function removeDuplicates(arr){
  const seen = {}
  const result = []

  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true
      result.push(num)
    }
  }
  console.log(seen)

  return result
}
console.log(removeDuplicates(nums))





// PRIMITIVE AND REFERENCE VALUES

let a = { name : 'Anvar'}

// console.log(a.name) // Anvar

let b = a

b.name = "John"

// console.log(a.name) // John

let user = {name : 'Anvar', age : 34}

// REVERSE STRING WITH METHOD
function reverse(str){
    return str.split('').reverse().join('')
}

console.log(reverse('Anvar'))

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
// console.log(removeDuplicates(nums))

function frequencyCounter(str){
   let result = {};
   let cleanedStr = str.toLowerCase()
   for(let char of cleanedStr){
   result[char] = (result[char] || 0) + 1
   }
   return result
}
//  console.log(frequencyCounter("Anvar"))

// let obj = {nam:"Anvar", a:"12"}
// console.log(obj.nam)

function anagram(str1, str2){
if(str1.length !== str2.length) return false
let clstr1 = str1.replace(/\s/g, '').toLowerCase()
let clstr2 = str2.replace(/\s/g, '').toLowerCase()
const obj = {}

for(let char of clstr1){
    obj[char] = (obj[char] || 0) + 1
} 

for(let char of clstr2){
    if(!obj[char]) return false
    obj[char]--
}

return true
}
// console.log(anagram("listen ad", "silent da"))
let array = [0,1,0,3,12]
function moveZeros(arr){
  let index = 0

  for(let i=0; i <arr.length; i++){
    if(arr[i] !== 0){
        arr[index] = arr[i]
        index++
    }
  }

  while(index < arr.length){
    arr[index] = 0
    index++
  }
  return arr
}
console.log(moveZeros(array))
function moveZeros(arr){
  let left = 0

  for(let right = 0; right < arr.length; right++){
    if(arr[right] !== 0){
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
    }
  }

  return arr
}
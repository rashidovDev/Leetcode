function countChars(str) {
  let obj = {}

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1
  }

  return obj
}
// SUM OF ARRAY
const numbers = [1, 2, 3, 4]
const sum = numbers.reduce((acc, curr) => acc + curr,0)


// REMOVING DUPLICATES
const nums = [1, 2, 2, 3, 4, 4]
function removeDuplicates(arr) {
  const result = []

  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num)
    }
  }
  return result
}

function countCharacters(str){
    const obj = {}
    for(let char of str){
        obj[char] = (obj[char] || 0) + 1
    }
    return obj
}

function isAnagrams(str1,str2){
let cleanedStr1 = str1.replace(/\s/g, '').toLowerCase()
let cleanedStr2 = str2.replace(/\s/g, '').toLowerCase()
const obj = {}

if(cleanedStr1.length !== cleanedStr2.length) return false

for (let char of cleanedStr1){
  obj[char] = (obj[char] || 0) + 1
}

for(let char of cleanedStr2){
    if(!obj[char]) return false
    obj[char]--
}
return true
}

console.log(isAnagrams("Anvar", "Anvara"))











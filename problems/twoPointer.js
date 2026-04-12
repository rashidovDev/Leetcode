function isPalindrome(str) {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

const nums = [1, 2, 3, 4]

function reverseArr(arr){
    let left = 0
    let right = arr.length - 1
    const reverseArr = []
    while(right >= left ){
        reverseArr.push(arr[right])
        right--
    }
    return reverseArr
}

// PRO LEVEL
function reverseArr2(arr){
    let left = 0
    let right = arr.length - 1
    
    while(left < right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
    }

    return arr
}

// PALINDROME

function isPalindrome(str){
    let cleanedStr = str.replace(/\s/g, '').toLowerCase()
    let left = 0
    let right = cleanedStr.length - 1

    while(left < right){
        if(cleanedStr[left] !== cleanedStr[right]){
            return false
        }
        left++
        right--
    }
    return true  
}

const arr = [0,1,0,4,3,12]
function moveZeros(arr) {
let index = 0

for(let i=0; i < arr.length; i++){
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

function moveZeros2(arr){
let left = 0
for(let right=0; right<arr.length; right++){
if(arr[right] !== 0){
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
}
}
return arr
}


function moveZeros3(arr){
    let left = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
        arr[left] = arr[i]
        left++
        }
    }

    for(let i=left; left<arr.length; i++){
        arr[i] = 0
        left++
    }

    return arr
}

function moveZerosToFront(arr) {
  let right = arr.length - 1;

  for (let left = arr.length - 1; left >= 0; left--) {
    if (arr[left] !== 0) {
      arr[right] = arr[left];
      right--;
    }
  }

  for (let i = 0; i <= right; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(moveZerosToFront(arr))


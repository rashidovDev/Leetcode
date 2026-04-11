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
    console.log(cleanedStr)
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



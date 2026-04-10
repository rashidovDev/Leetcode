function isPalindrome1(str) {
    let reverseString = ''
    let cleanedString = str.toLowerCase()
    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reverseString += cleanedString[i]
    }
    return reverseString === cleanedString
}


function isPalindrome2(str) {
    let cleaned = ''
    // remove spaces + lowercase
    for (let char of str) {
        if (char !== ' ') {
            cleaned += char.toLowerCase()
        }
    }

    let reversed = ''

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i]
    }

    return cleaned === reversed
}

// PRO LEVEL

function isPalindromePro(str) {
  let cleaned = str.replace(/\s/g, '').toLowerCase()

  let left = 0
  let right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }

  return true
}


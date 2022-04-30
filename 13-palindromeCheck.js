// Objectives: implement selection sort
// Data: string = 'racecar'
// Method 1: iterate over the string, create a new reversed string variable and compare them.
// Method 2: iterate over the string, create a new reversed string array, join the array and compare them.
// Method 3: compare the first char with the last one and apply recursion on the sub string
// Method 4: iterate over the string, while keeping track of the first and last char


// Approach 1: O(n^2) time | O(n) space
// function isPalindrome(string) {
//   let newString = ''
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i]
//   }
//   return string === newString
// }

// Approach 2: O(n) time | O(n) space
// function isPalindrome(string) {
//   let newString = []
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString.push(string[i])
//   }
//   return string === newString.join('')
// }

// Approach 3: O(n) time | O(n) space
// function isPalindrome(string, i = 0) {
//   let j = string.length - 1 - i

//   return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1)
// }

// Approach 4: O(n) time | O(1) space
function isPalindrome(string) {
  let firstChar = 0
  let lastChar = string.length - 1
  while (firstChar < lastChar) {
    if (string[firstChar] !== string[lastChar]) {
      return false
    }
    firstChar++
    lastChar--
  }
  return true
}

// Test
let testStr1 = 'raceicar'
let testStr2 = 'racecar'
console.log(isPalindrome(testStr1)) // false
console.log(isPalindrome(testStr2)) // true
// Objectives: shift each char of a string by a given key - Caesar Cipher Encryptor 
// Data: string = 'xyz'
// Assumptions: lower case english alphabet "a-z"
// Method 1: get the charCode of each char then get the new char at charCode + key
// Method 2: store the alphabet in a string and calculate new index

// Approach 1: O(n) time | O(n) space
// function caesarCipherEncryptor(string, key) {
//   let newLetters = []
//   let newKey = key % 26
//   for (let letter of string) {
//     newLetters.push(getNewLetter(letter, newKey))
//   }
//   return newLetters.join('')
// }

// function getNewLetter(letter, key) {
//   let newLetterCode = letter.charCodeAt() + key
//   return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + newLetterCode % 122)
// }

// Approach 1: O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  let newLetters = []
  let newKey = key % 26
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (let letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet))
  }
  return newLetters.join('')
}

function getNewLetter(letter, key, alphabet) {
  let newLetterCode = alphabet.indexOf(letter) + key
  return newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[-1 + newLetterCode % 25]
}


// test
let testString1 = 'abc'
let testString2 = 'xyz'
console.log(caesarCipherEncryptor(testString1, 2)) // cde
console.log(caesarCipherEncryptor(testString2, 54)) // zab
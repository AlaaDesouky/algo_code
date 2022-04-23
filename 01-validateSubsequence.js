// Objectives: Check if an array is a subsequence of another array
// Data: array = [5,1,22,25,6,-1,8,10], sequence = [1,6,-1,10]
// Method: create two pointers and traverse both arrays, if the order doesn't match or elements of the subsequence doesn't exist, return false

// Approach #1: O(n) time | O(1) space
// function isValidateSubsequence(array, sequence) {
//   let arrIdx = 0
//   let seqIdx = 0
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++
//     }
//     arrIdx++
//   }
//   return seqIdx === sequence.length
// }

// Approach #2: O(n) time | O(1) space
function isValidateSubsequence(array, sequence) {
  let seqIdx = 0
  for (let value of array) {
    if (seqIdx === sequence.length) break
    if (sequence[seqIdx] === value) seqIdx++
  }
  return seqIdx === sequence.length
}

let testArray1 = [5, 1, 22, 25, 6, -1, 8, 10]
let testArray2 = [5, 1, 22, 25, 6, 8, 10, -1]
let testSequence = [1, 6, -1, 10]
console.log(isValidateSubsequence(testArray1, testSequence)) //true 
console.log(isValidateSubsequence(testArray2, testSequence)) //false 
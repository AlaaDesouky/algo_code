// Objectives: given an array of positive integers, find the max sum of non-adjacent numbers
// Data: array = [7,10,12,7,9,14]
// Method 1: traverse the array and create an arrayCopy by apply the formula f(i) = max(f(i-1), f(i-2) + array[i])
// Method 2: traverse the array, store array[i-1] and array[i-2], then apply the formula f(i) = max(f(i-1), f(i-2) + array[i])

// Approach: O(n) time | O(n) space
// function maxSubsetSum(array) {
//    if(!array.length){
//       return false  
//    } else if(array.length === 1){
//       return array[0]
//    }
//   const arrayCopy = [array[0], Math.max(array[0], array[1])]
//   for (let i = 2; i < array.length; i++) {
//     arrayCopy.push(Math.max(arrayCopy[i - 1], arrayCopy[i - 2] + array[i]))
//   }
//   return arrayCopy.pop()
// }

// Approach 2: O(n) time | o(1) space
function maxSubsetSum(array) {
  if (!array.length) {
    return false
  } else if (array.length === 1) {
    return array[0]
  }

  let secondNum = array[0]
  let firstNum = Math.max(array[0], array[1])
  let currentMax = firstNum

  for (let i = 2; i < array.length; i++) {
    currentMax = Math.max(firstNum, secondNum + array[i])
    secondNum = firstNum
    firstNum = currentMax
  }
  return firstNum
}

// Test
const testArray = [7, 10, 12, 7, 9, 14]
console.log(maxSubsetSum(testArray)) // 33
// Objectives: check if two numbers in an array sum up to a target number
// Data: array = [3,5,-4,8,11,1,-1,6], targetNumber = 10
// Method 1: create a hash table to store the traversed values and solve for 'y = targetNumber - currentValue', if y exist in the hash table, return y, currentValue
// Method 2: sort the array, create two pointers (l=0, r= array.length - 1) and check if they sum up to targetNumber

// Approach 1: O(n^2) time | O(1) space
// function twoNumberSum(array, targetNumber) {
//   for (let i = 0; i < array.length - 1; i++) {
//     const firstNumber = array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       const secondNumber = array[j]

//       if (firstNumber + secondNumber === targetNumber) {
//         return [firstNumber, secondNumber]
//       }
//     }
//   }
//   return []
// }

// Approach 2: O(n) time | O(n) space
// function twoNumberSum(array, targetNumber) {
//   const numbers = {}
//   for (let num of array) {
//     if (numbers[targetNumber - num]) {
//       return [targetNumber - num, num]
//     } else {
//       numbers[num] = true
//     }
//   }
//   return []
// }

// Approach 3: O(nLog(n)) time | O(1) space
function twoNumberSum(array, targetNumber) {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let currentSum = array[left] + array[right]
    if (currentSum === targetNumber) {
      return [array[left], array[right]]
    } else if (currentSum < targetNumber) {
      left++
    } else if (currentSum > targetNumber) {
      right--
    }
  }
  return []
}

// Tests
const testArray1 = [3, 5, -4, 8, 11, 1, -1, 6]
const testArray2 = [3, 5, -4, 8, 11, 1, 6]
const targetNumber = 10
console.log(twoNumberSum(testArray1, targetNumber)) // [11, -1]
console.log(twoNumberSum(testArray2, targetNumber)) // []
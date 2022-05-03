// Objectives: check if a given array is monotonic "is increasing | decreasing"
// Data: array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// Method 1: keep track of the direction and return false if it changes
// Method 2: return if the array elements are decreasing || increasing

// Approach 1: O(n) time | O(1) space
// function isMonotonic(array) {
//   if (array.length <= 2) return true
//   let direction = array[1] - array[0]

//   for (let i = 2; i < array.length; i++) {
//     if (direction === 0) {
//       direction = array[i] - array[i - 1]
//       continue
//     }

//     if (breaksDirection(direction, array[i - 1], array[i])) {
//       return false
//     }
//   }
//   return true
// }

// function breaksDirection(direction, prevInt, currentInt) {
//   let difference = currentInt - prevInt
//   if (direction > 0) {
//     return difference < 0
//   }
//   return difference > 0
// }

// Approach 2: O(n) time | O(1) space
function isMonotonic(array) {
  let isNotDecreasing = true,
    isNotIncreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNotDecreasing = false
    }
    if (array[i] > array[i - 1]) {
      isNotIncreasing = false
    }
  }

  return isNotDecreasing || isNotIncreasing
}

// Test
let testArray = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
console.log(isMonotonic(testArray))
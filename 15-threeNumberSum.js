// Objectives: find all possible combination of three number that sum up to a target number
// Data: array = [12,3,1,2,-6,5,-8,6]
// Method: sort the array, iterate over the array while keeping track of the left and right pointers and store the value if possible match

// Approach: O(n^2) time | O(n) space
function threeNumberSum(array, targetNumber) {
  array.sort((a, b) => a - b)
  let possibleMatch = []

  for (let i = 0; i < array.length - 2; i++) {
    let leftIdx = i + 1
    let rightIdx = array.length - 1

    while (leftIdx < rightIdx) {
      const currentSum = array[i] + array[leftIdx] + array[rightIdx]
      if (currentSum === targetNumber) {
        possibleMatch.push([array[i], array[leftIdx], array[rightIdx]])
        leftIdx++
        rightIdx--
      } else if (currentSum < targetNumber) {
        leftIdx++
      } else if (currentSum > targetNumber) {
        rightIdx--
      }
    }
  }
  return possibleMatch
}

// Test
let testArray = [12, 3, 1, 2, -6, 5, -8, 6]
console.log(threeNumberSum(testArray, 0)) // [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
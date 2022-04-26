// Objectives: find a targetNumber in an array using binary search
// Data: array = [0,1,21,33,44,45,61,71,77,90]
// Method 1: recursion to eliminate half of the array
// Method 2: iterative to eliminate half of the array

function binarySearch(array, targetNumber) {
  return binarySearchHelper(array, targetNumber, 0, array.length - 1)
}

// Approach #1: O(log(n)) time | O(log(n)) space
// function binarySearchHelper(array, targetNumber, leftPointer, rightPointer) {
//   if (leftPointer > rightPointer) return -1
//   let middlePointer = Math.round((leftPointer + rightPointer) / 2)
//   if (targetNumber === array[middlePointer]) {
//     return middlePointer
//   } else if (targetNumber < array[middlePointer]) {
//     return binarySearchHelper(array, targetNumber, leftPointer, middlePointer - 1)
//   } else {
//     return binarySearchHelper(array, targetNumber, middlePointer + 1, rightPointer)
//   }
// }

// Approach #2: O(log(n)) time | O(1) space
function binarySearchHelper(array, targetNumber, leftPointer, rightPointer) {
  while (leftPointer <= rightPointer) {
    let middlePointer = Math.round((leftPointer + rightPointer) / 2)
    if (targetNumber === array[middlePointer]) {
      return middlePointer
    } else if (targetNumber < array[middlePointer]) {
      rightPointer = middlePointer - 1
    } else {
      leftPointer = middlePointer + 1
    }
  }
  return -1
}

// Test
let testArray = [0, 1, 21, 33, 44, 45, 61, 71, 77, 90]
console.log(binarySearch(testArray, 61)) // 6
console.log(binarySearch(testArray, 150)) // -1
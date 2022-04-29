// Objectives: implement selection sort
// Data: array = [141,1,17,-7,-17,-27, 18, 541, 8, 11, 135]
// Method: 

// Approach: O(n^2) time | O(1) space
function selectionSort(array) {
  let currentIdx = 0
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx
    for (let i = smallestIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i
      }
    }
    swap(currentIdx, smallestIdx, array)
    currentIdx++
  }
  return array
}

function swap(i, j, array) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

// Test
let testArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 11, 135] // [-27, -17, -7, 1, 8, 11, 17, 18, 135, 141, 541]
console.log(selectionSort(testArray))
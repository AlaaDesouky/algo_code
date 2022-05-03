// Objectives: move a targetElement/s in an array to the end
// Data: array = [-1,5,10,20,5,5,5,28,5,3]
// Method: keep track of two pointer and swap their values if they matches

// Approach: O(n) time | O(1) space
function moveElementToEnd(array, targetElement) {
  let leftIdx = 0
  let rightIdx = array.length - 1

  while (leftIdx < rightIdx) {
    while (leftIdx < rightIdx && array[rightIdx] === targetElement) {
      rightIdx--
    }
    if (array[leftIdx] === targetElement) {
      swap(array, leftIdx, rightIdx)
    }
    leftIdx++
  }
  return array
}

function swap(array, i, j) {
  let currentElement = array[i]
  array[i] = array[j]
  array[j] = currentElement
}

// Test
let array = [-1, 5, 5, 5, 10, 20, 5, 5, 5, 28, 5, 3, 5]
console.log(moveElementToEnd(array, 5))
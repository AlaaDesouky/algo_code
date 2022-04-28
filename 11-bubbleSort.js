// Objectives: implement bubble sort
// Data: array = [141,1,17,-7,-17,-27, 18, 541, 8, 11, 135]
// Method: iterate ove the array, compare array[i] with array[i-1], then swap

// Approach: O(n^2) time | O(1) space
function bubbleSort(array) {
  let isSorted = false
  let counter = 0
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      }
    }
    counter++
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
console.log(bubbleSort(testArray))
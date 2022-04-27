// Objectives: implement insertion sort
// Data: array = [141,1,17,-7,-17,-27, 18, 541, 8, 11, 135]
// Method: iterate ove the array, compare array[i] with array[i-1], then swap

// Approach: O(n^2) time | O(1) space
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j -= 1
    }
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
console.log(insertionSort(testArray))
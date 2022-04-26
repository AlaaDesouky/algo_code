// Objectives: find the three largest numbers in a given array
// Data: array = [141,1,17,-7,-17,-27, 18, 541, 8, 11, 135]
// Method 1: iterate over the array and keep track of last visited three numbers

// Approach: O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  const threeLargestNumbers = [null, null, null]
  for (let number of array) {
    updateLargestNumber(threeLargestNumbers, number)
  }
  return threeLargestNumbers;
}

function updateLargestNumber(threeLargestNumbers, number) {
  if (!threeLargestNumbers[2] || number > threeLargestNumbers[2]) {
    shiftAndUpdate(threeLargestNumbers, number, 2)
  } else if (!threeLargestNumbers[1] || number > threeLargestNumbers[1]) {
    shiftAndUpdate(threeLargestNumbers, number, 1)
  } else if (!threeLargestNumbers[0] || number > threeLargestNumbers[0]) {
    shiftAndUpdate(threeLargestNumbers, number, 0)
  }
}

function shiftAndUpdate(array, number, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = number
    } else {
      array[i] = array[i + 1]
    }
  }
}

// Test
let testArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 11, 135]
console.log(findThreeLargestNumbers(testArray)) // [135, 141, 541]
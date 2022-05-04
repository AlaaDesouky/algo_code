// Objectives: given a two dimensional array, perform a spiral traverse on its elements
// Data: array = [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
// Method 1: loop throw the boundaries of the outer shape and keep going inward
// Method 2: visit the boundaries recursively

// Approach 1: O(N) time | O(N) space
// function spiralTraverse(array) {
//   let result = []
//   let startRow = 0,
//     endRow = array.length - 1,
//     startCol = 0,
//     endCol = array[0].length - 1

//   while (startRow <= endRow && startCol <= endCol) {
//     for (let col = startCol; col <= endCol; col++) {
//       result.push(array[startRow][col])
//     }

//     for (let row = startRow + 1; row <= endRow; row++) {
//       result.push(array[row][endCol])
//     }

//     for (let col = endCol - 1; col >= startCol; col--) {
//       result.push(array[endRow][col])
//     }

//     for (let row = endRow - 1; row > startRow; row--) {
//       result.push(array[row][startCol])
//     }

//     startRow++
//     endRow--
//     startCol++
//     endCol--
//   }

//   return result
// }

// Approach 2: O(N) | O(N)
function spiralTraverse(array) {
  let result = []
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result)
  return result
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return

  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col])
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol])
  }

  for (let col = endCol - 1; col >= startCol; col--) {
    result.push(array[endRow][col])
  }

  for (let row = endRow - 1; row > startRow; row--) {
    result.push(array[row][startCol])
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
}


// Test
let testArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]
console.log(spiralTraverse(testArray))
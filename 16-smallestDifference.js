// Objectives: find the smallest difference between two numbers of different arrays
// Data: arrayA = [-1,5,10,20,28,3], arrayB = [26,134,35,15,17]
// Method: sort the arrays, compare the difference between two arbitrary number and upon the result find the optimal next step

// Approach: O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b)
  arrayB.sort((a, b) => a - b)
  let idxA = 0,
    idxB = 0,
    smallestDifference = Infinity,
    result = []

  while (idxA < arrayA.length && idxB < arrayB.length) {
    if (arrayA[idxA] < arrayB[idxB]) {
      idxA++
    } else if (arrayA[idxA] > arrayB[idxB]) {
      idxB++
    } else {
      return [arrayA[idxA], arrayB[idxB]]
    }

    if (smallestDifference > Math.abs(arrayA[idxA] - arrayB[idxB])) {
      smallestDifference = Math.abs(arrayA[idxA] - arrayB[idxB])
      result = [arrayA[idxA], arrayB[idxB]]
    }
  }
  return result
}

// Test
let arrayA = [-1, 5, 10, 20, 28, 3],
  arrayB = [26, 134, 35, 15, 17]

console.log(smallestDifference(arrayA, arrayB)) // [28, 26]
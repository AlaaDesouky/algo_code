// Objectives: calculate the product sum of special array
// Data: array = [5,2,[7,-1],3,[6,[-13,8],4]]
// Method 1: use recursion to find the sum and multiply by the depth of the array

// Approach: O(n) time - where n is every element and sub element | O(d) space - where d is the deepest level of a sub element
function productSum(array, multiplier = 1) {
  let sum = 0
  for (let element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1)
    } else {
      sum += element
    }
  }
  return sum * multiplier
}

// Test
let testArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
console.log(productSum(testArray)) // 12
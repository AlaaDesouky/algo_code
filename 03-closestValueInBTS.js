// Objectives: find the closest value to targetValue in a BST
// Data: tree = [10, 5, 6, 2, 1, 15, 14, 22, 13], targetValue = 12
// Method 1: traverse the tree recursively, compare each node to the targetValue and update the closestValue
// Method 2: iterate over the tree, compare each node to the targetValue and update the closestValue

// Initial setup
const BTS = require('./utils/binarySearchTree')
const Tree = new BTS()
const values = [10, 5, 6, 2, 1, 15, 14, 1, 22, 13]
values.map(value => Tree.insert(value))

function closestValueInBTS(tree, targetValue) {
  return closestValueInBTSHelper(tree, targetValue, Infinity)
}

// Approach #1:
// Avg: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | o(n) space
// function closestValueInBTSHelper(tree, targetValue, closestValue) {
//   if (tree === null) return closestValue
//   if (Math.abs(closestValue - targetValue) > Math.abs(tree.value - targetValue)) {
//     closestValue = tree.value
//   }
//   if (targetValue < tree.value) {
//     return closestValueInBTSHelper(tree.left, targetValue, closestValue)
//   } else if (targetValue > tree.value) {
//     return closestValueInBTSHelper(tree.right, targetValue, closestValue)
//   } else {
//     return closestValue
//   }
// }

// Approach #2:
// Avg: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function closestValueInBTSHelper(tree, targetValue, closestValue) {
  let currentNode = tree
  while (currentNode !== null) {
    if (Math.abs(closestValue - targetValue) > Math.abs(currentNode.value - targetValue)) {
      closestValue = currentNode.value
    }
    if (targetValue < currentNode.value) {
      currentNode = currentNode.left
    } else if (targetValue > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break
    }
  }
  return closestValue
}

// Test
console.log(closestValueInBTS(Tree.root, 12)) // 13
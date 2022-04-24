// Objectives: find the sum of every branch of a BST
// Data: tree = [10, 5, 6, 2, 1, 15, 14, 1, 22, 13]
// Method 1: traverse the tree recursively and update the totalSum of a branch

// Initial setup
const BST = require('./utils/binarySearchTree')
const Tree = new BST()
const values = [10, 5, 6, 2, 1, 15, 14, 1, 22, 13]
values.map(value => Tree.insert(value))

// Approach: O(n) time | O(n) space => last level of a BST will almost have 1/2 of all nodes
function branchSum(root) {
  let totalSum = []
  calculateBranchSum(root, 0, totalSum)
  return totalSum
}

function calculateBranchSum(node, currentSum, totalSum) {
  if (!node) return
  currentSum = currentSum + node.value
  if (!node.left && !node.right) {
    totalSum.push(currentSum)
  }

  calculateBranchSum(node.left, currentSum, totalSum)
  calculateBranchSum(node.right, currentSum, totalSum)
}

// Test
console.log(branchSum(Tree.root)) // [18,21,52,47]
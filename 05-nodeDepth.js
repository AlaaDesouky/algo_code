// Objectives: find the depthSum of each node of a BST
// Data: tree = [10, 5, 6, 2, 1, 15, 14, 1, 22, 13]
// Method 1: iterate over the tree starting with the root, store each node and its depth wrt its parent in a stack and keep track of the sum
// Method 2: using the mathematical formula f(node, depth) = depth + f(node.left, depth + 1) + f(node.right, depth + 1)

// Initial setup
const BST = require('./utils/binarySearchTree')
const Tree = new BST()
const values = [10, 5, 6, 2, 1, 15, 14, 1, 22, 13]
values.map(value => Tree.insert(value))

// Approach #1: O(n) time | O(h) space
// function nodeDepth(root) {
//   let sumOfDepths = 0
//   const stack = [{ node: root, depth: 0 }]
//   while (stack.length > 0) {
//     let { node, depth } = stack.pop()
//     if (!node) continue
//     sumOfDepths += depth
//     stack.push({ node: node.left, depth: depth + 1 })
//     stack.push({ node: node.right, depth: depth + 1 })
//   }
//   return sumOfDepths
// }

// Approach #2: O(n) time | O(h) space
function nodeDepth(root, depth = 0) {
  if (!root) return 0
  return depth + nodeDepth(root.left, depth + 1) + nodeDepth(root.right, depth + 1)
}

// Test
console.log(nodeDepth(Tree.root)) // 16
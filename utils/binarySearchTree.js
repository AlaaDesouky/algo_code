// BST
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    }
    let currentNode = this.root
    while (true) {
      if (value === currentNode.value) return this
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  breadthFirstSearch() {
    let data = [],
      queue = [],
      currentNode = this.root
    queue.push(currentNode)
    while (queue.length) {
      currentNode = queue.shift()
      data.push(currentNode.value)
      currentNode.left && queue.push(currentNode.left)
      currentNode.right && queue.push(currentNode.right)
    }
    return data
  }
}

module.exports = BinarySearchTree
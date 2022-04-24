class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value = null) {
    this.head = value ? new Node(value) : null
    this.tail = value ? new Node(value) : null
  }

  // O(1) time | O(1) space
  setHead(node) {
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }
    this.insertBefore(this.head, node)
  }

  // O(1) time | O(1) space
  setTail(node) {
    if (!this.tail) {
      this.setHead(node)
      return
    }
    this.insertAfter(this.tail, node)
  }

  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    this.remove(nodeToInsert)
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    if (!node.prev) {
      this.head = nodeToInsert
    } else {
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return
    this.remove(nodeToInsert)
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    if (!node.next) {
      this.tail = nodeToInsert
    } else {
      node.next.prev = nodeToInsert
    }
    node.next = nodeToInsert
  }

  // O(p) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead()
      return
    }
    let currentNode = this.head
    let currentPosition = 1
    while (currentNode && currentPosition !== position) {
      currentNode = currentNode.next
      currentPosition++
    }
    if (currentNode) {
      this.insertBefore(currentNode, nodeToInsert)
    } else {
      this.setTail(nodeToInsert)
    }
  }

  // O(n) time | O(1) space
  removeNodeWithValue(value) {
    let currentNode = this.head
    let nodeToRemove = null
    while (currentNode) {
      nodeToRemove = currentNode
      currentNode = currentNode.next
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove)
      }
    }
  }

  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) {
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = this.tail.prev
    }
    this._removeNodeBindings(node)
  }

  _removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next
    }
    if (node.next) {
      node.next.prev = node.prev
    }
    node.prev = null
    node.next = null
  }

  // O(n) time | O(1) space
  containsNodeWithValue(value) {
    let currentNode = this.head
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next
    }
    return !(!currentNode)
  }
}

module.exports = DoublyLinkedList
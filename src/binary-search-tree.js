const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.leftLeaf = null;
    this.rightLeaf = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  insertNode(root, data) {
    if (!root) {
      root = new Node(data);
      return root;
    }

    if (data > root.data) {
      root.rightLeaf = this.insertNode(root.rightLeaf, data);
    } else if (data < root.data) {
      root.leftLeaf = this.insertNode(root.leftLeaf, data);
    }

    return root;
  }

  add(data) {
    this.rootNode = this.insertNode(this.rootNode, data);
  }

  has(data) {
    return Boolean(this.find(data));
  }

  findNodeWithData(root, data) {
    if (!root) {
      return null;
    }

    if (root.data === data) {
      return root;
    } else if (data > root.data) {
      return this.findNodeWithData(root.rightLeaf, data);
    } else if (data < root.data) {
      return this.findNodeWithData(root.leftLeaf, data);
    }
  }

  find(data) {
    return this.findNodeWithData(this.rootNode, data);
  }

  deleteNode(root, data) {
    if (!root) {
      return root;
    }
    
    if (data < root.data) {
      root.leftLeaf = this.deleteNode(root.leftLeaf, data);
      return root;
    } else if (data > root.data) {
      root.rightLeaf = this.deleteNode(root.rightLeaf, data);
      return root;
    }
    
    if (!root.leftLeaf) {
      return root.rightLeaf;
    } else if (!root.rightLeaf) {
      return root.leftLeaf;
    } else {
      let successorParent = root;
    
      let successor = root.rightLeaf;
      while (successor.leftLeaf) {
        successorParent = successor;
        successor = successor.leftLeaf;
      }
    
      if (successorParent.data !== root.data) {
        successorParent.leftLeaf = successor.rightLeaf;
      } else {
        successorParent.rightLeaf = successor.rightLeaf;
      }
    
      root.data = successor.data;
      return root;
    }
  }

  remove(data) {
    this.rootNode = this.deleteNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode) {
      let currNode = this.rootNode;
      while (currNode.leftLeaf) {
        currNode = currNode.leftLeaf;
      }

      return currNode.data;
    }

    return null;
  }

  max() {
    if (this.rootNode) {
      let currNode = this.rootNode;
      while (currNode.rightLeaf) {
        currNode = currNode.rightLeaf;
      }

      return currNode.data;
    }

    return null;
  }
}

module.exports = {
  BinarySearchTree
};
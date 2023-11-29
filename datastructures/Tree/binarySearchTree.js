class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }
  makeTree(val) {
    let newNode = new Node(val);
    if (this.isTreeEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  searchNode(root, val) {
    if (root === null) {
      console.log("tree is empty");
    } else if (root.value === val) {
      console.log(`value found at ${JSON.stringify(root)}`);
    } else if (root.value > val) {
      this.searchNode(root.left, val);
    } else if (root.value < val) {
      this.searchNode(root.right, val);
    }
  }

  preOrder(root) {
    if (root) {
      console.log("root is: " + JSON.stringify(root));
      console.log("Value at root is: " + root.value);
      console.log("left node");
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log("right node");
    }
  }
}

let BST = new BSTree();

BST.makeTree(20);
BST.makeTree(10);
BST.makeTree(5);
BST.makeTree(11);
BST.makeTree(30);
BST.makeTree(40);
BST.makeTree(23);
BST.searchNode(BST.root, 10);
BST.preOrder(BST.root);
console.log(BST);

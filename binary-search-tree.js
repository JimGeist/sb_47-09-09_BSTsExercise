class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // let binarySearchTree = new BinarySearchTree();
    // binarySearchTree.insert(15, 20, 10, 12);
    // binarySearchTree.root.value // 15
    // binarySearchTree.root.right.value // 20
    // binarySearchTree.root.left.right.value // 12
    //           15  
    //     10          20
    //        12

    if (this.root) {

      let nodeNewLeftOrRight;
      let next = this.root;
      let current;
      while (next) {
        current = next;
        // left or right?
        if (val < current.val) {
          // left insert
          nodeNewLeftOrRight = "left";
          next = current.left;

        } else {

          // right insert
          nodeNewLeftOrRight = "right";
          next = current.right;

        }

      }

      // insert the node
      current[nodeNewLeftOrRight] = new Node(val);

    } else {
      // first insert into the tree.
      this.root = new Node(val);
    }

    return this;

  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // let binarySearchTree = new BinarySearchTree();
    // binarySearchTree.insertRecursively(15, 20, 10, 12);
    // binarySearchTree.root.value // 15
    // binarySearchTree.root.right.value // 20
    // binarySearchTree.root.left.right.value // 12
    //           15  
    //     10          20
    //        12

    /**
     * tranverseAndInsert recursively traverses the binary search tree 
     *  and inserts the new node when it encounters the a null.
     * @param {*} val, the value to insert 
     * @param {*} current, the node we are either traversing OR inserting
     *  onto. current is never null. 
     * @returns undefined 
     */
    const traverseAndInsert = (val, current) => {

      if (val < current.val) {
        if (current.left) {
          traverseAndInsert(val, current.left)
        } else {
          current.left = new Node(val);
          return;
        }
      } else {
        if (current.right) {
          traverseAndInsert(val, current.right)
        } else {
          current.right = new Node(val);
          return;
        }
      }

    }

    if (this.root) {
      // the binary search tree has at least one node.

      // traverseAndInsert walks the tree and inserts the node where necessary.
      traverseAndInsert(val, this.root);

    } else {
      // first insert into the tree.
      this.root = new Node(val);
    }

    return this;

  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let nodeFound;

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return current;
      } else {
        // which way?
        if (val < current.val) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }

    return nodeFound;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = null) {

    // when current is null, set it to this.root.
    if (!(current)) current = this.root;

    if (val === current.val) {
      return current;
    } else {
      // which way?
      if (val < current.val) {
        if (current.left) {
          return this.findRecursively(val, current.left);
        }

      } else {
        if (current.right) {
          return this.findRecursively(val, current.right);
        }

      }
    }

    return;
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = null, preOrder = []) {
    // binarySearchTree.insert(15, 20, 10, 12, 1, 5, 50);
    //              15  
    //        10          20
    //    1      12          50
    //      5
    // .dfsPreOrder() // [15, 10, 1, 5, 12, 20, 50]

    // when current is null, set it to this.root.
    if (!(current)) current = this.root;

    if (current) {
      // we have a node
      preOrder.push(current.val);
      if (current.left) {
        this.dfsPreOrder(current.left, preOrder);
      }
      if (current.right) {
        this.dfsPreOrder(current.right, preOrder);
      }
    }

    return preOrder;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = null, inOrder = []) {
    // binarySearchTree.insert(15, 20, 10, 12, 1, 5, 50);
    //              15  
    //        10          20
    //    1      12          50
    //      5
    // dfsInOrder() // [1, 5, 10, 12, 15, 20, 50]

    // when current is null, set it to this.root.
    if (!(current)) current = this.root;

    if (current) {
      // we have a node
      if (current.left) {
        this.dfsInOrder(current.left, inOrder);
      }

      inOrder.push(current.val);

      if (current.right) {
        this.dfsInOrder(current.right, inOrder);
      }

    }

    return inOrder;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = null, postOrder = []) {
    // binarySearchTree.insert(15, 20, 10, 12, 1, 5, 50);
    //              15  
    //        10          20
    //    1      12          50
    //      5
    // dfsPostOrder() // [5, 1, 12, 10, 50, 20, 15]

    // when current is null, set it to this.root.
    if (!(current)) current = this.root;

    if (current) {
      // we have a node

      if (current.left) {
        this.dfsPostOrder(current.left, postOrder);
      }

      if (current.right) {
        this.dfsPostOrder(current.right, postOrder);
      }

      postOrder.push(current.val);

    }

    return postOrder;

  }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(bfsValues = [], levelQueue = []) {
    //bfs(current = null, bfsValues = [], levelQueue = []) {
    // binarySearchTree.insert(15, 20, 10, 12, 1, 5, 50);
    //              15  
    //        10          20
    //    1      12          50
    //      5
    // bfs() // [15, 10, 20, 1, 12, 50, 5]

    // when current is null, set it to this.root.

    if ((levelQueue.length === 0) && (bfsValues.length === 0)) {
      if (this.root) {
        levelQueue.push(this.root);
        this.bfs(bfsValues, levelQueue)
      } else {
        return bfsValues;
      }
    }

    if (levelQueue.length > 0) {
      const current = levelQueue.shift();
      bfsValues.push(current.val);
      if (current.left) levelQueue.push(current.left);
      if (current.right) levelQueue.push(current.right);
      this.bfs(bfsValues, levelQueue)
    }

    return bfsValues;

  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

module.exports = BinarySearchTree;

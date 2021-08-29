# sb_47-09-09_BSTsExercise
 
## Technology Stack
- **Front-end**: n/a
- **Back-end**: NodeJS script

## Assignment Details

Create and test 8 methods for a **Binary Search Tree**:

`insert(val)` - iteratively insert a node into a binary search tree.

`insertRecursively(val)` - insert a node into a binary search tree using recursion. The difficulty on this one was trying to make the iterative version recursive instead of starting from an empty method. 

`find(val)` - find and return the node in a binary search tree that has the value `val`. Method returns **_undefined_** when `val` is not found.

`findRecursively(val)` - recursively find return the node in a binary search tree that has the value `val`. Method returns **_undefined_** when `val` is not found.

`dfsPreOrder()` - return an array with the node values when travsering a binary search tree in a depth first search pre-order.

`dfsInOrder()` - return an array with the node values when travsering a binary search tree in a depth first search in order.

`dfsPostOrder()` - return an array with the node values when travsering a binary search tree in a depth first search post order.

`bfs()` - return an array with the node values when travsering a binary search tree in breadth first.

This assignment was great since iterative and recursive versions were part of the exercise instead of here solve this, but we are only providing a recursive solution. 


## Additional Details

**Enhancements**
- None.


**Difficulties**
- Setting up 'first time through' logic was sometimes tricky and attempting too much at once instead of getting a base version working. For the `insertRecursively(val)` method, a funtion within `insertRecursively(val)` is called recursively. This made the initialization / first time through easier to follow.
- Sometimes, the method just needed to get built recursively instead of trying to recursify the interative version. It also helped to move onto other aspects and going back. 
- Not properly updating a method when it is copied from another method! Why is `dfsPostOrder()` array off? I am just not seeing the error . . ah, there it is, the logic was adjusted but it is recursively `dfsInOrder()`!  


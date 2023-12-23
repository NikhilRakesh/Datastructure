// // // // // // // class Node {
// // // // // // //     constructor(data) {
// // // // // // //         this.data = data
// // // // // // //         this.left = null
// // // // // // //         this.right = null
// // // // // // //     }
// // // // // // // }

// // // // // // // class Tree {
// // // // // // //     constructor() {
// // // // // // //         this.root = null
// // // // // // //     }

// // // // // // //     isEmpty() {
// // // // // // //         return this.root === null
// // // // // // //     }

// // // // // // //     insert(data) {
// // // // // // //         const node = new Node(data)

// // // // // // //         if (this.isEmpty()) {
// // // // // // //             this.root = node
// // // // // // //         } else {
// // // // // // //             this.insertNode(this.root, node)
// // // // // // //         }
// // // // // // //     }

// // // // // // //     insertNode(root, node) {
// // // // // // //         if (node.data < root.data) {
// // // // // // //             if (root.left === null) {
// // // // // // //                 root.left = node
// // // // // // //             } else {
// // // // // // //                 this.insertNode(root.left, node)
// // // // // // //             }
// // // // // // //         } else {
// // // // // // //             if (root.right === null) {
// // // // // // //                 root.right = node
// // // // // // //             } else {
// // // // // // //                 this.insertNode(root.right, node)
// // // // // // //             }
// // // // // // //         }
// // // // // // //     }


// // // // // // //     search(data) {
// // // // // // //         if (this.isEmpty()) {
// // // // // // //             return null
// // // // // // //         }

// // // // // // //         return this.searchNode(this.root, data)
// // // // // // //     }

// // // // // // //     searchNode(node, data) {
// // // // // // //         if (!node) {
// // // // // // //             return null
// // // // // // //         }

// // // // // // //         if (!data || node.data === data) {
// // // // // // //             return node.data
// // // // // // //         }

// // // // // // //         if (data < node.data) {
// // // // // // //             return this.searchNode(node.left, data)
// // // // // // //         } else {
// // // // // // //             return this.searchNode(node.right, data)
// // // // // // //         }
// // // // // // //     }

// // // // // // //     preorder() {
// // // // // // //         const result = []
// // // // // // //         this.preordertraversal(this.root, result)
// // // // // // //         return result
// // // // // // //     }

// // // // // // //     preordertraversal(node, result) {
// // // // // // //         if (node) {
// // // // // // //             result.push(node.data)
// // // // // // //             this.preordertraversal(node.left, result)
// // // // // // //             this.preordertraversal(node.right, result)
// // // // // // //         }
// // // // // // //     }

// // // // // // //     inorder() {
// // // // // // //         const result = []
// // // // // // //         this.inordertraversal(this.root, result)
// // // // // // //         return result
// // // // // // //     }

// // // // // // //     inordertraversal(node, result) {
// // // // // // //         if (node) {
// // // // // // //             this.inordertraversal(node.left, result)
// // // // // // //             result.push(node.data)
// // // // // // //             this.inordertraversal(node.right, result)
// // // // // // //         }
// // // // // // //     }

// // // // // // //     postorder() {
// // // // // // //         const result = []
// // // // // // //         this.postorderrtraversal(this.root, result)
// // // // // // //         return result
// // // // // // //     }

// // // // // // //     postorderrtraversal(node, result) {
// // // // // // //         if (node) {
// // // // // // //             this.postorderrtraversal(node.left, result)
// // // // // // //             this.postorderrtraversal(node.right, result)
// // // // // // //             result.push(node.data)
// // // // // // //         }
// // // // // // //     }

// // // // // // //     bfs() {
// // // // // // //         const result = []
// // // // // // //         const queue = []
// // // // // // //         if (this.root) {
// // // // // // //             queue.push(this.root)

// // // // // // //             while (queue.length > 0) {
// // // // // // //                 const current = queue.shift()
// // // // // // //                 result.push(current.data)

// // // // // // //                 if (current.left) {
// // // // // // //                     queue.push(current.left)
// // // // // // //                 }
// // // // // // //                 if (current.right) {
// // // // // // //                     queue.push(current.right)
// // // // // // //                 }
// // // // // // //             }
// // // // // // //         }
// // // // // // //         return result
// // // // // // //     }

// // // // // // //     min(root) {
// // // // // // //         if (!root.left) {
// // // // // // //             return root.data
// // // // // // //         }
// // // // // // //         return this.min(root.left)
// // // // // // //     }

// // // // // // //     max(root) {
// // // // // // //         if (!root.right) {
// // // // // // //             return root.data
// // // // // // //         }
// // // // // // //         return this.max(root.right)
// // // // // // //     }

// // // // // // //     delete(data) {
// // // // // // //         this.root = this.deleteNode(this.root, data)
// // // // // // //     }

// // // // // // //     deleteNode(node, data) {
// // // // // // //         if (!node) {
// // // // // // //             return null
// // // // // // //         }

// // // // // // //         if (data < node.data) {
// // // // // // //             node.left = this.deleteNode(node.left, data)
// // // // // // //         } else if (data > node.data) {
// // // // // // //             node.right = this.deleteNode(node.right, data)
// // // // // // //         } else {
// // // // // // //             if (!node.right && !node.left) return null

// // // // // // //             if (node.left === null) {
// // // // // // //                 return node.right
// // // // // // //             }
// // // // // // //             if (node.right === null) {
// // // // // // //                 return node.left
// // // // // // //             }
// // // // // // //             node.data = this.min(node.right)
// // // // // // //             node.right = this.deleteNode(node.right, data)
// // // // // // //         }
// // // // // // //         return node
// // // // // // //     } 
// // // // // // // }

// // // // // // // const tree = new Tree()

// // // // // // // tree.insert(10)
// // // // // // // tree.insert(5)
// // // // // // // tree.insert(12)
// // // // // // // tree.insert(20)
// // // // // // // console.log('search', tree.search(20));
// // // // // // // console.log('preorder', tree.preorder());
// // // // // // // console.log('inorder', tree.inorder());
// // // // // // // console.log('postorder', tree.postorder());
// // // // // // // console.log('bfs', tree.bfs());
// // // // // // // console.log('max', tree.max(tree.root));
// // // // // // // console.log('min', tree.min(tree.root));
// // // // // // // tree.delete(20)
// // // // // // // console.log('after delete', tree.inorder());


// // // // // // function heapsort(array) {
// // // // // //     for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
// // // // // //         heapify(array, array.length, i)
// // // // // //     }

// // // // // //     for (let i = array.length - 1; i > 0; i--) {
// // // // // //         [array[0], array[i]] = [array[i], array[0]]
// // // // // //         heapify(array, i, 0)
// // // // // //     }
// // // // // // }

// // // // // // function heapify(array, n, i) {
// // // // // //     let largest = i
// // // // // //     let left = 2 * i + 1
// // // // // //     let right = 2 * i + 2

// // // // // //     if (left < n && array[left] > array[largest]) {
// // // // // //         largest = left
// // // // // //     }
// // // // // //     if (right < n && array[right] > array[largest]) {
// // // // // //         largest = right
// // // // // //     }

// // // // // //     if(largest!==i){
// // // // // //         [array[i],array[largest]] = [array[largest],array[i]]
// // // // // //         heapify(array,n,largest)
// // // // // //     }
// // // // // // }

// // // // // // const arrayToSort = [12, 11, 13, 5, 6, 7];
// // // // // // console.log("Original array:", arrayToSort);

// // // // // // heapsort(arrayToSort);
// // // // // // console.log("Sorted array:", arrayToSort);


// // // // // class MinHeap {
// // // // //     constructor() {
// // // // //         this.heap = []
// // // // //     }

// // // // //     insert(value) {
// // // // //         this.heap.push(value)
// // // // //         this.bubbleup()
// // // // //     }

// // // // //     bubbleup() {
// // // // //         if (this.heap.length === 0) return null
// // // // //         let current = this.heap.length - 1

// // // // //         while (current > 0) {
// // // // //             const parentindex = Math.floor((current - 1) / 2)
// // // // //             if (this.heap[current] < this.heap[parentindex]) {
// // // // //                 [this.heap[current], this.heap[parentindex]] = [this.heap[parentindex], this.heap[current]]
// // // // //                 current = parentindex
// // // // //             } else {
// // // // //                 break
// // // // //             }
// // // // //         }
// // // // //     }

// // // // //     getsize() {
// // // // //         return this.heap.length
// // // // //     }

// // // // //     extract() {
// // // // //         if (this.heap.length === 0) return null

// // // // //         const min = this.heap[0]
// // // // //         const last = this.heap.pop()
// // // // //         if (this.heap.length > 0) {
// // // // //             this.heap[0] = last
// // // // //             this.bubbledown()
// // // // //         }
// // // // //         return min
// // // // //     }

// // // // //     bubbledown() {
// // // // //         let current = 0
// // // // //         while (true) {
// // // // //             const left = 2 * current + 1
// // // // //             const right = 2 * current + 2
// // // // //             let small = current

// // // // //             if (left < this.heap.length && this.heap[left] < this.heap[small]) {
// // // // //                 small = left
// // // // //             }
// // // // //             if (right < this.heap.length && this.heap[right] < this.heap[small]) {
// // // // //                 small = right
// // // // //             }

// // // // //             if(small!==current){
// // // // //                 [this.heap[small],this.heap[current]] = [this.heap[current],this.heap[small]]
// // // // //                 current = small
// // // // //             }else{
// // // // //                 break
// // // // //             }
// // // // //         }
// // // // //     }
// // // // // }

// // // // // const minHeap = new MinHeap()

// // // // // minHeap.insert(20)
// // // // // minHeap.insert(10)
// // // // // minHeap.insert(3) 
// // // // // minHeap.insert(4)
// // // // // console.log(minHeap.getsize());
// // // // // minHeap.extract()
// // // // // console.log(minHeap.getsize());


// // // // class TrieNode {
// // // //     constructor() {
// // // //         this.children = {};
// // // //         this.end = false;
// // // //     }
// // // // }

// // // // class Trie {
// // // //     constructor() {
// // // //         this.root = new TrieNode();
// // // //     }

// // // //     insert(word) {
// // // //         let node = this.root;
// // // //         for (const char of word) {
// // // //             if (!node.children[char]) {
// // // //                 node.children[char] = new TrieNode();
// // // //             }
// // // //             node = node.children[char];
// // // //         }
// // // //         node.end = true;
// // // //     }

// // // //     search(word) {
// // // //         let node = this.root;
// // // //         for (const char of word) {
// // // //             if (!node.children[char]) {
// // // //                 return false;
// // // //             }
// // // //             node = node.children[char];
// // // //         }
// // // //         return node.end;
// // // //     }

// // // //     startsWith(prefix) {
// // // //         let node = this.root;
// // // //         for (const char of prefix) {
// // // //             if (!node.children[char]) {
// // // //                 return false;
// // // //             }
// // // //             node = node.children[char];
// // // //         }
// // // //         this.printWords(node, prefix);
// // // //     }

// // // //     remove(word) {
// // // //         this.removeHelper(this.root, word, 0);
// // // //     }

// // // //     removeHelper(node, word, index) {
// // // //         if (index === word.length) {
// // // //             node.end = false;
// // // //             return;
// // // //         }
// // // //         const childNode = node.children[word[index]];
// // // //         if (childNode) {
// // // //             this.removeHelper(childNode, word, index + 1);
// // // //             if (!childNode.end && Object.keys(childNode.children).length === 0) {
// // // //                 delete node.children[word[index]];
// // // //             }
// // // //         }
// // // //     }

// // // //     print() {
// // // //         // this.printWords(this.root, '');
// // // //     }

// // // //     printWords(node, currentWord) {
// // // //         if (node.end) {
// // // //             console.log(currentWord);
// // // //         }
// // // //         for (const char in node.children) {
// // // //             this.printWords(node.children[char], currentWord + char);
// // // //         }
// // // //     }
// // // // }

// // // // const trie = new Trie();

// // // // trie.insert("Cat");
// // // // trie.insert("camera");
// // // // trie.insert("cammel");
// // // // trie.insert("nithi");
// // // // trie.insert("nithin");

// // // // console.log(trie.search("nithi"));

// // // // trie.remove("Cat");

// // // // console.log("Words starting with 'n':");
// // // // trie.startsWith("ca");

// // // // console.log("All words in the Trie:");
// // // // trie.print();



// // // class Graph {
// // //     constructor() {
// // //         this.graph = []
// // //     }

// // //     addvertex(vertex) {
// // //         if (!this.graph[vertex]) {
// // //             this.graph[vertex] = new Set()
// // //         }
// // //     }

// // //     addEdges(vertex1, vertex2) {
// // //         if (!this.graph[vertex1]) {
// // //             this.addvertex(vertex1)
// // //         }
// // //         if (!this.graph[vertex2]) {
// // //             this.addvertex(vertex2)
// // //         }
// // //         this.graph[vertex1].add(vertex2)
// // //         this.graph[vertex2].add(vertex1)
// // //     }

// // //     removeEdge(vertex1, vertex2) {

// // //         this.graph[vertex1].delete(vertex2)
// // //         this.graph[vertex2].delete(vertex1)

// // //     }

// // //     deleteVertex(vertex) {
// // //         if (!this.graph[vertex]) {
// // //             return null
// // //         }
// // //         for (let delVertex of this.graph)
// // //             this.removeEdge(vertex, delVertex)
// // //         delete this.graph[vertex]
// // //     }

// // //     hasEdge(vertex1, vertex2) {
// // //         return this.graph[vertex1].has(vertex2) && this.graph[vertex2].has(vertex1)
// // //     }

// // //     display() {
// // //         for (let vertex in this.graph) {
// // //             console.log(vertex + "--->" + [...this.graph[vertex]]);
// // //         }
// // //     }

// // //     dfs(start) {
// // //         let stack = [start]
// // //         let visited = new Set([start])
// // //         let data = []

// // //         while (stack.length) {
// // //             let current = stack.pop()
// // //             data.push(current)

// // //             for (let neighbour in this.graph[current]) {
// // //                 if (!visited.has(neighbour)) {
// // //                     visited.add(neighbour)
// // //                     stack.push(neighbour)
// // //                 }
// // //             }

// // //         }
// // //         console.log('data', data);
// // //     }

// // //     bfs(start) {
// // //         let queue = [start]

// // //         let current = data.shilf()
// // //     }
// // // }


// // // let node = new Graph()
// // // node.addvertex("a")
// // // node.addvertex("b")
// // // node.addvertex("c")



// // // node.addEdges("a", "b")

// // // node.addEdges("b", "c")
// // // node.addEdges("c", "b")
// // // node.addEdges("c", "a")



// // // console.log(node.hasEdge("c", "a"));
// // // node.deleteVertex("b")
// // // node.display()

// // class Trienode {
// //     constructor() {
// //         this.child = {}
// //         this.end = false
// //     }
// // }


// // class Trie {
// //     constructor() {
// //         this.root = new Trienode()
// //     }

// //     insert(word) {
// //         let node = this.root
// //         for (const char of word) {
// //             if (!node.child[char]) {
// //                 node.child[char] = new Trienode()
// //             }
// //             node = node.child[char]
// //         }
// //         node.end = true
// //     }

// //     search(prefix) {
// //         let node = this.root
// //         for (const char of prefix) {
// //             if (!node.child[char]) {
// //                 console.log(`not found ${prefix}`);
// //                 return
// //             }
// //             node = node.child[char]
// //         }
// //         console.log(`found ${prefix}`);
// //     }

// //     startwith(word) {
// //         let node = this.root
// //         for (const char of word) {
// //             if (!node.child[char]) {
// //                 console.log('prefix not');
// //                 return
// //             }
// //             node = node.child[char]
// //         }
// //         this.print(node, word)
// //     }

// //     print(node, currentWord) {
// //         if (node.end) {
// //             console.log(currentWord);
// //         }

// //         for (const char in node.child) {
// //             this.print(node.child[char], currentWord + char)
// //         }
// //     }
// // }

// // const trie = new Trie()

// // trie.insert('nikhil')
// // trie.insert('name')
// // trie.insert('ninja')
// // trie.insert('navami')
// // trie.search('n')
// // trie.startwith('n')


// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.righ = null
//     }
// }

// class Bst {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(data) {
//         const node = new Node(data)

//         if (this.isEmpty()) {
//             this.root = node
//         } else {
//             this.insertnode(this.root, node)
//         }
//     }

//     insertnode(root, node) {
//         if (node.data < root.data) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertnode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertnode(root.right, node)
//             }
//         }
//     }

//     search(value) {
//         if (this.isEmpty()) return null
//         this.searchnode(this.root, value)
//     }

//     searchnode(root, value) {
//         if (!root) return null
//         if (!value || root.value === value) {
//             return root.value
//         }

//         if (value < root.data) {
//             return this.searchnode(root.left, value)
//         } else {
//             return this.searchnode(root.righ, value)
//         }
//     }
// }


// const bst = new Bst()

// bst.insert(20)
// bst.insert(25)
// bst.insert(30)
// bst.insert(5)
// bst.insert(12)
// console.log('search', bst.search(12));
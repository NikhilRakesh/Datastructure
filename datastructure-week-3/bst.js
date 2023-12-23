class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(data) {
        const node = new Node(data)

        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {

        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return null;
        }
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (!node) {
            return null;
        }
        if (!value || node.data === value) {
            return node.data
        }

        if (value < node.data) {
            return this.searchNode(node.left, value)
        } else {
            return this.searchNode(node.right, value)
        }
    }

    preorder() {
        const result = []
        this.preorderTraversal(this.root, result)
        return result
    }

    preorderTraversal(node, result) {
        if (node) {
            result.push(node.data)
            this.preorderTraversal(node.left, result)
            this.preorderTraversal(node.right, result)
        }
    }

    inorder() {
        const result = []
        this.inorderTraversal(this.root, result)
        return result
    }

    inorderTraversal(node, result) {
        if (node) {
            this.inorderTraversal(node.left, result)
            result.push(node.data)
            this.inorderTraversal(node.right, result)
        }
    }

    postorder() {
        const result = []
        this.postorderTraversal(this.root, result)
        return result
    }

    postorderTraversal(node, result) {
        if (node) {
            this.postorderTraversal(node.left, result)
            this.postorderTraversal(node.right, result)
            result.push(node.data)
        }
    }

    bfs() {
        const result = []
        const queue = []
        if (this.root) {
            queue.push(this.root)

            while (queue.length > 0) {
                const current = queue.shift()
                result.push(current.data)

                if (current.left) {
                    queue.push(current.left)
                }
                if (current.right) {
                    queue.push(current.right)
                }
            }
        }
        return result
    }

    min(root) {
        if (!root.left) {
            return root.data;
        }

        return this.min(root.left)
    }
    max(root) {
        if (!root.right) {
            return root.data;
        }

        return this.max(root.right)
    }


    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return null
        }

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) return null
            if (root.left === null) {
                return root.right 
            } else if (root.right === null) {
                return root.left
            }

            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.search(1));
console.log('preorder', bst.preorder());
console.log('inorder', bst.inorder());
console.log('postorder', bst.postorder());
console.log('BFS:', bst.bfs());
console.log('Min:', bst.min(bst.root));
console.log('Max:', bst.max(bst.root));
bst.delete(10);
console.log('After deletion - Inorder:', bst.inorder());


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Bst {
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
            this.insertnode(this.root, node)
        }
    }

    insertnode(root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertnode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertnode(root.right, node)
            }
        }
    }

    search(value) {
        if (this.isEmpty()) return null
        return this.searchnode(this.root, value)
    }

    searchnode(root, value) {
        if (!root) return null;
        if (!value || root.data === value) {
            return root.data;
        }

        if (value < root.data) {
            return this.searchnode(root.left, value);
        } else {
            return this.searchnode(root.right, value);
        }
    }

    preorder() {
        const result = []
        this.preordertraversal(this.root, result)
        return result
    }

    preordertraversal(root, result) {
        if (root) {
            result.push(root.data)
            this.preordertraversal(root.left, result)
            this.preordertraversal(root.right, result)
        }
    }

    bfs() {
        let result = []
        let queue = []

        if (this.root) {
            queue.push(this.root)  
            while (queue.length > 0) {
                const current = queue.shift()
                result.push(current.data)

                if (current.left) queue.push(current.left)
                if (current.right) queue.push(current.right)
            }
        }
        return result
    }

    min(root){
        if(!root.left) return root.data
        return this.min(root.left)
    }
    max(root){
        if(!root.right) return root.data
        return this.max(root.right)
    }
}


const bst = new Bst()

bst.insert(20)
bst.insert(25)
bst.insert(30)
bst.insert(5)
bst.insert(12)
console.log('search', bst.search(12));

console.log(bst.preorder());
console.log(bst.bfs());
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
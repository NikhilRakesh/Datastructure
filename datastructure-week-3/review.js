class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor() {
        this.root = new Node()
    }

    isEmpty() {
        return this.root === null
    }

    insertion(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.root = node
            return
        }
        return this.insertNode(this.root, node)
    }


    insertNode(root, node) {
        if(root === null) return null
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

    inorder() {
        const result = []
        this.inordertraversal(this.root, result)
        return result
    }

    inordertraversal(node, result) {
        if (node) {
            this.inordertraversal(node.left, result)
            result.push(node.data)
            this.inordertraversal(node.right, result)
        }
    }
}


const bst = new Bst()

bst.insertion(15)
bst.insertion(5)
bst.insertion(10)
bst.insertion(20)

console.log(bst.inorder());
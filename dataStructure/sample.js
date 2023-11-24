class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        } 
        current.next = node
    }

    addfirst(data) {
        const node = new Node(data)
        node.next = this.head
        this.head = node
    }

    addlast(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }


    deleteone(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }

        if (node.data == this.head.data) {
            this.head = this.head.next
            return
        }

        let current = this.head
        while (current.next) {
            if (node.data == current.next.data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }


    deleteDuplicate() {
        let current = this.head
        while (current.next) {
            if (current.data == current.next.data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const linkedList = new LinkedList()

const array = [1, 2, 3, 4, 5]

array.forEach(data => linkedList.append(data))

linkedList.addfirst(0)

linkedList.addlast(12)

linkedList.deleteDuplicate()

linkedList.deleteone(5)

linkedList.print()
class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null;
        }
}

class Doublelinkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const newnode = new Node(data)

        if (!this.head) {
            this.head = newnode
            this.tail = newnode
        } else {
            newnode.prev = this.tail
            this.tail.next = newnode
            this.tail = newnode
        }
    }

    addfirst(data) {
        const newnode = new Node(data)
        newnode.next = this.head;
        this.head.prev = newnode
        this.head = newnode
    }

    addlast(data) {
        const newnode = new Node(data)

        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = newnode
        newnode.prev = current
        this.tail = newnode
    }

    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    deleteone(data) {
        const newnode = new Node(data)
        if (!this.head) {
            this.head = newnode
            this.tail = newnode
            return
        }

        if (this.head.data == newnode.data) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        }

        let current = this.head
        while (current.next) {
            if (newnode.data == current.next.data) {
                current.next = current.next.next
                if (current.next) {
                    current.next.prev = current;
                } else {
                    this.tail = current;
                }
            } else {
                current = current.next
            }
        }

    }

    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const doublelinkedlist = new Doublelinkedlist()

const array = [1, 2, 3, 4, 5, 6]

array.forEach(data => doublelinkedlist.append(data))

doublelinkedlist.addfirst(0)

doublelinkedlist.addlast(0)

doublelinkedlist.deleteone(0)

doublelinkedlist.printForward()


class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class doublelinkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }

    inserting(data) {
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }

    addfirst(data) {

        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node

    }

    addatindex(index, data) {
        const node = new Node(data)

        if (index == 0) {
            node.next = this.head
            this.head.prev = node
            this.head = node
            return
        }

        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            if (current === null) {
                console.error("Index out of bounds");
                return;
            }
            current = current.next
        }
        node.prev = current;
        node.next = current.next;
        current.next.prev = node
        current.next = node;

    }

    delete(data) {
        const node = new Node(data)
        if (this.head.data == node.data) {
            this.head = this.head.next
            return
        }

        let current = this.head
        while (current.next){
            if(current.next.data == node.data){
                current.next = current.next.next
                if(current.next){
                    current.next.prev = current
                }else {
                    this.tail = current
                }
            }else {
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

const Doublelinkedlist = new doublelinkedlist()

Doublelinkedlist.inserting(1)
Doublelinkedlist.inserting(2)
Doublelinkedlist.inserting(3)
Doublelinkedlist.addfirst(0)
Doublelinkedlist.addatinde(3, 12)
Doublelinkedlist.delete(0)


Doublelinkedlist.print()
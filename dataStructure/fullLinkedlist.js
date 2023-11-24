class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            // let current = this.head
            // while (current.next) {
            //     current = current.next
            // }
            // current.next = node
            this.tail.next = node
            this.tail = node
            
        }
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
        // let current = this.head
        // while (current.next) {
        //     current = current.next
        // }
        // current.next = node
        this.tail.next = node
        this.tail = node
    }

    size() {
        let count = 0
        let current = this.head
        while (current.next) {
            current = current.next
            count++
        }
        return count
    }

    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error('invalid index')
            return
        }
        const node = new Node(data)

        if (index == 0) {
            node.next = this.head
            this.head = node
            return
        }

        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        node.next = current.next
        current.next = node

    }

    deleteone(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }

        if (this.head.data === node.data) {
            this.head = this.head.next;
            return;
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

    deleteDuplicate(){
        let current = this.head
        while(current.next){
            if(current.data == current.next.data){
                current.next = current.next.next
            }else {
                current  = current.next
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


const linkedlistdata = new LinkedList()

// linkedlistdata.append(10)
// linkedlistdata.append(9)
// linkedlistdata.append(8)
// linkedlistdata.append(7)

const array = [1,2,3,4,5,6]
array.forEach(data => linkedlistdata.append(data) )

linkedlistdata.addfirst(0)

linkedlistdata.addlast(7)

linkedlistdata.addAt(1, 12)

linkedlistdata.deleteone(12)

linkedlistdata. deleteDuplicate()

linkedlistdata.print()
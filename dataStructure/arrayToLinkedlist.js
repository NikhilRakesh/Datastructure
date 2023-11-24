// create linked list from an array

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
    }
    append(data) {
        const newnode = new Node(data)
        if (!this.head) {
            this.head = newnode
        }else {
            let current = this.head
            while(current.next){
                current = current.next
            }   
            current.next = newnode 
        }
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const array = [1, 2, 3, 4, 5]
const linkedlist = new Linkedlist (array)
array.forEach(data => linkedlist.append(data))

linkedlist.print()
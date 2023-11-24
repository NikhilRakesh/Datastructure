class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


class Singlylinkedlist {
    constructor(){
        this.head = null
        this.tail = null
    }

    inserting(data){
        const node = new Node(data)
        if(!this.head){
            this.head =node 
            this.tail = node 
            return
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node 
       
    }

    addfist(data){
        const node = new Node(data)
        if(!this.head){
            this.head =node 
            this.tail = node 
            return
        }
        node.next = this.head
        this.head.prev = node 
        this.head = node 
       
    }

    addLast(data){
        const node = new Node(data)
        if(!this.head){
            this.head =node 
            this.tail = node 
            return
        }
        this.tail.next = node 
        node.prev = this.tail 
        this.tail = node 
        
    }

    delete(data){
        const node = new Node(data)
        if(this.head.data === node.data){
            this.head = this.head.next
            return
        }  
        let current = this.head
        while(current.next){
            if(current.next.data === node.data){
                current.next = current.next.next
                // if(current.next){
                //     current.next.prev = current
                // }else {
                //     this.tail = current 
                // }
            }
            current = current.next
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    print(){
        let current = this.head

        while(current){
            console.log(current.data);
            current =current.next
        }
    }
}

const Singly = new Singlylinkedlist()

const array = [2,3,4,5,6]

array.forEach(data => Singly.inserting(data))

Singly.addfist(1)
Singly.addLast(7)
Singly.delete(2)


console.log("Original List:");
Singly.print();

Singly.reverse();

console.log("Reversed List:");
Singly.print();
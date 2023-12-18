class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(data){
        const node = new Node(data)
        if(this.isEmpty()){
            this.front = node 
            this.rear = node
            return
        }
        this.rear.next = node
        this.rear = node 
    }

    dequeue(){
        if (this.isEmpty()) {
            return null; 
        }

        const removedNode = this.front;

        if (this.front === this.rear) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }

        return removedNode;
    }

    isEmpty() {
        return this.front === null;
    }

    peek() {
        return this.isEmpty() ? null : this.front.data;
    }

    print() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.peek()); 

queue.dequeue();
queue.print();
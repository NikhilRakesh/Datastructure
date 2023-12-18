class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
    }

    push(data) {
        const node = new Node(data)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }
        this.rear.next = node
        this.rear = node
    }

    shift(){
        if (this.isEmpty()) {
            return null; 
        }

        if(this.front === this.rear){
            this.front = null
            this.rear = null
            return
        }
        this.front = this.front.next
    }


    isEmpty() {
        return this.front === null
    }


    display() {
        let current = this.front
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)

queue.shift()
queue.display()
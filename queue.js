class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if (this.isEmpty()) {
            return "Underflow";
        }
        this.items.shift()
    }

    peek(){
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty(){
        return this.items.length === 0
    }

    print() {
        console.log(this.items.join(" "));
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.peek()); // Output: 1

queue.dequeue();
queue.print();
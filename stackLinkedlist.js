// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//     }

//     push(element){
//         const node = new Node(element)
//         node.next = this.top
//         this.top = node 
//     }

//     pop(){
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         const removednode = this.top
//         this.top = this.top.next
//         return removednode.data 
//     }

//     peek() {
//         return this.isEmpty() ? null : this.top.data;
//     }

//     isEmpty() {
//         return this.top === null;
//     }

//     print() {
//         let current = this.top;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log("Top element:", stack.peek()); 

// stack.pop();
// stack.print();

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null
//         this.rear = null
//     }

//     enqueue(data) {
//         const node = new Node(data)
//         if (this.isEmpty()) {
//             this.front = node
//             this.rear = node
//             return
//         }
//         this.rear.next = node
//         this.rear = node
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return
//         }
//         if (this.front === this.rear) {
//             this.front = null
//             this.rear = null
//             return
//         } else {
//             this.front = this.front.next
//         }

//     }



//     isEmpty() {
//         return this.front === null
//     }

//     print() {
//         let current = this.front;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }


// }


// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// queue.print()

// function mergesort(array) {
//     if (array.length <= 1) {
//         return array
//     }

//     let mid = Math.floor(array.length / 2)
//     let left = mergesort(array.slice(0, mid))
//     let right = mergesort(array.slice(mid))


//     return merge(left, right)
// }

// function merge(left, right) {
//     let soterdarray = []

//     while (left.length && right.length) {
//         if (left[0] > right[0]) {
//             soterdarray.push(right.shift())
//         } else {
//             soterdarray.push(left.shift())
//         }
//     }

//     return [...soterdarray, ...left, ...right]
// }



// function quicksort(array) {
//     if (array.length <= 1) {
//         return array
//     }

//     let pivot = array[0]
//     let left = []
//     let right = []

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < pivot) {
//             left.push(array[i])
//         } else {
//             right.push(array[i])
//         }
//     }

//     return [...quicksort(left), pivot, ...quicksort(right)]
// }



// const array = [1, 8, 2, 7, 3, 6, 4, 5]



// console.log(quicksort(array));


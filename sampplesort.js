const array = [8, 1, 7, 2, 6, 3, 5, 4]


//bubble sort
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length-i; j++) {
//         if(array[j]>array[j+1]){
//             const temp = array[j]
//             array[j]= array[j+1]
//             array[j+1] = temp
//         }    
//     }  
// }


// insertion sort
// for (let i = 1; i < array.length; i++) {
//     const element = array[i]
//     let j = i - 1
//     while (j >= 0 && array[j] > element) {
//         array[j + 1] = array[j]
//         j--
//     }
//     array[j + 1] = element
// }



//selection sort
// for (let i = 0; i < array.length; i++) {
//     let element = i;
//     for (let j = i + 1; j < array.length; j++) {
//         if(array[element]>array[j]){
//             element = j
//         }
//     }
//     if(element!==i){
//         [array[i],array[element]] = [array[element],array[i]]
//     }

// }


//merge sort
// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array
//     }

//     let mid = Math.floor(array.length / 2)
//     let left = mergeSort(array.slice(0, mid))
//     let right = mergeSort(array.slice(mid))
//     return merge(left, right)
// }

// function merge(left, right) {
//     let sortedArray = []

//     while (left.length && right.length) {
//         if(left[0]>right[0]){
//             sortedArray.push(right.shift())
//         }else{
//             sortedArray.push(left.shift())
//         }
//     }

//     return [...sortedArray,...left,...right]
// }


// console.log('merge',mergeSort([1,8,2,7,3,4,5,6]));



// quick sort

// function quickSort(array) {
//     if (array.length <= 1){
//         return array
//     }

//     let left = []
//     let right = []
//     let pivot = array[0]

//     for (let i = 1; i < array.length; i++) {
//         if(array[i]< pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([1,8,2,7,3,4,5,6]));


// class Stack {
//     constructor(){
//         this.items=[]
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return
//         }
//         this.items.pop()
//     }

//     peek(){
//         return this.items[0]
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     print(){
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i]);
//         }
//     }
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// stack.print()


// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//     }

//     push(data) {
//         const node = new Node(data)
//         node.next = this.top
//         this.top = node
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         this.top = this.top.next
//     }

//     isEmpty() {
//         return this.top === null;
//     }

//     print() {
//         let current = this.top
//         while (current) {
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }


// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// stack.print()


// class Queue {
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return
//         }
//         this.items.shift()
//     }

//     peek(){
//       return  this.items[0]
//     }

//     isEmpty(){
//         return this.items.length === 0 
//     }

//     print(){
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i]); 
//         }
//     }
// }

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log('peek',queue.peek());
// queue.dequeue()
// queue.print()


// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null
//         this.rear = null
//     }

//     enqueue(data){
//         const node = new Node(data)

//         if(this.isEmpty()){
//             this.front = node 
//             this.rear = node 
//             return
//         }
//         this.rear.next = node 
//         this.rear = node
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         this.front = this.front.next
//     }

//     isEmpty(){
//         return this.front === null
//     }

//     print(){
//         let current = this.front
//         while (current) {
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }


// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// queue.print()


// for (let i = 1; i < array.length; i++) {
//     let element = array[i]
//     let j = i - 1
//     while (j>=0&&array[j]>element) {
//         array[j+1] = array[j]
//         j--
//     }
//     array[j+1] = element
// }


// for (let i = 0; i < array.length-1; i++) {
//     let element = i
//     for (let j = i+1; j < array.length; j++) {
//         if(array[j]<array[element]){
//             element = j
//         }    
//     } 

//     if(element!==i){
//         [array[i],array[element]] = [array[element],array[i]]
//     }
// }

// console.log(array);



// merge sort //

// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array
//     }

//     let mid = Math.floor(array.length / 2)
//     let left = mergeSort(array.slice(0, mid))
//     let right = mergeSort(array.slice(mid))

//     return merge(left, right)
// }

// function merge(left, right) {
//     let sortedArray = []
//     while (left.length && right.length) {
//         if(left[0]>right[0]){
//             sortedArray.push(right.shift())
//         }else {
//             sortedArray.push(left.shift())
//         }
//     }

//     return [...sortedArray,...left,...right]
// }


// function Quicksort(array) {
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

//     return [...Quicksort(left),pivot,...Quicksort(right)]
// }

// console.log(Quicksort([1, 8, 2, 7, 3, 6, 4, 5]));


// class Hashtable {
//     constructor(size) {
//         this.table = new Array(size).fill(null).map(() => [])
//         this.size = size
//     }

//     hashkey(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key, value) {
//         const index = this.hashkey(key)
 
//         const bucket = this.table[index]

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i].key === key) {
//                 bucket[i].value = value
//                 return
//             }
//         }
//         bucket.push({key,value})
//     }

//     get(key){
//         const index = this.hashkey(key)

//         const bucket = this.table[index]
//         for (let i = 0; i < bucket.length; i++) {
//             if(bucket[i].key === key){
//                 return bucket[i].value
//             } 
//         }
//     }

//     print(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i].length > 0) {
//                 console.log(i, this.table[i]);
//             } 
//         }
//     }
// }

// const hashtable = new  Hashtable(100)

// hashtable.set('name','Nikhil')
// hashtable.set('age',23)
// console.log('value',hashtable.get('age'));
// hashtable.print()
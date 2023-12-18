class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size(){
        this.items.length
    }

    print() {
        // console.log(this.items.join(' '));
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);            
        }
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop();

stack.print(); 

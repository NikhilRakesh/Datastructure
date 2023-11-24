class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null
    }

    append(data){  
        const newnode = new Node(data)
        if(!this.head){
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
        let current = this.head
        while(current){
            console.log(current.data);
            current= current.next
        }
    }
}


const linkedlist = new Linkedlist ()
linkedlist.append(1)
linkedlist.append(2)


linkedlist.print()
// reverse an linked list
class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

function reverse(head){
    let tail = null
    let current = head
    while(current!==null){
        let nextNode = current.next 
        current.next = tail
        tail = current
        current = nextNode
    }
    return tail
}

function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log('print',current.data);
        current = current.next;
    }
}


const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
node.next.next.next.next.next = new ListNode(6);

const reversedNode = reverse(node);
 
printLinkedList(reversedNode);
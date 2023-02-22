// view are getting tracked upto 32 bit 
//write the increment function

class LinkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function incrementAndReturn(head = new LinkedList(0)){
    head = reverseList(head);
    console.log("before increment");
    console.log(head);
    let node = head;
    
    if(node.value != 9){
        node.value = node.value + 1;
        node = reverseList(head);
        return node;
        
    }
    while(node.next && node.value == 9){
        
        node.value = 0;
        node = node.next;
    }
    if(node.value == 9){
        node.value = 0;
        node.next = new LinkedList(1);
    }
    else{
        node.value = node.value + 1;
    }
    console.log("after incrementing");
    console.log(head);
    node = reverseList(head);
    return node;
}

function reverseList(head,prev=null){
    if(!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next,head);
   

}

let head = new LinkedList(1);
head.next = new LinkedList(9);
head = incrementAndReturn(head);
 console.log(head);

head = incrementAndReturn(head);
console.log(head);
head = incrementAndReturn(head);
console.log(head);

head = incrementAndReturn(head);
console.log(head);
head = incrementAndReturn(head);
console.log(head);

head = incrementAndReturn(head);
console.log(head);
head = incrementAndReturn(head);
console.log(head);




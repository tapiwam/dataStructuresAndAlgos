class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        if(!this.isEmpty()){
            return this.top.value;
        }
    }

    push(value){
        const newNode = new Node(value);
        if(this.top === null){
            // First element so add
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        } else {
            // Prepend to last element
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
        return this;
    }
    pop(){
        // Pull from the bottom
        if(this.top !== null){
            let node = this.top;
            let second = this.top.next;
            this.top = second;

            this.length--;

            if(this.length === 0){
                this.bottom = null;
            }

            return node.value;
        }
    }

    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy.com");
myStack.push("discord");

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


//Discord
//Udemy
//google
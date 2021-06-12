


// Sample manual linked list object
// 10 --> 5 --> 16
let myLinkedListManual = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}


// Implementation of a new linked list

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(headValue) {
        this.head = this._createNode(headValue);
        this.tail = this.head;
        this.length = 1;
    }

    append(appendedValue){
        const nextNode = this._createNode(appendedValue);
        this.tail.next = nextNode;
        this.tail = nextNode;
        this.length += 1;
        return this;
    }

    prepend(prependValue) {
        const newHead = this._createNode(prependValue);
        newHead.next = this.head;
        this.head = newHead;
        this.length += 1;
        return this;
    }

    _traverseToIndex(index){
        let i =0;
        let currentNode = this.head;
        while(currentNode != null && i < index-1){
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;
    }

    insert(index, value){
        // check if index is in bound using length
        const isBound = (index < this.length && index > 0);

        // if bound then find the index node -> find & store next in temp -> set next to new node -> set next of newNode to the rest
        if(isBound) {
            const currentNode = this._traverseToIndex(index);

            // Not that we current node, insert
            const newNode = this._createNode(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length += 1;
        } else {
            // append to end?
            if(index <= 0){
                this.prepend(value);
            } else {
                this.append(value);
            }
        }

        return this;
    }

    _createNode(val){
        return new LinkedListNode(val);
    }

    toArray(){
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null){
            arr.push(currentNode.value);

            // Traverse to next
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const myLinkedList = new LinkedList(10);
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.append(5);
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.append(16);
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.append(20);
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.prepend(1);
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.prepend(3);
console.log(JSON.stringify(myLinkedList.toArray()));

// Whe have 3-10-5-20 which goes to 3-10-99-5-20
myLinkedList.insert(2, 99)
console.log(JSON.stringify(myLinkedList.toArray()));

console.log('Linked list value:', JSON.stringify(myLinkedList));

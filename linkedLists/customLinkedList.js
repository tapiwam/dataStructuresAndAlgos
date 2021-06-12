


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

    _createNode(val){
        return new LinkedListNode(val);
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.prepend(3);

console.log('Linked list value:', JSON.stringify(myLinkedList));

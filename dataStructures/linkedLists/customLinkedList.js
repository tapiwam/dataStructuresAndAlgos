


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

    remove(index){
        if(index == 0){
            if(this.head.next !== null){
                this.head = this.head.next;
                this.length -= 1;
            }
        } else if( index > 0 && index <= this.length-1 ){
            const previousNode = this._traverseToIndex(index);
            const currentNode = previousNode.next;

            // Bridge
            previousNode.next = currentNode.next;
            this.length -= 1;
        } else {
            console.log("Index is out of bounds. Cannot remove @index=" + index + " @maxIndex=" + (this.length-1));
        }

        return this;
    }

    /**
     * Reverse the linked list in place.
     * @returns {LinkedListNode|*}
     */
    reverse(){
        if(!this.head.next){
            return  this.head;
        }

        let first = this.head;
        let cursor = first.next;

        while (cursor){
            // Keep track of the next
            const tempNextCursor = cursor.next;

            // Reverse the pointers
            cursor.next = first;

            // Move to the next
            first = cursor;
            cursor = tempNextCursor;
        }

        // Set new head and tail
        this.head.next = null;
        this.head = first;

        return this;
    }

    /**
     * Create a new revered version of this linked list
     * @returns {LinkedList}
     */
    reverse2(){
        let arr = this.toArray();
        const reversedLinkedList = new LinkedList(arr[this.length-1]);

        for (let i=arr.length-2; i>=0; i--){
            reversedLinkedList.append(arr[i]);
        }

        return reversedLinkedList;
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

myLinkedList.remove(0)
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.remove(2)
console.log(JSON.stringify(myLinkedList.toArray()));

r1 = myLinkedList.reverse();
console.log(JSON.stringify(r1.toArray()));

myLinkedList.remove(4)
console.log(JSON.stringify(myLinkedList.toArray()));

myLinkedList.remove(4)
console.log(JSON.stringify(myLinkedList.toArray()));

console.log('Linked list value:', JSON.stringify(myLinkedList));

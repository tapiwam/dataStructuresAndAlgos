class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
        this.length = 0;
    }
    insert(value){

        console.log("========================");
        console.log(" >> INSERTING ::: " + value);


        // Create node
        const node = new Node(value);

        // Check if a root exists
        if(!this.root){
            this.root = node;
            this.length++;
        } else {
            // Traverse down from root and  look for a spot
            let holderNode = this.root;
            let operationCount = 0;

            while (holderNode !== null){

                console.log("***");
                console.log(value + " :: Checking with @node=" + holderNode.value);

                if(holderNode.value > value) {
                    // left of node
                    console.log(value + " :: Falling to left with @node=" + holderNode.value);

                    if(!holderNode.left){
                        // If no left node then the new item will become the left node
                        holderNode.left = node;
                        this.length++;
                        holderNode = null;

                        console.log(value + " :: No node on left so adding to left");
                    } else {
                        // A node is present so move holder node down and repeat
                        holderNode = holderNode.left;
                        console.log(value + " :: Traversed to @node=" + holderNode.value);
                    }
                } else {
                    // right of node
                    console.log(value + " :: Falling to right side with @node=" + holderNode.value);

                    if(!holderNode.right){
                        // If no left node then the new item will become the left node
                        holderNode.right = node;
                        this.length++;
                        holderNode = null;

                        console.log(value + " :: No node on right so adding to right");
                    } else {
                        // A not is present so move holder node down and repeat
                        holderNode = holderNode.right;

                        console.log(value + " :: Traversed to @node=" + holderNode.value);
                    }
                }
                operationCount++;
            }

            console.log(value + " :: Added new node with @totalOperations=" + operationCount + " @elementCount=" + this.length);
            console.log("========================");
            return this;
        }
    }

    lookup(value){
        console.log("========================");
        console.log("SEARCHING :: " + value);


        // Check if tree has at least a root element
        if(!this.root){
            console.log(value + " :: Binary Tree is empty");
            return null;
        } else if (!value){
            console.log(value + " :: Invalid value passed to lookup.");
            return null;
        } else {

            console.log(value + " :: Searching for value.");

            let holderNode = this.root;
            while (holderNode != null) {

                console.log("***");
                if(holderNode.value === value){
                    console.log(value + " :: Found value on current node.");
                    return holderNode;
                } else if(holderNode.value > value){
                    console.log(value + " :: Check falling to left. @node=" + holderNode.value);
                    if(holderNode.left === null){
                        // Not found so return
                        console.log(value + " :: Nothing on left chain. NOT-FOUND. @node=" + holderNode.value);
                        return null;
                    } else {
                        console.log(value + " :: Traversing to left node. @node=" + holderNode.value);
                        holderNode = holderNode.left;
                    }
                } else {
                    console.log(value + " :: Check falling to right. @node=" + holderNode.value);
                    if(holderNode.right === null){
                        // Not found so return
                        console.log(value + " :: Nothing on right chain. NOT-FOUND. @node=" + holderNode.value);
                        return null;
                    } else {
                        console.log(value + " :: Traversing to right node. @node=" + holderNode.value);
                        holderNode = holderNode.right;
                    }
                }
            }

            console.log("========================");
        }
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(40)
tree.insert(45)
tree.insert(39)
tree.insert(15)
tree.insert(1)


console.log('Lookup: ', tree.lookup(40));
console.log('=============================');
console.log('=============================');

console.log(JSON.stringify(traverse(tree.root), null, 2));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}






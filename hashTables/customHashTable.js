class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        // Check key
        if(!key || typeof key !== 'string' || key.length === 0){
            console.log('Cannot add key as it seems invalid!');
            return;
        }

        // Check value
        if(!value){
            console.log('The value passed seems a little off...');
            return;
        }

        // Hash key
        const bucket = this._hash(key);
        console.log('Computed hash key ' + bucket + " for key " + key);

        // Set the value
        this.data[bucket] = [key, value];
    }

    get(key) {
        // Check key
        if(!key || typeof key !== 'string' || key.length === 0){
            console.log('Cannot parse key as it seems invalid!');
            return;
        }

        // get hash
        const bucket = this._hash(key);
        console.log('Computed hash key ' + bucket + " for key " + key);

        // Get the value
        const data = this.data[bucket];
        console.log('Data present: ' + data[1]);

        // If data is present then return the value
        if(typeof data == 'Array' ){
            return data[1];
        }
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

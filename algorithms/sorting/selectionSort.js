const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

    const len = array.length;
    for(let i=0; i<len-1; i++){
        // Inner loop for to find smallest after index i

        let minIndex = i;
        let min = array[i];

        for(let j=i+1; j<len-1; j++){
            // Try find a new min
            if(array[j+1] < min){
                // found new min
                min = array[j+1];
                minIndex = j+1;
            }
        }

        // Update if we find a new min
        if(minIndex !== i){
            // Swap min with current node
            const temp = array[i];
            array[i] = min;
            array[minIndex] = temp;
        }

    }

}

selectionSort(numbers);
console.log(numbers);
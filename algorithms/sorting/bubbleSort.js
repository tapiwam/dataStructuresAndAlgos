const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 0, 5, 8, 4];

function bubbleSort(array) {
    // Iterate and 'bubble up' the largest element util it is fully sorted
    const len = numbers.length;
    let hasChange = false;
    let iterations = 0;

    do{
        hasChange = false;

        // Iterate over array and bubble up
        for(let i=0; i<len-1; i++){
            if(numbers[i] > numbers[i+1]){
                // Swap the numbers
                const tempNum = numbers[i+1];
                numbers[i+1] = numbers[i];
                numbers[i] = tempNum
                hasChange = true;
            }
        }

        iterations++;

    } while (hasChange);

    console.log("Complete bubble sort with total iterations = " + iterations);
}

bubbleSort(numbers);
console.log(numbers);
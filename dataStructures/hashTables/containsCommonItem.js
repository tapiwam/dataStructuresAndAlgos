

// Most basic case O(n^2)
// Nest loop over each array
function conatinscommonItem(arr1, arr2) {

    if(!arr1 || arr1.length === 0 || !arr2 || arr2.length === 0){
        console.log('Invalid inputs passed. please check...');
        return false;
    }

    // Outter array
    for(let i=0; i<arr1.length; i++){

        // Inner array
        for(let j=0; j<arr2.length; j++){

            // Check if an element in outter exists in inner
            if(arr1[i] === arr2[j]){
                return true;
            }

        }

    }

    return false;

}


// Should return false
// console.log(conatinscommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));

// Should return true
// console.log(conatinscommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));

// O(n) solution
// Use maps to have some sort of memory
function conatinscommonItem2(arr1, arr2) {

    // Check validity
    if(!arr1 || arr1.length === 0 || !arr2 || arr2.length === 0){
        console.log('Invalid inputs passed. please check...');
        return false;
    }

    // Create map from 1 -> Duplicates are ignored
    let map = {};
    for(let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }

    // Use map to check second array
    for (let i=0; i<arr2.length; i++){
        if(!!map[arr2[i]]){
            return true;
        }
    }

    return false;
}

// Should return false
console.log(conatinscommonItem2(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));

// Should return true
console.log(conatinscommonItem2(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));

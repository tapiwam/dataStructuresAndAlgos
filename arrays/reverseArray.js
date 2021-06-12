// Reverse a string

// Treat it as an array

function reverse(str){

    let strReverse = "";

    for(let i=str.length-1; i>=0; i--){ // O(n)
        strReverse += str[i]; // Can be slow -> might be better to provision space O(1) to O(n)
    }

    console.log("Reversed String: ", strReverse); // O(1)
    return strReverse;
}

// reverse("Hello my name is Tapiwa");
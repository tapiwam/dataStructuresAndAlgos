//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {

    // Check if input is valid
    if(!str){
        return null;
    }

    // When we reach last item then just return it
    if(str.length === 1){
        return str;
    }

    // Recursive call to rearrange the word
    // --> The first part call the same reverse with stg minus first char.
    // --> Last part is first char at the back rather than the front;
    return reverseString(str.substring(1)) + str.substring(0, 1);
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
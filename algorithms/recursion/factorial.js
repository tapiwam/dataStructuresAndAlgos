// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// e.g. 5! = 5*4*3*2*1

function findFactorialRecursive(number) {
    // check num
    if(number === null){
        return null;
    }

    console.log("Call factorial with @num=" + number);

    // Base case to stop once we get to 0! which is just 1
    if(number === 0){
        console.log("Factorial bottom hit so return 1 for 0!");
        return 1;
    }

    // Return the product
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    // check num
    if(!number){
        return null;
    }

    // 0! is 1 so it will be wind down from num to 1
    let answer = 1;
    for (let i=number; i>0; i--){
        answer *= i;
    }

    return answer;
}

console.log("Factorial Iterative: ", findFactorialIterative(5));
console.log("Factorial Recursive: ", findFactorialRecursive(5));

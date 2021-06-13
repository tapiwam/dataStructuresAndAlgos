// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Time complexity -> O(n)
function fibonacciIterative(n){
    // Iterate starting from 0 to n-1 and apply. We need to handle 0 and 1 explicitly

    if(n === null){
        return null;
    }

    if(n === 0){
        return 0;
    } else if(n === 1) {
        return 1;
    } else {
        let previous = 0;
        let next = 1;
        let answer = 1;
        for(let i=0; i<n-1; i++){
            answer = previous + next;
            previous = next;
            next = answer;
        }
        return answer;
    }
}
console.log('fibonacciIterative(3) = ', fibonacciIterative(3));
console.log('fibonacciIterative(4) = ', fibonacciIterative(4));
console.log('fibonacciIterative(5) = ', fibonacciIterative(5));
console.log('fibonacciIterative(6) = ', fibonacciIterative(6));
console.log('fibonacciIterative(10) = ', fibonacciIterative(10));

// Time complexity -> O(2^n) -> exponential time
// Here the fib(n-1) + fib(n-2) is a problem
function fibonacciRecursive(n) {
    if(n == null){
        return null;
    } else if (n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log('fibonacciRecursive', fibonacciRecursive(3));
console.log('fibonacciRecursive', fibonacciRecursive(10));
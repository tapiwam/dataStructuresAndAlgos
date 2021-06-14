// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Time complexity -> O(n) -> linear time
// Space complexity inc

let calculations = 0;
function fibonacciRecursive(n) {

    let cache = {};

    return function fib(n){
        calculations++;

        if(n in cache){
            return cache[n];
        } else {
            if (n < 2){
                return n;
            }

            cache[n] = fib(n-1) + fib(n-2);
            return cache[n];
        }
    }
}

const fibonacci = fibonacciRecursive();

console.log('fibonacciRecursive', fibonacci(3));
console.log('fibonacciRecursive', fibonacci(10));
console.log('fibonacciRecursive', fibonacci(50));

console.log("Total calculations", calculations);
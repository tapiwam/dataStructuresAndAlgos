
// Without caching
function addTo80(n){
    console.log('long time');
    return n+ 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

// ==================
// With caching

function memoizedAddTo80(n) {
    let cache = {};

    // Closure to allow cache to not reset BUT not have cache in global scope
    return function(n){
        if(n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }

}

// Cache defined withing memoized object only
const memoized = memoizedAddTo80();

console.log(memoized(8));
console.log(memoized(8));
console.log(memoized(8));
console.log(memoized(8));
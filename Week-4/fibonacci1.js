//Program to write memoize function using "loadash/memoize" utility

const memoize = require('loadash/memoize')

function fib(n) {
if (n<2) {
return n
 }
return fib(n-1) + fib(n-2)
 }

const fibM = memoize(fib)

console.time()
console.log(fibM(30))
console.timeEnd()
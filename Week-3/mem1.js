function memoize(fn) {
    const cache=new Map()
return function(...args) {
    if(cache.has(args.toString())){
        return cache.get(args.toString())
    }
}
    cache.set(args.toString(), fn(...args))
    return cache.get(args.toString())
    
}

function add(a,b){ 
 z=a+b
return z
}

const memoizeAdd = memoize(add)

console.log("This is the best memoize function example")
console.time()
console.log(memoizeAdd(5000,1000000))
console.timeEnd()
console.time()
console.log(memoizeAdd(5000,1000000))
console.timeEnd()
console.time()
console.log(memoizeAdd(5000,1000000))
console.timeEnd()


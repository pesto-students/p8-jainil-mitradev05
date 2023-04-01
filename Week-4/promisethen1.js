const { resolve } = require("lodash");
const { reject } = require("lodash");


var k = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is resolved")
    },3000)
})

var p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise is resolved second time")
    }, 5000)
})

p.then(()=>{
    console.log("Success")
})

p.catch(()=>{
    console.log("error")
})

function foo() {
    function bar() {
      // function 3
      console.log('Hello!')
    }
  
    // function 2
    bar()
  }
  
  // function 1
  foo()

  function main() {
    setTimeout(function welcome() {
      console.log('Welcome!')
    }, 3000)
  
    console.log('Goodbye!')
  }
  
  main()
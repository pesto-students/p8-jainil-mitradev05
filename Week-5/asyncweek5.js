async function task1() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    let res=console.log("Task1 is called");
    console.log("Task1 is resolved");
    return users;     
}

task1();
let a = task1();
a.then((value)=>{
console.log(value);
})
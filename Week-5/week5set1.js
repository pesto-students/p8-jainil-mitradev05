var employeeId = [501, 502, 503, 504, 501, 503, 505];
let employeeList = new Set(employeeId);
console.log(employeeList);


function hasDuplicate(str){
    const books = arr=> new Set(arr).size!=arr.length
    if(books==true){
        console.log("No duplicates found")
    }
    else{
        console.log("Duplicate entries found")
    }
}

console.log(hasDuplicate([1, 2,3,4,5,6,-1,2,3,5]));
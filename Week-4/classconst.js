// class Teacher { 
// constructor() {
// var Person = function() {}
// Person.prototype.initialize=function(name, age)
// {
// this.name=name
// this.age=age
// }
// }
// //TODO: create the class Teacher and a method teach

// function Teacher2 inherits Teacher {
// super() 

// var him=new Teacher()
// him.initialize("Adam", 45)
// him.teach("inheriteance")
// }
// }

// console.log(this.Person)

//

var Person = function() {}
Person.prototype.initialize=function(name, age)
{
this.name=name
this.age=age
}

class Teacher extends Person {
    teach(subject) {
console.log(this.name + ' is now teaching ' + subject)
//console.log(`${this.name} is now teaching ${subject}` )
    }
}

var him=new Teacher()
him.initialize("Adam", 45)
him.teach("inheriteance")
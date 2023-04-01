var employee = {
    firstName: 'Ashok',
    lastName: 'Bhuvanagiri',
    fullname: function(a, b) {
        console.log(this.firstName +' ' + this.lastName + a + b)
    }
}

employee.fullname()

var employee2 = {
    firstName: 'Software Engineer',
    lastName: 'Jaipur',
}

var employee3 = {
    occupation: 'It Field',
    city: 'Jaipur',
    phone: 1800
}
employee.fullname.call(employee, 'xyz', 'bombay')
employee.fullname.call(employee2, 'xyz', 'bombay')

console.log('Apply method')
employee.fullname.call(employee, 'xyz', 'bombay')
employee.fullname.apply(employee2, ['xyz', 'bombay'])

var emp=employee.fullname.bind(employee, 'abc', 'Mumbai')
console.log(emp)
emp()

var emp=employee.fullname.bind(employee2, 'abc', 'Mumbai')
console.log(emp)
emp()


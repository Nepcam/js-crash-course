// functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
//console.log(addNums(3, 7))

// fat arrow function

const multiplyNums = (numA = 1, numB = 1) => { // function is indicated by the => symbol
    return numA * numB;
}
//console.log(multiplyNums(5, 8));

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return ` ${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

// Class ES6
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.getFullYear = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('Cam', 'Nepe', '20-03-1977');
const person2 = new Person('Liam', 'Nepe', '17-03-2077')



console.log(person1.getFullName(), person2.getFullName());
// destructuring

const person = {
    firstName: 'Cam',
    lastName: 'Nepe',
    age: 42,
    hobbies: ['waka ama', 'coding', 'travel'],
    address: {
        street: '10 Tuaraki Road',
        city: 'Gisborne',
        state: 'East Coast'
    }
}

console.log(person.hobbies[2]) // selects 'coding' out of the hobbies part of the person object

const { firstName, lastName, address: { city }} = person; // displays cam nepe, Gisborne
console.log(city);

person.email = 'cameron.nepe@gmail.com'; // adds this to the person object 

console.log(person)

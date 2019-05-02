// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears']; // cannot reassign the array

console.log(fruits[1]);

fruits.push('bananas'); // adds a value to the end of array
fruits[3] = 'grapes'; // adds to the array at the [3] position

fruits.unshift('strawberries'); // adds a value to the beginning

fruits.pop(); // pops the last one off

console.log(Array.isArray('hello')); // check to see if something is an array

console.log(fruits.indexOf('oranges')); // finding where the oranges value sits in the array

console.log(fruits)
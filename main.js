// This how we select things from the dom.

// Single element selectors
const ie = document.getElementById('ie=edge');
const query = document.querySelector('.container');

// Multiple element selectors
document.querySelectorAll('.item');
document.getElementsByClassName('item');
document.getElementsByTagName('li');


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items'); // taking the ul with the class of items

ul.remove();
ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';


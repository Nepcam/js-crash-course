// This how we select things from the dom.

// Single element selectors
const ie = document.getElementById('ie=edge');
const query = document.querySelector('.container');

// Multiple element selectors
document.querySelectorAll('.item'); // Can more than one
document.getElementsByClassName('item'); // Can only be classes
document.getElementsByTagName('li'); // Can only use <tags><tags/>


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item)); // loops through each item and takes in the li

const ul = document.querySelector('.items'); // taking the ul with the class of items

ul.remove();
ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Cam';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'


const btn = document.querySelector('btn');
btn.getElementsByClassName.background = 'green'

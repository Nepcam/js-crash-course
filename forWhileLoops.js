// for loop

const todos = [
    {
        id: 1,
        text: 'Take out rubbish',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Pae',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Ring Inland Revenue',
        isCompleted: false
    },
    
];

// For loop

for(let i = 0; i < todos.length; i++) {  // assignment of the iterator or variable (i), the condition (i) is less than 10, the increment (i)++ 

    //console.log(todos[i].text); // this will run the assignment(i), until it meets the condition (i < 10) is true, the increment (i)++ will stop at the condition  
}

// while loop
let i = 0; // sets the variable outside the loop
while(i < 10) {
    //console.log(`While Loop Number: ${i}`);
    i++;
}

for(let todo of todos) {
    console.log(todo.text)
}

// 
// forEach (loops through), map (create a new array), filter (create a new array based on a condition)

todos.forEach(function(todo) { // forEach 
    console.log(todo.text)
});

const todoText = todos.map(function(todo) {  // map 
    return todo.text;
    });

console.log(todoText)

const todoCompleted = todos.filter(function(todo){ // filter
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
})

//console.log(todoComleted)
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

const todoJSON = JSON.stringify(todos); // convert this array to JSON 
console.log(todoJSON)

console.log(todos[1]); // this gives us the 'Meet with Pae' todo

// https://freeformatter.com/json-formatter.html
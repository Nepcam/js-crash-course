const x = 10;

const color = x > 10 ? 'red' : 'blue'; // ? = then, : = else. (It reads) If 'x' is greater than 10 ?(then) the color is red, :(else) the color is blue.

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
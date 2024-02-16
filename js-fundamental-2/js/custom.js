'use strict' // Activating STRICT mode
/*
What are Functions? 
-> Simply a piece of code that we can reuse over and over again in our code. 
*/

function logger() {
    console.log("My name is Geoffrey");
}

logger() // Invoking | calling | running the function.


function addXY(x, y) {
    console.log(x, y);
    return x + y;
}
function subtractXY(x, y) {
    console.log(x, y);
    return x - y;
}
function multiplyXY(x, y) {
    console.log(x, y);
    return x * y;
}
function divideXY(x, y) {
    console.log(x, y);
    return x / y;
}


const operation = prompt(`Enter an opiton 1, 2, 3 or 4:
                         1) to add, 
                         2) to subtract, 
                         3) to multiply 
                         4) to divide:`);

switch (operation) {
    case '1':
        const resultAdd = addXY(2, 2);
        console.log('Addition result ' + resultAdd);
        break;
    case '2':
        const resultSubtract = subtractXY(4, 2);
        console.log('Substraction result ' + resultSubtract);
        break;
    case '3':
        const resultMultiply = multiplyXY(4, 2);
        console.log('Multiplication result ' + resultMultiply);
        break;
    case '4':
        const resultDivide = divideXY(10, 2);
        console.log('Divide result ' + resultDivide);
        break;
    default:
        console.log('Invalid input');

}


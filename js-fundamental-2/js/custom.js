'use strict' // Activating STRICT mode
/*
What are Functions? 
-> Simply a piece of code that we can reuse over and over again in our code. 
*/

function logger() {
    console.log("My name is Geoffrey");
}

logger() // Invoking | calling | running the function.

// Arrow Function
const addXY = (x, y) => {
    return x + y;
}
const subtractXY = (x, y) => {
    return x - y;
}

// Normal Function Declaration
function multiplyXYZ(x, y, z) {
    return x * y * z;
}

// Function Expression
const divideXY = function (x, y) {
    return x / y;
}


const operation = prompt(`Enter an opiton 1, 2, 3 or 4:
                         1) to add, 
                         2) to subtract, 
                         3) to multiply 
                         4) to divide:`);

switch (operation) {
    case '1':
        console.log('Addition result: ' + addXY(2, 2));
        break;
    case '2':
        console.log('Substraction result: ' + subtractXY(4, 2));
        break;
    case '3':
        console.log('Multiplication result: ' + multiplyXYZ(4, 2, 2));
        break;
    case '4':
        console.log('Divide result: ' + divideXY(10, 2));
        break;
    default:
        console.log('Invalid input');

}


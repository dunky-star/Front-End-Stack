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


// Function calling other functions

const calcAverage = (a, b, c) => (a + b + c) / 3;  // Arrow function

const scoreDolphins = calcAverage(44, 23, 17);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin wins🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}


checkWinner(scoreDolphins, scoreKoalas); // Invoke Function



/*
* Array: (Data Structure)
*/
const friends = ["Duncan", "Peter", "Charles", "Bob"];

friends[2] = "Jay";

const yrs = new Array(1986, 1987, 1988, 1989, 1990, 1991);

console.log("Friends array length: " + friends.length);
console.log("Last element of the friends array: " + friends[friends.length - 1])

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1988, "teacher", friends];
console.log("Jonas detail: " + jonas);


// Array manipulation

const calcAges = function (birthYear) {
    return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAges(years[0]), calcAges(years[1]), calcAges(years[2]), calcAges(years[years.length - 1])];
console.log("Ages: " + ages);
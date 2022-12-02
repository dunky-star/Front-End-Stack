const numbers = [0, 1, 2, 3, 4, 10, 20];

const greaterThanTwo = numbers.filter(number => number > 2);

console.log(greaterThanTwo);


// Primitive data types in TypeScript.

const isAdmin: boolean = true;
const user: string = 'Duncacn';
let welcome: string;

if(isAdmin){
    welcome = `Hello ${user}`
}
else{
    welcome = `${user} is not an admin`
}

console.log(welcome);
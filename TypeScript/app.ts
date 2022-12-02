const numbersSeq = [0, 1, 2, 3, 4, 10, 20];

const greaterThanTwo = numbersSeq.filter(number => number > 2);

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


// Non-primitive data types
const numbers: number[] = [0, 1, 2, 3, 4];
numbers.push(100);
console.log(numbers);

const names: Array<string> = ["Duncan", "John", "Pete"];
names.push("Kaligs");

const mixed: (string | number)[] = [1, "Duncan", 10, "Pete"];
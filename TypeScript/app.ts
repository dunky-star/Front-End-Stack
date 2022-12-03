const numbersSeq = [0, 1, 2, 3, 4, 10, 20];

const greaterThanTwo = numbersSeq.filter(number => number > 2);

console.log(greaterThanTwo);


// Primitive data types in TypeScript (boolean, number, string).

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


// Non-primitive data types (array, tuple, enum, any, never, null and undefined, void, function, type, Object).
const numbers: number[] = [0, 1, 2, 3, 4];
numbers.push(100);
console.log(numbers);

const names: Array<string> = ["Duncan", "John", "Pete"];
names.push("Kaligs");

const mixed: Array<string | number> = [1, "Duncan", 10, "Pete"];
mixed.push(1000);
mixed.push("Kaligs");


// Function data type
function greet(name: string): string {
    return `Hello ${name}`;
}
console.log(greet("opiyo"));


// Type data type
type User = {
    name: string;
    age: number;
}

const myUser: User = {
    name: "Duncan",
    age: 34
};

// Object Data Type - array of objects.
const users : { name: string, age: number}[] = [
    {
        name: "Adam",
        age: 30
    },
    {
        name: "John",
        age: 40
    },
    {
        name: "Anjana",
        age: 40
    }
]


// Interfaces in TypeScript.
interface IUser {
    name: string;
    age: number;
    address?: string;  // An optional variable in TypeScript.
    [property: string]: any 
}

let adminUser: IUser = {
    name: "Duncan",
    age: 34,
    xyz: "asdf"

}
console.log(adminUser.age);


interface IGreet {
    (name: string, language: string): string
}

let hello: IGreet;
hello = function(n: string, lang: string){
    if (lang === "en"){
        return `Hello ${n}!`;
    } else {
        return `Hola ${n}!`;
    }
}

console.log(hello("Duncan", "en"));



// Data types and optional parameter for a function.

function greetings(name: string, language: string="en", exclamationMark?: string): string {
    if (language === "en"){
        return `Hello ${name}`;
    } else if(language="es"){
        return `Hola ${name}${exclamationMark}`;
    } else {
        return `Yo ${name}!`;
    }
}

greetings("Duncan");
greetings("Duncan", 'en');
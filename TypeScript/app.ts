// importing modules
import IUser from './iuser';
import IGreet from './igreet';
import Human from './abstract-human';



const numbersSeq = [0, 1, 2, 3, 4, 10, 20];

const greaterThanTwo = numbersSeq.filter(number => number > 2);

console.log(greaterThanTwo);


// Demonstratig usage of primitive data types in TypeScript (boolean, number, string).

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
const numbersArgs: number[] = [0, 1, 2, 3, 4];
numbersArgs.push(100);
console.log(numbersArgs);


let fruits: Array<string> = ["Apple", "GreenApple", "Grapes", "Guava"];
let food: String[] = ["Pizza", "Burger", "Fries"];
    food.push("CaliFlower");
// spread operator: spreads the element of an object or array.
// Also merging multiple arrays/objects into one flat array/object. Denoted by (...)
let edibles: String[] = [...fruits, ...food];
console.log("Got the edibles as: ", edibles);


let userBio = {
    firstName: "Duncan",
    lastName: "Kaligs",
    username: "dunkycarl"
}

// To combine userBio and userDetais using spread operator.
let userDetails = {
    ...userBio,
    address: "123 Najjera II",
    email: "dunky@mail.com"
}

// Loging the value to console after the spread operator.
console.log("Got the user as: ", userDetails)


// An array of mixed data types.
const mixed: Array<string | number> = [1, "Duncan", 10, "Pete"];
mixed.push(1000);
mixed.push("Kaligs");


// Destructure({}) - Breaks up the structure of an Array or Object.
// Plucking elememnts from an Array or Object. Generally used in import statements.
let {address, email } = userDetails;  // Let's destructure userDetails object
console.log(address);
console.log(email);


let [Apple, GreenApple, Grapes] = fruits; // Let's destructure some fruits.
console.log(Apple);
console.log(Grapes);


// Function data type and usage of backticks.
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


let adminUser: IUser = {
    name: "Duncan",
    age: 34,
    xyz: "asdf",
    
    walk: () => {return;}  

}
console.log(adminUser.age);



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

greetings("Duncan", "!");
console.log(greetings("Duncan", 'en', '!'));


// Classes & Inheritance in TypeScript
class Person implements IUser{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }

    greet(): string {
        return `Hello ${this.name}`;
    }

    walk(): void { 
        return;
    }
}


class SuperHero extends Human {
    superPowers: string[] = [];

    constructor (name: string) {
        super(name);
    }

    addPower(power: string): void {
        this.superPowers.push("power");
    }

    listPowers(): string[] {
        return this.superPowers;
    }
    
    walk(): void { 
        return;
    }
}

const batMan = new SuperHero("Bruce Lee");
batMan.addPower("money");
console.log(batMan.listPowers);



// Generics in TypeScript
function picker<T>(args: T[]): T {
    const randomIndex = Math.floor(Math.random()* args.length);
    return args[randomIndex];
}

const suits = ['Diamond', 'Hearts', 'Clubs', 'Spades'];
const numbers = [...Array(13).keys()];
const pickedNumber: number = picker(numbers);
const pickedSuit: string = picker(suits);
console.log(`Your card is: ${pickedNumber} ${pickedSuit}`);


// Fetch API in TypeScript. Fetch was recently introduced in ES6 and provides an interface for fetching resources.
// Fetch returns a promise

function getUserViaFetch(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        debugger;
        return response.json();
    })
    .then(user => {
        debugger;
        console.log("Got the user via fetch as: ", user);
    });

}
getUserViaFetch(); 


// Async / wait is Syntactic sugar used with promises.
// A function that returns a Promise can be called with the AWAIT keyword.
// A function in which the function returning the promise is awaited must then be declared with the ASYNC keyword.

function getUserViaAsyncWait(){
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then (response => response.json());
}

async function initialize(){
    const user = await getUserViaAsyncWait();
    console.log("Got the user via Aync/Await as: ", user);
}

initialize();


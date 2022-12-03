// importing modules
import IUser from './iuser';
import IGreet from './igreet';
import Human from './abstract-human';



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
const numbersArgs: number[] = [0, 1, 2, 3, 4];
numbersArgs.push(100);
console.log(numbersArgs);

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


let adminUser: IUser = {
    name: "Duncan",
    age: 34,
    xyz: "asdf"

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
}

let batMan = new SuperHero("Bruce Lee");
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

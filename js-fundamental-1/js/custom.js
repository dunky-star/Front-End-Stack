// We use let during variable declaration for variables that will change/mutate
let js = `amazing`;
if (js === `amazing`); // Always use "STRICT" Equality instead of "=="
console.log(`JavaScript is FUN!, typeof`, typeof js);
console.log(typeof null); // Is a bug in JavaScript

// const is used for immutable variables (variables that shouldn't change with time).
// And should always be initialized with an initial value.
const birthYear = 1988;
console.log(birthYear, `typeof`, typeof birthYear);
// birthYear = 1990;

// Template literals
const firstName = `Jonas`;
const job = `teacher`;
const birthYearJonas = 1991;
const year = 2040;

const jonasNew = `I'm ${firstName}, a ${year - birthYearJonas} year old ${job}`;
console.log(jonasNew);

// Handling keyborad input and Type conversion.
// Because of Strict Equality - Type Coercion cannot work.
/*
const favoriteNum = Number(prompt(`What's your favorite number?`));

if (favoriteNum === 23) {
    console.log(`Cool, ${favoriteNum} is an amazing number.`);
} else if (favoriteNum === 10) {
    console.log(`Cool, ${favoriteNum} is an amazing number.`);
} else {
    console.log(`${favoriteNum} is not 23 or 10` + ' ' + typeof favoriteNum);
}*/

// Boolean Logic and Operators

const scoreDolphins = (100 + 120 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(`The score of the two teams are Dolphins: ${scoreDolphins}, and Koalas:  ${scoreKoalas}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins wins the trophy✔");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas wins the trophy✔");

} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100
    && scoreKoalas >= 100) {
    console.log("It's a draw!!!")
}
else {
    console.log("Below required performance😥!!!")
}


// Switch-Case statement
const day = prompt('What is your favorite day?');

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


// Conditional (Ternary) Operator
const age = 25;
const drink = age >= 18 ? 'Wine🍷' : 'water 🥤';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'Wine🍷' : 'water 🥤'}`);


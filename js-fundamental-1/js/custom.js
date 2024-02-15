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

// Handling keyborad input
const favoriteNum = Number(prompt(`What's your favorite number?`));
if (favoriteNum === 23) {
    console.log(`Cool ${favoriteNUm} is an amazing number.`);
} else {
    console.log(`Type of favorite number is a` + ' ' + typeof favoriteNum);
}

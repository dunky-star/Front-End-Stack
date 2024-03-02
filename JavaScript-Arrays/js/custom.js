'use strict';

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];

/*
 * SLICE METHOD
 */
console.log(arr1.slice(2));
console.log(arr1.slice(2, 4)); // Extracts from index 2 to 3 [last index 4 is not included].
console.log(arr1.slice(-2));
console.log(arr1.slice(-1)); // Returns the last index
console.log(arr1.slice(1, -2)); // Extracts index upto but except the last two.
console.log(arr1.slice()); // -> Creates a shallow copy of the array.

/*
 * SPLICE METHOD: This method mutate the origial array
 * One of the common use case is the remove the last element from the array
 */
console.log(arr1.splice(-2));
console.log(arr1.splice(-1));
console.log(arr1);

// REVERSE
arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'i', 'h', 'g', 'k'];
console.log(arr2.reverse());

// CONCAT
const letters = arr1.concat(arr2);
console.log(letters);

console.log(...arr1, ...arr2); // Using spread operators also works.

// JOIN
console.log(letters.join('-'));

// Getting the last element of the array using modern at()
console.log(
  'last element/ Traditional method1: ' + letters[letters.length - 1]
);
console.log('last element/ Traditional method2: ' + letters.slice(-1)[0]);
console.log('last element/ Modern method: ' + letters.at(-1));

// Looping through the array using "for of" and "forEach"
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('\nUsing for and of to loop through an array');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}, you deposited: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}, you withdrew ${Math.abs(movement)}`);
  }
}

// CONTINUE and BREAK keywords doesn't work with forEach atall.
console.log('\n---FOREACH---');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}, you deposited: ${mov}`);
  } else {
    console.log(`Movement ${i + 1}, you withdrew ${Math.abs(mov)}`);
  }
});

// forEach and Map

console.log('---forEach and Map (Key-value pair)---');

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['GPB', 'British Pound Sterlings'],
  ['UGX', 'Uganda Shillings'],
  ['AED', 'UAE Dihram'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`Key: ${key} -> value: ${value}`);
});

const checkDogs = function (dogJulia, dogKate) {
  const dogsJuliaCorrected = dogJulia.slice(); // Making a shallow copy
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-1);

  const dogs = dogsJuliaCorrected.concat(dogKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${dog} is still a puppy🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

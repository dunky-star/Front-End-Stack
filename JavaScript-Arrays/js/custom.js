'use strict';

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Geoffrey Duncan Opiyo',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Lamaro Arma',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Atuhairwe Belinda',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Johnson Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////

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
    console.log(`Movement ${i + 1}, you deposited: ${Math.abs(mov)}`);
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

/*
 *Map, FILTER, REDUCE
 */
const eurToUsd = 1.1;

// const movementsToUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsToUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsToUsd);

// Writing same using for loop
const movementsUsdFor = [];

for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}

console.log(movementsUsdFor);

// Using Arrow function

const movementsDscription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}, you deposited: ${Math.abs(mov)}`;
  } else {
    return `Movement ${i + 1}, you withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDscription);

const user1 = 'Geoffrey Duncan Opiyo';

const createUserName = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};

console.log(`Username is: ${createUserName(user1)}`);

// Getting total balance using reduce.
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(`The total balance is: ${balance}`);

// The magic of chaining filter, map and reduce in one operation
const totalDepositInUsd = function (deposit) {
  const totalDeposit = deposit
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(totalDeposit);
};

totalDepositInUsd(movements);

// Flat and FlatMap
const arrToFlat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 12],
];

const arrToFlatDeep = [
  [[1, 2], 3],
  [4, [5, 6]],
  [7, 8, 9, 12],
];

console.log(arrToFlat.flat()); // It removes the nested arrays and flatten arrays.
console.log(arrToFlatDeep.flat(2));

// Sorting Arrays in JavaScript

//Ascending
const sortMovements = movements.slice();
sortMovements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(`The sorted array elements in ascending order: ${sortMovements}`);

//Descending
sortMovements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(`The sorted array elements in descending order: ${sortMovements}`);

// Creating an array programatically
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Array of Objects.
console.log(accounts);

const bankDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, element) => acc + element, 0);

console.log(
  `Total deposit recorded in different owners' accounts: $${bankDeposit}`
);

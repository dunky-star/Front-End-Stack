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
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}

console.log('\nUsing forEach to loop through an array');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
});

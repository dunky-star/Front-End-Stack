'use strict';

// Number 1 (a):

let array = [
  { product: 'car', category: 'toys', rating: 8 },
  { product: 'legos', category: 'toys', rating: 9 },
  { product: 'iphone', category: 'Mobile', rating: 10 },
  { product: 'samsung', category: 'Mobile', rating: 6 },
  { product: 'sofa', category: 'furniture', rating: 10 },
];

let array2 = [
  { product: 'Gardening Tools', category: 'tools', rating: 8 },
  { product: 'Power tools', category: 'tools', rating: 10 },
  { product: 'sofa', category: 'Furniture', rating: 8 },
  { product: 'Tables', category: 'Furniture', rating: 7 },
  { product: 'stools', category: 'Furniture', rating: 7 },
];

const listAllCategories = function (...array) {
  let uniqueArray = [];
  let i = 0;
  for (let value of Object.values(...array)) {
    let found = false;
    for (let inner of uniqueArray) {
      if (value.category === inner) {
        found = true;
        break;
      }
    }
    if (!found) uniqueArray.push(value.category);
    i++;
  }
  return uniqueArray;
};

console.log(listAllCategories(array));
console.log(listAllCategories(array2)); //[ 'tools', 'Furniture' ]

// Number 1 (b)
const highestRatedCategory = function (...array) {
  let highlyRatedCategory = '';
  let i = 0;
  let highestRating = 0;
  for (let element of Object.values(...array)) {
    //console.log(element);
    if (element.rating > highestRating) {
      highestRating = element.rating;
      highlyRatedCategory = element.category;
    }

    //i++;
  }
  return highlyRatedCategory;
};
console.log(
  `Array1 category with highest rating: ${highestRatedCategory(array)}`
); //furniture
console.log(
  `Array2 category with highest rating: ${highestRatedCategory(array2)}`
); //tools

// Number 2:

function copyWithin(array, originalIndex, targetIndex) {
  [originalIndex, , targetIndex] = array;
  [targetIndex, , targetIndex] = array;
  console.log(array);
}

const fruitsOriginal = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'pear'];

console.log(` Fruits original: ${fruitsOriginal}`);
copyWithin(fruitsOriginal);

// Number 3:

function missingInteger(array) {
  const max = Math.max(...array); // Will find highest number
  const min = 1; // Will find lowest number
  let missing = [];
  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      // Checking whether i(current value) present in num(argument)
      missing.push(i); // Adding numbers which are not in num(argument) array
    }
  }
  return missing;
}
console.log(`The missing numbers: ${missingInteger([13, 11, 9])}`);

// Number 4:

function findTriplet(arr, target) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        if (sum === target) {
          result.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return result;
}

console.log(findTriplet([1, 2, 3, 4, 5, 9], 10)); // [ [ 1, 4, 5 ], [ 2, 3, 5

// array of objects
const students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'B' },
  { name: 'Bob', grade: 'C' },
];

students.forEach(student => {
  if (student.grade === 'A') {
    console.log(`${student.name} passed with distinction!`);
  } else if (student.grade === 'B') {
    console.log(`${student.name} passed.`);
  } else {
    console.log(`${student.name} failed.`);
  }
});

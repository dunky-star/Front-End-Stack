'use strict';

// Quiz 1:	Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.

const max = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

console.log(`The maximum number is: ${max(10, 5)}`);

// Quiz 2:	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (a, b, c) => {
  if (a > b && a > c) return a;

  if (b > a && b > c) return b;
  else return c;
};

console.log(`The maximum number is: ${maxOfThree(10, 30, 100)}`);

// Quiz 3.	Write a function isVowel() that takes a character
// (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const vowel of vowels) {
    if (typeof str === 'number') continue;
    return vowel === str.toLowerCase() ? true : false;
  }
};

console.log(`is vowel? ${isVowel('A')}`);
console.log(`is vowel? ${isVowel('z')}`);
console.log(`is vowel? ${isVowel('')}`);
console.log(`is vowel? ${isVowel(-1)}`);

// 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24.

const sum = arr1 => {
  const sum1 = arr1.reduce(function (acc, element, i, arr) {
    return acc + element;
  }, 0);
  return sum1;
};

console.log(`The sum of arr elements is: ${sum([1, 2, 3, 4])}`);

const multiply = arr2 => {
  const product1 = arr2.reduce(function (acc, element, i, arr) {
    return acc * element;
  }, 1);
  return product1;
};

console.log(
  `The product of multiplying array elements is: ${multiply([1, 2, 3, 4])}`
);

// 5.	Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
const reverse = function (str) {
  let strReversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
  }
  return strReversed;
};

console.log(`The reverse of String: ${reverse('jag testar')}`);

function reverseString(str) {
  const reversedString = str
    .split('')
    .reduce((acc, element) => element + acc, '');
  return reversedString;
}

console.log(`Reversing string using reduce: ${reverseString('GeeksforGeeks')}`);

// 6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

const findLongestWord = function (words) {
  let maxLength = words[0].length;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word;
    }
  }
  return maxLength;
};

const wordArray = [
  'Geoffrey',
  'Kaligs',
  'Opiyo',
  'Kampala',
  'Uganda',
  'pneumonoultramicroscopi',
];

console.log(`The longest word is: ${findLongestWord(wordArray)}`);

// 7.	Write a function filterLongWords() that takes
//  an array of words and an integer i and returns the array of words that are longer than i.

const filterLongWords = (words, i) => {
  let longWords = [];
  for (const word of words) {
    if (word.length > i) {
      longWords.push(word);
    }
  }
  return longWords;
};

console.log(`The longest word are: ${filterLongWords(wordArray, 6)}`);

/* 8.	Implement indexOf, lastIndexOf, includes, split using for loops without
 * built-in functions for strings and arrays.
 */

// Index of
function customIndexOf(str, target) {
  for (let i = 0; i < str.length; i++) {
    // Iterate through each character in the input String
    let match = true;

    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target) {
        match = false;
        break;
      }
    }
    // If a match is found, return the index
    if (match) {
      return i;
    }
  }
  // If no match is found, return -1
  return -1;
}

console.log(
  `The index of the occurrence of the search element : ${customIndexOf(
    'Geoffrey',
    'f'
  )}`
);

// lastIndexOf

const lastIndexOf = function (str, elementToFind) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === elementToFind) {
      return i;
    }
  }
  retrun - 1;
};

console.log(
  `Index of the last occurrence of the search element : ${lastIndexOf(
    'Geoffrey',
    'e'
  )}`
);

// includes
function customIncludes(inputArray, searchElement) {
  // Iterate through the array
  for (let i = 0; i < inputArray.length; i++) {
    // Check if the current element is equal to the search element
    if (inputArray[i] === searchElement) {
      return true; // Element found, return true
    }
  }

  // If the loop completes without finding the element, return false
  return false;
}

// Example usage
let inputArray2 = [1, 2, 3, 4, 5];
let searchElement = 3;

console.log(customIncludes(inputArray2, searchElement)); // Output: true

// split
function splitStr(str, delimiter) {
  let result = [];
  let tempString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== delimiter) {
      tempString += str[i];
    } else {
      result.push(tempString);
      tempString = '';
    }
  }
  result.push(tempString);

  return result;
}

console.log(`The splitted string result: ${splitStr('Hello', ',')}`);

function customSlice(inputArray, start, end) {
  // Handle negative start index
  start = start >= 0 ? start : Math.max(inputArray.length + start, 0);

  // Handle negative end index
  end = end !== undefined ? end : inputArray.length;
  end = end >= 0 ? Math.min(end, inputArray.length) : inputArray.length + end;

  // Initialize an array to store the sliced elements
  var result = [];

  // Iterate through the input array and push elements to the result array
  for (var i = start; i < end; i++) {
    result.push(inputArray[i]);
  }

  return result;
}

// Example usage
var inputArray = [1, 2, 3, 4, 5];
var startIndex = 1;
var endIndex = 4;
var slicedArray = customSlice(inputArray, startIndex, endIndex);

console.log(slicedArray); // Output: [2, 3, 4]

function customSplice(inputArray, start, deleteCount, ...itemsToAdd) {
  // Handle negative start index
  start = start >= 0 ? start : Math.max(inputArray.length + start, 0);

  // Ensure deleteCount is within bounds
  deleteCount = Math.min(Math.max(0, deleteCount), inputArray.length - start);

  // Extract the removed elements
  var removedElements = [];
  for (var i = 0; i < deleteCount; i++) {
    removedElements.push(inputArray[start + i]);
  }

  // Create a new array with the items before the start index
  var result = inputArray.slice(0, start);

  // Add new items to the result array
  for (var j = 0; j < itemsToAdd.length; j++) {
    result.push(itemsToAdd[j]);
  }

  // Add remaining items after the removed elements
  for (var k = start + deleteCount; k < inputArray.length; k++) {
    result.push(inputArray[k]);
  }

  // Update the original array
  for (var l = 0; l < result.length; l++) {
    inputArray[l] = result[l];
  }

  // Trim or extend the array if needed
  inputArray.length = result.length;

  return removedElements;
}

// Example usage
var inputArray = [1, 2, 3, 4, 5];
var startIndex = 1;
var deleteCount = 2;
var itemsToAdd = 6;
var removedElements = customSplice(
  inputArray,
  startIndex,
  deleteCount,
  itemsToAdd
);

console.log(inputArray); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]

/*
 * Array Destructuring
 *
 */

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [3, 12, 30];

const [x, y, z] = arr;
console.log(`The destructured array are ${x}, ${y}, ${z}`);

let [main, , secondary] = restaurant.categories; // To read first and third elements

// Switching variables
[secondary, main] = [main, secondary];
console.log(
  `The destructured restaurant categories are: ${secondary} and ${main}`
);

// Nested destructuring

const nested = [2, 4, [7, 9]];

const [i, , [j, k]] = nested;
console.log(`The destructured array are ${i}, ${j}, ${k}`);

// Destructuring objects: In object destructuring, the order of elements doesn't really matter.

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Nested Objects
const {
  fri: { open: o, close: c },
} = hours;

console.log(o, c);

// SPREAD operator: NB: Are only used on iterables BUT NOT object
const str = 'Geoffrey';
const letters = [...str];
console.log(letters);

// REST operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(`Application of REST operator: ${add(1, 2, 3, 4, 5)}`);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Looping through Object: Objects are non iterables
function printGamesKeys() {
  for (const properties of Object.keys(game)) {
    console.log(properties);
  }
}
console.log(`\nLooping through objects. NB: Objects are non iterable`);
printGamesKeys();

function printGamesValues() {
  let goalscored = 0;
  for (const values of Object.values(game.scored)) {
    console.log(`Player who scored: ${values}`);
    goalscored++;
  }
  console.log(`number of goal scored: ${goalscored}`);
}
console.log(`\nLooping through objects. NB: Objects are non iterable`);
printGamesValues();

function printTotalPlayers() {
  let teams = 0;
  for (const values of Object.values(game.players)) {
    console.log(`Player: ${values}`);
    teams++;
  }
  console.log(`Total number of players: ${teams}`);
}
printTotalPlayers();

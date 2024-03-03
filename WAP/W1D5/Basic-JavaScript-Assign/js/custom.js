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
  const letter = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const vowel of vowels) {
    if (typeof letter === 'number') continue;
    return vowel === letter ? true : false;
  }
};

console.log(`is vowel? ${isVowel('A')}`);
console.log(`is vowel? ${isVowel('z')}`);
console.log(`is vowel? ${isVowel('')}`);
//console.log(`is vowel? ${isVowel(-1)}`);

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

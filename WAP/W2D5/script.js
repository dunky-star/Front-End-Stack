// //'use strict';

// var x = 10;
// function main() {
//   console.log('x1: ' + x); // Undefined.
//   x = 20;
//   if (x > 0) {
//     var x = 30;
//     console.log('x2: ' + x);
//   }
//   var x = 40;
//   var f = function (x) {
//     console.log('x3: ' + x);
//   };
//   f(50);
// }
// main();

// // var is Hoisted to global scope.

// for (var i = 0; i < 10; i++) {
//   console.log('i inside for loop: ' + i);
// }
// console.log(`Outside for loop: ${i}`); // 10
// if (i > 5) {
//   var j = 3;
// }
// console.log('j OUTside block: ' + j);

// // Keyword --> this (Object methods)

// const pt = {
//   x: 4,
//   y: 3,
//   distanceFromOrigin: function () {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   },
// };
// console.log(`Object method result: ${pt.distanceFromOrigin()}`); // 5

// // Arguments object

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// const max1 = findMax(1, 123, 500, 115, 66, 88);
// const max2 = findMax(3, 6, 8);

// console.log(`Max value1: ${max1}`);
// console.log(`Max value2: ${max2}`);

// /*
//  *  SCOPES:
//  */

// // // Scope chain
// // var x = 20;
// // function a() {
// //   console.log(x); // consult Global for x and print 20 from Global
// // }
// // function b() {
// //   var x = 10;
// //   a(); // consult Global for a
// // }

// // b();

// // What is the output of following code.
// let counter = 12;
// function increment() {
//   counter++;
//   if (counter > 5) {
//     var counter = 10;
//   }
//   console.log(`The value of inner counter is: ${counter}`);
// }
// increment();
// console.log(`The value of outer counter is: ${counter}`);

// // // What is the output of the following function
// // myFunc();
// // let myFn = function () {
// //   console.log('Here');
// // };
// // // Inner function
// // function b() {
// //   function a() {
// //     console.log(x);
// //   }
// //   var x = 10;
// //   a();
// // }
// // var x = 20;
// // b();

// // function b() {
// //   function a() {
// //     console.log(x);
// //   }
// //   a();
// // }
// // var x = 20;
// // b();

// // Scope Example 3
// function f() {
//   var a = 1,
//     b = 20,
//     c;
//   console.log(a + ' ' + b + ' ' + c);
//   function g() {
//     var b = 300,
//       c = 4000;
//     console.log(a + ' ' + b + ' ' + c);
//     a = a + b + c;
//     console.log(a + ' ' + b + ' ' + c);
//   }
//   console.log(a + ' ' + b + ' ' + c);
//   g();
//   console.log(a + ' ' + b + ' ' + c);
// }
// f();

// // Scope Example 4

// var x = 10;
// function main() {
//   console.log('x1 is:' + x);
//   x = 20;
//   console.log('x2 is:' + x);
//   if (x > 0) {
//     var x = 30;
//     console.log('x3 is:' + x);
//   }
//   console.log('x4 is:' + x);
//   var x = 40;
//   var f = function (x) {
//     console.log('x5 is:' + x);
//   };
//   f(50);
//   console.log('x6 is:' + x);
// }
// main();
// console.log('x7 is:' + x);

// /*
//  * CLOSURES:
//  *
//  */

// // Calling an inner function
// function init() {
//   //function declaration
//   const name = 'Mozilla';
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// // Returning an inner function
// function makeFunc() {
//   const name = 'Geoffrey Duncan Opiyo'; //local to makeFunc
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// //ES6 solution: let vs var
// const funcs = [];
// for (let i = 0; i < 5; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }
// console.log('ES6 solution for Closure bug with loops: let vs var');
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

// // Function that takes arbitrary number of arguments as arrays
// const print = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(`The sum of numbers = ${sum}`);
// };

// print(2, 3);
// print(5, 3, 7, 2);
// print(8, 2, 5, 3, 2, 1, 4);

// number: 4

// let moves = { nameOf: 'back hook spin', level: 'Beginner' };
// function print1() {
//   console.log(this);
// }
// console.log(print.bind(null));

// number: 5
// let myObj1 = {
//   a: 1,
//   b: 2,
//   multiply: function () {
//     return this.a * this.b;
//   },
// };
// let fn = myObj1.multiply;
// console.log(fn());

// number: 6

// let myObj2 = { x: 1 };
// function update(x) {
//   x = 4;
// }
// update(myObj2);
// console.log(myObj2);

// number: 7

// function set() {
//   let flag = true;
//   function unset(flag) {
//     flag = flag;
//   }
//   unset(false);
//   return flag;
// }
// console.log(set());

// number: 8

// let a = 5;
// function add() {
//   a++;
// }
// add();
// console.log(a);

// Number: 9

// let obj = {
//   a: 1,
//   b: 2,
//   add: () => {
//     return this.a + this.b;
//   },
// };
// console.log(obj.add());

// Number: 10

let myArray = [{ fruit: 'apple' }, { flower: 'rose' }];
let [{ fruit }] = myArray;
console.log('expect apple', fruit);

// Number: 11

let magic = {
  trick: 'levitation',
  print: function () {
    if (Array.isArray(this)) console.log(this[0]);
    else console.log(magic.trick);
  },
};

// let trick = ['penetration'];
// magic.print.call(magic); //levitation
// magic.print.call(trick); //pentration

// What is the output of following code.
// function objectFn(obj) {
//   delete obj.a;
// }
// let obj = { a: 2 };
// objectFn(obj);
// console.log(obj);

// What is the output of the following code

// let i = 5;
// function callme(i) {
//   console.log(i);
// }
// callme();

// What is the output of the following code
// let score = 10;
// function play() {
//   function display() {
//     console.log(score);
//   }
//   display();
// }
// play();

// Use spread to merge the following objects

let scores = { marks: 40, math: 30 };
let { math } = scores;
let grades = { grade: 'B', marks: 50 };
let scoresGrades = { ...grades, math };
console.log("expect {grade:'B',marks:50,math:30}", scoresGrades);

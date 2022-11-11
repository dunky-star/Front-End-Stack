"use strict"; // strict mode to enforce some type safety.

console.log("Hello World of JS");

let r = 5;
const pi = 3.14;

let a = 3.14*r*r;
console.log("The area of a circle is: " +a);

// var awesome = prompt("Enter your first name: ");

function AwesomeFunc()
{
    console.log("Hello");
    console.log("and");
    console.log("bye");
}

// AwesomeFunc() Function call.
AwesomeFunc();

function Sum(num1, num2)
{
    var result = num1 + num2;
    return result;
}

// Sum(num1, num2) Function call and print to console.
console.log(Sum(5, 10));


// "FOR" loop and print to console.
for (var i=0; i<=10; i += 2){
    console.log("The value at position: " + i + " is: " +i);
}

// "FOR IN" loop and print to console.
var amazingObject = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 10}

for (var item in amazingObject){
    console.log(item + " : " + amazingObject[item]);
}
"use strict"; // strict mode to enforce some type safety.



console.log("Hello World of JS");

let r = 5;
const pi = 3.14;

let a = 3.14*r*r;
console.log("The area of a circle is: " +a);

// var awesome = prompt("Enter your first name: ");

// Exporting a function to be used in another module.
function AwesomeFunc()
{
    console.log("Hello");
    console.log("and");
    console.log("bye");
    // HTML DOM
    document.getElementById("HelloWorldJ").style.color='red';
}

// Function call
AwesomeFunc();


function Sum(num1, num2)
{
    var result = num1 + num2;
    return result;
}

// Sum(num1, num2) Function call and print to console.
console.log(Sum(5, 10));


function callThisAwesomeFunc(){
   // "FOR" loop and print to console.
    for (var i=0; i<=100; i += 2){
    
        if (i===30)
        {
            break;
        }
        console.log("The value at position: " + i + " is: " +i);
    }

}


// "FOR IN" loop and print to console.
var amazingObject = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 10}

for (var item in amazingObject){
    console.log(item + " : " + amazingObject[item]);
}


// "DO WHILE" loop
let n = 0;
do{
    console.log("This is position for K: " +n);
    n += 2 
}while (n<20)


// An array data
 var arrName = [10, 20, 30, 40, 50 ,80];
// console.log(arrName[0]);
// console.log(arrName[5]);
console.log("\n");
for (var i=0; i<arrName.length; i++){
    console.log("The array value at position: " + i + " is: " +arrName[i]);
}


console.log("\n");
var newArr = new Array(100);


for (var j=0; j<newArr.length; j++){
    newArr[j] = j * j;
    console.log("The array value at position: " + j + " is: " +newArr[j]);
}

newArr.push(4000);
newArr.push(15000);
console.log("\n");
for (var k=0; k<newArr.length; k++){
   console.log("The array value at position: " + k + " is: " +newArr[k]);
}


newArr.pop();
console.log("\nThe new array length is: " +newArr.length);

// Finding index of a value in a array.
console.log("The index of 5776 is: " +newArr.findIndex((x) => x == 5776));

// HTML DOM
// document.getElementById("HelloWorld").style.color='red';

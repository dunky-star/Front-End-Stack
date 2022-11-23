"use strict"; // strict mode to enforce some type safety.

document.write("Hello World of Java ECMAScript.");

// JavaScript Objects within object

var ourFriends = {
    person1: {
        name: "Duncan", 
        age: 36,
        cars: {carMake: "Subaru", carValue: 50000 }
    }, 
    person2: {
        name:"Deus Kanshabe",
        age: 40
    },
    person3: {
        name: "Anjana",
        age: 25
    }
    
};

var a =1;

console.log(ourFriends['person' + a ]);
a++
console.log(ourFriends['person' + a ]);
a++
console.log(ourFriends['person' + a ]);



// JavaScript array data structure.
var ourCars = ["GM", "Mitsubishi", "Subaru", "Ford"]; 
ourCars[1]  = "Toyota";
console.log(ourCars);
console.log(ourCars[2]);


// JavaScript nested array data structure.
var ourAnimals = [["Dog", "Cow", "Cat", "Lion"], ["Bark", "Bellow", "Meow", "Roar"]];
delete ourAnimals[0][3]  // Deleting an element from array.
ourAnimals[0][3] = "Lioness";  // Adding an element to an array.
console.log("Our animal in the multi-dimensional array is: " + ourAnimals[0][2]);
var g = ourAnimals.toString();  // Converting an array to String for data storage.
console.log("First array conversion using toString method: " + g);
var h = g.split(','); // Converting String to an array for Array processing.
console.log(h);
var i = ourAnimals.join(',');  // Alternative Conversion of an array to String for data storage.
console.log("Second array conversion to String using join method: " + i);


// JavaScript object within Array.
var myArray = [
    {
        name1: "Lawrence",
        name2: "King",
        name3: "David"
    },
    {
        name1: "Tina",
        name2: "Dave",
        name3: "John"

    }
]

console.log(myArray[0].name2);
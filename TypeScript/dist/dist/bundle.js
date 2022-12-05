/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./abstract-human.ts":
/*!***************************!*\
  !*** ./abstract-human.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Human)
/* harmony export */ });
/*
* Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
* Abstract method: can only be used in an abstract class, and it does not have a body.
* The body is provided by the subclass (inherited from).
*/
class Human {
    constructor(name) {
        this.name = name;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-human */ "./abstract-human.ts");

const numbersSeq = [0, 1, 2, 3, 4, 10, 20];
const greaterThanTwo = numbersSeq.filter(number => number > 2);
console.log(greaterThanTwo);
// Demonstratig usage of primitive data types in TypeScript (boolean, number, string).
const isAdmin = true;
const user = 'Duncacn';
let welcome;
if (isAdmin) {
    welcome = `Hello ${user}`;
}
else {
    welcome = `${user} is not an admin`;
}
console.log(welcome);
// Non-primitive data types (array, tuple, enum, any, never, null and undefined, void, function, type, Object).
const numbersArgs = [0, 1, 2, 3, 4];
numbersArgs.push(100);
console.log(numbersArgs);
let fruits = ["Apple", "GreenApple", "Grapes", "Guava"];
let food = ["Pizza", "Burger", "Fries"];
food.push("CaliFlower");
// spread operator: spreads the element of an object or array.
// Also merging multiple arrays/objects into one flat array/object. Denoted by (...)
let edibles = [...fruits, ...food];
console.log("Got the edibles as: ", edibles);
let userBio = {
    firstName: "Duncan",
    lastName: "Kaligs",
    username: "dunkycarl"
};
// To combine userBio and userDetais using spread operator.
let userDetails = Object.assign(Object.assign({}, userBio), { address: "123 Najjera II", email: "dunky@mail.com" });
// Loging the value to console after the spread operator.
console.log("Got the user as: ", userDetails);
// An array of mixed data types.
const mixed = [1, "Duncan", 10, "Pete"];
mixed.push(1000);
mixed.push("Kaligs");
// Destructure({}) - Breaks up the structure of an Array or Object.
// Plucking elememnts from an Array or Object. Generally used in import statements.
let { address, email } = userDetails; // Let's destructure userDetails object
console.log(address);
console.log(email);
let [Apple, GreenApple, Grapes] = fruits; // Let's destructure some fruits.
console.log(Apple);
console.log(Grapes);
// Function data type and usage of backticks.
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("opiyo"));
const myUser = {
    name: "Duncan",
    age: 34
};
// Object Data Type - array of objects.
const users = [
    {
        name: "Adam",
        age: 30
    },
    {
        name: "John",
        age: 40
    },
    {
        name: "Anjana",
        age: 40
    }
];
let adminUser = {
    name: "Duncan",
    age: 34,
    xyz: "asdf",
    walk: () => { return; }
};
console.log(adminUser.age);
let hello;
hello = function (n, lang) {
    if (lang === "en") {
        return `Hello ${n}!`;
    }
    else {
        return `Hola ${n}!`;
    }
};
console.log(hello("Duncan", "en"));
// Data types and optional parameter for a function.
function greetings(name, language = "en", exclamationMark) {
    if (language === "en") {
        return `Hello ${name}`;
    }
    else if (language = "es") {
        return `Hola ${name}${exclamationMark}`;
    }
    else {
        return `Yo ${name}!`;
    }
}
greetings("Duncan", "!");
console.log(greetings("Duncan", 'en', '!'));
// Classes & Inheritance in TypeScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
    walk() {
        return;
    }
}
class SuperHero extends _abstract_human__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name) {
        super(name);
        this.superPowers = [];
    }
    addPower(power) {
        this.superPowers.push("power");
    }
    listPowers() {
        return this.superPowers;
    }
    walk() {
        return;
    }
}
const batMan = new SuperHero("Bruce Lee");
batMan.addPower("money");
console.log(batMan.listPowers);
// Generics in TypeScript
function picker(args) {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}
const suits = ['Diamond', 'Hearts', 'Clubs', 'Spades'];
const numbers = [...Array(13).keys()];
const pickedNumber = picker(numbers);
const pickedSuit = picker(suits);
console.log(`Your card is: ${pickedNumber} ${pickedSuit}`);
// Fetch API in TypeScript. Fetch was recently introduced in ES6 and provides an interface for fetching resources.
// Fetch returns a promise
function getUserViaFetch() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
        debugger;
        return response.json();
    })
        .then(user => {
        debugger;
        console.log("Got the user via fetch as: ", user);
    });
}
getUserViaFetch();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdC9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7OztFQUlFO0FBRWEsTUFBZSxLQUFLO0lBRy9CLFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBT0o7Ozs7Ozs7VUN0QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0hxQztBQUlyQyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTNDLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUc1QixzRkFBc0Y7QUFFdEYsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDO0FBQzlCLE1BQU0sSUFBSSxHQUFXLFNBQVMsQ0FBQztBQUMvQixJQUFJLE9BQWUsQ0FBQztBQUVwQixJQUFHLE9BQU8sRUFBQztJQUNQLE9BQU8sR0FBRyxTQUFTLElBQUksRUFBRTtDQUM1QjtLQUNHO0lBQ0EsT0FBTyxHQUFHLEdBQUcsSUFBSSxrQkFBa0I7Q0FDdEM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBR3JCLCtHQUErRztBQUMvRyxNQUFNLFdBQVcsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFHekIsSUFBSSxNQUFNLEdBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkUsSUFBSSxJQUFJLEdBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUIsOERBQThEO0FBQzlELG9GQUFvRjtBQUNwRixJQUFJLE9BQU8sR0FBYSxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUc3QyxJQUFJLE9BQU8sR0FBRztJQUNWLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxXQUFXO0NBQ3hCO0FBRUQsMkRBQTJEO0FBQzNELElBQUksV0FBVyxtQ0FDUixPQUFPLEtBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUN6QixLQUFLLEVBQUUsZ0JBQWdCLEdBQzFCO0FBRUQseURBQXlEO0FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDO0FBRzdDLGdDQUFnQztBQUNoQyxNQUFNLEtBQUssR0FBMkIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFHckIsbUVBQW1FO0FBQ25FLG1GQUFtRjtBQUNuRixJQUFJLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFFLHVDQUF1QztBQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFHbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsaUNBQWlDO0FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUdwQiw2Q0FBNkM7QUFDN0MsU0FBUyxLQUFLLENBQUMsSUFBWTtJQUN2QixPQUFPLFNBQVMsSUFBSSxFQUFFLENBQUM7QUFDM0IsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFTNUIsTUFBTSxNQUFNLEdBQVM7SUFDakIsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsRUFBRTtDQUNWLENBQUM7QUFFRix1Q0FBdUM7QUFDdkMsTUFBTSxLQUFLLEdBQW9DO0lBQzNDO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxFQUFFO0tBQ1Y7SUFDRDtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLEVBQUU7S0FDVjtDQUNKO0FBR0QsSUFBSSxTQUFTLEdBQVU7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsRUFBRTtJQUNQLEdBQUcsRUFBRSxNQUFNO0lBRVgsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFFLE9BQU8sRUFBQztDQUV4QjtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBSTNCLElBQUksS0FBYSxDQUFDO0FBQ2xCLEtBQUssR0FBRyxVQUFTLENBQVMsRUFBRSxJQUFZO0lBQ3BDLElBQUksSUFBSSxLQUFLLElBQUksRUFBQztRQUNkLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUN4QjtTQUFNO1FBQ0gsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO0tBQ3ZCO0FBQ0wsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBSW5DLG9EQUFvRDtBQUVwRCxTQUFTLFNBQVMsQ0FBQyxJQUFZLEVBQUUsV0FBaUIsSUFBSSxFQUFFLGVBQXdCO0lBQzVFLElBQUksUUFBUSxLQUFLLElBQUksRUFBQztRQUNsQixPQUFPLFNBQVMsSUFBSSxFQUFFLENBQUM7S0FDMUI7U0FBTSxJQUFHLFFBQVEsR0FBQyxJQUFJLEVBQUM7UUFDcEIsT0FBTyxRQUFRLElBQUksR0FBRyxlQUFlLEVBQUUsQ0FBQztLQUMzQztTQUFNO1FBQ0gsT0FBTyxNQUFNLElBQUksR0FBRyxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQztBQUVELFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRzVDLHNDQUFzQztBQUN0QyxNQUFNLE1BQU07SUFHUixZQUFZLElBQVksRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUs7UUFDRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTztJQUNYLENBQUM7Q0FDSjtBQUdELE1BQU0sU0FBVSxTQUFRLHVEQUFLO0lBR3pCLFlBQWEsSUFBWTtRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFIaEIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7SUFJM0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTztJQUNYLENBQUM7Q0FDSjtBQUVELE1BQU0sTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFJL0IseUJBQXlCO0FBQ3pCLFNBQVMsTUFBTSxDQUFJLElBQVM7SUFDeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxNQUFNLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0QyxNQUFNLFlBQVksR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsTUFBTSxVQUFVLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLFlBQVksSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRzNELGtIQUFrSDtBQUNsSCwwQkFBMEI7QUFFMUIsU0FBUyxlQUFlO0lBQ3BCLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztTQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDYixRQUFRLENBQUM7UUFDVCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVCxRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQztBQUVELGVBQWUsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tdHlwZXNjcmlwdC8uL2Fic3RyYWN0LWh1bWFuLnRzIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm4tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhcm4tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFybi10eXBlc2NyaXB0Ly4vYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBtb2R1bGVzXHJcbmltcG9ydCBJVXNlciBmcm9tICcuL2l1c2VyJztcclxuXHJcblxyXG4vKlxyXG4qIEFic3RyYWN0IGNsYXNzOiBpcyBhIHJlc3RyaWN0ZWQgY2xhc3MgdGhhdCBjYW5ub3QgYmUgdXNlZCB0byBjcmVhdGUgb2JqZWN0cyAodG8gYWNjZXNzIGl0LCBpdCBtdXN0IGJlIGluaGVyaXRlZCBmcm9tIGFub3RoZXIgY2xhc3MpLiBcclxuKiBBYnN0cmFjdCBtZXRob2Q6IGNhbiBvbmx5IGJlIHVzZWQgaW4gYW4gYWJzdHJhY3QgY2xhc3MsIGFuZCBpdCBkb2VzIG5vdCBoYXZlIGEgYm9keS4gXHJcbiogVGhlIGJvZHkgaXMgcHJvdmlkZWQgYnkgdGhlIHN1YmNsYXNzIChpbmhlcml0ZWQgZnJvbSkuXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBIdW1hbiBpbXBsZW1lbnRzIElVc2Vye1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhZ2U/OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgYWRkUG93ZXIocG93ZXI6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3QgbGlzdFBvd2VycygpOiBzdHJpbmdbXTtcclxuXHJcbiAgICBhYnN0cmFjdCB3YWxrICgpOiB2b2lkO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnRpbmcgbW9kdWxlc1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi9pdXNlcic7XHJcbmltcG9ydCBJR3JlZXQgZnJvbSAnLi9pZ3JlZXQnO1xyXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi9hYnN0cmFjdC1odW1hbic7XHJcblxyXG5cclxuXHJcbmNvbnN0IG51bWJlcnNTZXEgPSBbMCwgMSwgMiwgMywgNCwgMTAsIDIwXTtcclxuXHJcbmNvbnN0IGdyZWF0ZXJUaGFuVHdvID0gbnVtYmVyc1NlcS5maWx0ZXIobnVtYmVyID0+IG51bWJlciA+IDIpO1xyXG5cclxuY29uc29sZS5sb2coZ3JlYXRlclRoYW5Ud28pO1xyXG5cclxuXHJcbi8vIERlbW9uc3RyYXRpZyB1c2FnZSBvZiBwcmltaXRpdmUgZGF0YSB0eXBlcyBpbiBUeXBlU2NyaXB0IChib29sZWFuLCBudW1iZXIsIHN0cmluZykuXHJcblxyXG5jb25zdCBpc0FkbWluOiBib29sZWFuID0gdHJ1ZTtcclxuY29uc3QgdXNlcjogc3RyaW5nID0gJ0R1bmNhY24nO1xyXG5sZXQgd2VsY29tZTogc3RyaW5nO1xyXG5cclxuaWYoaXNBZG1pbil7XHJcbiAgICB3ZWxjb21lID0gYEhlbGxvICR7dXNlcn1gXHJcbn1cclxuZWxzZXtcclxuICAgIHdlbGNvbWUgPSBgJHt1c2VyfSBpcyBub3QgYW4gYWRtaW5gXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHdlbGNvbWUpO1xyXG5cclxuXHJcbi8vIE5vbi1wcmltaXRpdmUgZGF0YSB0eXBlcyAoYXJyYXksIHR1cGxlLCBlbnVtLCBhbnksIG5ldmVyLCBudWxsIGFuZCB1bmRlZmluZWQsIHZvaWQsIGZ1bmN0aW9uLCB0eXBlLCBPYmplY3QpLlxyXG5jb25zdCBudW1iZXJzQXJnczogbnVtYmVyW10gPSBbMCwgMSwgMiwgMywgNF07XHJcbm51bWJlcnNBcmdzLnB1c2goMTAwKTtcclxuY29uc29sZS5sb2cobnVtYmVyc0FyZ3MpO1xyXG5cclxuXHJcbmxldCBmcnVpdHM6IEFycmF5PHN0cmluZz4gPSBbXCJBcHBsZVwiLCBcIkdyZWVuQXBwbGVcIiwgXCJHcmFwZXNcIiwgXCJHdWF2YVwiXTtcclxubGV0IGZvb2Q6IFN0cmluZ1tdID0gW1wiUGl6emFcIiwgXCJCdXJnZXJcIiwgXCJGcmllc1wiXTtcclxuICAgIGZvb2QucHVzaChcIkNhbGlGbG93ZXJcIik7XHJcbi8vIHNwcmVhZCBvcGVyYXRvcjogc3ByZWFkcyB0aGUgZWxlbWVudCBvZiBhbiBvYmplY3Qgb3IgYXJyYXkuXHJcbi8vIEFsc28gbWVyZ2luZyBtdWx0aXBsZSBhcnJheXMvb2JqZWN0cyBpbnRvIG9uZSBmbGF0IGFycmF5L29iamVjdC4gRGVub3RlZCBieSAoLi4uKVxyXG5sZXQgZWRpYmxlczogU3RyaW5nW10gPSBbLi4uZnJ1aXRzLCAuLi5mb29kXTtcclxuY29uc29sZS5sb2coXCJHb3QgdGhlIGVkaWJsZXMgYXM6IFwiLCBlZGlibGVzKTtcclxuXHJcblxyXG5sZXQgdXNlckJpbyA9IHtcclxuICAgIGZpcnN0TmFtZTogXCJEdW5jYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkthbGlnc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiZHVua3ljYXJsXCJcclxufVxyXG5cclxuLy8gVG8gY29tYmluZSB1c2VyQmlvIGFuZCB1c2VyRGV0YWlzIHVzaW5nIHNwcmVhZCBvcGVyYXRvci5cclxubGV0IHVzZXJEZXRhaWxzID0ge1xyXG4gICAgLi4udXNlckJpbyxcclxuICAgIGFkZHJlc3M6IFwiMTIzIE5hamplcmEgSUlcIixcclxuICAgIGVtYWlsOiBcImR1bmt5QG1haWwuY29tXCJcclxufVxyXG5cclxuLy8gTG9naW5nIHRoZSB2YWx1ZSB0byBjb25zb2xlIGFmdGVyIHRoZSBzcHJlYWQgb3BlcmF0b3IuXHJcbmNvbnNvbGUubG9nKFwiR290IHRoZSB1c2VyIGFzOiBcIiwgdXNlckRldGFpbHMpXHJcblxyXG5cclxuLy8gQW4gYXJyYXkgb2YgbWl4ZWQgZGF0YSB0eXBlcy5cclxuY29uc3QgbWl4ZWQ6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbMSwgXCJEdW5jYW5cIiwgMTAsIFwiUGV0ZVwiXTtcclxubWl4ZWQucHVzaCgxMDAwKTtcclxubWl4ZWQucHVzaChcIkthbGlnc1wiKTtcclxuXHJcblxyXG4vLyBEZXN0cnVjdHVyZSh7fSkgLSBCcmVha3MgdXAgdGhlIHN0cnVjdHVyZSBvZiBhbiBBcnJheSBvciBPYmplY3QuXHJcbi8vIFBsdWNraW5nIGVsZW1lbW50cyBmcm9tIGFuIEFycmF5IG9yIE9iamVjdC4gR2VuZXJhbGx5IHVzZWQgaW4gaW1wb3J0IHN0YXRlbWVudHMuXHJcbmxldCB7YWRkcmVzcywgZW1haWwgfSA9IHVzZXJEZXRhaWxzOyAgLy8gTGV0J3MgZGVzdHJ1Y3R1cmUgdXNlckRldGFpbHMgb2JqZWN0XHJcbmNvbnNvbGUubG9nKGFkZHJlc3MpO1xyXG5jb25zb2xlLmxvZyhlbWFpbCk7XHJcblxyXG5cclxubGV0IFtBcHBsZSwgR3JlZW5BcHBsZSwgR3JhcGVzXSA9IGZydWl0czsgLy8gTGV0J3MgZGVzdHJ1Y3R1cmUgc29tZSBmcnVpdHMuXHJcbmNvbnNvbGUubG9nKEFwcGxlKTtcclxuY29uc29sZS5sb2coR3JhcGVzKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiBkYXRhIHR5cGUgYW5kIHVzYWdlIG9mIGJhY2t0aWNrcy5cclxuZnVuY3Rpb24gZ3JlZXQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgSGVsbG8gJHtuYW1lfWA7XHJcbn1cclxuY29uc29sZS5sb2coZ3JlZXQoXCJvcGl5b1wiKSk7XHJcblxyXG5cclxuLy8gVHlwZSBkYXRhIHR5cGVcclxudHlwZSBVc2VyID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IG15VXNlcjogVXNlciA9IHtcclxuICAgIG5hbWU6IFwiRHVuY2FuXCIsXHJcbiAgICBhZ2U6IDM0XHJcbn07XHJcblxyXG4vLyBPYmplY3QgRGF0YSBUeXBlIC0gYXJyYXkgb2Ygb2JqZWN0cy5cclxuY29uc3QgdXNlcnMgOiB7IG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXJ9W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBZGFtXCIsXHJcbiAgICAgICAgYWdlOiAzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkpvaG5cIixcclxuICAgICAgICBhZ2U6IDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQW5qYW5hXCIsXHJcbiAgICAgICAgYWdlOiA0MFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxubGV0IGFkbWluVXNlcjogSVVzZXIgPSB7XHJcbiAgICBuYW1lOiBcIkR1bmNhblwiLFxyXG4gICAgYWdlOiAzNCxcclxuICAgIHh5ejogXCJhc2RmXCIsXHJcbiAgICBcclxuICAgIHdhbGs6ICgpID0+IHtyZXR1cm47fSAgXHJcblxyXG59XHJcbmNvbnNvbGUubG9nKGFkbWluVXNlci5hZ2UpO1xyXG5cclxuXHJcblxyXG5sZXQgaGVsbG86IElHcmVldDtcclxuaGVsbG8gPSBmdW5jdGlvbihuOiBzdHJpbmcsIGxhbmc6IHN0cmluZyl7XHJcbiAgICBpZiAobGFuZyA9PT0gXCJlblwiKXtcclxuICAgICAgICByZXR1cm4gYEhlbGxvICR7bn0hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIb2xhICR7bn0hYDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc29sZS5sb2coaGVsbG8oXCJEdW5jYW5cIiwgXCJlblwiKSk7XHJcblxyXG5cclxuXHJcbi8vIERhdGEgdHlwZXMgYW5kIG9wdGlvbmFsIHBhcmFtZXRlciBmb3IgYSBmdW5jdGlvbi5cclxuXHJcbmZ1bmN0aW9uIGdyZWV0aW5ncyhuYW1lOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmc9XCJlblwiLCBleGNsYW1hdGlvbk1hcms/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpe1xyXG4gICAgICAgIHJldHVybiBgSGVsbG8gJHtuYW1lfWA7XHJcbiAgICB9IGVsc2UgaWYobGFuZ3VhZ2U9XCJlc1wiKXtcclxuICAgICAgICByZXR1cm4gYEhvbGEgJHtuYW1lfSR7ZXhjbGFtYXRpb25NYXJrfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgWW8gJHtuYW1lfSFgO1xyXG4gICAgfVxyXG59XHJcblxyXG5ncmVldGluZ3MoXCJEdW5jYW5cIiwgXCIhXCIpO1xyXG5jb25zb2xlLmxvZyhncmVldGluZ3MoXCJEdW5jYW5cIiwgJ2VuJywgJyEnKSk7XHJcblxyXG5cclxuLy8gQ2xhc3NlcyAmIEluaGVyaXRhbmNlIGluIFR5cGVTY3JpcHRcclxuY2xhc3MgUGVyc29uIGltcGxlbWVudHMgSVVzZXJ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhZ2U6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgICAgIHRoaXMuYWdlPWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBncmVldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgSGVsbG8gJHt0aGlzLm5hbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICB3YWxrKCk6IHZvaWQgeyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdXBlckhlcm8gZXh0ZW5kcyBIdW1hbiB7XHJcbiAgICBzdXBlclBvd2Vyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUG93ZXIocG93ZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3VwZXJQb3dlcnMucHVzaChcInBvd2VyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RQb3dlcnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1cGVyUG93ZXJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB3YWxrKCk6IHZvaWQgeyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGJhdE1hbiA9IG5ldyBTdXBlckhlcm8oXCJCcnVjZSBMZWVcIik7XHJcbmJhdE1hbi5hZGRQb3dlcihcIm1vbmV5XCIpO1xyXG5jb25zb2xlLmxvZyhiYXRNYW4ubGlzdFBvd2Vycyk7XHJcblxyXG5cclxuXHJcbi8vIEdlbmVyaWNzIGluIFR5cGVTY3JpcHRcclxuZnVuY3Rpb24gcGlja2VyPFQ+KGFyZ3M6IFRbXSk6IFQge1xyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIGFyZ3MubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmdzW3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuY29uc3Qgc3VpdHMgPSBbJ0RpYW1vbmQnLCAnSGVhcnRzJywgJ0NsdWJzJywgJ1NwYWRlcyddO1xyXG5jb25zdCBudW1iZXJzID0gWy4uLkFycmF5KDEzKS5rZXlzKCldO1xyXG5jb25zdCBwaWNrZWROdW1iZXI6IG51bWJlciA9IHBpY2tlcihudW1iZXJzKTtcclxuY29uc3QgcGlja2VkU3VpdDogc3RyaW5nID0gcGlja2VyKHN1aXRzKTtcclxuY29uc29sZS5sb2coYFlvdXIgY2FyZCBpczogJHtwaWNrZWROdW1iZXJ9ICR7cGlja2VkU3VpdH1gKTtcclxuXHJcblxyXG4vLyBGZXRjaCBBUEkgaW4gVHlwZVNjcmlwdC4gRmV0Y2ggd2FzIHJlY2VudGx5IGludHJvZHVjZWQgaW4gRVM2IGFuZCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGZldGNoaW5nIHJlc291cmNlcy5cclxuLy8gRmV0Y2ggcmV0dXJucyBhIHByb21pc2VcclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJWaWFGZXRjaCgpe1xyXG4gICAgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvMVwiKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgdGhlIHVzZXIgdmlhIGZldGNoIGFzOiBcIiwgdXNlcik7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmdldFVzZXJWaWFGZXRjaCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
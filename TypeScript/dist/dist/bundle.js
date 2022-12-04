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
food.push("Cali Flower");
// spread operator: spreads the element of an object or array.
// Also merging multiple arrays/objects into one flat array/object. Denoted by (...)
let edibles = [...fruits, ...food];
console.log("Got the edibles as: ", edibles);
let userBio = {
    firstName: "Duncan",
    lastName: "Kaligs",
    username: "dunkycarl"
};
// To combine username an userBio and userDetais using spredad operator.
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
    xyz: "asdf"
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
}
let batMan = new SuperHero("Bruce Lee");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBSS9CLHlCQUF5QjtBQUN6QixTQUFTLE1BQU0sQ0FBSSxJQUFTO0lBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDdEMsTUFBTSxZQUFZLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLE1BQU0sVUFBVSxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixZQUFZLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvLi9hYnN0cmFjdC1odW1hbi50cyIsIndlYnBhY2s6Ly9sZWFybi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhcm4tdHlwZXNjcmlwdC8uL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbW9kdWxlc1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi9pdXNlcic7XHJcblxyXG5cclxuLypcclxuKiBBYnN0cmFjdCBjbGFzczogaXMgYSByZXN0cmljdGVkIGNsYXNzIHRoYXQgY2Fubm90IGJlIHVzZWQgdG8gY3JlYXRlIG9iamVjdHMgKHRvIGFjY2VzcyBpdCwgaXQgbXVzdCBiZSBpbmhlcml0ZWQgZnJvbSBhbm90aGVyIGNsYXNzKS4gXHJcbiogQWJzdHJhY3QgbWV0aG9kOiBjYW4gb25seSBiZSB1c2VkIGluIGFuIGFic3RyYWN0IGNsYXNzLCBhbmQgaXQgZG9lcyBub3QgaGF2ZSBhIGJvZHkuIFxyXG4qIFRoZSBib2R5IGlzIHByb3ZpZGVkIGJ5IHRoZSBzdWJjbGFzcyAoaW5oZXJpdGVkIGZyb20pLlxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSHVtYW4gaW1wbGVtZW50cyBJVXNlcntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdlPzogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGFkZFBvd2VyKHBvd2VyOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGxpc3RQb3dlcnMoKTogc3RyaW5nW107XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydGluZyBtb2R1bGVzXHJcbmltcG9ydCBJVXNlciBmcm9tICcuL2l1c2VyJztcclxuaW1wb3J0IElHcmVldCBmcm9tICcuL2lncmVldCc7XHJcbmltcG9ydCBIdW1hbiBmcm9tICcuL2Fic3RyYWN0LWh1bWFuJztcclxuXHJcblxyXG5cclxuY29uc3QgbnVtYmVyc1NlcSA9IFswLCAxLCAyLCAzLCA0LCAxMCwgMjBdO1xyXG5cclxuY29uc3QgZ3JlYXRlclRoYW5Ud28gPSBudW1iZXJzU2VxLmZpbHRlcihudW1iZXIgPT4gbnVtYmVyID4gMik7XHJcblxyXG5jb25zb2xlLmxvZyhncmVhdGVyVGhhblR3byk7XHJcblxyXG5cclxuLy8gRGVtb25zdHJhdGlnIHVzYWdlIG9mIHByaW1pdGl2ZSBkYXRhIHR5cGVzIGluIFR5cGVTY3JpcHQgKGJvb2xlYW4sIG51bWJlciwgc3RyaW5nKS5cclxuXHJcbmNvbnN0IGlzQWRtaW46IGJvb2xlYW4gPSB0cnVlO1xyXG5jb25zdCB1c2VyOiBzdHJpbmcgPSAnRHVuY2Fjbic7XHJcbmxldCB3ZWxjb21lOiBzdHJpbmc7XHJcblxyXG5pZihpc0FkbWluKXtcclxuICAgIHdlbGNvbWUgPSBgSGVsbG8gJHt1c2VyfWBcclxufVxyXG5lbHNle1xyXG4gICAgd2VsY29tZSA9IGAke3VzZXJ9IGlzIG5vdCBhbiBhZG1pbmBcclxufVxyXG5cclxuY29uc29sZS5sb2cod2VsY29tZSk7XHJcblxyXG5cclxuLy8gTm9uLXByaW1pdGl2ZSBkYXRhIHR5cGVzIChhcnJheSwgdHVwbGUsIGVudW0sIGFueSwgbmV2ZXIsIG51bGwgYW5kIHVuZGVmaW5lZCwgdm9pZCwgZnVuY3Rpb24sIHR5cGUsIE9iamVjdCkuXHJcbmNvbnN0IG51bWJlcnNBcmdzOiBudW1iZXJbXSA9IFswLCAxLCAyLCAzLCA0XTtcclxubnVtYmVyc0FyZ3MucHVzaCgxMDApO1xyXG5jb25zb2xlLmxvZyhudW1iZXJzQXJncyk7XHJcblxyXG5cclxubGV0IGZydWl0czogQXJyYXk8c3RyaW5nPiA9IFtcIkFwcGxlXCIsIFwiR3JlZW5BcHBsZVwiLCBcIkdyYXBlc1wiLCBcIkd1YXZhXCJdO1xyXG5sZXQgZm9vZDogU3RyaW5nW10gPSBbXCJQaXp6YVwiLCBcIkJ1cmdlclwiLCBcIkZyaWVzXCJdO1xyXG4gICAgZm9vZC5wdXNoKFwiQ2FsaSBGbG93ZXJcIik7XHJcbi8vIHNwcmVhZCBvcGVyYXRvcjogc3ByZWFkcyB0aGUgZWxlbWVudCBvZiBhbiBvYmplY3Qgb3IgYXJyYXkuXHJcbi8vIEFsc28gbWVyZ2luZyBtdWx0aXBsZSBhcnJheXMvb2JqZWN0cyBpbnRvIG9uZSBmbGF0IGFycmF5L29iamVjdC4gRGVub3RlZCBieSAoLi4uKVxyXG5sZXQgZWRpYmxlczogU3RyaW5nW10gPSBbLi4uZnJ1aXRzLCAuLi5mb29kXTtcclxuY29uc29sZS5sb2coXCJHb3QgdGhlIGVkaWJsZXMgYXM6IFwiLCBlZGlibGVzKTtcclxuXHJcblxyXG5sZXQgdXNlckJpbyA9IHtcclxuICAgIGZpcnN0TmFtZTogXCJEdW5jYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkthbGlnc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiZHVua3ljYXJsXCJcclxufVxyXG5cclxuLy8gVG8gY29tYmluZSB1c2VybmFtZSBhbiB1c2VyQmlvIGFuZCB1c2VyRGV0YWlzIHVzaW5nIHNwcmVkYWQgb3BlcmF0b3IuXHJcbmxldCB1c2VyRGV0YWlscyA9IHtcclxuICAgIC4uLnVzZXJCaW8sXHJcbiAgICBhZGRyZXNzOiBcIjEyMyBOYWpqZXJhIElJXCIsXHJcbiAgICBlbWFpbDogXCJkdW5reUBtYWlsLmNvbVwiXHJcbn1cclxuXHJcbi8vIExvZ2luZyB0aGUgdmFsdWUgdG8gY29uc29sZSBhZnRlciB0aGUgc3ByZWFkIG9wZXJhdG9yLlxyXG5jb25zb2xlLmxvZyhcIkdvdCB0aGUgdXNlciBhczogXCIsIHVzZXJEZXRhaWxzKVxyXG5cclxuXHJcbi8vIEFuIGFycmF5IG9mIG1peGVkIGRhdGEgdHlwZXMuXHJcbmNvbnN0IG1peGVkOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gWzEsIFwiRHVuY2FuXCIsIDEwLCBcIlBldGVcIl07XHJcbm1peGVkLnB1c2goMTAwMCk7XHJcbm1peGVkLnB1c2goXCJLYWxpZ3NcIik7XHJcblxyXG5cclxuLy8gRGVzdHJ1Y3R1cmUoe30pIC0gQnJlYWtzIHVwIHRoZSBzdHJ1Y3R1cmUgb2YgYW4gQXJyYXkgb3IgT2JqZWN0LlxyXG4vLyBQbHVja2luZyBlbGVtZW1udHMgZnJvbSBhbiBBcnJheSBvciBPYmplY3QuIEdlbmVyYWxseSB1c2VkIGluIGltcG9ydCBzdGF0ZW1lbnRzLlxyXG5sZXQge2FkZHJlc3MsIGVtYWlsIH0gPSB1c2VyRGV0YWlsczsgIC8vIExldCdzIGRlc3RydWN0dXJlIHVzZXJEZXRhaWxzIG9iamVjdFxyXG5jb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuY29uc29sZS5sb2coZW1haWwpO1xyXG5cclxuXHJcbmxldCBbQXBwbGUsIEdyZWVuQXBwbGUsIEdyYXBlc10gPSBmcnVpdHM7IC8vIExldCdzIGRlc3RydWN0dXJlIHNvbWUgZnJ1aXRzLlxyXG5jb25zb2xlLmxvZyhBcHBsZSk7XHJcbmNvbnNvbGUubG9nKEdyYXBlcyk7XHJcblxyXG5cclxuLy8gRnVuY3Rpb24gZGF0YSB0eXBlIGFuZCB1c2FnZSBvZiBiYWNrdGlja3MuXHJcbmZ1bmN0aW9uIGdyZWV0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYEhlbGxvICR7bmFtZX1gO1xyXG59XHJcbmNvbnNvbGUubG9nKGdyZWV0KFwib3BpeW9cIikpO1xyXG5cclxuXHJcbi8vIFR5cGUgZGF0YSB0eXBlXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBteVVzZXI6IFVzZXIgPSB7XHJcbiAgICBuYW1lOiBcIkR1bmNhblwiLFxyXG4gICAgYWdlOiAzNFxyXG59O1xyXG5cclxuLy8gT2JqZWN0IERhdGEgVHlwZSAtIGFycmF5IG9mIG9iamVjdHMuXHJcbmNvbnN0IHVzZXJzIDogeyBuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQWRhbVwiLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKb2huXCIsXHJcbiAgICAgICAgYWdlOiA0MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkFuamFuYVwiLFxyXG4gICAgICAgIGFnZTogNDBcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmxldCBhZG1pblVzZXI6IElVc2VyID0ge1xyXG4gICAgbmFtZTogXCJEdW5jYW5cIixcclxuICAgIGFnZTogMzQsXHJcbiAgICB4eXo6IFwiYXNkZlwiXHJcblxyXG59XHJcbmNvbnNvbGUubG9nKGFkbWluVXNlci5hZ2UpO1xyXG5cclxuXHJcblxyXG5sZXQgaGVsbG86IElHcmVldDtcclxuaGVsbG8gPSBmdW5jdGlvbihuOiBzdHJpbmcsIGxhbmc6IHN0cmluZyl7XHJcbiAgICBpZiAobGFuZyA9PT0gXCJlblwiKXtcclxuICAgICAgICByZXR1cm4gYEhlbGxvICR7bn0hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIb2xhICR7bn0hYDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc29sZS5sb2coaGVsbG8oXCJEdW5jYW5cIiwgXCJlblwiKSk7XHJcblxyXG5cclxuXHJcbi8vIERhdGEgdHlwZXMgYW5kIG9wdGlvbmFsIHBhcmFtZXRlciBmb3IgYSBmdW5jdGlvbi5cclxuXHJcbmZ1bmN0aW9uIGdyZWV0aW5ncyhuYW1lOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmc9XCJlblwiLCBleGNsYW1hdGlvbk1hcms/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpe1xyXG4gICAgICAgIHJldHVybiBgSGVsbG8gJHtuYW1lfWA7XHJcbiAgICB9IGVsc2UgaWYobGFuZ3VhZ2U9XCJlc1wiKXtcclxuICAgICAgICByZXR1cm4gYEhvbGEgJHtuYW1lfSR7ZXhjbGFtYXRpb25NYXJrfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgWW8gJHtuYW1lfSFgO1xyXG4gICAgfVxyXG59XHJcblxyXG5ncmVldGluZ3MoXCJEdW5jYW5cIiwgXCIhXCIpO1xyXG5jb25zb2xlLmxvZyhncmVldGluZ3MoXCJEdW5jYW5cIiwgJ2VuJywgJyEnKSk7XHJcblxyXG5cclxuLy8gQ2xhc3NlcyAmIEluaGVyaXRhbmNlIGluIFR5cGVTY3JpcHRcclxuY2xhc3MgUGVyc29uIGltcGxlbWVudHMgSVVzZXJ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhZ2U6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgICAgIHRoaXMuYWdlPWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBncmVldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgSGVsbG8gJHt0aGlzLm5hbWV9YDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN1cGVySGVybyBleHRlbmRzIEh1bWFuIHtcclxuICAgIHN1cGVyUG93ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQb3dlcihwb3dlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdXBlclBvd2Vycy5wdXNoKFwicG93ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdFBvd2VycygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VwZXJQb3dlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBiYXRNYW4gPSBuZXcgU3VwZXJIZXJvKFwiQnJ1Y2UgTGVlXCIpO1xyXG5iYXRNYW4uYWRkUG93ZXIoXCJtb25leVwiKTtcclxuY29uc29sZS5sb2coYmF0TWFuLmxpc3RQb3dlcnMpO1xyXG5cclxuXHJcblxyXG4vLyBHZW5lcmljcyBpbiBUeXBlU2NyaXB0XHJcbmZ1bmN0aW9uIHBpY2tlcjxUPihhcmdzOiBUW10pOiBUIHtcclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiBhcmdzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gYXJnc1tyYW5kb21JbmRleF07XHJcbn1cclxuXHJcbmNvbnN0IHN1aXRzID0gWydEaWFtb25kJywgJ0hlYXJ0cycsICdDbHVicycsICdTcGFkZXMnXTtcclxuY29uc3QgbnVtYmVycyA9IFsuLi5BcnJheSgxMykua2V5cygpXTtcclxuY29uc3QgcGlja2VkTnVtYmVyOiBudW1iZXIgPSBwaWNrZXIobnVtYmVycyk7XHJcbmNvbnN0IHBpY2tlZFN1aXQ6IHN0cmluZyA9IHBpY2tlcihzdWl0cyk7XHJcbmNvbnNvbGUubG9nKGBZb3VyIGNhcmQgaXM6ICR7cGlja2VkTnVtYmVyfSAke3BpY2tlZFN1aXR9YCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
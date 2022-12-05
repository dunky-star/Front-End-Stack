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
    fetch("https//jsonplaceholder.typicode.com/user/1")
        .then(response => {
        debugger;
        return response.json();
    })
        .then(user => {
        debugger;
        console.log("Got the user via fetch as: ", user);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztTQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDYixRQUFRLENBQUM7UUFDVCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVCxRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvLi9hYnN0cmFjdC1odW1hbi50cyIsIndlYnBhY2s6Ly9sZWFybi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhcm4tdHlwZXNjcmlwdC8uL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbW9kdWxlc1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi9pdXNlcic7XHJcblxyXG5cclxuLypcclxuKiBBYnN0cmFjdCBjbGFzczogaXMgYSByZXN0cmljdGVkIGNsYXNzIHRoYXQgY2Fubm90IGJlIHVzZWQgdG8gY3JlYXRlIG9iamVjdHMgKHRvIGFjY2VzcyBpdCwgaXQgbXVzdCBiZSBpbmhlcml0ZWQgZnJvbSBhbm90aGVyIGNsYXNzKS4gXHJcbiogQWJzdHJhY3QgbWV0aG9kOiBjYW4gb25seSBiZSB1c2VkIGluIGFuIGFic3RyYWN0IGNsYXNzLCBhbmQgaXQgZG9lcyBub3QgaGF2ZSBhIGJvZHkuIFxyXG4qIFRoZSBib2R5IGlzIHByb3ZpZGVkIGJ5IHRoZSBzdWJjbGFzcyAoaW5oZXJpdGVkIGZyb20pLlxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSHVtYW4gaW1wbGVtZW50cyBJVXNlcntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdlPzogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGFkZFBvd2VyKHBvd2VyOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGxpc3RQb3dlcnMoKTogc3RyaW5nW107XHJcblxyXG4gICAgYWJzdHJhY3Qgd2FsayAoKTogdm9pZDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0aW5nIG1vZHVsZXNcclxuaW1wb3J0IElVc2VyIGZyb20gJy4vaXVzZXInO1xyXG5pbXBvcnQgSUdyZWV0IGZyb20gJy4vaWdyZWV0JztcclxuaW1wb3J0IEh1bWFuIGZyb20gJy4vYWJzdHJhY3QtaHVtYW4nO1xyXG5cclxuXHJcblxyXG5jb25zdCBudW1iZXJzU2VxID0gWzAsIDEsIDIsIDMsIDQsIDEwLCAyMF07XHJcblxyXG5jb25zdCBncmVhdGVyVGhhblR3byA9IG51bWJlcnNTZXEuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgPiAyKTtcclxuXHJcbmNvbnNvbGUubG9nKGdyZWF0ZXJUaGFuVHdvKTtcclxuXHJcblxyXG4vLyBEZW1vbnN0cmF0aWcgdXNhZ2Ugb2YgcHJpbWl0aXZlIGRhdGEgdHlwZXMgaW4gVHlwZVNjcmlwdCAoYm9vbGVhbiwgbnVtYmVyLCBzdHJpbmcpLlxyXG5cclxuY29uc3QgaXNBZG1pbjogYm9vbGVhbiA9IHRydWU7XHJcbmNvbnN0IHVzZXI6IHN0cmluZyA9ICdEdW5jYWNuJztcclxubGV0IHdlbGNvbWU6IHN0cmluZztcclxuXHJcbmlmKGlzQWRtaW4pe1xyXG4gICAgd2VsY29tZSA9IGBIZWxsbyAke3VzZXJ9YFxyXG59XHJcbmVsc2V7XHJcbiAgICB3ZWxjb21lID0gYCR7dXNlcn0gaXMgbm90IGFuIGFkbWluYFxyXG59XHJcblxyXG5jb25zb2xlLmxvZyh3ZWxjb21lKTtcclxuXHJcblxyXG4vLyBOb24tcHJpbWl0aXZlIGRhdGEgdHlwZXMgKGFycmF5LCB0dXBsZSwgZW51bSwgYW55LCBuZXZlciwgbnVsbCBhbmQgdW5kZWZpbmVkLCB2b2lkLCBmdW5jdGlvbiwgdHlwZSwgT2JqZWN0KS5cclxuY29uc3QgbnVtYmVyc0FyZ3M6IG51bWJlcltdID0gWzAsIDEsIDIsIDMsIDRdO1xyXG5udW1iZXJzQXJncy5wdXNoKDEwMCk7XHJcbmNvbnNvbGUubG9nKG51bWJlcnNBcmdzKTtcclxuXHJcblxyXG5sZXQgZnJ1aXRzOiBBcnJheTxzdHJpbmc+ID0gW1wiQXBwbGVcIiwgXCJHcmVlbkFwcGxlXCIsIFwiR3JhcGVzXCIsIFwiR3VhdmFcIl07XHJcbmxldCBmb29kOiBTdHJpbmdbXSA9IFtcIlBpenphXCIsIFwiQnVyZ2VyXCIsIFwiRnJpZXNcIl07XHJcbiAgICBmb29kLnB1c2goXCJDYWxpRmxvd2VyXCIpO1xyXG4vLyBzcHJlYWQgb3BlcmF0b3I6IHNwcmVhZHMgdGhlIGVsZW1lbnQgb2YgYW4gb2JqZWN0IG9yIGFycmF5LlxyXG4vLyBBbHNvIG1lcmdpbmcgbXVsdGlwbGUgYXJyYXlzL29iamVjdHMgaW50byBvbmUgZmxhdCBhcnJheS9vYmplY3QuIERlbm90ZWQgYnkgKC4uLilcclxubGV0IGVkaWJsZXM6IFN0cmluZ1tdID0gWy4uLmZydWl0cywgLi4uZm9vZF07XHJcbmNvbnNvbGUubG9nKFwiR290IHRoZSBlZGlibGVzIGFzOiBcIiwgZWRpYmxlcyk7XHJcblxyXG5cclxubGV0IHVzZXJCaW8gPSB7XHJcbiAgICBmaXJzdE5hbWU6IFwiRHVuY2FuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJLYWxpZ3NcIixcclxuICAgIHVzZXJuYW1lOiBcImR1bmt5Y2FybFwiXHJcbn1cclxuXHJcbi8vIFRvIGNvbWJpbmUgdXNlckJpbyBhbmQgdXNlckRldGFpcyB1c2luZyBzcHJlYWQgb3BlcmF0b3IuXHJcbmxldCB1c2VyRGV0YWlscyA9IHtcclxuICAgIC4uLnVzZXJCaW8sXHJcbiAgICBhZGRyZXNzOiBcIjEyMyBOYWpqZXJhIElJXCIsXHJcbiAgICBlbWFpbDogXCJkdW5reUBtYWlsLmNvbVwiXHJcbn1cclxuXHJcbi8vIExvZ2luZyB0aGUgdmFsdWUgdG8gY29uc29sZSBhZnRlciB0aGUgc3ByZWFkIG9wZXJhdG9yLlxyXG5jb25zb2xlLmxvZyhcIkdvdCB0aGUgdXNlciBhczogXCIsIHVzZXJEZXRhaWxzKVxyXG5cclxuXHJcbi8vIEFuIGFycmF5IG9mIG1peGVkIGRhdGEgdHlwZXMuXHJcbmNvbnN0IG1peGVkOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gWzEsIFwiRHVuY2FuXCIsIDEwLCBcIlBldGVcIl07XHJcbm1peGVkLnB1c2goMTAwMCk7XHJcbm1peGVkLnB1c2goXCJLYWxpZ3NcIik7XHJcblxyXG5cclxuLy8gRGVzdHJ1Y3R1cmUoe30pIC0gQnJlYWtzIHVwIHRoZSBzdHJ1Y3R1cmUgb2YgYW4gQXJyYXkgb3IgT2JqZWN0LlxyXG4vLyBQbHVja2luZyBlbGVtZW1udHMgZnJvbSBhbiBBcnJheSBvciBPYmplY3QuIEdlbmVyYWxseSB1c2VkIGluIGltcG9ydCBzdGF0ZW1lbnRzLlxyXG5sZXQge2FkZHJlc3MsIGVtYWlsIH0gPSB1c2VyRGV0YWlsczsgIC8vIExldCdzIGRlc3RydWN0dXJlIHVzZXJEZXRhaWxzIG9iamVjdFxyXG5jb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuY29uc29sZS5sb2coZW1haWwpO1xyXG5cclxuXHJcbmxldCBbQXBwbGUsIEdyZWVuQXBwbGUsIEdyYXBlc10gPSBmcnVpdHM7IC8vIExldCdzIGRlc3RydWN0dXJlIHNvbWUgZnJ1aXRzLlxyXG5jb25zb2xlLmxvZyhBcHBsZSk7XHJcbmNvbnNvbGUubG9nKEdyYXBlcyk7XHJcblxyXG5cclxuLy8gRnVuY3Rpb24gZGF0YSB0eXBlIGFuZCB1c2FnZSBvZiBiYWNrdGlja3MuXHJcbmZ1bmN0aW9uIGdyZWV0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYEhlbGxvICR7bmFtZX1gO1xyXG59XHJcbmNvbnNvbGUubG9nKGdyZWV0KFwib3BpeW9cIikpO1xyXG5cclxuXHJcbi8vIFR5cGUgZGF0YSB0eXBlXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBteVVzZXI6IFVzZXIgPSB7XHJcbiAgICBuYW1lOiBcIkR1bmNhblwiLFxyXG4gICAgYWdlOiAzNFxyXG59O1xyXG5cclxuLy8gT2JqZWN0IERhdGEgVHlwZSAtIGFycmF5IG9mIG9iamVjdHMuXHJcbmNvbnN0IHVzZXJzIDogeyBuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQWRhbVwiLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKb2huXCIsXHJcbiAgICAgICAgYWdlOiA0MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkFuamFuYVwiLFxyXG4gICAgICAgIGFnZTogNDBcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmxldCBhZG1pblVzZXI6IElVc2VyID0ge1xyXG4gICAgbmFtZTogXCJEdW5jYW5cIixcclxuICAgIGFnZTogMzQsXHJcbiAgICB4eXo6IFwiYXNkZlwiLFxyXG4gICAgXHJcbiAgICB3YWxrOiAoKSA9PiB7cmV0dXJuO30gIFxyXG5cclxufVxyXG5jb25zb2xlLmxvZyhhZG1pblVzZXIuYWdlKTtcclxuXHJcblxyXG5cclxubGV0IGhlbGxvOiBJR3JlZXQ7XHJcbmhlbGxvID0gZnVuY3Rpb24objogc3RyaW5nLCBsYW5nOiBzdHJpbmcpe1xyXG4gICAgaWYgKGxhbmcgPT09IFwiZW5cIil7XHJcbiAgICAgICAgcmV0dXJuIGBIZWxsbyAke259IWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgSG9sYSAke259IWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGhlbGxvKFwiRHVuY2FuXCIsIFwiZW5cIikpO1xyXG5cclxuXHJcblxyXG4vLyBEYXRhIHR5cGVzIGFuZCBvcHRpb25hbCBwYXJhbWV0ZXIgZm9yIGEgZnVuY3Rpb24uXHJcblxyXG5mdW5jdGlvbiBncmVldGluZ3MobmFtZTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nPVwiZW5cIiwgZXhjbGFtYXRpb25NYXJrPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gXCJlblwiKXtcclxuICAgICAgICByZXR1cm4gYEhlbGxvICR7bmFtZX1gO1xyXG4gICAgfSBlbHNlIGlmKGxhbmd1YWdlPVwiZXNcIil7XHJcbiAgICAgICAgcmV0dXJuIGBIb2xhICR7bmFtZX0ke2V4Y2xhbWF0aW9uTWFya31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYFlvICR7bmFtZX0hYDtcclxuICAgIH1cclxufVxyXG5cclxuZ3JlZXRpbmdzKFwiRHVuY2FuXCIsIFwiIVwiKTtcclxuY29uc29sZS5sb2coZ3JlZXRpbmdzKFwiRHVuY2FuXCIsICdlbicsICchJykpO1xyXG5cclxuXHJcbi8vIENsYXNzZXMgJiBJbmhlcml0YW5jZSBpbiBUeXBlU2NyaXB0XHJcbmNsYXNzIFBlcnNvbiBpbXBsZW1lbnRzIElVc2Vye1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgICAgICB0aGlzLmFnZT1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYEhlbGxvICR7dGhpcy5uYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgd2FsaygpOiB2b2lkIHsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3VwZXJIZXJvIGV4dGVuZHMgSHVtYW4ge1xyXG4gICAgc3VwZXJQb3dlcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IgKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBvd2VyKHBvd2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1cGVyUG93ZXJzLnB1c2goXCJwb3dlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0UG93ZXJzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdXBlclBvd2VycztcclxuICAgIH1cclxuICAgIFxyXG4gICAgd2FsaygpOiB2b2lkIHsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBiYXRNYW4gPSBuZXcgU3VwZXJIZXJvKFwiQnJ1Y2UgTGVlXCIpO1xyXG5iYXRNYW4uYWRkUG93ZXIoXCJtb25leVwiKTtcclxuY29uc29sZS5sb2coYmF0TWFuLmxpc3RQb3dlcnMpO1xyXG5cclxuXHJcblxyXG4vLyBHZW5lcmljcyBpbiBUeXBlU2NyaXB0XHJcbmZ1bmN0aW9uIHBpY2tlcjxUPihhcmdzOiBUW10pOiBUIHtcclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiBhcmdzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gYXJnc1tyYW5kb21JbmRleF07XHJcbn1cclxuXHJcbmNvbnN0IHN1aXRzID0gWydEaWFtb25kJywgJ0hlYXJ0cycsICdDbHVicycsICdTcGFkZXMnXTtcclxuY29uc3QgbnVtYmVycyA9IFsuLi5BcnJheSgxMykua2V5cygpXTtcclxuY29uc3QgcGlja2VkTnVtYmVyOiBudW1iZXIgPSBwaWNrZXIobnVtYmVycyk7XHJcbmNvbnN0IHBpY2tlZFN1aXQ6IHN0cmluZyA9IHBpY2tlcihzdWl0cyk7XHJcbmNvbnNvbGUubG9nKGBZb3VyIGNhcmQgaXM6ICR7cGlja2VkTnVtYmVyfSAke3BpY2tlZFN1aXR9YCk7XHJcblxyXG5cclxuLy8gRmV0Y2ggQVBJIGluIFR5cGVTY3JpcHQuIEZldGNoIHdhcyByZWNlbnRseSBpbnRyb2R1Y2VkIGluIEVTNiBhbmQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBmZXRjaGluZyByZXNvdXJjZXMuXHJcbi8vIEZldGNoIHJldHVybnMgYSBwcm9taXNlXHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyVmlhRmV0Y2goKXtcclxuICAgIGZldGNoKFwiaHR0cHMvL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlci8xXCIpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCB0aGUgdXNlciB2aWEgZmV0Y2ggYXM6IFwiLCB1c2VyKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
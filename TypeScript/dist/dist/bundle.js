/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./abstract-human.ts":
/*!***************************!*\
  !*** ./abstract-human.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Human)\n/* harmony export */ });\n/*\r\n* Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).\r\n* Abstract method: can only be used in an abstract class, and it does not have a body.\r\n* The body is provided by the subclass (inherited from).\r\n*/\r\nclass Human {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./abstract-human.ts?");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstract_human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-human */ \"./abstract-human.ts\");\n\r\nconst numbersSeq = [0, 1, 2, 3, 4, 10, 20];\r\nconst greaterThanTwo = numbersSeq.filter(number => number > 2);\r\nconsole.log(greaterThanTwo);\r\n// Primitive data types in TypeScript (boolean, number, string).\r\nconst isAdmin = true;\r\nconst user = 'Duncacn';\r\nlet welcome;\r\nif (isAdmin) {\r\n    welcome = `Hello ${user}`;\r\n}\r\nelse {\r\n    welcome = `${user} is not an admin`;\r\n}\r\nconsole.log(welcome);\r\n// Non-primitive data types (array, tuple, enum, any, never, null and undefined, void, function, type, Object).\r\nconst numbersArgs = [0, 1, 2, 3, 4];\r\nnumbersArgs.push(100);\r\nconsole.log(numbersArgs);\r\nconst names = [\"Duncan\", \"John\", \"Pete\"];\r\nnames.push(\"Kaligs\");\r\nconst mixed = [1, \"Duncan\", 10, \"Pete\"];\r\nmixed.push(1000);\r\nmixed.push(\"Kaligs\");\r\n// Function data type\r\nfunction greet(name) {\r\n    return `Hello ${name}`;\r\n}\r\nconsole.log(greet(\"opiyo\"));\r\nconst myUser = {\r\n    name: \"Duncan\",\r\n    age: 34\r\n};\r\n// Object Data Type - array of objects.\r\nconst users = [\r\n    {\r\n        name: \"Adam\",\r\n        age: 30\r\n    },\r\n    {\r\n        name: \"John\",\r\n        age: 40\r\n    },\r\n    {\r\n        name: \"Anjana\",\r\n        age: 40\r\n    }\r\n];\r\nlet adminUser = {\r\n    name: \"Duncan\",\r\n    age: 34,\r\n    xyz: \"asdf\"\r\n};\r\nconsole.log(adminUser.age);\r\nlet hello;\r\nhello = function (n, lang) {\r\n    if (lang === \"en\") {\r\n        return `Hello ${n}!`;\r\n    }\r\n    else {\r\n        return `Hola ${n}!`;\r\n    }\r\n};\r\nconsole.log(hello(\"Duncan\", \"en\"));\r\n// Data types and optional parameter for a function.\r\nfunction greetings(name, language = \"en\", exclamationMark) {\r\n    if (language === \"en\") {\r\n        return `Hello ${name}`;\r\n    }\r\n    else if (language = \"es\") {\r\n        return `Hola ${name}${exclamationMark}`;\r\n    }\r\n    else {\r\n        return `Yo ${name}!`;\r\n    }\r\n}\r\ngreetings(\"Duncan\", \"!\");\r\nconsole.log(greetings(\"Duncan\", 'en', '!'));\r\n// Classes & Inheritance in TypeScript\r\nclass Person {\r\n    constructor(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n    greet() {\r\n        return `Hello ${this.name}`;\r\n    }\r\n}\r\nclass SuperHero extends _abstract_human__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name) {\r\n        super(name);\r\n        this.superPowers = [];\r\n    }\r\n    addPower(power) {\r\n        this.superPowers.push(\"power\");\r\n    }\r\n    listPowers() {\r\n        return this.superPowers;\r\n    }\r\n}\r\nlet batMan = new SuperHero(\"Bruce Lee\");\r\nbatMan.addPower(\"money\");\r\nconsole.log(batMan.listPowers);\r\n// Generics in TypeScript\r\nfunction picker(args) {\r\n    const randomIndex = Math.floor(Math.random() * args.length);\r\n    return args[randomIndex];\r\n}\r\nconst suits = ['Diamond', 'Hearts', 'Clubs', 'Spades'];\r\nconst numbers = [...Array(13).keys()];\r\nconst pickedNumber = picker(numbers);\r\nconst pickedSuit = picker(suits);\r\nconsole.log(`Your card is: ${pickedNumber} ${pickedSuit}`);\r\n\n\n//# sourceURL=webpack:///./app.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;
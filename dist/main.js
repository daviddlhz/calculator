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

/***/ "./src/Startup.ts":
/*!************************!*\
  !*** ./src/Startup.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Startup\": () => (/* binding */ Startup)\n/* harmony export */ });\nvar Startup = /** @class */ (function () {\n    function Startup(_calculator, _inputManipulation) {\n        this.calculator = _calculator;\n        this.inputManipulation = _inputManipulation;\n    }\n    Startup.prototype.Init = function () {\n        var _this = this;\n        var func = function (inputValue, ev) { return _this.Operations(inputValue, ev); };\n        var inputs = this.inputManipulation.getElements(\"input[type=button]\");\n        this.inputManipulation.activeClickEventList(inputs, func);\n    };\n    Startup.prototype.Operations = function (inputValue, ev) {\n        ev.preventDefault();\n        var numberOne = this.inputManipulation.getValue(\"numberOne\");\n        var numberTwo = this.inputManipulation.getValue(\"numberTwo\");\n        var resultOfOperation;\n        switch (inputValue) {\n            case \"+\":\n                resultOfOperation = this.calculator.addition(numberOne, numberTwo);\n                this.inputManipulation.setValue(\"result\", resultOfOperation);\n                break;\n            case \"-\":\n                resultOfOperation = this.calculator.substraction(numberOne, numberTwo);\n                this.inputManipulation.setValue(\"result\", resultOfOperation);\n                break;\n            case \"*\":\n                resultOfOperation = this.calculator.multiplication(numberOne, numberTwo);\n                this.inputManipulation.setValue(\"result\", resultOfOperation);\n                break;\n            case \"/\":\n                resultOfOperation = this.calculator.division(numberOne, numberTwo);\n                this.inputManipulation.setValue(\"result\", resultOfOperation);\n                break;\n            default:\n                break;\n        }\n    };\n    return Startup;\n}());\n\n\n\n//# sourceURL=webpack://calculator/./src/Startup.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Calculator */ \"./src/modules/Calculator.ts\");\n/* harmony import */ var _modules_InputManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/InputManipulation */ \"./src/modules/InputManipulation.ts\");\n/* harmony import */ var _Startup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Startup */ \"./src/Startup.ts\");\n\n\n\nvar App = /** @class */ (function () {\n    function App(_startup) {\n        this.startup = _startup;\n    }\n    return App;\n}());\nvar app = new App(new _Startup__WEBPACK_IMPORTED_MODULE_2__.Startup(new _modules_Calculator__WEBPACK_IMPORTED_MODULE_0__.Calcultator, new _modules_InputManipulation__WEBPACK_IMPORTED_MODULE_1__.InputManipulation));\napp.startup.Init();\n\n\n//# sourceURL=webpack://calculator/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Calculator.ts":
/*!***********************************!*\
  !*** ./src/modules/Calculator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calcultator\": () => (/* binding */ Calcultator)\n/* harmony export */ });\nvar Calcultator = /** @class */ (function () {\n    function Calcultator() {\n    }\n    /**\n     * Method for addition of two numbers\n     * @param numberOne a number one to addition\n     * @param numberTwo  a number two to addition\n     * @returns the sum of the two numbers\n     */\n    Calcultator.prototype.addition = function (numberOne, numberTwo) {\n        return numberOne + numberTwo;\n    };\n    Calcultator.prototype.substraction = function (numberOne, numberTwo) {\n        return numberOne - numberTwo;\n    };\n    Calcultator.prototype.multiplication = function (numberOne, numberTwo) {\n        return numberOne * numberTwo;\n    };\n    Calcultator.prototype.division = function (numberOne, numberTwo) {\n        return numberOne / numberTwo;\n    };\n    return Calcultator;\n}());\n\n\n\n//# sourceURL=webpack://calculator/./src/modules/Calculator.ts?");

/***/ }),

/***/ "./src/modules/InputManipulation.ts":
/*!******************************************!*\
  !*** ./src/modules/InputManipulation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputManipulation\": () => (/* binding */ InputManipulation)\n/* harmony export */ });\nvar InputManipulation = /** @class */ (function () {\n    function InputManipulation() {\n    }\n    InputManipulation.prototype.getValue = function (inputId) {\n        return Number(document.getElementById(inputId).value);\n    };\n    InputManipulation.prototype.setValue = function (inputId, inputValue) {\n        document.getElementById(inputId).value = inputValue.toString();\n    };\n    InputManipulation.prototype.getElements = function (inputType) {\n        return Array.from(document.querySelectorAll(inputType));\n    };\n    InputManipulation.prototype.activeClickEventList = function (inputsElement, functionEvent) {\n        inputsElement.forEach(function (input) {\n            input === null || input === void 0 ? void 0 : input.addEventListener(\"click\", function (ev) {\n                functionEvent(input.value, ev);\n            });\n        });\n    };\n    return InputManipulation;\n}());\n\n\n\n//# sourceURL=webpack://calculator/./src/modules/InputManipulation.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
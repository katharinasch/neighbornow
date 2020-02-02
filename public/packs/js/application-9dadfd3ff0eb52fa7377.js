/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ "./app/javascript/packs/autocomplete.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_autocomplete__WEBPACK_IMPORTED_MODULE_0__);

Object(_autocomplete__WEBPACK_IMPORTED_MODULE_0__["initAutocomplete"])();
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./app/javascript/packs/autocomplete.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/autocomplete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/katharinaschreiber/Desktop/neighbornow_newest/app/javascript/packs/autocomplete.js: Unexpected token, expected \",\" (6:63)\n\n  4 |   const addressInput = document.getElementById('user_street');\n  5 |   if (addressInput) {\n> 6 |     const placesAutocomplete = places({ container: addressInput; templates: {\n    |                                                                ^\n  7 |           value: function(suggestion) {\n  8 |           return suggestion.name;\n  9 |           }\n    at Parser.raise (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:7013:17)\n    at Parser.unexpected (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:8384:16)\n    at Parser.expect (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:8370:28)\n    at Parser.parseObj (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9954:14)\n    at Parser.parseExprAtom (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9582:28)\n    at Parser.parseExprSubscripts (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9219:23)\n    at Parser.parseMaybeUnary (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Parser.parseExprOps (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Parser.parseMaybeConditional (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Parser.parseMaybeAssign (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Parser.parseExprListItem (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10295:18)\n    at Parser.parseCallExpressionArguments (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9404:22)\n    at Parser.parseSubscript (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9310:31)\n    at Parser.parseSubscripts (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9240:19)\n    at Parser.parseExprSubscripts (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9229:17)\n    at Parser.parseMaybeUnary (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Parser.parseExprOps (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Parser.parseMaybeConditional (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Parser.parseMaybeAssign (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Parser.parseVar (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11309:26)\n    at Parser.parseVarStatement (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11128:10)\n    at Parser.parseStatementContent (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10725:21)\n    at Parser.parseStatement (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10658:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11234:25)\n    at Parser.parseBlockBody (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11221:10)\n    at Parser.parseBlock (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11205:10)\n    at Parser.parseStatementContent (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10734:21)\n    at Parser.parseStatement (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10658:17)\n    at Parser.parseIfStatement (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:11012:28)\n    at Parser.parseStatementContent (/Users/katharinaschreiber/Desktop/neighbornow_newest/node_modules/@babel/parser/lib/index.js:10703:21)");

/***/ })

/******/ });
//# sourceMappingURL=application-9dadfd3ff0eb52fa7377.js.map
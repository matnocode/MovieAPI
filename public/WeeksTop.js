/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/GetTile.js":
/*!********************************!*\
  !*** ./src/modules/GetTile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchMovie */ "./src/modules/SearchMovie.js");

var getTile = function getTile(searchTerm, element) {
  var response;
  var title;
  var description;
  var year;
  var poster;
  var rating;
  (0,_SearchMovie__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
    return response = result;
  }).then(function () {
    console.log(response);
    title = response.Title;
    description = response.Plot;
    year = response.Year;
    poster = response.Poster;
    rating = response.imdbRating;
    var strElement = "\n     <hr>\n      <img src=".concat(poster, " width=\"50%\" height=\"50%\">    \n        <small>IMDb Rating: ").concat(rating, "</small>  \n        <h4>").concat(title, "</h4>\n        <p>").concat(year, "</p>\n        <small>").concat(description, "</small>");
    var chld = document.createElement("div");
    chld.className = "col-sm-6 col-lg-4 tile";
    chld.innerHTML = strElement;
    element.appendChild(chld);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTile);

/***/ }),

/***/ "./src/modules/RenderTile.js":
/*!***********************************!*\
  !*** ./src/modules/RenderTile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTile */ "./src/modules/GetTile.js");

var renderTile = function renderTile(searchTerm) {
  var e;
  var row;
  if (document.querySelector(".tileContainer") === null) {
    e = document.createElement("div");
    e.className = "container tileContainer";
    //e.style = "transform: translate(0,20vh)";
    row = document.createElement("div");
    row.className = "row";
  } else {
    e = document.querySelector(".tileContainer");
    row = e.querySelector(".row");
  }

  //fix to get random
  (0,_GetTile__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm, row); //sets innned html
  e.appendChild(row);
  document.querySelector("main").appendChild(e);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTile);

/***/ }),

/***/ "./src/modules/SearchMovie.js":
/*!************************************!*\
  !*** ./src/modules/SearchMovie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchMovie = function searchMovie(input) {
  var type = "t";
  if (input[0] === "t" && input[1] === "t") {
    //imdb id
    type = "i";
  }
  var url = "http://www.omdbapi.com/?apikey=f99c5c6a&";
  var result;
  return fetch("".concat(url).concat(type, "=").concat(input)).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMovie);

/***/ }),

/***/ "./src/modules/main/WeeksTop.js":
/*!**************************************!*\
  !*** ./src/modules/main/WeeksTop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RenderTile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../RenderTile.js */ "./src/modules/RenderTile.js");

var RenderWeeksTop = function RenderWeeksTop() {
  var row = document.createElement("div");
  row.className = "row";
  //fix to get random
  (0,_RenderTile_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Home+Alone", row); //sets innned html
  (0,_RenderTile_js__WEBPACK_IMPORTED_MODULE_0__["default"])("John+Wick", row); //sets innned html
  (0,_RenderTile_js__WEBPACK_IMPORTED_MODULE_0__["default"])("A Christmas Carol", row); //sets innned html
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderWeeksTop);

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
/*!*************************!*\
  !*** ./src/WeeksTop.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_WeeksTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main/WeeksTop */ "./src/modules/main/WeeksTop.js");

(0,_modules_main_WeeksTop__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
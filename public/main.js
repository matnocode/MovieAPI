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

/***/ "./src/modules/SearchMovieButton.js":
/*!******************************************!*\
  !*** ./src/modules/SearchMovieButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RenderTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderTile */ "./src/modules/RenderTile.js");

var searchMovieButton = function searchMovieButton() {
  var input = document.querySelector("#inputText").value;
  //window.location.replace("../public/search.html");
  event.preventDefault();
  document.querySelector("main").innerHTML += "<div class=\"container\" style=\"text-align: center\"><h3>Results</h3><hr></div>";
  (0,_RenderTile__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMovieButton);

/***/ }),

/***/ "./src/modules/main/GetMain.js":
/*!*************************************!*\
  !*** ./src/modules/main/GetMain.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchMovieButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SearchMovieButton */ "./src/modules/SearchMovieButton.js");

var getMain = function getMain() {
  return "  \n  <div class=\"container d-flex justify-content-center\">\n      <img src=\"../content/images/logo.png\" class=\"align-text-middle\">\n</div>\n<div class=\"container input\">\n     <div class=\"row\">\n        <div class=\"col-12\"><h2>Movie Search Engine</h2></div> \n        <div class=\"col-11\">\n        <input type=\"text\" id=\"inputText\">   \n        </div>\n        <div class=\"col-1\">\n            <button class=\"btn btn-secondary\" type=\"submit\" id=\"submitButton\" onclick=\"searchMovieButton()\">Search</button>\n        </div>\n    </div>\n    \n     \n    \n</div>\n";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMain);

/***/ }),

/***/ "./src/modules/main/Main.js":
/*!**********************************!*\
  !*** ./src/modules/main/Main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetMain */ "./src/modules/main/GetMain.js");

var RenderMain = function RenderMain() {
  var element = document.createElement("header");
  element.innerHTML = (0,_GetMain__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector("main").appendChild(element);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderMain);

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main/Main */ "./src/modules/main/Main.js");
/* harmony import */ var _modules_SearchMovieButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/SearchMovieButton */ "./src/modules/SearchMovieButton.js");


(0,_modules_main_Main__WEBPACK_IMPORTED_MODULE_0__["default"])();
document.querySelector(".input").querySelector("button").onclick = _modules_SearchMovieButton__WEBPACK_IMPORTED_MODULE_1__["default"];
})();

/******/ })()
;
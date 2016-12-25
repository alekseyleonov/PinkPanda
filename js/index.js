/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _navSticky = __webpack_require__(1);
	
	var _accordion = __webpack_require__(2);
	
	(0, _navSticky.navSticker)();
	(0, _accordion.accordion)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function navSticker() {
	    document.body.onscroll = function () {
	        var visualiser = document.body.clientHeight - header.getBoundingClientRect().bottom;
	        if (visualiser > 0 && header.getBoundingClientRect().bottom < 0) {
	            navSticky.classList.add('header-products__nav-sticky_is-visible');
	            toTopButton.classList.add('back-to-top-button_is-visible');
	        } else {
	            navSticky.classList.remove('header-products__nav-sticky_is-visible');
	            toTopButton.classList.remove('back-to-top-button_is-visible');
	        }
	    };
	}
	
	exports.navSticker = navSticker;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function accordion() {
	    var accordionHead = document.querySelector('.header-accordion__head');
	    var accordionList = document.querySelector('.header-accordion__list');
	
	    accordionHead.addEventListener('click', function () {
	        accordionList.classList.toggle('header-accordion__list_opened');
	    });
	    document.body.onclick = function () {
	        accordionList.classList.remove('header-accordion__list_opened');
	    };
	    accordionHead.onclick = function (event) {
	        event.stopImmediatePropagation();
	    };
	}
	
	exports.accordion = accordion;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_changecolor_bordertopcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changecolor/bordertopcolor */ "./src/js/modules/changecolor/bordertopcolor.js");
/* harmony import */ var _modules_changecolor_linkcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changecolor/linkcolor */ "./src/js/modules/changecolor/linkcolor.js");
/* harmony import */ var _modules_showcategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showcategory */ "./src/js/modules/showcategory.js");



window.addEventListener('DOMContentLoaded', () => {
  const changelinkColor = new _modules_changecolor_linkcolor__WEBPACK_IMPORTED_MODULE_1__["default"]('.header__menu-item', 'rgb(255, 255, 255)', 'rgb(128, 128, 128)');
  changelinkColor.init();
  const changeBorderTopColor = new _modules_changecolor_bordertopcolor__WEBPACK_IMPORTED_MODULE_0__["default"]('.category__item', '2px solid rgb(0, 0, 0)', '2px solid rgba(128, 128, 128, .2');
  changeBorderTopColor.init();
  const showCategoryBlock = new _modules_showcategory__WEBPACK_IMPORTED_MODULE_2__["default"]('.header__menu-item', '.category__block');
  showCategoryBlock.init();
});

/***/ }),

/***/ "./src/js/modules/changecolor/bordertopcolor.js":
/*!******************************************************!*\
  !*** ./src/js/modules/changecolor/bordertopcolor.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderTopColor; });
/* harmony import */ var _changecolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changecolor */ "./src/js/modules/changecolor/changecolor.js");

class BorderTopColor extends _changecolor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(triggerElem, colorBefore, colorAfter) {
    super(triggerElem, colorBefore, colorAfter);
  }

  transformColor(e) {
    this.triggerElem.forEach(elem => {
      elem.style.borderTop = this.colorAfter;
    });
    e.target.style.borderTop = this.colorBefore;
  }

  originalСolor() {
    this.triggerElem.forEach(elem => {
      elem.style.borderTop = this.colorBefore;
    });
  }

  init() {
    this.triggerElem.forEach(elem => {
      elem.addEventListener('mouseenter', elem => {
        this.transformColor(elem);
      });
      elem.addEventListener('mouseleave', () => {
        this.originalСolor();
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/changecolor/changecolor.js":
/*!***************************************************!*\
  !*** ./src/js/modules/changecolor/changecolor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeColor; });
class ChangeColor {
  constructor(triggers, colorBefore, colorAfter) {
    this.triggerElem = document.querySelectorAll(triggers);
    this.colorBefore = colorBefore;
    this.colorAfter = colorAfter;
  }

}

/***/ }),

/***/ "./src/js/modules/changecolor/linkcolor.js":
/*!*************************************************!*\
  !*** ./src/js/modules/changecolor/linkcolor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkColor; });
/* harmony import */ var _changecolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changecolor */ "./src/js/modules/changecolor/changecolor.js");

class LinkColor extends _changecolor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(triggerElem, colorBefore, colorAfter) {
    super(triggerElem, colorBefore, colorAfter);
  }

  transformColor(e) {
    this.triggerElem.forEach(elem => {
      elem.style.color = this.colorAfter;
    });
    e.target.style.color = this.colorBefore;
  }

  originalСolor() {
    this.triggerElem.forEach(elem => {
      elem.style.color = this.colorBefore;
    });
  }

  init() {
    this.triggerElem.forEach(elem => {
      elem.addEventListener('mouseenter', elem => {
        this.transformColor(elem);
      });
      elem.addEventListener('mouseleave', () => {
        this.originalСolor();
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/showcategory.js":
/*!****************************************!*\
  !*** ./src/js/modules/showcategory.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowCategory; });
class ShowCategory {
  constructor(triggers, category) {
    this.link = document.querySelectorAll(triggers);
    this.blockCategory = document.querySelectorAll(category);
  }

  init() {
    this.link.forEach(link => {
      link.addEventListener('mouseenter', event => {
        const length = this.link.length - 1;

        for (let i = 0; i < length; i++) {
          this.blockCategory[i].style.display = 'none';

          if (event.target.getAttribute('data-category') == this.blockCategory[i].getAttribute('data-category')) {
            this.blockCategory[i].style.display = 'flex';
          }
        }
      });
    });
    this.blockCategory.forEach(elem => {
      elem.addEventListener('mouseleave', () => {
        elem.style.display = 'none';
      });
    });
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
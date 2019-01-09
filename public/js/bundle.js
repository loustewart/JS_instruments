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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const instrumentFamilyData = __webpack_require__(/*! ./data/instrument_family_data.js */ \"./src/data/instrument_family_data.js\");\nconst InstrumentFamilies = __webpack_require__(/*! ./models/instrument_families.js */ \"./src/models/instrument_families.js\");\nconst FamilyDetailView = __webpack_require__(/*! ./views/family_detail_view.js */ \"./src/views/family_detail_view.js\")\nconst FamilyView = __webpack_require__(/*! ./views/family_view.js */ \"./src/views/family_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const selectElement = document.querySelector('#instrument-families');\n\n  const familyView = new FamilyView(selectElement);\n  familyView.bindEvents();\n\n  const familyDetailView = new FamilyDetailView();\n  familyDetailView.bindEvents();\n\n  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);\n  instrumentFamilies.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/data/instrument_family_data.js":
/*!********************************************!*\
  !*** ./src/data/instrument_family_data.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const instrumentFamilyData = [\n  {\n    name: 'Brass',\n    description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\\'s lips',\n    instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']\n  },\n  {\n    name: 'Strings',\n    description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',\n    instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']\n  },\n  {\n    name: 'Wind',\n    description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',\n    instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']\n  },\n  {\n    name: 'Percussion',\n    description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',\n    instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']\n  },\n  {\n    name: 'Keyboard',\n    description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',\n    instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']\n  }\n];\n\nmodule.exports = instrumentFamilyData;\n\n\n//# sourceURL=webpack:///./src/data/instrument_family_data.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function(channel, payload){\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function(channel, callback){\n    document.addEventListener(channel, callback);\n  }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/instrument_families.js":
/*!*******************************************!*\
  !*** ./src/models/instrument_families.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\nconst InstrumentFamilies = function(data) {\n  this.data = data;\n};\n\nInstrumentFamilies.prototype.bindEvents = function (event) {\n  PubSub.publish('Instrument:families-ready', this.data);\n  PubSub.subscribe('Instrument:family-selected', (event) => {\n    const index = event.detail;\n    const familySelected = this.selectFamily(index);\n    PubSub.publish('SelectedFamily:ready', familySelected);\n\n  })\n};\n\n\n  InstrumentFamilies.prototype.selectFamily = function (index) {\n  return this.data[index];\n};\n\n\nmodule.exports = InstrumentFamilies;\n\n\n//# sourceURL=webpack:///./src/models/instrument_families.js?");

/***/ }),

/***/ "./src/views/family_detail_view.js":
/*!*****************************************!*\
  !*** ./src/views/family_detail_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst FamilyDetailView = function() {\n\n};\n\nFamilyDetailView.prototype.bindEvents = function () {\n  PubSub.subscribe('SelectedFamily:ready', (event) => {\n  this.render(event.detail);\n  })\n};\n\n\nFamilyDetailView.prototype.render = function (family) {\n  const familyDiv = document.querySelector('#family-info');\n  const infoPara = document.createElement('p');\n  const list = this.createList(family);\n\n  infoPara.textContent = `The ${family.name} family can be described as ${family.description}`;\n\n  familyDiv.innerHTML = '';\n  familyDiv.appendChild(infoPara);\n  familyDiv.appendChild(list);\n};\n\nFamilyDetailView.prototype.createList = function (family) {\n  const instrumentList = document.createElement('ul');\n  family.instruments.forEach((instrument) => {\n    const instrumentLi = document.createElement('li');\n    instrumentLi.textContent = instrument;\n    instrumentList.appendChild(instrumentLi);\n  })\n  return instrumentList;\n};\n\nmodule.exports = FamilyDetailView;\n\n\n//# sourceURL=webpack:///./src/views/family_detail_view.js?");

/***/ }),

/***/ "./src/views/family_view.js":
/*!**********************************!*\
  !*** ./src/views/family_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst FamilyView = function(element) {\n  this.element = element;\n};\n\nFamilyView.prototype.bindEvents = function () {\n  PubSub.subscribe('Instrument:families-ready', (event) => {\n    this.populate(event.detail);\n  });\n\n  this.element.addEventListener('change', (event) => {\n  const selectedIndex = event.target.value;\n  PubSub.publish('Instrument:family-selected', selectedIndex);\n});\n\n\nFamilyView.prototype.populate = function (instrumentFamilyData) {\n  instrumentFamilyData.forEach((family, index) => {\n    const option = document.createElement('option');\n    option.value = index;\n    option.textContent = family.name;\n    this.element.appendChild(option);\n  })\n  };\n};\n\n\n\nmodule.exports = FamilyView;\n\n\n//# sourceURL=webpack:///./src/views/family_view.js?");

/***/ })

/******/ });
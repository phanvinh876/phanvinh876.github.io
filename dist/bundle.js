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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function webpackMissingModule() { var e = new Error(\"Cannot find module 'peerjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// const Peer = require(\"peerjs\");\n\n\nconst playVideo = __webpack_require__(/*! ./playVideo */ \"./src/playVideo.js\");\nconst openStream = __webpack_require__(/*! ./openStream */ \"./src/openStream.js\");\nconst $ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst uid = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'uid'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst config = {host: \"stream2510.herokuapp.com\", port: 443, secure: true, key: \"peerjs\"};\n\nconst peer = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'peerjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(getPeer(), config)\n\nfunction getPeer() {\n    const id = uid(10)\n    $(\"#peer-id\").append(id)\n    return id;\n}\n\n$(\"#btnConnect\").click(() => {\n    const partnerId = $(\"#txtPartnerId\").val();\n    openStream(stream => {\n        playVideo(stream, \"localStream\");\n        const call = peer.call(partnerId, stream);\n        call.on('stream', (remoteStream) => {\n            playVideo(remoteStream, \"friendStream\");\n        });\n    })\n})\n\npeer.on('call', (call) => {\n    openStream(stream => {\n        playVideo(stream, \"localStream\");\n        call.answer(stream);\n        call.on('stream', (remoteStream) => {\n            playVideo(remoteStream, \"friendStream\");\n        });\n    })\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/openStream.js":
/*!***************************!*\
  !*** ./src/openStream.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const playVideo = __webpack_require__(/*! ./playVideo */ \"./src/playVideo.js\");\n\nfunction openStream(cb) {\n    navigator.mediaDevices.getUserMedia({ audio: true, video: true })\n        .then(stream => {\n            cb(stream);\n        })\n        .catch(err => console.log(err));\n}\n\nmodule.exports = openStream;\n\n//# sourceURL=webpack:///./src/openStream.js?");

/***/ }),

/***/ "./src/playVideo.js":
/*!**************************!*\
  !*** ./src/playVideo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function playVideo(stream, idVideo) {\n    const video = document.getElementById(idVideo);\n    video.srcObject = stream;\n    video.onloadedmetadata = function () {\n        video.play();\n    };\n}\n\nmodule.exports = playVideo;\n\n//# sourceURL=webpack:///./src/playVideo.js?");

/***/ })

/******/ });
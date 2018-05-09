(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Exploder"] = factory();
	else
		root["Exploder"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _gif = __webpack_require__(1);

	var _gif2 = _interopRequireDefault(_gif);

	var _stream_reader = __webpack_require__(2);

	var _stream_reader2 = _interopRequireDefault(_stream_reader);

	var _utils = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var url = URL && URL.createObjectURL ? URL : webkitURL;

	var gifCache = new Map();

	var Exploder = function () {
	  function Exploder(file) {
	    _classCallCheck(this, Exploder);

	    this.file = file;
	  }

	  _createClass(Exploder, [{
	    key: 'load',
	    value: function load() {
	      var _this = this;

	      var cachedGifPromise = gifCache.get(this.file);
	      if (cachedGifPromise) return cachedGifPromise;

	      var gifPromise = _utils.Promises.xhrGet(this.file, '*/*', 'arraybuffer').then(function (buffer) {
	        return _this.explode(buffer);
	      });

	      gifCache.set(this.file, gifPromise);
	      return gifPromise;
	    }
	  }, {
	    key: 'explode',
	    value: function explode(buffer) {
	      console.debug("EXPLODING " + this.file);
	      return new Promise(function (resolve, reject) {
	        var frames = [],
	            streamReader = new _stream_reader2.default(buffer);

	        // Ensure this is an animated GIF
	        if (streamReader.readAscii(6) != "GIF89a") {
	          reject(Error("Not a GIF!"));
	          return;
	        }

	        streamReader.skipBytes(4); // Height & Width
	        if (streamReader.peekBit(1)) {
	          streamReader.log("GLOBAL COLOR TABLE");
	          var colorTableSize = streamReader.readByte() & 0x07;
	          streamReader.log("GLOBAL COLOR TABLE IS " + 3 * Math.pow(2, colorTableSize + 1) + " BYTES");
	          streamReader.skipBytes(2);
	          streamReader.skipBytes(3 * Math.pow(2, colorTableSize + 1));
	        } else {
	          streamReader.log("NO GLOBAL COLOR TABLE");
	        }
	        // WE HAVE ENOUGH FOR THE GIF HEADER!
	        var gifHeader = buffer.slice(0, streamReader.index);

	        var spinning = true,
	            expectingImage = false;
	        while (spinning) {

	          if (streamReader.isNext([0x21, 0xFF])) {
	            streamReader.log("APPLICATION EXTENSION");
	            streamReader.skipBytes(2);
	            var blockSize = streamReader.readByte();
	            streamReader.log(streamReader.readAscii(blockSize));

	            if (streamReader.isNext([0x03, 0x01])) {
	              // we cool
	              streamReader.skipBytes(5);
	            } else {
	              streamReader.log("A weird application extension. Skip until we have 2 NULL bytes");
	              while (!(streamReader.readByte() === 0 && streamReader.peekByte() === 0)) {}
	              streamReader.log("OK moving on");
	              streamReader.skipBytes(1);
	            }
	          } else if (streamReader.isNext([0x21, 0xFE])) {
	            streamReader.log("COMMENT EXTENSION");
	            streamReader.skipBytes(2);

	            while (!streamReader.isNext([0x00])) {
	              var blockSize = streamReader.readByte();
	              streamReader.log(streamReader.readAscii(blockSize));
	            }
	            streamReader.skipBytes(1); //NULL terminator
	          } else if (streamReader.isNext([0x2c])) {
	              streamReader.log("IMAGE DESCRIPTOR!");
	              if (!expectingImage) {
	                // This is a bare image, not prefaced with a Graphics Control Extension
	                // so we should treat it as a frame.
	                frames.push({ index: streamReader.index, delay: 0 });
	              }
	              expectingImage = false;

	              streamReader.skipBytes(9);
	              if (streamReader.peekBit(1)) {
	                streamReader.log("LOCAL COLOR TABLE");
	                var colorTableSize = streamReader.readByte() & 0x07;
	                streamReader.log("LOCAL COLOR TABLE IS " + 3 * Math.pow(2, colorTableSize + 1) + " BYTES");
	                streamReader.skipBytes(3 * Math.pow(2, colorTableSize + 1));
	              } else {
	                streamReader.log("NO LOCAL TABLE PHEW");
	                streamReader.skipBytes(1);
	              }

	              streamReader.log("MIN CODE SIZE " + streamReader.readByte());
	              streamReader.log("DATA START");

	              while (!streamReader.isNext([0x00])) {
	                var blockSize = streamReader.readByte();
	                //        streamReader.log("SKIPPING " + blockSize + " BYTES");
	                streamReader.skipBytes(blockSize);
	              }
	              streamReader.log("DATA END");
	              streamReader.skipBytes(1); //NULL terminator
	            } else if (streamReader.isNext([0x21, 0xF9, 0x04])) {
	                streamReader.log("GRAPHICS CONTROL EXTENSION!");
	                // We _definitely_ have a frame. Now we're expecting an image
	                var index = streamReader.index;

	                streamReader.skipBytes(3);
	                var disposalMethod = streamReader.readByte() >> 2;
	                streamReader.log("DISPOSAL " + disposalMethod);
	                var delay = streamReader.readByte() + streamReader.readByte() * 256;
	                frames.push({ index: index, delay: delay, disposal: disposalMethod });
	                streamReader.log("FRAME DELAY " + delay);
	                streamReader.skipBytes(2);
	                expectingImage = true;
	              } else {
	                var maybeTheEnd = streamReader.index;
	                while (!streamReader.finished() && !streamReader.isNext([0x21, 0xF9, 0x04])) {
	                  streamReader.readByte();
	                }
	                if (streamReader.finished()) {
	                  streamReader.index = maybeTheEnd;
	                  streamReader.log("WE END");
	                  spinning = false;
	                } else {
	                  streamReader.log("UNKNOWN DATA FROM " + maybeTheEnd);
	                }
	              }
	        }
	        var endOfFrames = streamReader.index;

	        var gifFooter = buffer.slice(-1); //last bit is all we need
	        for (var i = 0; i < frames.length; i++) {
	          var frame = frames[i];
	          var nextIndex = i < frames.length - 1 ? frames[i + 1].index : endOfFrames;
	          frame.blob = new Blob([gifHeader, buffer.slice(frame.index, nextIndex), gifFooter], { type: 'image/gif' });
	          frame.url = url.createObjectURL(frame.blob);
	        }

	        resolve(new _gif2.default(frames));
	      });
	    }
	  }]);

	  return Exploder;
	}();

	exports.default = Exploder;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var defaultFrameDelay = 10;

	var Gif = function () {
	  function Gif(frames) {
	    var _this = this;

	    _classCallCheck(this, Gif);

	    this.frames = frames;
	    this.length = 0;
	    this.offsets = [];

	    frames.forEach(function (frame) {
	      _this.offsets.push(_this.length);
	      _this.length += frame.delay || defaultFrameDelay;
	    });
	  }

	  _createClass(Gif, [{
	    key: "frameAt",
	    value: function frameAt(fraction) {
	      var offset = fraction * this.length;
	      for (var i = 1, l = this.offsets.length; i < l; i++) {
	        if (this.offsets[i] > offset) break;
	      }
	      return i - 1;
	    }
	  }]);

	  return Gif;
	}();

	exports.default = Gif;
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamReader = function () {
	  function StreamReader(arrayBuffer) {
	    _classCallCheck(this, StreamReader);

	    this.data = new Uint8Array(arrayBuffer);
	    this.index = 0;
	    this.log("TOTAL LENGTH: " + this.data.length);
	  }

	  _createClass(StreamReader, [{
	    key: "finished",
	    value: function finished() {
	      return this.index >= this.data.length;
	    }
	  }, {
	    key: "readByte",
	    value: function readByte() {
	      return this.data[this.index++];
	    }
	  }, {
	    key: "peekByte",
	    value: function peekByte() {
	      return this.data[this.index];
	    }
	  }, {
	    key: "skipBytes",
	    value: function skipBytes(n) {
	      this.index += n;
	    }
	  }, {
	    key: "peekBit",
	    value: function peekBit(i) {
	      return !!(this.peekByte() & 1 << 8 - i);
	    }
	  }, {
	    key: "readAscii",
	    value: function readAscii(n) {
	      var s = '';
	      for (var i = 0; i < n; i++) {
	        s += String.fromCharCode(this.readByte());
	      }
	      return s;
	    }
	  }, {
	    key: "isNext",
	    value: function isNext(array) {
	      for (var i = 0; i < array.length; i++) {
	        if (array[i] !== this.data[this.index + i]) return false;
	      }
	      return true;
	    }
	  }, {
	    key: "log",
	    value: function log(str) {
	      //  console.log(this.index + ": " + str);
	    }
	  }, {
	    key: "error",
	    value: function error(str) {
	      console.error(this.index + ": " + str);
	    }
	  }]);

	  return StreamReader;
	}();

	exports.default = StreamReader;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Promises = exports.Promises = {
	  xhrGet: function xhrGet(url, accept, responseType) {
	    return new Promise(function (resolve, reject) {
	      var loader = new XMLHttpRequest();
	      loader.open('GET', url, true);
	      loader.setRequestHeader("Accept", accept);
	      loader.responseType = responseType;
	      loader.onload = function () {
	        // This is called even on 404 etc
	        // so check the status
	        if (this.status == 200) {
	          // Resolve the promise with the response text
	          resolve(this.response);
	        } else {
	          // Otherwise reject with the status text
	          // which will hopefully be a meaningful error
	          reject(Error(this.statusText));
	        }
	      };

	      // Handle network errors
	      loader.onerror = function () {
	        reject(Error("Network Error"));
	      };
	      loader.send();
	    });
	  }
	};

/***/ }
/******/ ])
});
;
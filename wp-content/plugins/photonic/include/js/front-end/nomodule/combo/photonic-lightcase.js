/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:2-16 */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 18:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../../../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 55:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:2-16 */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:4-18 */
/*! CommonJS bailout: module.exports is used directly at 9:4-18 */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] -> ../../../../../node_modules/regenerator-runtime/runtime.js */
/*! runtime requirements: module, __webpack_require__ */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../../../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../include/ext/lightcase/lightcase.js":
/*!*********************************************!*\
  !*** ../include/ext/lightcase/lightcase.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js"));

/*
 * Lightcase - jQuery Plugin
 * The smart and flexible Lightbox Plugin.
 *
 * @author		Cornel Boppart <cornel@bopp-art.com>
 * @copyright	Author
 *
 * @version		2.3.6 (20/12/2016)
 */
;

(function ($) {
  'use strict';

  var _self = {
    cache: {},
    support: {},
    objects: {},

    /**
     * Initializes the plugin
     *
     * @param	{object}	options
     * @return	{object}
     */
    init: function init(options) {
      return this.each(function () {
        $(this).unbind('click.lightcase').bind('click.lightcase', function (event) {
          event.preventDefault();
          $(this).lightcase('start', options);
        });
      });
    },

    /**
     * Starts the plugin
     *
     * @param	{object}	options
     * @return	{void}
     */
    start: function start(options) {
      _self.origin = lightcase.origin = this;
      _self.settings = lightcase.settings = $.extend(true, {
        idPrefix: 'lightcase-',
        classPrefix: 'lightcase-',
        attrPrefix: 'lc-',
        transition: 'elastic',
        transitionIn: null,
        transitionOut: null,
        cssTransitions: true,
        speedIn: 250,
        speedOut: 250,
        maxWidth: 800,
        maxHeight: 500,
        forceWidth: false,
        forceHeight: false,
        liveResize: true,
        fullScreenModeForMobile: true,
        mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
        disableShrink: false,
        shrinkFactor: .75,
        overlayOpacity: .9,
        slideshow: false,
        slideshowAutoStart: true,
        timeout: 5000,
        swipe: true,
        useKeys: true,
        useCategories: true,
        navigateEndless: true,
        closeOnOverlayClick: true,
        title: null,
        caption: null,
        showTitle: true,
        showCaption: true,
        showSequenceInfo: true,
        inline: {
          width: 'auto',
          height: 'auto'
        },
        ajax: {
          width: 'auto',
          height: 'auto',
          type: 'get',
          dataType: 'html',
          data: {}
        },
        iframe: {
          width: 800,
          height: 500,
          frameborder: 0
        },
        flash: {
          width: 400,
          height: 205,
          wmode: 'transparent'
        },
        video: {
          width: 400,
          height: 225,
          poster: '',
          preload: 'auto',
          controls: true,
          autobuffer: true,
          autoplay: true,
          loop: false
        },
        attr: 'data-rel',
        href: null,
        type: null,
        typeMapping: {
          'image': 'jpg,jpeg,gif,png,bmp',
          'flash': 'swf',
          'video': 'mp4,mov,ogv,ogg,webm',
          'iframe': 'html,php',
          'ajax': 'json,txt',
          'inline': '#'
        },
        errorMessage: function errorMessage() {
          return '<p class="' + _self.settings.classPrefix + 'error">' + _self.settings.labels['errorMessage'] + '</p>';
        },
        labels: {
          'errorMessage': 'Source could not be found...',
          'sequenceInfo.of': ' of ',
          'close': 'Close',
          'navigator.prev': 'Prev',
          'navigator.next': 'Next',
          'navigator.play': 'Play',
          'navigator.pause': 'Pause'
        },
        markup: function markup() {
          $('body').append(_self.objects.overlay = $('<div id="' + _self.settings.idPrefix + 'overlay"></div>'), _self.objects.loading = $('<div id="' + _self.settings.idPrefix + 'loading" class="' + _self.settings.classPrefix + 'icon-spin"></div>'), _self.objects.case = $('<div id="' + _self.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>'));

          _self.objects.case.after(_self.objects.nav = $('<div id="' + _self.settings.idPrefix + 'nav"></div>'));

          _self.objects.nav.append(_self.objects.close = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-close"><span>' + _self.settings.labels['close'] + '</span></a>'), _self.objects.prev = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-prev"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(), _self.objects.next = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-next"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(), _self.objects.play = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-play"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(), _self.objects.pause = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-pause"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide());

          _self.objects.case.append(_self.objects.content = $('<div id="' + _self.settings.idPrefix + 'content"></div>'), _self.objects.info = $('<div id="' + _self.settings.idPrefix + 'info"></div>'));

          _self.objects.content.append(_self.objects.contentInner = $('<div class="' + _self.settings.classPrefix + 'contentInner"></div>'));

          _self.objects.info.append(_self.objects.sequenceInfo = $('<div id="' + _self.settings.idPrefix + 'sequenceInfo"></div>'), _self.objects.title = $('<h4 id="' + _self.settings.idPrefix + 'title"></h4>'), _self.objects.caption = $('<p id="' + _self.settings.idPrefix + 'caption"></p>'));
        },
        onInit: {},
        onStart: {},
        onFinish: {},
        onClose: {},
        onCleanup: {}
      }, options, // Load options from data-lc-options attribute
      _self.origin.data ? _self.origin.data('lc-options') : {}); // Call onInit hook functions

      _self._callHooks(_self.settings.onInit);

      _self.objectData = _self._setObjectData(this);

      _self._cacheScrollPosition();

      _self._watchScrollInteraction();

      _self._addElements();

      _self._open();

      _self.dimensions = _self.getViewportDimensions();
    },

    /**
     * Getter method for objects
     *
     * @param	{string}	name
     * @return	{object}
     */
    get: function get(name) {
      return _self.objects[name];
    },

    /**
     * Getter method for objectData
     *
     * @return	{object}
     */
    getObjectData: function getObjectData() {
      return _self.objectData;
    },

    /**
     * Sets the object data
     *
     * @param	{object}	object
     * @return	{object}	objectData
     */
    _setObjectData: function _setObjectData(object) {
      var $object = $(object),
          objectData = {
        title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),
        caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),
        url: _self._determineUrl(),
        requestType: _self.settings.ajax.type,
        requestData: _self.settings.ajax.data,
        requestDataType: _self.settings.ajax.dataType,
        rel: $object.attr(_self._determineAttributeSelector()),
        type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),
        isPartOfSequence: _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),
        isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),
        currentIndex: $(_self._determineAttributeSelector()).index($object),
        sequenceLength: $(_self._determineAttributeSelector()).length
      }; // Add sequence info to objectData

      objectData.sequenceInfo = objectData.currentIndex + 1 + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength; // Add next/prev index

      objectData.prevIndex = objectData.currentIndex - 1;
      objectData.nextIndex = objectData.currentIndex + 1;
      return objectData;
    },

    /**
     * Prefixes a data attribute name with defined name from 'settings.attrPrefix'
     * to ensure more uniqueness for all lightcase related/used attributes.
     *
     * @param	{string}	name
     * @return	{string}
     */
    _prefixAttributeName: function _prefixAttributeName(name) {
      return 'data-' + _self.settings.attrPrefix + name;
    },

    /**
     * Determines the link target considering 'settings.href' and data attributes
     * but also with a fallback to the default 'href' value.
     *
     * @return	{string}
     */
    _determineLinkTarget: function _determineLinkTarget() {
      return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href');
    },

    /**
     * Determines the attribute selector to use, depending on
     * whether categorized collections are beeing used or not.
     *
     * @return	{string}	selector
     */
    _determineAttributeSelector: function _determineAttributeSelector() {
      var $origin = $(_self.origin),
          selector = '';

      if (typeof _self.cache.selector !== 'undefined') {
        selector = _self.cache.selector;
      } else if (_self.settings.useCategories === true && $origin.attr(_self._prefixAttributeName('categories'))) {
        var categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');
        $.each(categories, function (index, category) {
          if (index > 0) {
            selector += ',';
          }

          selector += '[' + _self._prefixAttributeName('categories') + '~="' + category + '"]';
        });
      } else {
        selector = '[' + _self.settings.attr + '="' + $origin.attr(_self.settings.attr) + '"]';
      }

      _self.cache.selector = selector;
      return selector;
    },

    /**
     * Determines the correct resource according to the
     * current viewport and density.
     *
     * @return	{string}	url
     */
    _determineUrl: function _determineUrl() {
      var dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),
          width = 0,
          density = 0,
          url;

      $.each(dataUrl, function (index, src) {
        if ( // Check density
        _self._devicePixelRatio() >= src.density && src.density >= density && // Check viewport width
        _self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches && src.width >= width) {
          width = src.width;
          density = src.density;
          url = src.url;
        }
      });
      return url;
    },

    /**
     * Normalizes an url and returns information about the resource path,
     * the viewport width as well as density if defined.
     *
     * @param	{string}	url	Path to resource in format of an url or srcset
     * @return	{object}
     */
    _normalizeUrl: function _normalizeUrl(url) {
      var srcExp = /^\d+$/;
      return url.split(',').map(function (str) {
        var src = {
          width: 0,
          density: 0
        };
        str.trim().split(/\s+/).forEach(function (url, i) {
          if (i === 0) {
            return src.url = url;
          }

          var value = url.substring(0, url.length - 1),
              lastChar = url[url.length - 1],
              intVal = parseInt(value, 10),
              floatVal = parseFloat(value);

          if (lastChar === 'w' && srcExp.test(value)) {
            src.width = intVal;
          } else if (lastChar === 'h' && srcExp.test(value)) {
            src.height = intVal;
          } else if (lastChar === 'x' && !isNaN(floatVal)) {
            src.density = floatVal;
          }
        });
        return src;
      });
    },

    /**
     * Verifies if the link is part of a sequence
     *
     * @param	{string}	rel
     * @param	{string}	expression
     * @return	{boolean}
     */
    _isPartOfSequence: function _isPartOfSequence(rel, expression) {
      var getSimilarLinks = $('[' + _self.settings.attr + '="' + rel + '"]'),
          regexp = new RegExp(expression);
      return regexp.test(rel) && getSimilarLinks.length > 1;
    },

    /**
     * Verifies if the slideshow should be enabled
     *
     * @return	{boolean}
     */
    isSlideshowEnabled: function isSlideshowEnabled() {
      return _self.objectData.isPartOfSequence && (_self.settings.slideshow === true || _self.objectData.isPartOfSequenceWithSlideshow === true);
    },

    /**
     * Loads the new content to show
     *
     * @return	{void}
     */
    _loadContent: function _loadContent() {
      if (_self.cache.originalObject) {
        _self._restoreObject();
      }

      _self._createObject();
    },

    /**
     * Creates a new object
     *
     * @return	{void}
     */
    _createObject: function _createObject() {
      var $object; // Create object

      switch (_self.objectData.type) {
        case 'image':
          $object = $(new Image());
          $object.attr({
            // The time expression is required to prevent the binding of an image load
            'src': _self.objectData.url,
            'alt': _self.objectData.title
          });
          break;

        case 'inline':
          $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
          $object.html(_self._cloneObject($(_self.objectData.url))); // Add custom attributes from _self.settings

          $.each(_self.settings.inline, function (name, value) {
            $object.attr(_self._prefixAttributeName(name), value);
          });
          break;

        case 'ajax':
          $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>'); // Add custom attributes from _self.settings

          $.each(_self.settings.ajax, function (name, value) {
            if (name !== 'data') {
              $object.attr(_self._prefixAttributeName(name), value);
            }
          });
          break;

        case 'flash':
          $object = $('<embed src="' + _self.objectData.url + '" type="application/x-shockwave-flash"></embed>'); // Add custom attributes from _self.settings

          $.each(_self.settings.flash, function (name, value) {
            $object.attr(name, value);
          });
          break;

        case 'video':
          $object = $('<video></video>');
          $object.attr('src', _self.objectData.url); // Add custom attributes from _self.settings

          $.each(_self.settings.video, function (name, value) {
            $object.attr(name, value);
          });
          break;

        default:
          $object = $('<iframe></iframe>');
          $object.attr({
            'src': _self.objectData.url
          }); // Add custom attributes from _self.settings

          $.each(_self.settings.iframe, function (name, value) {
            $object.attr(name, value);
          });
          break;
      }

      _self._addObject($object);

      _self._loadObject($object);
    },

    /**
     * Adds the new object to the markup
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _addObject: function _addObject($object) {
      // Add object to content holder
      _self.objects.contentInner.html($object); // Start loading


      _self._loading('start'); // Call onStart hook functions


      _self._callHooks(_self.settings.onStart); // Add sequenceInfo to the content holder or hide if its empty


      if (_self.settings.showSequenceInfo === true && _self.objectData.isPartOfSequence) {
        _self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);

        _self.objects.sequenceInfo.show();
      } else {
        _self.objects.sequenceInfo.empty();

        _self.objects.sequenceInfo.hide();
      } // Add title to the content holder or hide if its empty


      if (_self.settings.showTitle === true && _self.objectData.title !== undefined && _self.objectData.title !== '') {
        _self.objects.title.html(_self.objectData.title);

        _self.objects.title.show();
      } else {
        _self.objects.title.empty();

        _self.objects.title.hide();
      } // Add caption to the content holder or hide if its empty


      if (_self.settings.showCaption === true && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {
        _self.objects.caption.html(_self.objectData.caption);

        _self.objects.caption.show();
      } else {
        _self.objects.caption.empty();

        _self.objects.caption.hide();
      }
    },

    /**
     * Loads the new object
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _loadObject: function _loadObject($object) {
      // Load the object
      switch (_self.objectData.type) {
        case 'inline':
          if ($(_self.objectData.url)) {
            _self._showContent($object);
          } else {
            _self.error();
          }

          break;

        case 'ajax':
          $.ajax($.extend({}, _self.settings.ajax, {
            url: _self.objectData.url,
            type: _self.objectData.requestType,
            dataType: _self.objectData.requestDataType,
            data: _self.objectData.requestData,
            success: function success(data, textStatus, jqXHR) {
              // Unserialize if data is transferred as json
              if (_self.objectData.requestDataType === 'json') {
                _self.objectData.data = data;
              } else {
                $object.html(data);
              }

              _self._showContent($object);
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              _self.error();
            }
          }));
          break;

        case 'flash':
          _self._showContent($object);

          break;

        case 'video':
          if (typeof $object.get(0).canPlayType === 'function' || _self.objects.case.find('video').length === 0) {
            _self._showContent($object);
          } else {
            _self.error();
          }

          break;

        default:
          if (_self.objectData.url) {
            $object.on('load', function () {
              _self._showContent($object);
            });
            $object.on('error', function () {
              _self.error();
            });
          } else {
            _self.error();
          }

          break;
      }
    },

    /**
     * Throws an error message if something went wrong
     *
     * @return	{void}
     */
    error: function error() {
      _self.objectData.type = 'error';
      var $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
      $object.html(_self.settings.errorMessage);

      _self.objects.contentInner.html($object);

      _self._showContent(_self.objects.contentInner);
    },

    /**
     * Calculates the dimensions to fit content
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _calculateDimensions: function _calculateDimensions($object) {
      _self._cleanupDimensions(); // Set default dimensions


      var dimensions = {
        objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),
        objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))
      };

      if (!_self.settings.disableShrink) {
        // Add calculated maximum width/height to dimensions
        dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);
        dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor); // If the auto calculated maxWidth/maxHeight greather than the userdefined one, use that.

        if (dimensions.maxWidth > _self.settings.maxWidth) {
          dimensions.maxWidth = _self.settings.maxWidth;
        }

        if (dimensions.maxHeight > _self.settings.maxHeight) {
          dimensions.maxHeight = _self.settings.maxHeight;
        } // Calculate the difference between screen width/height and image width/height


        dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
        dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);

        switch (_self.objectData.type) {
          case 'image':
          case 'flash':
          case 'video':
            if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
              dimensions.objectWidth = dimensions.maxWidth;
              dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);
            }

            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
              dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
              dimensions.objectHeight = dimensions.maxHeight;
            }

            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
              dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
              dimensions.objectHeight = dimensions.maxHeight;
            }

            break;

          case 'error':
            if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
              dimensions.objectWidth = dimensions.maxWidth;
            }

            break;

          default:
            if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {
              dimensions.objectWidth = dimensions.maxWidth;
            }

            if ((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto' || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {
              dimensions.objectHeight = dimensions.maxHeight;
            }

            break;
        }
      }

      if (_self.settings.forceWidth) {
        dimensions.maxWidth = dimensions.objectWidth;
      } else if ($object.attr(_self._prefixAttributeName('max-width'))) {
        dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'));
      }

      if (_self.settings.forceHeight) {
        dimensions.maxHeight = dimensions.objectHeight;
      } else if ($object.attr(_self._prefixAttributeName('max-height'))) {
        dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'));
      }

      _self._adjustDimensions($object, dimensions);
    },

    /**
     * Adjusts the dimensions
     *
     * @param	{object}	$object
     * @param	{object}	dimensions
     * @return	{void}
     */
    _adjustDimensions: function _adjustDimensions($object, dimensions) {
      // Adjust width and height
      $object.css({
        'width': dimensions.objectWidth,
        'height': dimensions.objectHeight,
        'max-width': dimensions.maxWidth,
        'max-height': dimensions.maxHeight
      });

      _self.objects.contentInner.css({
        'width': $object.outerWidth(),
        'height': $object.outerHeight(),
        'max-width': '100%'
      });

      _self.objects.case.css({
        'width': _self.objects.contentInner.outerWidth()
      }); // Adjust margin


      _self.objects.case.css({
        'margin-top': parseInt(-(_self.objects.case.outerHeight() / 2)),
        'margin-left': parseInt(-(_self.objects.case.outerWidth() / 2))
      });
    },

    /**
     * Handles the _loading
     *
     * @param	{string}	process
     * @return	{void}
     */
    _loading: function _loading(process) {
      if (process === 'start') {
        _self.objects.case.addClass(_self.settings.classPrefix + 'loading');

        _self.objects.loading.show();
      } else if (process === 'end') {
        _self.objects.case.removeClass(_self.settings.classPrefix + 'loading');

        _self.objects.loading.hide();
      }
    },

    /**
     * Gets the client screen dimensions
     *
     * @return	{object}	dimensions
     */
    getViewportDimensions: function getViewportDimensions() {
      return {
        windowWidth: $(window).innerWidth(),
        windowHeight: $(window).innerHeight()
      };
    },

    /**
     * Verifies the url
     *
     * @param	{string}	dataUrl
     * @return	{object}	dataUrl	Clean url for processing content
     */
    _verifyDataUrl: function _verifyDataUrl(dataUrl) {
      if (!dataUrl || dataUrl === undefined || dataUrl === '') {
        return false;
      }

      if (dataUrl.indexOf('#') > -1) {
        dataUrl = dataUrl.split('#');
        dataUrl = '#' + dataUrl[dataUrl.length - 1];
      }

      return _self._normalizeUrl(dataUrl.toString());
    },

    /**
     * Verifies the data type of the content to load
     *
     * @param	{string}			url
     * @return	{string|boolean}	Array key if expression matched, else false
     */
    _verifyDataType: function _verifyDataType(url) {
      var typeMapping = _self.settings.typeMapping; // Early abort if dataUrl couldn't be verified

      if (!url) {
        return false;
      } // Verify the dataType of url according to typeMapping which
      // has been defined in settings.


      for (var key in typeMapping) {
        if (typeMapping.hasOwnProperty(key)) {
          var suffixArr = typeMapping[key].split(',');

          for (var i = 0; i < suffixArr.length; i++) {
            var suffix = suffixArr[i].toLowerCase(),
                regexp = new RegExp('\.(' + suffix + ')$', 'i'),
                // Verify only the last 5 characters of the string
            str = url.toLowerCase().split('?')[0].substr(-5);

            if (regexp.test(str) === true || key === 'inline' && url.indexOf(suffix) > -1) {
              return key;
            }
          }
        }
      } // If no expression matched, return 'iframe'.


      return 'iframe';
    },

    /**
     * Extends html markup with the essential tags
     *
     * @return	{void}
     */
    _addElements: function _addElements() {
      if (typeof _self.objects.case !== 'undefined' && $('#' + _self.objects.case.attr('id')).length) {
        return;
      }

      _self.settings.markup();
    },

    /**
     * Shows the loaded content
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _showContent: function _showContent($object) {
      // Add data attribute with the object type
      _self.objects.case.attr(_self._prefixAttributeName('type'), _self.objectData.type);

      _self.cache.object = $object;

      _self._calculateDimensions($object); // Call onFinish hook functions


      _self._callHooks(_self.settings.onFinish);

      switch (_self.settings.transitionIn) {
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollHorizontal':
        case 'scrollVertical':
          _self.transition.scroll(_self.objects.case, 'in', _self.settings.speedIn);

          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);

          break;

        case 'elastic':
          if (_self.objects.case.css('opacity') < 1) {
            _self.transition.zoom(_self.objects.case, 'in', _self.settings.speedIn);

            _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
          }

        case 'fade':
        case 'fadeInline':
          _self.transition.fade(_self.objects.case, 'in', _self.settings.speedIn);

          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);

          break;

        default:
          _self.transition.fade(_self.objects.case, 'in', 0);

          break;
      } // End loading.


      _self._loading('end');

      _self.isBusy = false;
    },

    /**
     * Processes the content to show
     *
     * @return	{void}
     */
    _processContent: function _processContent() {
      _self.isBusy = true;

      switch (_self.settings.transitionOut) {
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollVertical':
        case 'scrollHorizontal':
          if (_self.objects.case.is(':hidden')) {
            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
              _self._loadContent();
            });

            _self.transition.fade(_self.objects.contentInner, 'out', 0);
          } else {
            _self.transition.scroll(_self.objects.case, 'out', _self.settings.speedOut, function () {
              _self._loadContent();
            });
          }

          break;

        case 'fade':
          if (_self.objects.case.is(':hidden')) {
            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
              _self._loadContent();
            });
          } else {
            _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
              _self._loadContent();
            });
          }

          break;

        case 'fadeInline':
        case 'elastic':
          if (_self.objects.case.is(':hidden')) {
            _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
              _self._loadContent();
            });
          } else {
            _self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function () {
              _self._loadContent();
            });
          }

          break;

        default:
          _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
            _self._loadContent();
          });

          break;
      }
    },

    /**
     * Handles events for gallery buttons
     *
     * @return	{void}
     */
    _handleEvents: function _handleEvents() {
      _self._unbindEvents();

      _self.objects.nav.children().not(_self.objects.close).hide(); // If slideshow is enabled, show play/pause and start timeout.


      if (_self.isSlideshowEnabled()) {
        // Only start the timeout if slideshow autostart is enabled and slideshow is not pausing
        if ((_self.settings.slideshowAutoStart === true || _self.isSlideshowStarted) && !_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')) {
          _self._startTimeout();
        } else {
          _self._stopTimeout();
        }
      }

      if (_self.settings.liveResize) {
        _self._watchResizeInteraction();
      }

      _self.objects.close.click(function (event) {
        event.preventDefault();

        _self.close();
      });

      if (_self.settings.closeOnOverlayClick === true) {
        _self.objects.overlay.css('cursor', 'pointer').click(function (event) {
          event.preventDefault();

          _self.close();
        });
      }

      if (_self.settings.useKeys === true) {
        _self._addKeyEvents();
      }

      if (_self.objectData.isPartOfSequence) {
        _self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), true);

        _self.objects.nav.data('items', _self._setNavigation());

        _self.objects.prev.click(function (event) {
          event.preventDefault();

          if (_self.settings.navigateEndless === true || !_self.item.isFirst()) {
            _self.objects.prev.unbind('click');

            _self.cache.action = 'prev';

            _self.objects.nav.data('items').prev.click();

            if (_self.isSlideshowEnabled()) {
              _self._stopTimeout();
            }
          }
        });

        _self.objects.next.click(function (event) {
          event.preventDefault();

          if (_self.settings.navigateEndless === true || !_self.item.isLast()) {
            _self.objects.next.unbind('click');

            _self.cache.action = 'next';

            _self.objects.nav.data('items').next.click();

            if (_self.isSlideshowEnabled()) {
              _self._stopTimeout();
            }
          }
        });

        if (_self.isSlideshowEnabled()) {
          _self.objects.play.click(function (event) {
            event.preventDefault();

            _self._startTimeout();
          });

          _self.objects.pause.click(function (event) {
            event.preventDefault();

            _self._stopTimeout();
          });
        } // Enable swiping if activated


        if (_self.settings.swipe === true) {
          if ($.isPlainObject($.event.special.swipeleft)) {
            _self.objects.case.on('swipeleft', function (event) {
              event.preventDefault();

              _self.objects.next.click();

              if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
              }
            });
          }

          if ($.isPlainObject($.event.special.swiperight)) {
            _self.objects.case.on('swiperight', function (event) {
              event.preventDefault();

              _self.objects.prev.click();

              if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
              }
            });
          }
        }
      }
    },

    /**
     * Adds the key events
     *
     * @return	{void}
     */
    _addKeyEvents: function _addKeyEvents() {
      $(document).bind('keyup.lightcase', function (event) {
        // Do nothing if lightcase is in process
        if (_self.isBusy) {
          return;
        }

        switch (event.keyCode) {
          // Escape key
          case 27:
            _self.objects.close.click();

            break;
          // Backward key

          case 37:
            if (_self.objectData.isPartOfSequence) {
              _self.objects.prev.click();
            }

            break;
          // Forward key

          case 39:
            if (_self.objectData.isPartOfSequence) {
              _self.objects.next.click();
            }

            break;
        }
      });
    },

    /**
     * Starts the slideshow timeout
     *
     * @return	{void}
     */
    _startTimeout: function _startTimeout() {
      _self.isSlideshowStarted = true;

      _self.objects.play.hide();

      _self.objects.pause.show();

      _self.cache.action = 'next';

      _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');

      _self.timeout = setTimeout(function () {
        _self.objects.nav.data('items').next.click();
      }, _self.settings.timeout);
    },

    /**
     * Stops the slideshow timeout
     *
     * @return	{void}
     */
    _stopTimeout: function _stopTimeout() {
      _self.objects.play.show();

      _self.objects.pause.hide();

      _self.objects.nav.addClass(_self.settings.classPrefix + 'paused');

      clearTimeout(_self.timeout);
    },

    /**
     * Sets the navigator buttons (prev/next)
     *
     * @return	{object}	items
     */
    _setNavigation: function _setNavigation() {
      var $links = $(_self.cache.selector || _self.settings.attr),
          sequenceLength = _self.objectData.sequenceLength - 1,
          items = {
        prev: $links.eq(_self.objectData.prevIndex),
        next: $links.eq(_self.objectData.nextIndex)
      };

      if (_self.objectData.currentIndex > 0) {
        _self.objects.prev.show();
      } else {
        items.prevItem = $links.eq(sequenceLength);
      }

      if (_self.objectData.nextIndex <= sequenceLength) {
        _self.objects.next.show();
      } else {
        items.next = $links.eq(0);
      }

      if (_self.settings.navigateEndless === true) {
        _self.objects.prev.show();

        _self.objects.next.show();
      }

      return items;
    },

    /**
     * Item information/status
     *
     */
    item: {
      /**
       * Verifies if the current item is first item.
       *
       * @return	{boolean}
       */
      isFirst: function isFirst() {
        return _self.objectData.currentIndex === 0;
      },

      /**
       * Verifies if the current item is last item.
       *
       * @return	{boolean}
       */
      isLast: function isLast() {
        return _self.objectData.currentIndex === _self.objectData.sequenceLength - 1;
      }
    },

    /**
     * Clones the object for inline elements
     *
     * @param	{object}	$object
     * @return	{object}	$clone
     */
    _cloneObject: function _cloneObject($object) {
      var $clone = $object.clone(),
          objectId = $object.attr('id'); // If element is hidden, cache the object and remove

      if ($object.is(':hidden')) {
        _self._cacheObjectData($object);

        $object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty();
      } else {
        // Prevent duplicated id's
        $clone.removeAttr('id');
      }

      return $clone.show();
    },

    /**
     * Verifies if it is a mobile device
     *
     * @return	{boolean}
     */
    isMobileDevice: function isMobileDevice() {
      var deviceAgent = navigator.userAgent.toLowerCase(),
          agentId = deviceAgent.match(_self.settings.mobileMatchExpression);
      return agentId ? true : false;
    },

    /**
     * Verifies if css transitions are supported
     *
     * @return	{string|boolean}	The transition prefix if supported, else false.
     */
    isTransitionSupported: function isTransitionSupported() {
      var body = $('body').get(0),
          isTransitionSupported = false,
          transitionMapping = {
        'transition': '',
        'WebkitTransition': '-webkit-',
        'MozTransition': '-moz-',
        'OTransition': '-o-',
        'MsTransition': '-ms-'
      };

      for (var key in transitionMapping) {
        if (transitionMapping.hasOwnProperty(key) && key in body.style) {
          _self.support.transition = transitionMapping[key];
          isTransitionSupported = true;
        }
      }

      return isTransitionSupported;
    },

    /**
     * Transition types
     *
     */
    transition: {
      /**
       * Fades in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{number}	opacity
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      fade: function fade($object, type, speed, opacity, callback) {
        var isInTransition = type === 'in',
            startTransition = {},
            startOpacity = $object.css('opacity'),
            endTransition = {},
            endOpacity = opacity ? opacity : isInTransition ? 1 : 0;
        if (!_self.isOpen && isInTransition) return;
        startTransition['opacity'] = startOpacity;
        endTransition['opacity'] = endOpacity;
        $object.css(startTransition).show(); // Css transition

        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transition', '');

              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      },

      /**
       * Scrolls in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      scroll: function scroll($object, type, speed, callback) {
        var isInTransition = type === 'in',
            transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,
            direction = 'left',
            startTransition = {},
            startOpacity = isInTransition ? 0 : 1,
            startOffset = isInTransition ? '-50%' : '50%',
            endTransition = {},
            endOpacity = isInTransition ? 1 : 0,
            endOffset = isInTransition ? '50%' : '-50%';
        if (!_self.isOpen && isInTransition) return;

        switch (transition) {
          case 'scrollTop':
            direction = 'top';
            break;

          case 'scrollRight':
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;

          case 'scrollBottom':
            direction = 'top';
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;

          case 'scrollHorizontal':
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '-50%';
            break;

          case 'scrollVertical':
            direction = 'top';
            startOffset = isInTransition ? '-50%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;
        }

        if (_self.cache.action === 'prev') {
          switch (transition) {
            case 'scrollHorizontal':
              startOffset = isInTransition ? '-50%' : '50%';
              endOffset = isInTransition ? '50%' : '150%';
              break;

            case 'scrollVertical':
              startOffset = isInTransition ? '150%' : '50%';
              endOffset = isInTransition ? '50%' : '-50%';
              break;
          }
        }

        startTransition['opacity'] = startOpacity;
        startTransition[direction] = startOffset;
        endTransition['opacity'] = endOpacity;
        endTransition[direction] = endOffset;
        $object.css(startTransition).show(); // Css transition

        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transition', '');

              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      },

      /**
       * Zooms in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      zoom: function zoom($object, type, speed, callback) {
        var isInTransition = type === 'in',
            startTransition = {},
            startOpacity = $object.css('opacity'),
            startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
            endTransition = {},
            endOpacity = isInTransition ? 1 : 0,
            endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';
        if (!_self.isOpen && isInTransition) return;
        startTransition['opacity'] = startOpacity;
        startTransition[_self.support.transition + 'transform'] = startScale;
        endTransition['opacity'] = endOpacity;
        $object.css(startTransition).show(); // Css transition

        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transform'] = endScale;
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transform', '');
              $object.css(_self.support.transition + 'transition', '');

              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      }
    },

    /**
     * Calls all the registered functions of a specific hook
     *
     * @param	{object}	hooks
     * @return	{void}
     */
    _callHooks: function _callHooks(hooks) {
      if ((0, _typeof2.default)(hooks) === 'object') {
        $.each(hooks, function (index, hook) {
          if (typeof hook === 'function') {
            hook.call(_self.origin);
          }
        });
      }
    },

    /**
     * Caches the object data
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _cacheObjectData: function _cacheObjectData($object) {
      $.data($object, 'cache', {
        id: $object.attr('id'),
        content: $object.html()
      });
      _self.cache.originalObject = $object;
    },

    /**
     * Restores the object from cache
     *
     * @return	void
     */
    _restoreObject: function _restoreObject() {
      var $object = $('[id^="' + _self.settings.idPrefix + 'temp-"]');
      $object.attr('id', $.data(_self.cache.originalObject, 'cache').id);
      $object.html($.data(_self.cache.originalObject, 'cache').content);
    },

    /**
     * Executes functions for a window resize.
     * It stops an eventual timeout and recalculates dimenstions.
     *
     * @return	{void}
     */
    resize: function resize() {
      if (!_self.isOpen) return;

      if (_self.isSlideshowEnabled()) {
        _self._stopTimeout();
      }

      _self.dimensions = _self.getViewportDimensions();

      _self._calculateDimensions(_self.cache.object);
    },

    /**
     * Caches the actual scroll coordinates.
     *
     * @return	{void}
     */
    _cacheScrollPosition: function _cacheScrollPosition() {
      var $window = $(window),
          $document = $(document),
          offset = {
        'top': $window.scrollTop(),
        'left': $window.scrollLeft()
      };
      _self.cache.scrollPosition = _self.cache.scrollPosition || {};

      if (!_self._assertContentInvisible()) {
        _self.cache.cacheScrollPositionSkipped = true;
      } else if (_self.cache.cacheScrollPositionSkipped) {
        delete _self.cache.cacheScrollPositionSkipped;

        _self._restoreScrollPosition();
      } else {
        if ($document.width() > $window.width()) {
          _self.cache.scrollPosition.left = offset.left;
        }

        if ($document.height() > $window.height()) {
          _self.cache.scrollPosition.top = offset.top;
        }
      }
    },

    /**
     * Watches for any resize interaction and caches the new sizes.
     *
     * @return	{void}
     */
    _watchResizeInteraction: function _watchResizeInteraction() {
      $(window).resize(_self.resize);
    },

    /**
     * Stop watching any resize interaction related to _self.
     *
     * @return	{void}
     */
    _unwatchResizeInteraction: function _unwatchResizeInteraction() {
      $(window).off('resize', _self.resize);
    },

    /**
     * Watches for any scroll interaction and caches the new position.
     *
     * @return	{void}
     */
    _watchScrollInteraction: function _watchScrollInteraction() {
      $(window).scroll(_self._cacheScrollPosition);
      $(window).resize(_self._cacheScrollPosition);
    },

    /**
     * Stop watching any scroll interaction related to _self.
     *
     * @return	{void}
     */
    _unwatchScrollInteraction: function _unwatchScrollInteraction() {
      $(window).off('scroll', _self._cacheScrollPosition);
      $(window).off('resize', _self._cacheScrollPosition);
    },

    /**
     * Ensures that site content is invisible or has not height.
     *
     * @return	{boolean}
     */
    _assertContentInvisible: function _assertContentInvisible() {
      return $($('body').children().not('[id*=' + _self.settings.idPrefix + ']').get(0)).height() > 0;
    },

    /**
     * Restores to the original scoll position before
     * lightcase got initialized.
     *
     * @return	{void}
     */
    _restoreScrollPosition: function _restoreScrollPosition() {
      $(window).scrollTop(parseInt(_self.cache.scrollPosition.top)).scrollLeft(parseInt(_self.cache.scrollPosition.left)).resize();
    },

    /**
     * Switches to the fullscreen mode
     *
     * @return	{void}
     */
    _switchToFullScreenMode: function _switchToFullScreenMode() {
      _self.settings.shrinkFactor = 1;
      _self.settings.overlayOpacity = 1;
      $('html').addClass(_self.settings.classPrefix + 'fullScreenMode');
    },

    /**
     * Enters into the lightcase view
     *
     * @return	{void}
     */
    _open: function _open() {
      _self.isOpen = true;
      _self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : false;
      _self.support.mobileDevice = _self.isMobileDevice();

      if (_self.support.mobileDevice) {
        $('html').addClass(_self.settings.classPrefix + 'isMobileDevice');

        if (_self.settings.fullScreenModeForMobile) {
          _self._switchToFullScreenMode();
        }
      }

      if (!_self.settings.transitionIn) {
        _self.settings.transitionIn = _self.settings.transition;
      }

      if (!_self.settings.transitionOut) {
        _self.settings.transitionOut = _self.settings.transition;
      }

      switch (_self.settings.transitionIn) {
        case 'fade':
        case 'fadeInline':
        case 'elastic':
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollVertical':
        case 'scrollHorizontal':
          if (_self.objects.case.is(':hidden')) {
            _self.objects.close.css('opacity', 0);

            _self.objects.overlay.css('opacity', 0);

            _self.objects.case.css('opacity', 0);

            _self.objects.contentInner.css('opacity', 0);
          }

          _self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function () {
            _self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);

            _self._handleEvents();

            _self._processContent();
          });

          break;

        default:
          _self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function () {
            _self.transition.fade(_self.objects.close, 'in', 0);

            _self._handleEvents();

            _self._processContent();
          });

          break;
      }

      $('html').addClass(_self.settings.classPrefix + 'open');

      _self.objects.case.attr('aria-hidden', 'false');
    },

    /**
     * Escapes from the lightcase view
     *
     * @return	{void}
     */
    close: function close() {
      _self.isOpen = false;

      if (_self.isSlideshowEnabled()) {
        _self._stopTimeout();

        _self.isSlideshowStarted = false;

        _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
      }

      _self.objects.loading.hide();

      _self._unbindEvents();

      _self._unwatchResizeInteraction();

      _self._unwatchScrollInteraction();

      $('html').removeClass(_self.settings.classPrefix + 'open');

      _self.objects.case.attr('aria-hidden', 'true');

      _self.objects.nav.children().hide();

      _self._restoreScrollPosition(); // Call onClose hook functions


      _self._callHooks(_self.settings.onClose);

      switch (_self.settings.transitionOut) {
        case 'fade':
        case 'fadeInline':
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollHorizontal':
        case 'scrollVertical':
          _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
              _self.cleanup();
            });
          });

          break;

        case 'elastic':
          _self.transition.zoom(_self.objects.case, 'out', _self.settings.speedOut, function () {
            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
              _self.cleanup();
            });
          });

          break;

        default:
          _self.cleanup();

          break;
      }
    },

    /**
     * Unbinds all given events
     *
     * @return	{void}
     */
    _unbindEvents: function _unbindEvents() {
      // Unbind overlay event
      _self.objects.overlay.unbind('click'); // Unbind key events


      $(document).unbind('keyup.lightcase'); // Unbind swipe events

      _self.objects.case.unbind('swipeleft').unbind('swiperight'); // Unbind navigator events


      _self.objects.prev.unbind('click');

      _self.objects.next.unbind('click');

      _self.objects.play.unbind('click');

      _self.objects.pause.unbind('click'); // Unbind close event


      _self.objects.close.unbind('click');
    },

    /**
     * Cleans up the dimensions
     *
     * @return	{void}
     */
    _cleanupDimensions: function _cleanupDimensions() {
      var opacity = _self.objects.contentInner.css('opacity');

      _self.objects.case.css({
        'width': '',
        'height': '',
        'top': '',
        'left': '',
        'margin-top': '',
        'margin-left': ''
      });

      _self.objects.contentInner.removeAttr('style').css('opacity', opacity);

      _self.objects.contentInner.children().removeAttr('style');
    },

    /**
     * Cleanup after aborting lightcase
     *
     * @return	{void}
     */
    cleanup: function cleanup() {
      _self._cleanupDimensions();

      _self.objects.loading.hide();

      _self.objects.overlay.hide();

      _self.objects.case.hide();

      _self.objects.prev.hide();

      _self.objects.next.hide();

      _self.objects.play.hide();

      _self.objects.pause.hide();

      _self.objects.case.removeAttr(_self._prefixAttributeName('type'));

      _self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));

      _self.objects.contentInner.empty().hide();

      _self.objects.info.children().empty();

      if (_self.cache.originalObject) {
        _self._restoreObject();
      } // Call onCleanup hook functions


      _self._callHooks(_self.settings.onCleanup); // Restore cache


      _self.cache = {};
    },

    /**
     * Returns the supported match media or undefined if the browser
     * doesn't support match media.
     *
     * @return	{mixed}
     */
    _matchMedia: function _matchMedia() {
      return window.matchMedia || window.msMatchMedia;
    },

    /**
     * Returns the devicePixelRatio if supported. Else, it simply returns
     * 1 as the default.
     *
     * @return	{number}
     */
    _devicePixelRatio: function _devicePixelRatio() {
      return window.devicePixelRatio || 1;
    },

    /**
     * Checks if method is public
     *
     * @return	{boolean}
     */
    _isPublicMethod: function _isPublicMethod(method) {
      return typeof _self[method] === 'function' && method.charAt(0) !== '_';
    },

    /**
     * Exports all public methods to be accessible, callable
     * from global scope.
     *
     * @return	{void}
     */
    _export: function _export() {
      window.lightcase = {};
      $.each(_self, function (property) {
        if (_self._isPublicMethod(property)) {
          lightcase[property] = _self[property];
        }
      });
    }
  };

  _self._export();

  $.fn.lightcase = function (method) {
    // Method calling logic (only public methods are applied)
    if (_self._isPublicMethod(method)) {
      return _self[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((0, _typeof2.default)(method) === 'object' || !method) {
      return _self.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.lightcase');
    }
  };
})(jQuery);

/***/ }),

/***/ "../include/js/front-end/src/Components/Modal.js":
/*!*******************************************************!*\
  !*** ../include/js/front-end/src/Components/Modal.js ***!
  \*******************************************************/
/*! flagged exports */
/*! export Modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modal = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js"));

/*=========================================
 * Modal - Based on the jQuery animatedModal script. This is a vanilla JS port
 *
 * animatedModal.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT
 =========================================*/
var Modal = function Modal(modal, options) {
  var body = document.body; //Defaults

  var settings = Object.assign({
    modalTarget: 'photonicModal',
    closeCSS: '',
    closeFromRight: 0,
    width: '80%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndexIn: '9999',
    zIndexOut: '-9999',
    color: '#39BEB9',
    opacityIn: '1',
    opacityOut: '0',
    animatedIn: 'zoomIn',
    animatedOut: 'zoomOut',
    animationDuration: '.6s',
    overflow: 'auto',
    // Callbacks
    beforeOpen: function beforeOpen() {},
    afterOpen: function afterOpen() {},
    beforeClose: function beforeClose() {},
    afterClose: function afterClose() {}
  }, options);
  var overlay = document.querySelector('.photonicModalOverlay'),
      scrollable = document.querySelector('.photonicModalOverlayScrollable');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'photonicModalOverlay';
    scrollable = document.createElement('div');
    scrollable.className = 'photonicModalOverlayScrollable';
    overlay.appendChild(scrollable);
    body.appendChild(overlay);
  }

  var closeIcon = modal.querySelector('.photonicModalClose');

  if (!closeIcon) {
    closeIcon = document.createElement('a');
    closeIcon.className = 'photonicModalClose ' + settings.closeCSS;
    closeIcon.style.right = settings.closeFromRight;
    closeIcon.innerHTML = '&times;';
    closeIcon.setAttribute('href', '#');
    modal.insertAdjacentElement('afterbegin', closeIcon);
  }

  closeIcon = modal.querySelector('.photonicModalClose');
  var id = document.querySelector('#' + settings.modalTarget); // Default Classes
  // id.addClass('photonicModal');
  // id.addClass(settings.modalTarget+'-off');
  //Init styles

  var initStyles = {
    'width': settings.width,
    'height': settings.height,
    'top': settings.top,
    'left': settings.left,
    'background-color': settings.color,
    'overflow-y': settings.overflow,
    'z-index': settings.zIndexOut,
    'opacity': settings.opacityOut,
    '-webkit-animation-duration': settings.animationDuration,
    '-moz-animation-duration': settings.animationDuration,
    '-ms-animation-duration': settings.animationDuration,
    'animation-duration': settings.animationDuration
  };

  if (id) {
    id.classList.add('photonicModal');
    id.classList.add(settings.modalTarget + '-off');
    var style = '';

    for (var _i = 0, _Object$entries = Object.entries(initStyles); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      style += "".concat(key, ": ").concat(value, "; ");
    }

    id.style.cssText += style; // initStyles.reduce((a, v, i) => a + i + ': ' + v + ';');

    open(id);
  }

  closeIcon.addEventListener('click', function (event) {
    event.preventDefault();
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    settings.beforeClose(); //beforeClose

    if (id.classList.contains(settings.modalTarget + '-on')) {
      id.classList.remove(settings.modalTarget + '-on');
      id.classList.add(settings.modalTarget + '-off');
    }

    if (id.classList.contains(settings.modalTarget + '-off')) {
      id.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterClose, {
        once: true
      });
    }

    id.style.overflowY = 'hidden';
    slideUp(id); // Util.slideUpDown(id.closest('.photonicModalOverlayScrollable'), 'hide');

    overlay.style.overflowY = 'hidden'; // Util.fadeOut(overlay);

    overlay.style.display = 'none';
  });

  function slideDown(element) {
    element.style.height = 'auto';
    element.style.height = "".concat(element.scrollHeight, "px");
    element.style.height = 'auto';
  }

  var slideUp = function slideUp(element) {
    element.style.height = 0;
    element.style.display = 'none';
  };

  function open(el) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (el.classList.contains(settings.modalTarget + '-off')) {
      el.classList.remove(settings.modalTarget + '-off');
      el.classList.add(settings.modalTarget + '-on');
    }

    if (el.classList.contains(settings.modalTarget + '-on')) {
      settings.beforeOpen();
      el.style.opacity = settings.opacityIn;
      el.style.zIndex = settings.zIndexIn;
      el.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterOpen, {
        once: true
      });
    }

    overlay.style.overflowY = settings.overflow;
    overlay.style.display = 'block'; // Util.fadeIn(overlay);

    scrollable.appendChild(el);
    el.style.display = 'block';
    el.style.overflowY = settings.overflow;
    slideDown(scrollable); // Util.slideUpDown(scrollable, 'show');
  }

  function afterClose() {
    id.style.zIndex = settings.zIndexOut;
    settings.afterClose(); //afterClose
  }

  function afterOpen() {
    settings.afterOpen(); //afterOpen
  }
};

exports.Modal = Modal;

/***/ }),

/***/ "../include/js/front-end/src/Components/Modalise.js":
/*!**********************************************************!*\
  !*** ../include/js/front-end/src/Components/Modalise.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Modalise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modalise = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../../node_modules/@babel/runtime/helpers/createClass.js"));

/**
 * ModaliseJS - Alexis Paques
 * Converted to ES6 by Sayontan Sinha
 * GPL v3.0
 */

/*
 * var myModal = Modalise('htmlID', options);
 *
 * id: The HTML id of the object
 * options:  options can modify the class name to which are bind the close, cancel and confirm functions, plus the buttons to open the modal.
	var options = {
	  "classClose": ".close",
	  "classCancel": ".cancel",
	  "classConfirm": ".confirm",
	"btnsOpen": [ HTMLelements ]
  }
 */
var Modalise = /*#__PURE__*/function () {
  function Modalise(id, options) {
    (0, _classCallCheck2.default)(this, Modalise);
    this.events = {
      onShow: new Event('onShow'),
      onConfirm: new Event('onConfirm'),
      onHide: new Event('onHide')
    };
    this.modal = document.getElementById(id);
    this.classClose = '.close';
    this.classCancel = '.cancel';
    this.classConfirm = '.confirm';
    this.btnsOpen = [];
    this.utils = {// extend: extend
    };
    this.callbacks = {};
  }
  /*
   * Modalise.show() :
   *
   * Shows the modal
   */


  (0, _createClass2.default)(Modalise, [{
    key: "show",
    value: function show() {
      this.modal.dispatchEvent(this.events.onShow);
      this.modal.style.display = "block";
      return this;
    }
    /* Modalise.hide() :
     *
     * Hides the modal
     */

  }, {
    key: "hide",
    value: function hide() {
      this.modal.dispatchEvent(this.events.onHide);
      this.modal.style.display = "none";
      return this;
    }
    /*
    * Modalise.removeEvents() :
    *
    * Removes the events (by cloning the modal)
    */

  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var clone = this.modal.cloneNode(true);
      this.modal.parentNode.replaceChild(clone, this.modal);
      this.modal = clone;
      return this;
    }
    /*
     * Modalise.on(event, callback):
     *
     * Connect an event.
     *
     * event:
     *     - 'onShow': Called when the modal is shown (via Modalise.show() or a binded button)
     *     - 'onConfirm': Called when the modal when the user sends the data (via the element with the class '.confirm')
     *     - 'onHide': Called when the modal is hidden (via Modalise.hide() or a binded button)
     * callback: The function to call on the event
     *
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.modal.addEventListener(event, callback);
      return this;
    }
    /*
    * Modalise.attach() :
    *
    * Attaches the click events on the elements with classes ".confirm", ".hide", ".cancel" plus the elements to show the modal
    */

  }, {
    key: "attach",
    value: function attach() {
      var i;
      var items = [];
      var self = this;
      items = this.modal.querySelectorAll(self.classClose);

      for (i = items.length - 1; i >= 0; i--) {
        items[i].addEventListener('click', function () {
          self.hide();
        });
      }

      items = self.modal.querySelectorAll(self.classCancel);

      for (i = items.length - 1; i >= 0; i--) {
        items[i].addEventListener('click', function () {
          self.hide();
        });
      }

      items = self.modal.querySelectorAll(self.classConfirm);

      for (i = items.length - 1; i >= 0; i--) {
        items[i].addEventListener('click', function () {
          self.modal.dispatchEvent(self.events.onConfirm);
          self.hide();
        });
      }

      for (i = self.btnsOpen.length - 1; i >= 0; i--) {
        self.btnsOpen[i].addEventListener('click', function () {
          self.show();
        });
      }

      return self;
    }
    /*
     * Attach an external element that will open the modal.
     * Modalise.addOpenBtn(element)
     *
     * element: Any HTML element a button, div, span,...
     */

  }, {
    key: "addOpenBtn",
    value: function addOpenBtn(element) {
      this.btnsOpen.push(element);
    }
  }]);
  return Modalise;
}();

exports.Modalise = Modalise;

/***/ }),

/***/ "../include/js/front-end/src/Components/Tooltip.js":
/*!*********************************************************!*\
  !*** ../include/js/front-end/src/Components/Tooltip.js ***!
  \*********************************************************/
/*! flagged exports */
/*! export Tooltip [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tooltip = void 0;

/*
 * Photonic Tooltip
 * Based on JS CSS Tooltip v1.2.3 (https://github.com/mirelvt/js-css-tooltip)
 *
 * Released under the MIT license
 */
var Tooltip = function Tooltip(selector, tooltip_element) {
  var tooltip, tooltip_class, elm_edges, tooltip_elms;

  function create(tooltip, elm) {
    var tooltipText = elm.getAttribute('data-photonic-tooltip');

    if (tooltipText !== '') {
      elm.setAttribute('title', ''); // Blank out the regular title
      // elm_edges relative to the viewport.

      elm_edges = elm.getBoundingClientRect();
      var tooltipTextNode = document.createTextNode(tooltipText);
      tooltip.innerHTML = ''; // Reset, or upon refresh the node gets repeated

      tooltip.appendChild(tooltipTextNode); // Remove no-display + set the correct classname based on the position
      // of the elm.

      if (elm_edges.left > window.innerWidth - 100) {
        tooltip.className = 'photonic-tooltip-container tooltip-left';
      } else if (elm_edges.left + elm_edges.width / 2 < 100) {
        tooltip.className = 'photonic-tooltip-container tooltip-right';
      } else {
        tooltip.className = 'photonic-tooltip-container tooltip-center';
      }
    }
  }

  function position(tooltip, elm) {
    var tooltipText = elm.getAttribute('data-photonic-tooltip');

    if (tooltipText !== '') {
      if (elm_edges === undefined) {
        elm_edges = elm.getBoundingClientRect();
      } // 10 = arrow height


      var elm_top = elm_edges.top + elm_edges.height + window.scrollY;
      var viewport_edges = window.innerWidth - 100; // Position tooltip on the left side of the elm if the elm touches
      // the viewports right edge and elm width is < 50px.

      if (elm_edges.left + window.scrollX > viewport_edges && elm_edges.width < 50) {
        tooltip.style.left = elm_edges.left + window.scrollX - (tooltip.offsetWidth + elm_edges.width) + 'px';
        tooltip.style.top = elm.offsetTop + 'px'; // Position tooltip on the left side of the elm if the elm touches
        // the viewports right edge and elm width is > 50px.
      } else if (elm_edges.left + window.scrollX > viewport_edges && elm_edges.width > 50) {
        tooltip.style.left = elm_edges.left + window.scrollX - tooltip.offsetWidth - 20 + 'px';
        tooltip.style.top = elm.offsetTop + 'px';
      } else if (elm_edges.left + window.scrollX + elm_edges.width / 2 < 100) {
        // position tooltip on the right side of the elm.
        tooltip.style.left = elm_edges.left + window.scrollX + elm_edges.width + 20 + 'px';
        tooltip.style.top = elm.offsetTop + 'px';
      } else {
        // Position the toolbox in the center of the elm.
        var centered = elm_edges.left + window.scrollX + elm_edges.width / 2 - tooltip.offsetWidth / 2;
        tooltip.style.left = centered + 'px';
        tooltip.style.top = elm_top + 'px';
      }
    }
  }

  function show(evt) {
    create(tooltip, evt.currentTarget);
    position(tooltip, evt.currentTarget);
  }

  function hide(evt) {
    tooltip.className = tooltip_class + ' no-display';

    if (tooltip.innerText !== '') {
      tooltip.removeChild(tooltip.firstChild);
      tooltip.removeAttribute('style');
      var element = evt.currentTarget;
      element.setAttribute('title', element.getAttribute('data-photonic-tooltip'));
    }
  }

  function init() {
    tooltip_elms = document.documentElement.querySelectorAll(selector);
    tooltip = document.documentElement.querySelector(tooltip_element);
    tooltip_class = tooltip_element.replace(/^\.+/g, '');

    if (tooltip === null || tooltip.length === 0) {
      tooltip = document.createElement('div');
      tooltip.className = tooltip_class + ' no-display';
      document.body.appendChild(tooltip);
    }

    tooltip_elms.forEach(function (elm) {
      elm.removeEventListener('mouseenter', show);
      elm.removeEventListener('mouseleave', hide);
      elm.addEventListener('mouseenter', show, false);
      elm.addEventListener('mouseleave', hide, false);
    });
  }

  init();
};

exports.Tooltip = Tooltip;

/***/ }),

/***/ "../include/js/front-end/src/Core.js":
/*!*******************************************!*\
  !*** ../include/js/front-end/src/Core.js ***!
  \*******************************************/
/*! flagged exports */
/*! export Core [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Core = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../../../../../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

var _Modalise = __webpack_require__(/*! ./Components/Modalise */ "../include/js/front-end/src/Components/Modalise.js");

var Core = function Core() {
  (0, _classCallCheck2.default)(this, Core);
};

exports.Core = Core;
(0, _defineProperty2.default)(Core, "lightboxList", []);
(0, _defineProperty2.default)(Core, "prompterList", []);
(0, _defineProperty2.default)(Core, "lightbox", void 0);
(0, _defineProperty2.default)(Core, "deep", location.hash);
(0, _defineProperty2.default)(Core, "setLightbox", function (lb) {
  return Core.lightbox = lb;
});
(0, _defineProperty2.default)(Core, "getLightbox", function () {
  return Core.lightbox;
});
(0, _defineProperty2.default)(Core, "setDeep", function (d) {
  return Core.deep = d;
});
(0, _defineProperty2.default)(Core, "getDeep", function () {
  return Core.deep;
});
(0, _defineProperty2.default)(Core, "addToLightboxList", function (idx, lightbox) {
  return Core.lightboxList[idx] = lightbox;
});
(0, _defineProperty2.default)(Core, "getLightboxList", function () {
  return Core.lightboxList;
});
(0, _defineProperty2.default)(Core, "showSpinner", function () {
  var loading = document.getElementsByClassName('photonic-loading');

  if (loading.length > 0) {
    loading = loading[0];
  } else {
    loading = document.createElement('div');
    loading.className = 'photonic-loading';
  }

  loading.style.display = 'block';
  document.body.appendChild(loading);
});
(0, _defineProperty2.default)(Core, "hideLoading", function () {
  var loading = document.getElementsByClassName('photonic-loading');

  if (loading.length > 0) {
    loading = loading[0];
    loading.style.display = 'none';
  }
});
(0, _defineProperty2.default)(Core, "initializePasswordPrompter", function (selector) {
  var selectorNoHash = selector.replace(/^#+/g, '');
  var prompter = new _Modalise.Modalise(selectorNoHash);
  prompter.attach();
  Core.prompterList[selector] = prompter;
  prompter.show();
});
(0, _defineProperty2.default)(Core, "moveHTML5External", function () {
  var videos = document.getElementById('photonic-html5-external-videos');

  if (!videos) {
    videos = document.createElement('div');
    videos.id = 'photonic-html5-external-videos';
    videos.style.display = 'none';
    document.body.appendChild(videos);
  }

  var current = document.querySelectorAll('.photonic-html5-external');

  if (current) {
    var cLen = current.length;

    for (var c = 0; c < cLen; c++) {
      current[c].classList.remove('photonic-html5-external');
      videos.appendChild(current[c]);
    }
  }
});
(0, _defineProperty2.default)(Core, "blankSlideupTitle", function () {
  document.querySelectorAll('.title-display-slideup-stick, .photonic-slideshow.title-display-slideup-stick').forEach(function (item) {
    Array.from(item.getElementsByTagName('a')).forEach(function (a) {
      a.setAttribute('title', '');
    });
  });
});
(0, _defineProperty2.default)(Core, "showSlideupTitle", function () {
  var titles = document.documentElement.querySelectorAll('.title-display-slideup-stick a .photonic-title');
  var len = titles.length;

  for (var i = 0; i < len; i++) {
    titles[i].style.display = 'block';
  }
});
(0, _defineProperty2.default)(Core, "waitForImages", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(selector) {
    var imageUrlArray, promiseArray, imageArray, _loop, _i, _imageUrlArray;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            imageUrlArray = [];

            if (typeof selector === 'string') {
              document.querySelectorAll(selector).forEach(function (selection) {
                Array.from(selection.getElementsByTagName('img')).forEach(function (img) {
                  imageUrlArray.push(img.getAttribute('src'));
                });
              });
            } else if (selector instanceof Element) {
              Array.from(selector.getElementsByTagName('img')).forEach(function (img) {
                imageUrlArray.push(img.getAttribute('src'));
              });
            }

            promiseArray = []; // create an array for promises

            imageArray = []; // array for the images

            _loop = function _loop() {
              var imageUrl = _imageUrlArray[_i];
              promiseArray.push(new Promise(function (resolve) {
                var img = new Image();

                img.onload = function () {
                  resolve();
                };

                img.src = imageUrl;
                imageArray.push(img);
              }));
            };

            for (_i = 0, _imageUrlArray = imageUrlArray; _i < _imageUrlArray.length; _i++) {
              _loop();
            }

            _context.next = 8;
            return Promise.all(promiseArray);

          case 8:
            return _context.abrupt("return", imageArray);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(Core, "standardizeTitleWidths", function () {
  var self = Core;
  document.querySelectorAll('.photonic-standard-layout.title-display-below, .photonic-standard-layout.title-display-hover-slideup-show, .photonic-standard-layout.title-display-slideup-stick').forEach(function (grid) {
    self.waitForImages(grid).then(function () {
      grid.querySelectorAll('.photonic-thumb').forEach(function (item) {
        var img = item.getElementsByTagName('img');

        if (img != null) {
          img = img[0];
          var title = item.querySelector('.photonic-title-info');

          if (title) {
            title.style.width = img.width + 'px';
          }
        }
      });
    });
  });
});
(0, _defineProperty2.default)(Core, "sanitizeTitles", function () {
  var thumbs = document.querySelectorAll('.photonic-stream a, a.photonic-level-2-thumb');
  thumbs.forEach(function (thumb) {
    if (!thumb.parentNode.classList.contains('photonic-header-title')) {
      var title = thumb.getAttribute('title');
      thumb.setAttribute('title', Util.getText(title));
    }
  });
});
(0, _defineProperty2.default)(Core, "initializeTooltips", function () {
  if (document.querySelector('.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img') != null) {
    (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
  }
});
(0, _defineProperty2.default)(Core, "showRegularGrids", function () {
  document.querySelectorAll('.photonic-standard-layout').forEach(function (grid) {
    Core.waitForImages(grid).then(function () {
      grid.querySelectorAll('.photonic-level-1, .photonic-level-2').forEach(function (item) {
        item.style.display = 'inline-block';
      });
    });
  });
});
(0, _defineProperty2.default)(Core, "executeCommon", function () {
  Core.moveHTML5External();
  Core.blankSlideupTitle();
  Core.standardizeTitleWidths();
  Core.sanitizeTitles();
  Core.initializeTooltips();
  Core.showRegularGrids();
});

/***/ }),

/***/ "../include/js/front-end/src/Entries/Lightcase.js":
/*!********************************************************!*\
  !*** ../include/js/front-end/src/Entries/Lightcase.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var _Lightcase = __webpack_require__(/*! ../Lightboxes/Lightcase */ "../include/js/front-end/src/Lightboxes/Lightcase.js");

var Listeners = _interopRequireWildcard(__webpack_require__(/*! ../Listeners */ "../include/js/front-end/src/Listeners.js"));

var Layout = _interopRequireWildcard(__webpack_require__(/*! ../Layouts/Layout */ "../include/js/front-end/src/Layouts/Layout.js"));

jQuery(document).ready(function ($) {
  var lightbox = new _Lightcase.PhotonicLightcase($);

  _Core.Core.setLightbox(lightbox);

  lightbox.initialize('.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
  lightbox.initialize('a[data-rel="photonic-lightcase"]');
  lightbox.initialize('a[data-rel="photonic-lightcase-video"]');
  lightbox.initialize('a[data-rel="photonic-html5-video"]');

  _Core.Core.executeCommon();

  Listeners.addAllListeners();
  Layout.initializeLayouts(lightbox);
});

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Justified.js":
/*!********************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Justified.js ***!
  \********************************************************/
/*! flagged exports */
/*! export JustifiedGrid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JustifiedGrid = void 0;

var _Core = __webpack_require__(/*! ../Core.js */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util.js */ "../include/js/front-end/src/Util.js"));

var linearMin = function linearMin(arr) {
  var computed, result, x, _i, _len;

  for (_i = 0, _len = arr.length; _i < _len; _i++) {
    x = arr[_i];
    computed = x[0];

    if (!result || computed < result.computed) {
      result = {
        value: x,
        computed: computed
      };
    }
  }

  return result.value;
};

var linearPartition = function linearPartition(seq, k) {
  var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;

  n = seq.length;

  if (k <= 0) {
    return [];
  }

  if (k > n) {
    return seq.map(function (x) {
      return [x];
    });
  }

  table = function () {
    var _i, _results;

    _results = [];

    for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
      _results.push(function () {
        var _j, _results1;

        _results1 = [];

        for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
          _results1.push(0);
        }

        return _results1;
      }());
    }

    return _results;
  }();

  solution = function () {
    var _i, _ref, _results;

    _results = [];

    for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
      _results.push(function () {
        var _j, _ref1, _results1;

        _results1 = [];

        for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
          _results1.push(0);
        }

        return _results1;
      }());
    }

    return _results;
  }();

  for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
    table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
  }

  for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
    table[0][j] = seq[0];
  }

  for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
    for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
      m = linearMin(function () {
        var _m, _results;

        _results = [];

        for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
          _results.push([Math.max(table[x][j - 1], table[i][0] - table[x][0]), x]);
        }

        return _results;
      }());
      table[i][j] = m[0];
      solution[i - 1][j - 1] = m[1];
    }
  }

  n = n - 1;
  k = k - 2;
  ans = [];

  while (k >= 0) {
    ans = [function () {
      var _m, _ref, _ref1, _results;

      _results = [];

      for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
        _results.push(seq[i]);
      }

      return _results;
    }()].concat(ans);
    n = solution[n - 1][k];
    k = k - 1;
  }

  return [function () {
    var _m, _ref, _results;

    _results = [];

    for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
      _results.push(seq[i]);
    }

    return _results;
  }()].concat(ans);
};

function part(seq, k) {
  if (k <= 0) {
    return [];
  }

  while (k) {
    try {
      return linearPartition(seq, k--);
    } catch (_error) {//
    }
  }
}

var JustifiedGrid = function JustifiedGrid(resized, jsLoaded, selector, lightbox) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Justified Grid');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-random-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  selection.forEach(function (container) {
    // If there are some nodes for which the sizes are missing, play safe and run this in JS mode.
    // Otherwise render the gallery using CSS, and just display the images once they have downloaded.
    if (container.classList.contains('sizes-missing') || !window.CSS || !CSS.supports('color', 'var(--fake-var)')) {
      var viewportWidth = Math.floor(container.getBoundingClientRect().width),
          windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          idealHeight = Math.max(parseInt(windowHeight / 4), Photonic_JS.tile_min_height);
      var gap = Photonic_JS.tile_spacing * 2;

      _Core.Core.waitForImages(container).then(function () {
        var photos = [],
            images = Array.from(container.getElementsByTagName('img'));
        images.forEach(function (image) {
          if (image.closest('.photonic-panel') !== null) {
            return;
          }

          var div = image.parentNode.parentNode;

          if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
            photos.push({
              tile: div,
              aspect_ratio: image.naturalWidth / image.naturalHeight
            });
          }
        });
        var summedWidth = photos.reduce(function (sum, p) {
          return sum += p.aspect_ratio * idealHeight + gap;
        }, 0);
        var rows = Math.max(Math.round(summedWidth / viewportWidth), 1),
            // At least 1 row should be shown
        weights = photos.map(function (p) {
          return Math.round(p.aspect_ratio * 100);
        });
        var partition = part(weights, rows);
        var index = 0;
        var oLen = partition.length;

        for (var o = 0; o < oLen; o++) {
          var onePart = partition[o];
          var summedRatios = void 0;
          var rowBuffer = photos.slice(index, index + onePart.length);
          index = index + onePart.length;
          summedRatios = rowBuffer.reduce(function (sum, p) {
            return sum += p.aspect_ratio;
          }, 0);
          var rLen = rowBuffer.length;

          for (var r = 0; r < rLen; r++) {
            var item = rowBuffer[r],
                existing = item.tile;
            existing.style.width = parseInt(viewportWidth / summedRatios * item.aspect_ratio) + "px";
            existing.style.height = parseInt(viewportWidth / summedRatios) + "px";
          }
        }

        container.querySelectorAll('.photonic-thumb, .photonic-thumb img').forEach(function (thumb) {
          return Util.fadeIn(thumb);
        });

        _Core.Core.blankSlideupTitle();

        _Core.Core.showSlideupTitle();

        if (!resized && !jsLoaded) {
          _Core.Core.hideLoading();
        }
      });
    } else {
      _Core.Core.waitForImages(container).then(function () {
        container.querySelectorAll('.photonic-thumb, .photonic-thumb img').forEach(function (thumb) {
          return Util.fadeIn(thumb);
        });

        _Core.Core.blankSlideupTitle();

        _Core.Core.showSlideupTitle();

        if (!resized && !jsLoaded) {
          _Core.Core.hideLoading();
        }
      });
    }

    if (lightbox && !resized) {
      if (Photonic_JS.slideshow_library === 'lightcase') {
        lightbox.initialize('.photonic-random-layout');
      } else if (['bigpicture', 'featherlight', 'glightbox', 'lightgallery'].indexOf(Photonic_JS.slideshow_library) > -1) {
        lightbox.initialize(container);
      } else if (Photonic_JS.slideshow_library === 'fancybox3') {
        lightbox.initialize('.photonic-random-layout');
      } else if (Photonic_JS.slideshow_library === 'photoswipe') {
        lightbox.initialize();
      }
    }
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Justified Grid');
};

exports.JustifiedGrid = JustifiedGrid;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Layout.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Layout.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializeLayouts [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initializeLayouts = void 0;

var _Justified = __webpack_require__(/*! ./Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Mosaic = __webpack_require__(/*! ./Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Masonry = __webpack_require__(/*! ./Masonry */ "../include/js/front-end/src/Layouts/Masonry.js");

var Slider = _interopRequireWildcard(__webpack_require__(/*! ./Slider */ "../include/js/front-end/src/Layouts/Slider.js"));

var initializeLayouts = function initializeLayouts(lightbox) {
  (0, _Justified.JustifiedGrid)(false, false, null, lightbox);
  (0, _Mosaic.Mosaic)(false, false);
  (0, _Masonry.Masonry)(false, false);
  Slider.initializeSliders();
  window.addEventListener('resize', function () {
    (0, _Justified.JustifiedGrid)(true, false, '.photonic-random-layout.sizes-missing');
    (0, _Mosaic.Mosaic)(true, false);
    (0, _Masonry.Masonry)(true, false);
  });
};

exports.initializeLayouts = initializeLayouts;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Masonry.js":
/*!******************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Masonry.js ***!
  \******************************************************/
/*! flagged exports */
/*! export Masonry [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Masonry = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

var Masonry = function Masonry(resized, jsLoaded, selector) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Masonry');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-masonry-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  var minWidth = isNaN(Photonic_JS.masonry_min_width) || parseInt(Photonic_JS.masonry_min_width) <= 0 ? 200 : Photonic_JS.masonry_min_width;
  minWidth = parseInt(minWidth);
  selection.forEach(function (grid) {
    _Core.Core.waitForImages(grid).then(function () {
      var columns = grid.getAttribute('data-photonic-gallery-columns');
      columns = isNaN(parseInt(columns)) || parseInt(columns) <= 0 ? 3 : parseInt(columns);
      var viewportWidth = Math.floor(grid.getBoundingClientRect().width),
          idealColumns = viewportWidth / columns > minWidth ? columns : Math.floor(viewportWidth / minWidth);

      if (idealColumns !== undefined && idealColumns !== null) {
        grid.style.columnCount = idealColumns.toString();
      }

      Array.from(grid.getElementsByTagName('img')).forEach(function (img) {
        Util.fadeIn(img);
        img.style.display = 'block';
      });

      _Core.Core.showSlideupTitle();

      if (!resized && !jsLoaded) {
        _Core.Core.hideLoading();
      }
    });
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Masonry');
};

exports.Masonry = Masonry;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Mosaic.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Mosaic.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export Mosaic [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mosaic = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

var getDistribution = function getDistribution(setSize, max, min) {
  var distribution = [];
  var processed = 0;

  while (processed < setSize) {
    if (setSize - processed <= max && processed > 0) {
      distribution.push(setSize - processed);
      processed += setSize - processed;
    } else {
      var current = Math.max(Math.floor(Math.random() * max + 1), min);
      current = Math.min(current, setSize - processed);
      distribution.push(current);
      processed += current;
    }
  }

  return distribution;
};

var arrayAlternate = function arrayAlternate(array, remainder) {
  return array.filter(function (value, index) {
    return index % 2 === remainder;
  });
};

var setUniformHeightsForRow = function setUniformHeightsForRow(array) {
  // First, order the array by increasing height
  array.sort(function (a, b) {
    return a.height - b.height;
  });
  array[0].new_height = array[0].height;
  array[0].new_width = array[0].width;

  for (var i = 1; i < array.length; i++) {
    array[i].new_height = array[0].height;
    array[i].new_width = array[i].new_height * array[i].aspect_ratio;
  }

  var new_width = array.reduce(function (sum, p) {
    return sum += p.new_width;
  }, 0);
  return {
    elements: array,
    height: array[0].new_height,
    width: new_width,
    aspect_ratio: new_width / array[0].new_height
  };
};

var finalizeTiledLayout = function finalizeTiledLayout(components, containers) {
  var cLength = components.length;

  for (var c = 0; c < cLength; c++) {
    var component = components[c];
    var rowY = component.y,
        otherRowHeight = 0,
        container = void 0;
    var ceLen = component.elements.length;

    for (var e = 0; e < ceLen; e++) {
      var element = component.elements[e];

      if (element.photo_position !== undefined) {
        // Component is a single image
        container = containers[element.photo_position];
        container.style.width = component.new_width + 'px';
        container.style.height = component.new_height + 'px';
        container.style.top = component.y + 'px';
        container.style.left = component.x + 'px';
      } else {
        // Component is a clique (element is a row). Widths and Heights of cliques have been calculated. But the rows in cliques need to be recalculated
        element.new_width = component.new_width;

        if (otherRowHeight === 0) {
          element.new_height = element.new_width / element.aspect_ratio;
          otherRowHeight = element.new_height;
        } else {
          element.new_height = component.new_height - otherRowHeight;
        }

        element.x = component.x;
        element.y = rowY;
        rowY += element.new_height;
        var totalWidth = element.elements.reduce(function (sum, p) {
          return sum += p.new_width;
        }, 0);
        var rowX = 0;
        var eLength = element.elements.length;

        for (var i = 0; i < eLength; i++) {
          var image = element.elements[i];
          image.new_width = element.new_width * image.new_width / totalWidth;
          image.new_height = element.new_height; //image.new_width / image.aspect_ratio;

          image.x = rowX;
          rowX += image.new_width;
          container = containers[image.photo_position];
          container.style.width = Math.floor(image.new_width) + 'px';
          container.style.height = Math.floor(image.new_height) + 'px';
          container.style.top = Math.floor(element.y) + 'px';
          container.style.left = Math.floor(element.x + image.x) + 'px';
        }
      }
    }
  }
};

var Mosaic = function Mosaic(resized, jsLoaded, selector) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Mosaic');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-mosaic-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  selection.forEach(function (grid) {
    _Core.Core.waitForImages(grid).then(function () {
      if (!grid.hasChildNodes()) {
        return;
      }

      var viewportWidth = Math.floor(grid.getBoundingClientRect().width),
          triggerWidth = isNaN(Photonic_JS.mosaic_trigger_width) || parseInt(Photonic_JS.mosaic_trigger_width) <= 0 ? 200 : parseInt(Photonic_JS.mosaic_trigger_width),
          maxInRow = Math.floor(viewportWidth / triggerWidth),
          minInRow = viewportWidth >= triggerWidth * 2 ? 2 : 1,
          photos = [];
      var setSize;
      var containers = [],
          images = Array.from(grid.getElementsByTagName('img'));
      images.forEach(function (image, position) {
        if (image.closest('.photonic-panel') != null) {
          return;
        }

        var a = image.parentNode;
        var div = a.parentNode;
        div.setAttribute('data-photonic-photo-index', position);
        containers[position] = div;

        if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
          var aspectRatio = image.naturalWidth / image.naturalHeight;
          photos.push({
            src: image.src,
            width: image.naturalWidth,
            height: image.naturalHeight,
            aspect_ratio: aspectRatio,
            photo_position: position
          });
        }
      });
      setSize = photos.length;
      var distribution = getDistribution(setSize, maxInRow, minInRow); // We got our random distribution. Let's divide the photos up according to the distribution.

      var groups = [],
          startIdx = 0;
      distribution.forEach(function (size) {
        groups.push(photos.slice(startIdx, startIdx + size));
        startIdx += size;
      });
      var groupY = 0; // We now have our groups of photos. We need to find the optimal layout for each group.

      groups.forEach(function (group) {
        // First, order the group by aspect ratio
        group.sort(function (a, b) {
          return a.aspect_ratio - b.aspect_ratio;
        }); // Next, pick a random layout

        var groupLayout;

        if (group.length === 1) {
          groupLayout = [1];
        } else if (group.length === 2) {
          groupLayout = [1, 1];
        } else {
          groupLayout = getDistribution(group.length, group.length - 1, 1);
        } // Now, LAYOUT, BABY!!!


        var cliqueF = 0,
            cliqueL = group.length - 1,
            cliques = [],
            indices = [];

        for (var i = 2; i <= maxInRow; i++) {
          var index = groupLayout.indexOf(i);

          while (-1 < index && cliqueF < cliqueL) {
            // Ideal Layout: one landscape, one portrait. But we will take any 2 with contrasting aspect ratios
            var clique = [],
                j = 0;

            while (j < i && cliqueF <= cliqueL) {
              clique.push(group[cliqueF++]); // One with a low aspect ratio

              j++;

              if (j < i && cliqueF <= cliqueL) {
                clique.push(group[cliqueL--]); // One with a high aspect ratio

                j++;
              }
            } // Clique is formed. Add it to the list of cliques.


            cliques.push(clique);
            indices.push(index); // Keep track of the position of the clique in the row

            index = groupLayout.indexOf(i, index + 1);
          }
        } // The ones that are not in any clique (i.e. the ones in the middle) will be given their own columns in the row.


        var remainder = group.slice(cliqueF, cliqueL + 1); // Now let's layout the cliques individually. Each clique is its own column.

        var rowLayout = [];
        cliques.forEach(function (clique, cliqueIdx) {
          var toss = Math.floor(Math.random() * 2); // 0 --> Groups of smallest and largest, or 1 --> Alternating

          var oneRow, otherRow;

          if (toss === 0) {
            // Group the ones with the lowest aspect ratio together, and the ones with the highest aspect ratio together.
            // Lay one group at the top and the other at the bottom
            var wide = Math.max(Math.floor(Math.random() * (clique.length / 2 - 1)), 1);
            oneRow = clique.slice(0, wide);
            otherRow = clique.slice(wide);
          } else {
            // Group alternates together.
            // Lay one group at the top and the other at the bottom
            oneRow = arrayAlternate(clique, 0);
            otherRow = arrayAlternate(clique, 1);
          } // Make heights consistent within rows:


          oneRow = setUniformHeightsForRow(oneRow);
          otherRow = setUniformHeightsForRow(otherRow); // Now make widths consistent

          oneRow.new_width = Math.min(oneRow.width, otherRow.width);
          oneRow.new_height = oneRow.new_width / oneRow.aspect_ratio;
          otherRow.new_width = oneRow.new_width;
          otherRow.new_height = otherRow.new_width / otherRow.aspect_ratio;
          rowLayout.push({
            elements: [oneRow, otherRow],
            height: oneRow.new_height + otherRow.new_height,
            width: oneRow.new_width,
            aspect_ratio: oneRow.new_width / (oneRow.new_height + otherRow.new_height),
            element_position: indices[cliqueIdx]
          });
        });
        rowLayout.sort(function (a, b) {
          return a.element_position - b.element_position;
        });
        var orderedRowLayout = [];

        for (var position = 0; position < groupLayout.length; position++) {
          var cliqueExists = indices.indexOf(position) > -1;

          if (cliqueExists) {
            orderedRowLayout.push(rowLayout.shift());
          } else {
            var rem = remainder.shift();
            orderedRowLayout.push({
              elements: [rem],
              height: rem.height,
              width: rem.width,
              aspect_ratio: rem.aspect_ratio
            });
          }
        } // Main Row layout is fully constructed and ordered. Now we need to balance heights and widths of all cliques with the "remainder"


        var totalAspect = orderedRowLayout.reduce(function (sum, p) {
          return sum += p.aspect_ratio;
        }, 0);
        var elementX = 0;
        orderedRowLayout.forEach(function (component) {
          component.new_width = component.aspect_ratio / totalAspect * viewportWidth;
          component.new_height = component.new_width / component.aspect_ratio;
          component.y = groupY;
          component.x = elementX;
          elementX += component.new_width;
        });
        groupY += orderedRowLayout[0].new_height;
        finalizeTiledLayout(orderedRowLayout, containers);
      });
      grid.style.height = groupY + 'px';
      Array.from(grid.getElementsByTagName('img')).forEach(function (image) {
        return Util.fadeIn(image);
      });

      _Core.Core.showSlideupTitle();

      if (!resized && !jsLoaded) {
        _Core.Core.hideLoading();
      }
    });
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Mosaic');
}; //Mosaic(false);


exports.Mosaic = Mosaic;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Slider.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Slider.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export Slider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializeSliders [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initializeSliders = exports.Slider = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var adaptiveHeight = function adaptiveHeight(slideshow, slide, splide) {
  var options = splide.options;

  if (slide.isVisible()) {
    var allSlides = splide.Components.Elements.slides;
    var currentlyActive = splide.index;
    var lastVisible = parseInt(currentlyActive) + parseInt(options.perPage);
    var visibleSlides = allSlides.slice(currentlyActive, lastVisible);
    var maxHeight = 0;
    Array.prototype.forEach.call(visibleSlides, function (visible) {
      var visibleImage = visible.querySelector('img');

      if (visibleImage && visibleImage.offsetHeight > maxHeight) {
        maxHeight = visibleImage.offsetHeight;
      }
    });
    slide.slide.style.height = "".concat(maxHeight, "px");
    var splideTrack = slideshow.querySelector('.splide__track');
    var splideTrackHeight = splideTrack ? splideTrack.offsetHeight : 0;

    if (maxHeight !== splideTrackHeight) {
      splideTrack.style.height = "".concat(maxHeight, "px");
    }
  }
};

var fixedHeight = function fixedHeight(slideshow, splideObj) {
  var maxHeight = 0,
      maxAspect = 0,
      containerWidth = slideshow.offsetWidth,
      children = slideshow.querySelectorAll('.splide__slide img');
  Array.prototype.forEach.call(children, function (img) {
    if (img.naturalHeight !== 0) {
      var childAspect = img.naturalWidth / img.naturalHeight;

      if (childAspect >= maxAspect) {
        maxAspect = childAspect;
        var heightFactor = img.naturalWidth > containerWidth ? containerWidth / img.naturalWidth : 1;
        var cols = parseInt(splideObj.options.perPage, 10);

        if (!isNaN(cols) && cols !== 0) {
          heightFactor = heightFactor / cols;
        }

        maxHeight = img.naturalHeight * heightFactor;
      }
    }
  });
  Array.prototype.forEach.call(children, function (img) {
    img.style.height = maxHeight + 'px';
  });
  Array.prototype.forEach.call(slideshow.querySelectorAll('.splide__slide, .splide__list'), function (slideOrList) {
    slideOrList.style.height = maxHeight + 'px';
  });
  slideshow.style.height = maxHeight + 'px';
};

var Slider = function Slider(slideshow) {
  if (slideshow) {
    var content = slideshow.querySelector('.photonic-slideshow-content');

    if (content) {
      _Core.Core.waitForImages(slideshow).then(function () {
        var idStr = '#' + slideshow.getAttribute('id');
        var splideThumbs = document.querySelector(idStr + '-thumbs');

        if (splideThumbs != null) {
          splideThumbs = new Splide(idStr + '-thumbs');
          splideThumbs.mount();
        }

        var splide = new Splide(idStr);
        splide.on('mounted resize', function (slide) {
          if (slideshow.classList.contains('photonic-slideshow-side-white') || slideshow.classList.contains('photonic-slideshow-start-next')) {
            fixedHeight(slideshow, splide);
          }
        });
        splide.on('visible', function (slide) {
          if (slideshow.classList.contains('photonic-slideshow-adapt-height')) {
            adaptiveHeight(slideshow, slide, splide);
          }
        });

        if (splideThumbs == null) {
          splide.mount();
        } else {
          splide.sync(splideThumbs).mount();
        }

        slideshow.querySelectorAll('img').forEach(function (img) {
          img.style.display = 'inline';
        });
      });
    }
  }
};

exports.Slider = Slider;

var initializeSliders = function initializeSliders() {
  var primarySliders = document.querySelectorAll('.photonic-slideshow');

  if (typeof Splide != "undefined") {
    primarySliders.forEach(function (slideshow) {
      return Slider(slideshow);
    });
  } else if (console !== undefined && primarySliders.length > 0) {
    console.error('Splide not found! Please ensure that the Splide script is available and loaded before Photonic.');
  }
};

exports.initializeSliders = initializeSliders;

/***/ }),

/***/ "../include/js/front-end/src/Lightboxes/Lightbox.js":
/*!**********************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/Lightbox.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Lightbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Lightbox = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../../node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var Lightbox = /*#__PURE__*/function () {
  function Lightbox() {
    (0, _classCallCheck2.default)(this, Lightbox);
    (0, _defineProperty2.default)(this, "deep", void 0);
    (0, _defineProperty2.default)(this, "lastDeep", void 0);
    this.socialIcons = "<div id='photonic-social'>" + "<a class='photonic-share-fb' href='https://www.facebook.com/sharer/sharer.php?u={photonic_share_link}&amp;title={photonic_share_title}&amp;picture={photonic_share_image}' target='_blank' title='Share on Facebook'><div class='icon-facebook'></div></a>" + "<a class='photonic-share-twitter' href='https://twitter.com/share?url={photonic_share_link}&amp;text={photonic_share_title}' target='_blank' title='Share on Twitter'><div class='icon-twitter'></div></a>" + "<a class='photonic-share-pinterest' data-pin-do='buttonPin' href='https://www.pinterest.com/pin/create/button/?url={photonic_share_link}&media={photonic_share_image}&description={photonic_share_title}' data-pin-custom='true' target='_blank' title='Share on Pinterest'><div class='icon-pinterest'></div></a>" + "</div>";
    this.videoIndex = 1;
  }

  (0, _createClass2.default)(Lightbox, [{
    key: "getVideoSize",
    value: function getVideoSize(url, baseline) {
      return new Promise(function (resolve) {
        // create the video element
        var video = document.createElement('video'); // place a listener on it

        video.addEventListener("loadedmetadata", function () {
          // retrieve dimensions
          var height = this.videoHeight,
              width = this.videoWidth;
          var videoAspectRatio = this.videoWidth / this.videoHeight,
              baseAspectRatio = baseline.width / baseline.height;
          var newWidth, newHeight;

          if (baseAspectRatio > videoAspectRatio) {
            // Window is wider than it needs to be ... constrain by window height
            newHeight = baseline.height;
            newWidth = width * newHeight / height;
          } else {
            // Window is narrower than it needs to be ... constrain by window width
            newWidth = baseline.width;
            newHeight = height * newWidth / width;
          } // send back result


          resolve({
            height: height,
            width: width,
            newHeight: newHeight,
            newWidth: newWidth
          });
        }, false); // start download meta-datas

        video.src = url;
      });
    }
  }, {
    key: "getImageSize",
    value: function getImageSize(url, baseline) {
      return new Promise(function (resolve) {
        var image = document.createElement('img'); // place a listener on it

        image.addEventListener("load", function () {
          // retrieve dimensions
          var height = this.height,
              width = this.width,
              imageAspectRatio = this.width / this.height,
              baseAspectRatio = baseline.width / baseline.height;
          var newWidth, newHeight;

          if (baseAspectRatio > imageAspectRatio) {
            // Window is wider than it needs to be ... constrain by window height
            newHeight = baseline.height;
            newWidth = width * newHeight / height;
          } else {
            // Window is narrower than it needs to be ... constrain by window width
            newWidth = baseline.width;
            newHeight = height * newWidth / width;
          } // send back result


          resolve({
            height: height,
            width: width,
            newHeight: newHeight,
            newWidth: newWidth
          });
        }, false); // start download meta-datas

        image.src = url;
      });
    }
  }, {
    key: "addSocial",
    value: function addSocial(selector, shareable) {
      if ((Photonic_JS.social_media === undefined || Photonic_JS.social_media === '') && shareable['buy'] === undefined) {
        return;
      }

      var socialEl = document.getElementById('photonic-social');

      if (socialEl !== null) {
        socialEl.parentNode.removeChild(socialEl);
      }

      if (location.hash !== '') {
        var social = this.socialIcons.replace(/{photonic_share_link}/g, encodeURIComponent(shareable['url'])).replace(/{photonic_share_title}/g, encodeURIComponent(shareable['title'])).replace(/{photonic_share_image}/g, encodeURIComponent(shareable['image']));
        var selectorEl;

        if (typeof selector === 'string') {
          selectorEl = document.documentElement.querySelector(selector);
        } else {
          selectorEl = selector;
        }

        if (selectorEl !== null) {
          selectorEl.insertAdjacentHTML('beforeend', social);
        }

        if (Photonic_JS.social_media === undefined || Photonic_JS.social_media === '') {
          var socialMediaIcons = document.documentElement.querySelectorAll('.photonic-share-fb, .photonic-share-twitter, .photonic-share-pinterest');
          Array.prototype.forEach.call(socialMediaIcons, function (socialIcon) {
            socialIcon.parentNode.removeChild(socialIcon);
          });
        }
      }
    }
  }, {
    key: "setHash",
    value: function setHash(a) {
      if (Photonic_JS.deep_linking === undefined || Photonic_JS.deep_linking === 'none' || a === null || a === undefined) {
        return;
      }

      var hash = typeof a === 'string' ? a : a.getAttribute('data-photonic-deep');

      if (hash === undefined) {
        return;
      }

      if (typeof window.history.pushState === 'function' && Photonic_JS.deep_linking === 'yes-history') {
        window.history.pushState({}, document.title, '#' + hash);
      } else if (typeof window.history.replaceState === 'function' && Photonic_JS.deep_linking === 'no-history') {
        window.history.replaceState({}, document.title, '#' + hash);
      } else {
        document.location.hash = hash;
      }
    }
  }, {
    key: "unsetHash",
    value: function unsetHash() {
      this.lastDeep = this.lastDeep === undefined || this.deep !== '' ? location.hash : this.lastDeep;

      if (window.history && 'replaceState' in window.history) {
        history.replaceState({}, document.title, location.href.substr(0, location.href.length - location.hash.length));
      } else {
        window.location.hash = '';
      }
    }
  }, {
    key: "changeHash",
    value: function changeHash(e) {
      if (e.type === 'load') {
        var hash = window.location.hash;
        hash = hash.substr(1);

        if (hash && hash !== '') {
          var allMatches = document.querySelectorAll('[data-photonic-deep="' + hash + '"]');

          if (allMatches.length > 0) {
            var thumbToClick = allMatches[0];
            var event = document.createEvent('HTMLEvents');
            event.initEvent('click', true, false);
            thumbToClick.dispatchEvent(event);
          }
        }
      } else {
        var node = this.deep;

        if (node != null) {
          if (node.length > 1) {
            if (window.location.hash && node.indexOf('#access_token=') !== -1) {
              this.unsetHash();
            } else {
              node = node.substr(1);

              var _allMatches = document.querySelectorAll('[data-photonic-deep="' + node + '"]');

              if (_allMatches.length > 0) {
                var _thumbToClick = _allMatches[0];

                var _event = document.createEvent('HTMLEvents');

                _event.initEvent('click', true, false);

                _thumbToClick.dispatchEvent(_event);

                this.setHash(node);
              }
            }
          }
        }
      }
    }
  }, {
    key: "catchYouTubeURL",
    value: function catchYouTubeURL(url) {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
          match = url.match(regExp);

      if (match && match[2].length === 11) {
        return match[2];
      }
    }
  }, {
    key: "catchVimeoURL",
    value: function catchVimeoURL(url) {
      var regExp = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/,
          match = url.match(regExp);

      if (match) {
        return match[1];
      }
    }
  }, {
    key: "soloImages",
    value: function soloImages() {
      var a = document.querySelectorAll('a[href]');
      var solos = Array.from(a).filter(function (elem) {
        return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test(elem.getAttribute('href'));
      }).filter(function (elem) {
        return !elem.classList.contains('photonic-launch-gallery');
      });
      solos.forEach(function (solo) {
        solo.classList.add("launch-gallery-" + Photonic_JS.slideshow_library);
        solo.classList.add("launch-gallery-" + Photonic_JS.slideshow_library + '-solo');
        solo.classList.add(Photonic_JS.slideshow_library);
      });
      return solos;
    }
  }, {
    key: "changeVideoURL",
    value: function changeVideoURL(element, regular, embed) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
    }
  }, {
    key: "hostedVideo",
    value: function hostedVideo(a) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
    }
  }, {
    key: "soloVideos",
    value: function soloVideos() {
      var self = this;

      if (Photonic_JS.lightbox_for_videos) {
        var a = document.querySelectorAll('a[href]');
        a.forEach(function (anchor) {
          var regular, embed;
          var href = anchor.getAttribute('href'),
              youTube = self.catchYouTubeURL(href),
              vimeo = self.catchVimeoURL(href);

          if (youTube !== undefined) {
            regular = 'https://youtube.com/watch?v=' + youTube;
            embed = 'https://youtube.com/embed/' + youTube;
          } else if (vimeo !== undefined) {
            regular = 'https://vimeo.com/' + vimeo;
            embed = 'https://player.vimeo.com/video/' + vimeo;
          }

          if (regular !== undefined) {
            anchor.classList.add(Photonic_JS.slideshow_library + "-video");
            self.changeVideoURL(anchor, regular, embed);
            self.modifyAdditionalVideoProperties(anchor);
          }

          self.hostedVideo(anchor);
        });
      }
    }
  }, {
    key: "handleSolos",
    value: function handleSolos() {
      if (Photonic_JS.lightbox_for_all) {
        this.soloImages();
      }

      this.soloVideos();

      if (Photonic_JS.deep_linking !== undefined && Photonic_JS.deep_linking !== 'none') {
        window.addEventListener('load', this.changeHash);
        window.addEventListener('hashchange', this.changeHash);
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.handleSolos(); // Implemented by child classes
    }
  }, {
    key: "initializeForNewContainer",
    value: function initializeForNewContainer(containerId) {// Implemented by individual lightboxes. Empty for cases where not required
    }
  }, {
    key: "initializeForExisting",
    value: function initializeForExisting() {// Implemented by child classes
    }
  }, {
    key: "modifyAdditionalVideoProperties",
    value: function modifyAdditionalVideoProperties(anchor) {// Implemented by individual lightboxes. Empty for cases where not required
    }
  }]);
  return Lightbox;
}();

exports.Lightbox = Lightbox;

/***/ }),

/***/ "../include/js/front-end/src/Lightboxes/Lightcase.js":
/*!***********************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/Lightcase.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export PhotonicLightcase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotonicLightcase = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../../node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _Lightbox2 = __webpack_require__(/*! ./Lightbox */ "../include/js/front-end/src/Lightboxes/Lightbox.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PhotonicLightcase = /*#__PURE__*/function (_Lightbox) {
  (0, _inherits2.default)(PhotonicLightcase, _Lightbox);

  var _super = _createSuper(PhotonicLightcase);

  function PhotonicLightcase($) {
    var _this;

    (0, _classCallCheck2.default)(this, PhotonicLightcase);
    _this = _super.call(this);
    _this.$ = $;
    return _this;
  }

  (0, _createClass2.default)(PhotonicLightcase, [{
    key: "soloImages",
    value: function soloImages() {
      var $ = this.$;
      $('a[href]').filter(function () {
        return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test($(this).attr('href'));
      }).filter(function () {
        var res = new RegExp('photonic-launch-gallery').test($(this).attr('class'));
        return !res;
      }).attr("data-rel", 'photonic-lightcase');
    }
  }, {
    key: "changeVideoURL",
    value: function changeVideoURL(element, regular, embed) {
      var $ = this.$;
      $(element).attr('href', embed);
      $(element).attr("data-rel", 'photonic-lightcase-video');
    }
  }, {
    key: "hostedVideo",
    value: function hostedVideo(a) {
      var $ = this.$;
      var html5 = $(a).attr('href').match(new RegExp(/(\.mp4|\.webm|\.ogg)/i));
      var css = $(a).attr('class');
      css = css !== undefined && css.includes('photonic-launch-gallery');

      if (html5 !== null && !css) {
        $(a).addClass(Photonic_JS.slideshow_library + "-html5-video");
        $(a).attr("data-rel", 'photonic-html5-video');
        this.videoIndex++;
      }
    }
  }, {
    key: "initialize",
    value: function initialize(selector, group) {
      var $ = this.$;
      this.handleSolos();
      var self = this;
      $(selector).each(function (i, current) {
        var provider = $(current).attr('data-photonic-platform');
        var lightbox_selector,
            rel = $(current).find('a.launch-gallery-lightcase');

        if (rel.length > 0) {
          rel = $(rel[0]).data('rel');
        }

        lightbox_selector = selector.indexOf('data-rel') > -1 ? selector : 'a[data-rel="' + rel + '"]';
        $(lightbox_selector).lightcase({
          showSequenceInfo: false,
          transition: Photonic_JS.lc_transition_effect,
          slideshow: Photonic_JS.slideshow_mode,
          timeout: Photonic_JS.slideshow_interval,
          navigateEndless: Photonic_JS.lightbox_loop === '1',
          disableShrink: Photonic_JS.lc_disable_shrink === '1',
          attrPrefix: '',
          caption: ' ',
          swipe: true,
          onStart: {
            getVideoSize: function getVideoSize() {
              var elem = this,
                  videoURL = $(elem).attr('data-html5-href'); // || $(elem).attr('href');

              if (lightbox_selector.indexOf('photonic-html5-video') > -1 || videoURL !== undefined) {
                self.getVideoSize(videoURL === undefined ? $(elem).attr('href') : videoURL, {
                  height: window.innerHeight * 0.8,
                  width: 800
                }).then(function (dimensions) {
                  $(elem).attr('data-lc-options', '{"width": ' + Math.round(dimensions.newWidth) + ', "height": ' + Math.round(dimensions.newHeight) + '}');
                  $('#lightcase-content').find('video').attr({
                    width: Math.round(dimensions.newWidth),
                    height: Math.round(dimensions.newHeight)
                  }).css({
                    width: Math.round(dimensions.newWidth),
                    height: Math.round(dimensions.newHeight)
                  });
                  lightcase.resize({
                    width: Math.round(dimensions.newWidth),
                    height: Math.round(dimensions.newHeight)
                  });
                });
              }
            }
          },
          onFinish: {
            setHash: function setHash() {
              if (this.length > 0) {
                self.setHash(this[0]);
              }

              var shareable = {
                'url': location.href,
                'title': Util.getText($(this).data('title')),
                'image': $(this).attr('href')
              };
              self.addSocial('#lightcase-info', shareable);
            }
          },
          onClose: {
            unsetHash: self.unsetHash
          }
        });
      });
    }
  }, {
    key: "initializeForNewContainer",
    value: function initializeForNewContainer(containerId) {
      this.initialize(containerId);
    }
  }]);
  return PhotonicLightcase;
}(_Lightbox2.Lightbox);

exports.PhotonicLightcase = PhotonicLightcase;

/***/ }),

/***/ "../include/js/front-end/src/Listeners.js":
/*!************************************************!*\
  !*** ../include/js/front-end/src/Listeners.js ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addAllListeners [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addHelperMoreButtonListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLazyLoadListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLevel2ClickListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLevel3ExpandListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addMoreButtonListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addPasswordSubmitListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addSlideUpEnterListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addSlideUpLeaveListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addAllListeners = exports.addLazyLoadListener = exports.addSlideUpLeaveListener = exports.addSlideUpEnterListener = exports.addHelperMoreButtonListener = exports.addMoreButtonListener = exports.addLevel3ExpandListener = exports.addPasswordSubmitListener = exports.addLevel2ClickListener = void 0;

var _Core = __webpack_require__(/*! ./Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var Requests = _interopRequireWildcard(__webpack_require__(/*! ./Requests */ "../include/js/front-end/src/Requests.js"));

var _Justified = __webpack_require__(/*! ./Layouts/Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Mosaic = __webpack_require__(/*! ./Layouts/Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

// .photonic-level-2-thumb:not(".gallery-page")
var addLevel2ClickListener = function addLevel2ClickListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('.photonic-level-2-thumb')) {
      return;
    }

    var clicked = e.target.closest('.photonic-level-2-thumb');

    if (Util.hasClass(clicked, 'gallery-page')) {
      return;
    }

    e.preventDefault();
    var container = clicked.closest('.photonic-level-2-container');
    var provider = clicked.getAttribute('data-photonic-platform'),
        singular = clicked.getAttribute('data-photonic-singular'),
        query = container.getAttribute('data-photonic-query');
    var args = {
      "panel_id": clicked.getAttribute('id'),
      "popup": clicked.getAttribute('data-photonic-popup'),
      "photo_count": clicked.getAttribute('data-photonic-photo-count'),
      "photo_more": clicked.getAttribute('data-photonic-photo-more'),
      "query": query
    };
    if (provider === 'google' || provider === 'zenfolio') args.thumb_size = clicked.getAttribute('data-photonic-thumb-size');

    if (provider === 'flickr' || provider === 'smug' || provider === 'google' || provider === 'zenfolio') {
      args.overlay_size = clicked.getAttribute('data-photonic-overlay-size');
      args.overlay_video_size = clicked.getAttribute('data-photonic-overlay-video-size');
    }

    if (provider === 'google') {
      args.overlay_crop = clicked.getAttribute('data-photonic-overlay-crop');
    }

    Requests.displayLevel2(provider, singular, args);
  }, false);
}; // .photonic-password-submit


exports.addLevel2ClickListener = addLevel2ClickListener;

var addPasswordSubmitListener = function addPasswordSubmitListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('.photonic-password-submit')) {
      return;
    }

    e.preventDefault();
    var clicked = e.target.closest('.photonic-password-submit');
    var modal = clicked.closest('.photonic-password-prompter'),
        container = clicked.closest('.photonic-level-2-container');
    var album_id = modal.getAttribute('id');
    var components = album_id.split('-');
    var provider = components[1],
        singular_type = components[2],
        album_key = components.slice(4).join('-'),
        thumb_id = "photonic-".concat(provider, "-").concat(singular_type, "-thumb-").concat(album_key),
        thumb = document.getElementById("".concat(thumb_id)),
        query = container.getAttribute('data-photonic-query');
    var password = modal.querySelector('input[name="photonic-' + provider + '-password"]');
    password = password.value;

    var prompter = _Core.Core.prompterList["#photonic-".concat(provider, "-").concat(singular_type, "-prompter-").concat(album_key)];

    if (prompter !== undefined && prompter !== null) {
      prompter.hide();
    }

    _Core.Core.showSpinner();

    var args = {
      'panel_id': thumb_id,
      "popup": thumb.getAttribute('data-photonic-popup'),
      "photo_count": thumb.getAttribute('data-photonic-photo-count'),
      "photo_more": thumb.getAttribute('data-photonic-photo-more'),
      "query": query
    };

    if (provider === 'smug') {
      args.password = password;
      args.overlay_size = thumb.getAttribute('data-photonic-overlay-size');
    } else if (provider === 'zenfolio') {
      args.password = password;
      args.realm_id = thumb.getAttribute('data-photonic-realm');
      args.thumb_size = thumb.getAttribute('data-photonic-thumb-size');
      args.overlay_size = thumb.getAttribute('data-photonic-overlay-size');
      args.overlay_video_size = clicked.getAttribute('data-photonic-overlay-video-size');
    }

    Requests.processRequest(provider, singular_type, album_key, args);
  }, false);
}; // a.photonic-level-3-expand


exports.addPasswordSubmitListener = addPasswordSubmitListener;

var addLevel3ExpandListener = function addLevel3ExpandListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('a.photonic-level-3-expand')) {
      return;
    }

    e.preventDefault();
    var current = e.target.closest('a.photonic-level-3-expand'),
        header = current.parentNode.parentNode.parentNode,
        stream = header.parentNode;

    if (current.classList.contains('photonic-level-3-expand-plus')) {
      Requests.processL3Request(current, header, {
        'view': 'collections',
        'node': current.getAttribute('data-photonic-level-3'),
        'layout': current.getAttribute('data-photonic-layout'),
        'stream': stream.getAttribute('id')
      });
    } else if (current.classList.contains('photonic-level-3-expand-up')) {
      var display = Util.next(header, '.photonic-stream');
      Util.slideUpDown(display, 'hide');
      current.classList.remove('photonic-level-3-expand-up');
      current.classList.add('photonic-level-3-expand-down');
      current.setAttribute('title', Photonic_JS.maximize_panel === undefined ? 'Show' : Photonic_JS.maximize_panel);
    } else if (current.classList.contains('photonic-level-3-expand-down')) {
      var _display = Util.next(header, '.photonic-stream'); // Util.slideDown(display);


      Util.slideUpDown(_display, 'show');
      current.classList.remove('photonic-level-3-expand-down');
      current.classList.add('photonic-level-3-expand-up');
      current.setAttribute('title', Photonic_JS.minimize_panel === undefined ? 'Hide' : Photonic_JS.minimize_panel);
    }
  }, false);
}; // a.photonic-more-button.photonic-more-dynamic


exports.addLevel3ExpandListener = addLevel3ExpandListener;

var addMoreButtonListener = function addMoreButtonListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('a.photonic-more-button.photonic-more-dynamic')) {
      return;
    }

    e.preventDefault();
    var clicked = e.target.closest('a.photonic-more-button.photonic-more-dynamic');
    var container = clicked.parentNode.querySelector('.photonic-level-1-container, .photonic-level-2-container');
    var query = container.getAttribute('data-photonic-query'),
        provider = container.getAttribute('data-photonic-platform'),
        level = container.classList.contains('photonic-level-1-container') ? 'level-1' : 'level-2',
        containerId = container.getAttribute('id');

    _Core.Core.showSpinner();

    Util.post(Photonic_JS.ajaxurl, {
      'action': 'photonic_load_more',
      'provider': provider,
      'query': query
    }, function (data) {
      var ret = Util.getElement(data),
          images = ret.querySelectorAll(".photonic-".concat(level)),
          more_button = ret.querySelector('.photonic-more-button'),
          one_existing = container.querySelector('a.photonic-launch-gallery');
      var anchors = [];

      if (one_existing !== null) {
        images.forEach(function (image) {
          var a = image.querySelector('a');

          if (a !== null) {
            a.setAttribute('rel', one_existing.getAttribute('rel'));

            if (a.getAttribute('data-fancybox') != null) {
              a.setAttribute('data-fancybox', one_existing.getAttribute('data-fancybox'));
            } else if (a.getAttribute('data-rel') != null) {
              a.setAttribute('data-rel', one_existing.getAttribute('data-rel'));
            } else if (a.getAttribute('data-strip-group') != null) {
              a.setAttribute('data-strip-group', one_existing.getAttribute('data-strip-group'));
            }

            anchors.push(a);
          }
        });
      } // Can't do this above, which is only for L1


      images.forEach(function (image) {
        return container.appendChild(image);
      });

      _Core.Core.moveHTML5External();

      if (images.length === 0) {
        _Core.Core.hideLoading();

        Util.fadeOut(clicked);
        clicked.remove();
      }

      var lightbox = _Core.Core.getLightbox();

      if (Photonic_JS.slideshow_library === 'imagelightbox') {
        if (one_existing != null) {
          lightbox = _Core.Core.getLightboxList()['a[rel="' + one_existing.getAttribute('rel') + '"]'];

          if (level === 'level-1') {
            lightbox.addToImageLightbox(anchors);
          }
        }
      } else if (Photonic_JS.slideshow_library === 'lightcase') {
        if (one_existing != null) {
          lightbox.initialize('a[data-rel="' + one_existing.getAttribute('data-rel') + '"]');
        }
      } else if (['bigpicture', 'featherlight', 'glightbox', 'lightgallery'].includes(Photonic_JS.slideshow_library)) {
        lightbox.initialize(container);
      } else if (Photonic_JS.slideshow_library === 'baguettebox') {
        lightbox.initialize(null, true);
      } else if (Photonic_JS.slideshow_library === 'fancybox3') {
        if (one_existing != null) {
          lightbox.initialize(null, one_existing.getAttribute('data-fancybox'));
        }
      } else if (Photonic_JS.slideshow_library === 'photoswipe') {
        lightbox.initialize();
      }

      _Core.Core.waitForImages(images).then(function () {
        var new_query = ret.querySelector('.photonic-random-layout,.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout,.modal-gallery');

        if (new_query != null) {
          container.setAttribute('data-photonic-query', new_query.getAttribute('data-photonic-query'));
        }

        if (more_button == null) {
          Util.fadeOut(clicked);
          clicked.remove();
        }

        if (Util.hasClass(container, 'photonic-mosaic-layout')) {
          (0, _Mosaic.Mosaic)(false, false, '#' + containerId);
        } else if (Util.hasClass(container, 'photonic-random-layout')) {
          (0, _Justified.JustifiedGrid)(false, false, '#' + containerId, lightbox);
        } else if (Util.hasClass(container, 'photonic-masonry-layout')) {
          images.forEach(function (image) {
            var img = image.querySelector('img');
            Util.fadeIn(img);
            img.style.display = 'block';
          });

          _Core.Core.hideLoading();
        } else {
          container.querySelectorAll('.photonic-' + level).forEach(function (el) {
            el.style.display = 'inline-block';
          });

          _Core.Core.standardizeTitleWidths();

          _Core.Core.hideLoading();
        }

        (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
      });
    });
  });
}; // input[type="button"].photonic-helper-more


exports.addMoreButtonListener = addMoreButtonListener;

var addHelperMoreButtonListener = function addHelperMoreButtonListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('input[type="button"].photonic-helper-more')) {
      return;
    }

    e.preventDefault();

    _Core.Core.showSpinner();

    var clicked = e.target.closest('input[type="button"].photonic-helper-more');
    var table = clicked.closest('table');
    var nextToken = clicked.getAttribute('data-photonic-token') === undefined ? null : clicked.getAttribute('data-photonic-token'),
        provider = clicked.getAttribute('data-photonic-platform'),
        accessType = clicked.getAttribute('data-photonic-access');
    var args = {
      'action': 'photonic_helper_shortcode_more',
      'provider': provider,
      'access': accessType
    };

    if (nextToken) {
      args.nextPageToken = nextToken;
    }

    if (provider === 'google') {
      Util.post(Photonic_JS.ajaxurl, args, function (data) {
        var ret = Util.getElement(data);
        ret = Array.from(ret.getElementsByTagName('tr'));

        if (ret.length > 0) {
          var tr = clicked.closest('tr');

          if (tr) {
            tr.remove();
          }

          ret.forEach(function (node, i) {
            if (i !== 0) {
              table.appendChild(node);
            }
          });
        }

        (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

        _Core.Core.hideLoading();
      });
    }
  });
};

exports.addHelperMoreButtonListener = addHelperMoreButtonListener;

var addSlideUpEnterListener = function addSlideUpEnterListener() {
  document.addEventListener('mouseover', function (e) {
    var slideup = '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li';

    if (e.target instanceof Element && e.target.closest(slideup)) {
      var node = e.target.closest(slideup);
      var title = node.querySelector('.photonic-title');
      Util.slideUpTitle(title, 'show');
      node.setAttribute('title', '');
    }
  }, true);
};

exports.addSlideUpEnterListener = addSlideUpEnterListener;

var addSlideUpLeaveListener = function addSlideUpLeaveListener() {
  document.addEventListener('mouseout', function (e) {
    var slideup = '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li';

    if (e.target instanceof Element && e.target.closest(slideup)) {
      var node = e.target.closest(slideup);
      var title = node.querySelector('.photonic-title');
      Util.slideUpTitle(title, 'hide');
      node.setAttribute('title', Util.getText(node.getAttribute('data-title')));
    }
  }, true);
};

exports.addSlideUpLeaveListener = addSlideUpLeaveListener;

var addLazyLoadListener = function addLazyLoadListener() {
  var buttons = document.documentElement.querySelectorAll('input.photonic-show-gallery-button');
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', Requests.lazyLoad);
  });
  buttons = document.documentElement.querySelectorAll('input.photonic-js-load-button');
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', Requests.lazyLoad);
    button.click();
  });
};

exports.addLazyLoadListener = addLazyLoadListener;

var addAllListeners = function addAllListeners() {
  addLevel2ClickListener();
  addPasswordSubmitListener();
  addLevel3ExpandListener();
  addMoreButtonListener();
  addHelperMoreButtonListener();
  addSlideUpEnterListener();
  addSlideUpLeaveListener();
  addLazyLoadListener();
};

exports.addAllListeners = addAllListeners;

/***/ }),

/***/ "../include/js/front-end/src/Polyfill.js":
/*!***********************************************!*\
  !*** ../include/js/front-end/src/Polyfill.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.g, module, __webpack_require__.* */
/*! CommonJS bailout: exports is used directly at 492:72-79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js"));

// Element.matches() polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;

    while (--i >= 0 && matches.item(i) !== this) {}

    return i > -1;
  };
} // Element.closest()


if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
} // Element.classList


if ("document" in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
    (function (view) {
      "use strict";

      if (!('Element' in view)) return;

      var classListProp = "classList",
          protoProp = "prototype",
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;

        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }

        return -1;
      } // Vendors: please allow content code to instantiate DOMExceptions
      ,
          DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === "") {
          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
        }

        if (/\s/.test(token)) {
          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
        }

        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;

        for (; i < len; i++) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute("class", this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      }; // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.


      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;

        do {
          token = tokens[i] + "";

          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;

        do {
          token = tokens[i] + "";
          index = checkTokenAndGetIndex(this, token);

          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += "";
        var result = this.contains(token),
            method = result ? force !== true && "remove" : force !== false && "add";

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };

      classListProto.toString = function () {
        return this.join(" ");
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };

        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
          if (ex.number === undefined || ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  } // There is full or partial native classList support, so just check if we need
  // to normalize the add/remove and toggle APIs.


  (function () {
    "use strict";

    var testElement = document.createElement("_");
    testElement.classList.add("c1", "c2"); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.

    if (!testElement.classList.contains("c2")) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          var i,
              len = arguments.length;

          for (i = 0; i < len; i++) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle("c3", false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.

    if (testElement.classList.contains("c3")) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        } else {
          return _toggle.call(this, token);
        }
      };
    }

    testElement = null;
  })();
} // Array.from


if (!Array.from) {
  Array.from = function () {
    var symbolIterator;

    try {
      symbolIterator = Symbol.iterator ? Symbol.iterator : 'Symbol(Symbol.iterator)';
    } catch (e) {
      symbolIterator = 'Symbol(Symbol.iterator)';
    }

    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) return 0;
      if (number === 0 || !isFinite(number)) return number;
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    var setGetItemHandler = function setGetItemHandler(isIterator, items) {
      var iterator = isIterator && items[symbolIterator]();
      return function getItem(k) {
        return isIterator ? iterator.next() : items[k];
      };
    };

    var getArray = function getArray(T, A, len, getItem, isIterator, mapFn) {
      // 16. Let k be 0.
      var k = 0; // 17. Repeat, while k < len… or while iterator is done (also steps a - h)

      while (k < len || isIterator) {
        var item = getItem(k);
        var kValue = isIterator ? item.value : item;

        if (isIterator && item.done) {
          return A;
        } else {
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
        }

        k += 1;
      }

      if (isIterator) {
        throw new TypeError('Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1');
      } else {
        A.length = len;
      }

      return A;
    }; // The length property of the from method is 1.


    return function from(arrayLikeOrIterator
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLikeOrIterator).

      var items = Object(arrayLikeOrIterator);
      var isIterator = isCallable(items[symbolIterator]); // 3. ReturnIfAbrupt(items).

      if (arrayLikeOrIterator == null && !isIterator) {
        throw new TypeError('Array.from requires an array-like object or iterator - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      return getArray(T, A, len, setGetItemHandler(isIterator, items), isIterator, mapFn);
    };
  }();
} // Array.forEach


if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // Array.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        } // c. Increase k by 1.


        k++;
      } // 8. Return false


      return false;
    }
  });
} // NodeList.forEach


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // String.includes


if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }

    if (start === undefined) {
      start = 0;
    }

    return this.indexOf(search, start) !== -1;
  };
} // Object.entries


if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
} // Object.assign


if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
} // Promise, from https://github.com/taylorhakes/promise-polyfill


(function (global, factory) {
  ( false ? 0 : (0, _typeof2.default)(exports)) === 'object' && "object" !== 'undefined' ? factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(void 0, function () {
  'use strict';
  /**
   * @this {Promise}
   */

  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        // @ts-ignore
        return constructor.reject(reason);
      });
    });
  }

  function allSettled(arr) {
    var P = this;
    return new P(function (resolve, reject) {
      if (!(arr && typeof arr.length !== 'undefined')) {
        return reject(new TypeError((0, _typeof2.default)(arr) + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        if (val && ((0, _typeof2.default)(val) === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, function (e) {
              args[i] = {
                status: 'rejected',
                reason: e
              };

              if (--remaining === 0) {
                resolve(args);
              }
            });
            return;
          }
        }

        args[i] = {
          status: 'fulfilled',
          value: val
        };

        if (--remaining === 0) {
          resolve(args);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  } // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())


  var setTimeoutFunc = setTimeout;

  function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
  }

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }
  /**
   * @constructor
   * @param {Function} fn
   */


  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */

    this._state = 0;
    /** @type {!boolean} */

    this._handled = false;
    /** @type {Promise|undefined} */

    this._value = undefined;
    /** @type {!Array<!Function>} */

    this._deferreds = [];
    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;

    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

      if (newValue && ((0, _typeof2.default)(newValue) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }
  /**
   * @constructor
   */


  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.prototype['finally'] = finallyConstructor;

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.all accepts an array'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((0, _typeof2.default)(val) === 'object' || typeof val === 'function')) {
            var then = val.then;

            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.allSettled = allSettled;

  Promise.resolve = function (value) {
    if (value && (0, _typeof2.default)(value) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.race accepts an array'));
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        Promise.resolve(arr[i]).then(resolve, reject);
      }
    });
  }; // Use polyfill for setImmediate for performance gains


  Promise._immediateFn = // @ts-ignore
  typeof setImmediate === 'function' && function (fn) {
    // @ts-ignore
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };
  /** @suppress {undefinedVars} */


  var globalNS = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof __webpack_require__.g !== 'undefined') {
      return __webpack_require__.g;
    }

    throw new Error('unable to locate global object');
  }(); // Expose the polyfill if Promise is undefined or set to a
  // non-function value. The latter can be due to a named HTMLElement
  // being exposed by browsers for legacy reasons.
  // https://github.com/taylorhakes/promise-polyfill/issues/114


  if (typeof globalNS['Promise'] !== 'function') {
    globalNS['Promise'] = Promise;
  } else if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  } else if (!globalNS.Promise.allSettled) {
    globalNS.Promise.allSettled = allSettled;
  }
}); // MouseEvent


(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {// Need to polyfill - fall through
  } // Polyfills DOM4 MouseEvent


  var MouseEventPolyfill = function MouseEventPolyfill(eventType, params) {
    params = params || {
      bubbles: false,
      cancelable: false
    };
    var mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, params.screenX || 0, params.screenY || 0, params.clientX || 0, params.clientY || 0, params.ctrlKey || false, params.altKey || false, params.shiftKey || false, params.metaKey || false, params.button || 0, params.relatedTarget || null);
    return mouseEvent;
  };

  MouseEventPolyfill.prototype = Event.prototype;
  window.MouseEvent = MouseEventPolyfill;
})(window); // ChildNode.remove
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/**
 * URL Polyfill
 * Draft specification: https://url.spec.whatwg.org
 * https://polyfill.io/
 */


(function (global) {
  'use strict';

  function isSequence(o) {
    if (!o) return false;
    if ('Symbol' in global && 'iterator' in global.Symbol && typeof o[Symbol.iterator] === 'function') return true;
    if (Array.isArray(o)) return true;
    return false;
  }

  function toArray(iter) {
    return 'from' in Array ? Array.from(iter) : Array.prototype.slice.call(iter);
  }

  (function () {
    // Browsers may have:
    // * No global URL object
    // * URL with static methods only - may have a dummy constructor
    // * URL with members except searchParams
    // * Full URL API support
    var origURL = global.URL;
    var nativeURL;

    try {
      if (origURL) {
        nativeURL = new global.URL('http://example.com');

        if ('searchParams' in nativeURL) {
          var url = new URL('http://example.com');
          url.search = 'a=1&b=2';

          if (url.href === 'http://example.com/?a=1&b=2') {
            url.search = '';

            if (url.href === 'http://example.com/') {
              return;
            }
          }
        }

        if (!('href' in nativeURL)) {
          nativeURL = undefined;
        }

        nativeURL = undefined;
      } // eslint-disable-next-line no-empty

    } catch (_) {} // NOTE: Doesn't do the encoding/decoding dance


    function urlencoded_serialize(pairs) {
      var output = '',
          first = true;
      pairs.forEach(function (pair) {
        var name = encodeURIComponent(pair.name);
        var value = encodeURIComponent(pair.value);
        if (!first) output += '&';
        output += name + '=' + value;
        first = false;
      });
      return output.replace(/%20/g, '+');
    } // NOTE: Doesn't do the encoding/decoding dance


    function urlencoded_parse(input, isindex) {
      var sequences = input.split('&');
      if (isindex && sequences[0].indexOf('=') === -1) sequences[0] = '=' + sequences[0];
      var pairs = [];
      sequences.forEach(function (bytes) {
        if (bytes.length === 0) return;
        var index = bytes.indexOf('=');

        if (index !== -1) {
          var name = bytes.substring(0, index);
          var value = bytes.substring(index + 1);
        } else {
          name = bytes;
          value = '';
        }

        name = name.replace(/\+/g, ' ');
        value = value.replace(/\+/g, ' ');
        pairs.push({
          name: name,
          value: value
        });
      });
      var output = [];
      pairs.forEach(function (pair) {
        output.push({
          name: decodeURIComponent(pair.name),
          value: decodeURIComponent(pair.value)
        });
      });
      return output;
    }

    function URLUtils(url) {
      if (nativeURL) return new origURL(url);
      var anchor = document.createElement('a');
      anchor.href = url;
      return anchor;
    }

    function URLSearchParams(init) {
      var $this = this;
      this._list = [];

      if (init === undefined || init === null) {// no-op
      } else if (init instanceof URLSearchParams) {
        // In ES6 init would be a sequence, but special case for ES5.
        this._list = urlencoded_parse(String(init));
      } else if ((0, _typeof2.default)(init) === 'object' && isSequence(init)) {
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();

          $this._list.push({
            name: String(nv[0]),
            value: String(nv[1])
          });
        });
      } else if ((0, _typeof2.default)(init) === 'object' && init) {
        Object.keys(init).forEach(function (key) {
          $this._list.push({
            name: String(key),
            value: String(init[key])
          });
        });
      } else {
        init = String(init);
        if (init.substring(0, 1) === '?') init = init.substring(1);
        this._list = urlencoded_parse(init);
      }

      this._url_object = null;

      this._setList = function (list) {
        if (!updating) $this._list = list;
      };

      var updating = false;

      this._update_steps = function () {
        if (updating) return;
        updating = true;
        if (!$this._url_object) return; // Partial workaround for IE issue with 'about:'

        if ($this._url_object.protocol === 'about:' && $this._url_object.pathname.indexOf('?') !== -1) {
          $this._url_object.pathname = $this._url_object.pathname.split('?')[0];
        }

        $this._url_object.search = urlencoded_serialize($this._list);
        updating = false;
      };
    }

    Object.defineProperties(URLSearchParams.prototype, {
      append: {
        value: function value(name, _value) {
          this._list.push({
            name: name,
            value: _value
          });

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      'delete': {
        value: function value(name) {
          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name) this._list.splice(i, 1);else ++i;
          }

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      get: {
        value: function value(name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) return this._list[i].value;
          }

          return null;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      getAll: {
        value: function value(name) {
          var result = [];

          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) result.push(this._list[i].value);
          }

          return result;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      has: {
        value: function value(name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      set: {
        value: function value(name, _value2) {
          var found = false;

          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name) {
              if (!found) {
                this._list[i].value = _value2;
                found = true;
                ++i;
              } else {
                this._list.splice(i, 1);
              }
            } else {
              ++i;
            }
          }

          if (!found) this._list.push({
            name: name,
            value: _value2
          });

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      entries: {
        value: function value() {
          return new Iterator(this._list, 'key+value');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      keys: {
        value: function value() {
          return new Iterator(this._list, 'key');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      values: {
        value: function value() {
          return new Iterator(this._list, 'value');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      forEach: {
        value: function value(callback) {
          var thisArg = arguments.length > 1 ? arguments[1] : undefined;

          this._list.forEach(function (pair) {
            callback.call(thisArg, pair.value, pair.name);
          });
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      toString: {
        value: function value() {
          return urlencoded_serialize(this._list);
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });

    function Iterator(source, kind) {
      var index = 0;

      this.next = function () {
        if (index >= source.length) return {
          done: true,
          value: undefined
        };
        var pair = source[index++];
        return {
          done: false,
          value: kind === 'key' ? pair.name : kind === 'value' ? pair.value : [pair.name, pair.value]
        };
      };
    }

    if ('Symbol' in global && 'iterator' in global.Symbol) {
      Object.defineProperty(URLSearchParams.prototype, global.Symbol.iterator, {
        value: URLSearchParams.prototype.entries,
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Iterator.prototype, global.Symbol.iterator, {
        value: function value() {
          return this;
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    }

    function URL(url, base) {
      if (!(this instanceof global.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");

      if (base) {
        url = function () {
          if (nativeURL) return new origURL(url, base).href;
          var iframe;

          try {
            var doc; // Use another document/base tag/anchor for relative URL resolution, if possible

            if (Object.prototype.toString.call(window.operamini) === "[object OperaMini]") {
              iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              document.documentElement.appendChild(iframe);
              doc = iframe.contentWindow.document;
            } else if (document.implementation && document.implementation.createHTMLDocument) {
              doc = document.implementation.createHTMLDocument('');
            } else if (document.implementation && document.implementation.createDocument) {
              doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
              doc.documentElement.appendChild(doc.createElement('head'));
              doc.documentElement.appendChild(doc.createElement('body'));
            } else if (window.ActiveXObject) {
              doc = new window.ActiveXObject('htmlfile');
              doc.write('<head></head><body></body>');
              doc.close();
            }

            if (!doc) throw Error('base not supported');
            var baseTag = doc.createElement('base');
            baseTag.href = base;
            doc.getElementsByTagName('head')[0].appendChild(baseTag);
            var anchor = doc.createElement('a');
            anchor.href = url;
            return anchor.href;
          } finally {
            if (iframe) iframe.parentNode.removeChild(iframe);
          }
        }();
      } // An inner object implementing URLUtils (either a native URL
      // object or an HTMLAnchorElement instance) is used to perform the
      // URL algorithms. With full ES5 getter/setter support, return a
      // regular object For IE8's limited getter/setter support, a
      // different HTMLAnchorElement is returned with properties
      // overridden


      var instance = URLUtils(url || ''); // Detect for ES5 getter/setter support
      // (an Object.defineProperties polyfill that doesn't support getters/setters may throw)

      var ES5_GET_SET = function () {
        if (!('defineProperties' in Object)) return false;

        try {
          var obj = {};
          Object.defineProperties(obj, {
            prop: {
              get: function get() {
                return true;
              }
            }
          });
          return obj.prop;
        } catch (_) {
          return false;
        }
      }();

      var self = ES5_GET_SET ? this : document.createElement('a');
      var query_object = new URLSearchParams(instance.search ? instance.search.substring(1) : null);
      query_object._url_object = self;
      Object.defineProperties(self, {
        href: {
          get: function get() {
            return instance.href;
          },
          set: function set(v) {
            instance.href = v;
            tidy_instance();
            update_steps();
          },
          enumerable: true,
          configurable: true
        },
        origin: {
          get: function get() {
            if ('origin' in instance) return instance.origin;
            return this.protocol + '//' + this.host;
          },
          enumerable: true,
          configurable: true
        },
        protocol: {
          get: function get() {
            return instance.protocol;
          },
          set: function set(v) {
            instance.protocol = v;
          },
          enumerable: true,
          configurable: true
        },
        username: {
          get: function get() {
            return instance.username;
          },
          set: function set(v) {
            instance.username = v;
          },
          enumerable: true,
          configurable: true
        },
        password: {
          get: function get() {
            return instance.password;
          },
          set: function set(v) {
            instance.password = v;
          },
          enumerable: true,
          configurable: true
        },
        host: {
          get: function get() {
            // IE returns default port in |host|
            var re = {
              'http:': /:80$/,
              'https:': /:443$/,
              'ftp:': /:21$/
            }[instance.protocol];
            return re ? instance.host.replace(re, '') : instance.host;
          },
          set: function set(v) {
            instance.host = v;
          },
          enumerable: true,
          configurable: true
        },
        hostname: {
          get: function get() {
            return instance.hostname;
          },
          set: function set(v) {
            instance.hostname = v;
          },
          enumerable: true,
          configurable: true
        },
        port: {
          get: function get() {
            return instance.port;
          },
          set: function set(v) {
            instance.port = v;
          },
          enumerable: true,
          configurable: true
        },
        pathname: {
          get: function get() {
            // IE does not include leading '/' in |pathname|
            if (instance.pathname.charAt(0) !== '/') return '/' + instance.pathname;
            return instance.pathname;
          },
          set: function set(v) {
            instance.pathname = v;
          },
          enumerable: true,
          configurable: true
        },
        search: {
          get: function get() {
            return instance.search;
          },
          set: function set(v) {
            if (instance.search === v) return;
            instance.search = v;
            tidy_instance();
            update_steps();
          },
          enumerable: true,
          configurable: true
        },
        searchParams: {
          get: function get() {
            return query_object;
          },
          enumerable: true,
          configurable: true
        },
        hash: {
          get: function get() {
            return instance.hash;
          },
          set: function set(v) {
            instance.hash = v;
            tidy_instance();
          },
          enumerable: true,
          configurable: true
        },
        toString: {
          value: function value() {
            return instance.toString();
          },
          enumerable: false,
          configurable: true
        },
        valueOf: {
          value: function value() {
            return instance.valueOf();
          },
          enumerable: false,
          configurable: true
        }
      });

      function tidy_instance() {
        var href = instance.href.replace(/#$|\?$|\?(?=#)/g, '');
        if (instance.href !== href) instance.href = href;
      }

      function update_steps() {
        query_object._setList(instance.search ? urlencoded_parse(instance.search.substring(1)) : []);

        query_object._update_steps();
      }

      return self;
    }

    if (origURL) {
      for (var i in origURL) {
        if (Object.prototype.hasOwnProperty.call(origURL, i) && typeof origURL[i] === 'function') URL[i] = origURL[i];
      }
    }

    global.URL = URL;
    global.URLSearchParams = URLSearchParams;
  })(); // Patch native URLSearchParams constructor to handle sequences/records
  // if necessary.


  (function () {
    if (new global.URLSearchParams([['a', 1]]).get('a') === '1' && new global.URLSearchParams({
      a: 1
    }).get('a') === '1') return;
    var orig = global.URLSearchParams;

    global.URLSearchParams = function (init) {
      if (init && (0, _typeof2.default)(init) === 'object' && isSequence(init)) {
        var o = new orig();
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();
          o.append(nv[0], nv[1]);
        });
        return o;
      } else if (init && (0, _typeof2.default)(init) === 'object') {
        o = new orig();
        Object.keys(init).forEach(function (key) {
          o.set(key, init[key]);
        });
        return o;
      } else {
        return new orig(init);
      }
    };
  })();
})(self); // Event, CustomEvent


(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  window.CustomEvent = CustomEvent;
  window.Event = CustomEvent;
})();

/***/ }),

/***/ "../include/js/front-end/src/Requests.js":
/*!***********************************************!*\
  !*** ../include/js/front-end/src/Requests.js ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayLevel2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lazyLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processL3Request [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lazyLoad = exports.processL3Request = exports.displayLevel2 = exports.processRequest = void 0;

var _Core = __webpack_require__(/*! ./Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var _Justified = __webpack_require__(/*! ./Layouts/Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Masonry = __webpack_require__(/*! ./Layouts/Masonry */ "../include/js/front-end/src/Layouts/Masonry.js");

var _Mosaic = __webpack_require__(/*! ./Layouts/Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

var _Modal = __webpack_require__(/*! ./Components/Modal */ "../include/js/front-end/src/Components/Modal.js");

var _Slider = __webpack_require__(/*! ./Layouts/Slider */ "../include/js/front-end/src/Layouts/Slider.js");

var spinners = 0;

var bypassPopup = function bypassPopup(data) {
  _Core.Core.hideLoading();

  var panel;

  if (data instanceof Element) {
    panel = data;
  } else {
    panel = Util.getElement(data).firstElementChild;
  }

  Util.hide(panel);
  document.body.appendChild(panel);

  _Core.Core.moveHTML5External();

  var lightbox = _Core.Core.getLightbox();

  if (lightbox !== undefined && lightbox !== null) {
    lightbox.initializeForNewContainer('#' + panel.getAttribute('id'));
  }

  var thumbs = panel.querySelectorAll('.photonic-launch-gallery');

  if (thumbs.length > 0) {
    _Core.Core.setDeep('#' + thumbs[0].getAttribute('data-photonic-deep'));

    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }); // If cancelled, don't dispatch our event

    !thumbs[0].dispatchEvent(evt);
  }
};

var displayPopup = function displayPopup(data, provider, popup, panelId) {
  var safePanelId = panelId.replace('.', '\\.'); // FOR EXISTING ELEMENTS WHCICH NEED SANITIZED PANELID

  var div = Util.getElement(data).firstElementChild;
  var grid = div.querySelector('.modal-gallery');

  _Core.Core.waitForImages(grid).then(function () {
    var popupPanel = document.querySelector('#photonic-' + provider + '-' + popup + '-' + safePanelId);

    if (popupPanel) {
      popupPanel.appendChild(div);
      Util.show(popupPanel);
    }

    (0, _Modal.Modal)(div, {
      modalTarget: 'photonic-' + provider + '-panel-' + safePanelId,
      color: '#000',
      width: Photonic_JS.gallery_panel_width + '%',
      closeFromRight: (100 - Photonic_JS.gallery_panel_width) / 2 + '%'
    });

    _Core.Core.moveHTML5External();

    var lightbox = _Core.Core.getLightbox();

    if (lightbox !== undefined && lightbox !== null) {
      lightbox.initializeForNewContainer('#' + div.getAttribute('id'));
    }

    (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

    _Core.Core.hideLoading();
  });
};

var redisplayPopupContents = function redisplayPopupContents(provider, panelId, panel, args) {
  var panelEl = Util.getElement(panel);

  if ('show' === args['popup']) {
    _Core.Core.hideLoading();

    (0, _Modal.Modal)(panelEl, {
      modalTarget: 'photonic-' + provider + '-panel-' + panelId,
      color: '#000',
      width: Photonic_JS.gallery_panel_width + '%',
      closeFromRight: (100 - Photonic_JS.gallery_panel_width) / 2 + '%'
    });
  } else {
    bypassPopup(document.getElementById('photonic-' + provider + '-panel-' + panelId));
  }
};

var processRequest = function processRequest(provider, type, identifier, args) {
  args['action'] = 'photonic_display_level_2_contents';
  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    if (data.substr(0, Photonic_JS.password_failed.length) === Photonic_JS.password_failed) {
      _Core.Core.hideLoading();

      var prompter = '#photonic-' + provider + '-' + type + '-prompter-' + identifier;
      var prompterDialog = _Core.Core.prompterList[prompter];

      if (prompterDialog !== undefined && prompterDialog !== null) {
        prompterDialog.show();
      }
    } else {
      if ('show' === args['popup']) {
        displayPopup(data, provider, type, identifier);
      } else {
        if (data !== '') {
          bypassPopup(data);
        } else {
          _Core.Core.hideLoading();
        }
      }
    }
  });
};

exports.processRequest = processRequest;

var displayLevel2 = function displayLevel2(provider, type, args) {
  var identifier = args['panel_id'].substr(('photonic-' + provider + '-' + type + '-thumb-').length);
  var panel = '#photonic-' + provider + '-panel-' + identifier;
  var existing = document.getElementById('photonic-' + provider + '-panel-' + identifier);

  if (existing == null) {
    existing = document.getElementById(args['panel_id']);

    if (existing.classList.contains('photonic-' + provider + '-passworded')) {
      _Core.Core.initializePasswordPrompter("#photonic-".concat(provider, "-").concat(type, "-prompter-").concat(identifier));
    } else {
      _Core.Core.showSpinner();

      processRequest(provider, type, identifier, args);
    }
  } else {
    _Core.Core.showSpinner();

    redisplayPopupContents(provider, identifier, panel, args);
  }
};

exports.displayLevel2 = displayLevel2;

var processL3Request = function processL3Request(clicked, header, args) {
  args['action'] = 'photonic_display_level_3_contents';

  _Core.Core.showSpinner();

  var lightbox = _Core.Core.getLightbox();

  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    var insert = Util.getElement(data);

    if (header) {
      var layout = insert.querySelector('.photonic-level-2-container');
      var container = header.parentNode;
      var returnedStream = insert.firstElementChild;
      var collectionId = args.node.substr('flickr-collection-'.length);
      returnedStream.setAttribute('id', args.stream + '-' + collectionId);
      container.insertBefore(returnedStream, header.nextSibling);

      if (layout.classList.contains('photonic-random-layout')) {
        (0, _Justified.JustifiedGrid)(false, false, null, lightbox);
      } else if (layout.classList.contains('photonic-mosaic-layout')) {
        (0, _Mosaic.Mosaic)(false, false);
      } else if (layout.classList.contains('photonic-masonry-layout')) {
        (0, _Masonry.Masonry)(false, false);
      }

      var level2 = insert.querySelectorAll('.photonic-level-2');
      level2.forEach(function (item) {
        item.style.display = 'inline-block';
      });
      (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
      clicked.classList.remove('photonic-level-3-expand-plus');
      clicked.classList.add('photonic-level-3-expand-up');
      clicked.setAttribute('title', Photonic_JS.minimize_panel === undefined ? 'Hide' : Photonic_JS.minimize_panel);
    }

    _Core.Core.hideLoading();
  });
};

exports.processL3Request = processL3Request;

var lazyLoad = function lazyLoad(evt) {
  spinners++;

  _Core.Core.showSpinner();

  var clicked = evt.currentTarget;
  var shortcode = clicked.getAttribute('data-photonic-shortcode');
  var args = {
    'action': 'photonic_lazy_load',
    'shortcode': shortcode
  };
  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    var div = document.createElement('div');
    div.innerHTML = data;
    div = div.firstElementChild;

    if (div) {
      var divId = div.getAttribute('id');
      var divClass = divId.substring(0, divId.lastIndexOf('-'));
      var streams = document.documentElement.querySelectorAll('.' + divClass);
      var max = 0;
      streams.forEach(function (stream) {
        var streamId = stream.getAttribute('id');
        streamId = streamId.substring(streamId.lastIndexOf('-') + 1);
        streamId = parseInt(streamId, 10);
        max = Math.max(max, streamId);
      });
      max = max + 1;
      var regex = new RegExp(divId, 'gi');
      div.innerHTML = data.replace(regex, divClass + '-' + max).replace('photonic-slideshow-' + divId.substring(divId.lastIndexOf('-') + 1), 'photonic-slideshow-' + max);
      div = div.firstElementChild; // Level 2 elements get their own ids, which need to be readjusted because the back-end always assigns them a gallery_index of 1

      div.querySelectorAll('figure.photonic-level-2').forEach(function (figure) {
        if (figure.getAttribute('id') != null) {
          var figId = figure.getAttribute('id');
          var modId = figId.substring(0, figId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

          figure.setAttribute('id', modId);
          var anchor = figure.querySelector('a');

          if (anchor.getAttribute('id') != null) {
            var anchorId = anchor.getAttribute('id');
            var modAnchorId = anchorId.substring(0, anchorId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

            anchor.setAttribute('id', modAnchorId);
          }

          var prompter = figure.querySelector('.photonic-password-prompter');

          if (prompter != null && prompter.getAttribute('id') != null) {
            var prompterId = prompter.getAttribute('id');
            var modPrompterId = prompterId.substring(0, prompterId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

            prompter.setAttribute('id', modPrompterId);
          }
        }
      });
      clicked.insertAdjacentElement('afterend', div);
      var newDivId = divClass + '-' + max;

      var lightbox = _Core.Core.getLightbox();

      if (lightbox !== undefined && lightbox !== null) {
        lightbox.initializeForNewContainer('#' + div.getAttribute('id'));
      }

      if (document.querySelectorAll('#' + newDivId + ' .photonic-random-layout').length > 0) {
        (0, _Justified.JustifiedGrid)(false, true, '#' + newDivId + ' .photonic-random-layout', lightbox);
        spinners--;
      } else if (document.querySelectorAll('#' + newDivId + ' .photonic-masonry-layout').length > 0) {
        (0, _Masonry.Masonry)(false, true, '#' + newDivId + ' .photonic-masonry-layout');
        spinners--;
      } else if (document.querySelectorAll('#' + newDivId + ' .photonic-mosaic-layout').length > 0) {
        (0, _Mosaic.Mosaic)(false, true, '#' + newDivId + ' .photonic-mosaic-layout');
        spinners--;
      } // Slider(document.querySelector('#photonic-slideshow-' + max));


      _Core.Core.waitForImages(div).then(function () {
        var standard = document.documentElement.querySelectorAll('#' + newDivId + ' .photonic-standard-layout .photonic-level-1, ' + '#' + newDivId + ' .photonic-standard-layout .photonic-level-2');
        standard.forEach(function (image) {
          image.style.display = 'inline-block';
        });

        _Core.Core.standardizeTitleWidths();

        spinners--;

        if (spinners <= 0) {
          _Core.Core.hideLoading();
        }
      });

      _Core.Core.moveHTML5External();

      clicked.parentNode.removeChild(clicked);
      (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

      if (spinners <= 0) {
        _Core.Core.hideLoading();
      }
    }
  });
};

exports.lazyLoad = lazyLoad;

/***/ }),

/***/ "../include/js/front-end/src/Util.js":
/*!*******************************************!*\
  !*** ../include/js/front-end/src/Util.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fadeIn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fadeOut [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hide [provided] [no usage info] [missing usage info prevents renaming] */
/*! export next [provided] [no usage info] [missing usage info prevents renaming] */
/*! export post [provided] [no usage info] [missing usage info prevents renaming] */
/*! export show [provided] [no usage info] [missing usage info prevents renaming] */
/*! export slideUpDown [provided] [no usage info] [missing usage info prevents renaming] */
/*! export slideUpTitle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hide = exports.show = exports.fadeOut = exports.fadeIn = exports.slideUpTitle = exports.slideUpDown = exports.getText = exports.getElement = exports.next = exports.get = exports.post = exports.hasClass = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js"));

// Utilities for Photonic
var hasClass = function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  }
};

exports.hasClass = hasClass;

function ajax(method, url, args, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = xhr.responseText;
        callback(data);
      }
    }
  };

  var form = new FormData();

  for (var _i = 0, _Object$entries = Object.entries(args); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    form.append(key, value);
  }

  xhr.send(form);
}

var post = function post(url, args, callback) {
  ajax('POST', url, args, callback);
};

exports.post = post;

var get = function get(url, args, callback) {
  ajax('GET', url, args, callback);
};

exports.get = get;

var next = function next(elem, selector) {
  var sibling = elem.nextElementSibling;
  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
};

exports.next = next;

var getElement = function getElement(value) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(value, 'text/html');
  return doc.body;
};

exports.getElement = getElement;

var getText = function getText(value) {
  var txt = document.createElement("div");
  txt.innerHTML = value;
  return txt.innerText;
};

exports.getText = getText;

var slideUpDown = function slideUpDown(element, state) {
  if (element != null && element.classList) {
    if (!element.classList.contains('photonic-can-slide')) {
      element.classList.add('photonic-can-slide');
    }

    if ('show' === state) {
      element.classList.remove('photonic-can-slide-hide');
      element.style.height = "".concat(element.scrollHeight, "px");
    } else {
      element.classList.add('photonic-can-slide-hide');
      element.style.height = 0;
    }
  }
};

exports.slideUpDown = slideUpDown;

var slideUpTitle = function slideUpTitle(element, state) {
  if (element && element.classList) {
    if ('show' === state) {
      element.classList.add('slideup-show');
    } else {
      element.classList.remove('slideup-show');
    }
  }
};

exports.slideUpTitle = slideUpTitle;

var fadeIn = function fadeIn(el) {
  if (!hasClass(el, 'fade-in')) {
    el.style.display = 'block';
    el.classList.add('fade-in');
  }
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(el, duration) {
  var s = el.style,
      step = 25 / (duration || 500);
  s.opacity = s.opacity || 1;

  (function fade() {
    s.opacity -= step;

    if (s.opacity < 0) {
      s.display = "none";
      el.classList.remove('fade-in');
    } else {
      setTimeout(fade, 25);
    }
  })();
}; // get the default display style of an element


exports.fadeOut = fadeOut;

var defaultDisplay = function defaultDisplay(tag) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('width', 0);
  iframe.setAttribute('height', 0);
  document.documentElement.appendChild(iframe);
  var doc = (iframe.contentWindow || iframe.contentDocument).document; // IE support

  doc.write();
  doc.close();
  var testEl = doc.createElement(tag);
  doc.documentElement.appendChild(testEl);
  var display = (window.getComputedStyle ? getComputedStyle(testEl, null) : testEl.currentStyle).display;
  iframe.parentNode.removeChild(iframe);
  return display;
}; // actual show/hide function used by show() and hide() below


var showHide = function showHide(el, show) {
  var value = el.getAttribute('data-olddisplay'),
      display = el.style.display,
      computedDisplay = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;

  if (show) {
    if (!value && display === 'none') el.style.display = '';
    if (el.style.display === '' && computedDisplay === 'none') value = value || defaultDisplay(el.nodeName);
  } else {
    if (display && display !== 'none' || !(computedDisplay === 'none')) el.setAttribute('data-olddisplay', computedDisplay === 'none' ? display : computedDisplay);
  }

  if (!show || el.style.display === 'none' || el.style.display === '') el.style.display = show ? value || '' : 'none';
}; // helper functions


var show = function show(el) {
  return showHide(el, true);
};

exports.show = show;

var hide = function hide(el) {
  return showHide(el);
};

exports.hide = hide;

/***/ }),

/***/ "../../../../../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************************!*\
  !*** ../../../../../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("../include/js/front-end/src/Polyfill.js");
/******/ 	__webpack_require__("../include/ext/lightcase/lightcase.js");
/******/ 	__webpack_require__("../include/js/front-end/src/Entries/Lightcase.js");
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 39:0-14 */
/***/ ((module) => {



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

/***/ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 18:0-14 */
/***/ ((module) => {



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

/***/ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



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
/*! CommonJS bailout: module.exports is used directly at 57:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ "../../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:4-18 */
/*! CommonJS bailout: module.exports is used directly at 11:4-18 */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module) => {



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

/***/ "../include/ext/glightbox/glightbox.js":
/*!*********************************************!*\
  !*** ../include/ext/glightbox/glightbox.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:65-79 */
/***/ ((module) => {



(function (global, factory) {
   true ? module.exports = factory() : 0;
})(void 0, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var uid = Date.now();

  function extend() {
    var extended = {};
    var deep = true;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }

  function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) {
      collection = [collection];
    }

    if (!isArrayLike(collection) && !isObject(collection)) {
      collection = [collection];
    }

    if (size(collection) == 0) {
      return;
    }

    if (isArrayLike(collection) && !isObject(collection)) {
      var l = collection.length,
          i = 0;

      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (isObject(collection)) {
      for (var key in collection) {
        if (has(collection, key)) {
          if (callback.call(collection[key], collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
  }

  function getNodeEvents(node) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cache = node[uid] = node[uid] || [];
    var data = {
      all: cache,
      evt: null,
      found: null
    };

    if (name && fn && size(cache) > 0) {
      each(cache, function (cl, i) {
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
          data.found = true;
          data.evt = i;
          return false;
        }
      });
    }

    return data;
  }

  function addEvent(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        onElement = _ref.onElement,
        withCallback = _ref.withCallback,
        _ref$avoidDuplicate = _ref.avoidDuplicate,
        avoidDuplicate = _ref$avoidDuplicate === void 0 ? true : _ref$avoidDuplicate,
        _ref$once = _ref.once,
        once = _ref$once === void 0 ? false : _ref$once,
        _ref$useCapture = _ref.useCapture,
        useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;

    var thisArg = arguments.length > 2 ? arguments[2] : undefined;
    var element = onElement || [];

    if (isString(element)) {
      element = document.querySelectorAll(element);
    }

    function handler(event) {
      if (isFunction(withCallback)) {
        withCallback.call(thisArg, event, this);
      }

      if (once) {
        handler.destroy();
      }
    }

    handler.destroy = function () {
      each(element, function (el) {
        var events = getNodeEvents(el, eventName, handler);

        if (events.found) {
          events.all.splice(events.evt, 1);
        }

        if (el.removeEventListener) el.removeEventListener(eventName, handler, useCapture);
      });
    };

    each(element, function (el) {
      var events = getNodeEvents(el, eventName, handler);

      if (el.addEventListener && avoidDuplicate && !events.found || !avoidDuplicate) {
        el.addEventListener(eventName, handler, useCapture);
        events.all.push({
          eventName: eventName,
          fn: handler
        });
      }
    });
    return handler;
  }

  function addClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.add(cl);
    });
  }

  function removeClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.remove(cl);
    });
  }

  function hasClass(node, name) {
    return node.classList.contains(name);
  }

  function closest(elem, selector) {
    while (elem !== document.body) {
      elem = elem.parentElement;

      if (!elem) {
        return false;
      }

      var matches = typeof elem.matches == 'function' ? elem.matches(selector) : elem.msMatchesSelector(selector);
      if (matches) return elem;
    }
  }

  function animateElement(element) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!element || animation === '') {
      return false;
    }

    if (animation == 'none') {
      if (isFunction(callback)) callback();
      return false;
    }

    var animationEnd = whichAnimationEvent();
    var animationNames = animation.split(' ');
    each(animationNames, function (name) {
      addClass(element, 'g' + name);
    });
    addEvent(animationEnd, {
      onElement: element,
      avoidDuplicate: false,
      once: true,
      withCallback: function withCallback(event, target) {
        each(animationNames, function (name) {
          removeClass(target, 'g' + name);
        });
        if (isFunction(callback)) callback();
      }
    });
  }

  function cssTransform(node) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (translate == '') {
      node.style.webkitTransform = '';
      node.style.MozTransform = '';
      node.style.msTransform = '';
      node.style.OTransform = '';
      node.style.transform = '';
      return false;
    }

    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
  }

  function show(element) {
    element.style.display = 'block';
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function createHTML(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;

    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    return frag;
  }

  function windowSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function createIframe(config) {
    var url = config.url,
        allow = config.allow,
        callback = config.callback,
        appendTo = config.appendTo;
    var iframe = document.createElement('iframe');
    iframe.className = 'vimeo-video gvideo';
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    if (allow) {
      iframe.setAttribute('allow', allow);
    }

    iframe.onload = function () {
      addClass(iframe, 'node-ready');

      if (isFunction(callback)) {
        callback();
      }
    };

    if (appendTo) {
      appendTo.appendChild(iframe);
    }

    return iframe;
  }

  function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
      onComplete();
      return;
    }

    if (!delay) delay = 100;
    var timeoutPointer;
    var intervalPointer = setInterval(function () {
      if (!check()) return;
      clearInterval(intervalPointer);
      if (timeoutPointer) clearTimeout(timeoutPointer);
      onComplete();
    }, delay);
    if (timeout) timeoutPointer = setTimeout(function () {
      clearInterval(intervalPointer);
    }, timeout);
  }

  function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
      console.error('Inject videos api error');
      return;
    }

    if (isFunction(waitFor)) {
      callback = waitFor;
      waitFor = false;
    }

    var found;

    if (url.indexOf('.css') !== -1) {
      found = document.querySelectorAll('link[href="' + url + '"]');

      if (found && found.length > 0) {
        if (isFunction(callback)) callback();
        return;
      }

      var head = document.getElementsByTagName("head")[0];
      var headStyles = head.querySelectorAll('link[rel="stylesheet"]');
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';

      if (headStyles) {
        head.insertBefore(link, headStyles[0]);
      } else {
        head.appendChild(link);
      }

      if (isFunction(callback)) callback();
      return;
    }

    found = document.querySelectorAll('script[src="' + url + '"]');

    if (found && found.length > 0) {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }

      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function () {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }
    };

    document.body.appendChild(script);
    return;
  }

  function isMobile() {
    return 'navigator' in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }

  function isTouch() {
    return isMobile() !== null || document.createTouch !== undefined || 'ontouchstart' in window || 'onmsgesturechange' in window || navigator.msMaxTouchPoints;
  }

  function isFunction(f) {
    return typeof f === 'function';
  }

  function isString(s) {
    return typeof s === 'string';
  }

  function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
  }

  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
  }

  function isObject(o) {
    var type = _typeof(o);

    return type === 'object' && o != null && !isFunction(o) && !isArray(o);
  }

  function isNil(o) {
    return o == null;
  }

  function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }

  function size(o) {
    if (isObject(o)) {
      if (o.keys) {
        return o.keys().length;
      }

      var l = 0;

      for (var k in o) {
        if (has(o, k)) {
          l++;
        }
      }

      return l;
    } else {
      return o.length;
    }
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty('keyboard')) {
      return false;
    }

    instance.events['keyboard'] = addEvent('keydown', {
      onElement: window,
      withCallback: function withCallback(event, target) {
        event = event || window.event;
        var key = event.keyCode;

        if (key == 9) {
          var activeElement = document.activeElement && document.activeElement.nodeName ? document.activeElement.nodeName.toLocaleLowerCase() : false;

          if (activeElement == 'input' || activeElement == 'textarea' || activeElement == 'button') {
            return;
          }

          event.preventDefault();
          var btns = document.querySelectorAll('.gbtn');

          if (!btns || btns.length <= 0) {
            return;
          }

          var focused = _toConsumableArray(btns).filter(function (item) {
            return hasClass(item, 'focused');
          });

          if (!focused.length) {
            var first = document.querySelector('.gbtn[tabindex="0"]');

            if (first) {
              first.focus();
              addClass(first, 'focused');
            }

            return;
          }

          btns.forEach(function (element) {
            return removeClass(element, 'focused');
          });
          var tabindex = focused[0].getAttribute('tabindex');
          tabindex = tabindex ? tabindex : '0';
          var newIndex = parseInt(tabindex) + 1;

          if (newIndex > btns.length - 1) {
            newIndex = '0';
          }

          var next = document.querySelector(".gbtn[tabindex=\"".concat(newIndex, "\"]"));

          if (next) {
            next.focus();
            addClass(next, 'focused');
          }
        }

        if (key == 39) instance.nextSlide();
        if (key == 37) instance.prevSlide();
        if (key == 27) instance.close();
      }
    });
  }

  function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);
    if (mr === 0) return 0;
    var r = dot(v1, v2) / mr;
    if (r > 1) r = 1;
    return Math.acos(r);
  }

  function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }

  function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);

    if (cross(v1, v2) > 0) {
      angle *= -1;
    }

    return angle * 180 / Math.PI;
  }

  var EventsHandlerAdmin = function () {
    function EventsHandlerAdmin(el) {
      _classCallCheck(this, EventsHandlerAdmin);

      this.handlers = [];
      this.el = el;
    }

    _createClass(EventsHandlerAdmin, [{
      key: "add",
      value: function add(handler) {
        this.handlers.push(handler);
      }
    }, {
      key: "del",
      value: function del(handler) {
        if (!handler) this.handlers = [];

        for (var i = this.handlers.length; i >= 0; i--) {
          if (this.handlers[i] === handler) {
            this.handlers.splice(i, 1);
          }
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        for (var i = 0, len = this.handlers.length; i < len; i++) {
          var handler = this.handlers[i];
          if (typeof handler === 'function') handler.apply(this.el, arguments);
        }
      }
    }]);

    return EventsHandlerAdmin;
  }();

  function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
  }

  var TouchEvents = function () {
    function TouchEvents(el, option) {
      _classCallCheck(this, TouchEvents);

      this.element = typeof el == 'string' ? document.querySelector(el) : el;
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this);
      this.cancel = this.cancel.bind(this);
      this.element.addEventListener("touchstart", this.start, false);
      this.element.addEventListener("touchmove", this.move, false);
      this.element.addEventListener("touchend", this.end, false);
      this.element.addEventListener("touchcancel", this.cancel, false);
      this.preV = {
        x: null,
        y: null
      };
      this.pinchStartLen = null;
      this.zoom = 1;
      this.isDoubleTap = false;

      var noop = function noop() {};

      this.rotate = wrapFunc(this.element, option.rotate || noop);
      this.touchStart = wrapFunc(this.element, option.touchStart || noop);
      this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
      this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
      this.pinch = wrapFunc(this.element, option.pinch || noop);
      this.swipe = wrapFunc(this.element, option.swipe || noop);
      this.tap = wrapFunc(this.element, option.tap || noop);
      this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
      this.longTap = wrapFunc(this.element, option.longTap || noop);
      this.singleTap = wrapFunc(this.element, option.singleTap || noop);
      this.pressMove = wrapFunc(this.element, option.pressMove || noop);
      this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
      this.touchMove = wrapFunc(this.element, option.touchMove || noop);
      this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
      this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
      this._cancelAllHandler = this.cancelAll.bind(this);
      window.addEventListener('scroll', this._cancelAllHandler);
      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.singleTapTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = {
        x: null,
        y: null
      };
    }

    _createClass(TouchEvents, [{
      key: "start",
      value: function start(evt) {
        if (!evt.touches) return;
        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        this.touchStart.dispatch(evt, this.element);

        if (this.preTapPosition.x !== null) {
          this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
          if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
        }

        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV,
            len = evt.touches.length;

        if (len > 1) {
          this._cancelLongTap();

          this._cancelSingleTap();

          var v = {
            x: evt.touches[1].pageX - this.x1,
            y: evt.touches[1].pageY - this.y1
          };
          preV.x = v.x;
          preV.y = v.y;
          this.pinchStartLen = getLen(preV);
          this.multipointStart.dispatch(evt, this.element);
        }

        this._preventTap = false;
        this.longTapTimeout = setTimeout(function () {
          this.longTap.dispatch(evt, this.element);
          this._preventTap = true;
        }.bind(this), 750);
      }
    }, {
      key: "move",
      value: function move(evt) {
        if (!evt.touches) return;
        var preV = this.preV,
            len = evt.touches.length,
            currentX = evt.touches[0].pageX,
            currentY = evt.touches[0].pageY;
        this.isDoubleTap = false;

        if (len > 1) {
          var sCurrentX = evt.touches[1].pageX,
              sCurrentY = evt.touches[1].pageY;
          var v = {
            x: evt.touches[1].pageX - currentX,
            y: evt.touches[1].pageY - currentY
          };

          if (preV.x !== null) {
            if (this.pinchStartLen > 0) {
              evt.zoom = getLen(v) / this.pinchStartLen;
              this.pinch.dispatch(evt, this.element);
            }

            evt.angle = getRotateAngle(v, preV);
            this.rotate.dispatch(evt, this.element);
          }

          preV.x = v.x;
          preV.y = v.y;

          if (this.x2 !== null && this.sx2 !== null) {
            evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
            evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.twoFingerPressMove.dispatch(evt, this.element);
          this.sx2 = sCurrentX;
          this.sy2 = sCurrentY;
        } else {
          if (this.x2 !== null) {
            evt.deltaX = currentX - this.x2;
            evt.deltaY = currentY - this.y2;
            var movedX = Math.abs(this.x1 - this.x2),
                movedY = Math.abs(this.y1 - this.y2);

            if (movedX > 10 || movedY > 10) {
              this._preventTap = true;
            }
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.pressMove.dispatch(evt, this.element);
        }

        this.touchMove.dispatch(evt, this.element);

        this._cancelLongTap();

        this.x2 = currentX;
        this.y2 = currentY;

        if (len > 1) {
          evt.preventDefault();
        }
      }
    }, {
      key: "end",
      value: function end(evt) {
        if (!evt.changedTouches) return;

        this._cancelLongTap();

        var self = this;

        if (evt.touches.length < 2) {
          this.multipointEnd.dispatch(evt, this.element);
          this.sx2 = this.sy2 = null;
        }

        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
          evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
          this.swipeTimeout = setTimeout(function () {
            self.swipe.dispatch(evt, self.element);
          }, 0);
        } else {
          this.tapTimeout = setTimeout(function () {
            if (!self._preventTap) {
              self.tap.dispatch(evt, self.element);
            }

            if (self.isDoubleTap) {
              self.doubleTap.dispatch(evt, self.element);
              self.isDoubleTap = false;
            }
          }, 0);

          if (!self.isDoubleTap) {
            self.singleTapTimeout = setTimeout(function () {
              self.singleTap.dispatch(evt, self.element);
            }, 250);
          }
        }

        this.touchEnd.dispatch(evt, this.element);
        this.preV.x = 0;
        this.preV.y = 0;
        this.zoom = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
      }
    }, {
      key: "cancelAll",
      value: function cancelAll() {
        this._preventTap = true;
        clearTimeout(this.singleTapTimeout);
        clearTimeout(this.tapTimeout);
        clearTimeout(this.longTapTimeout);
        clearTimeout(this.swipeTimeout);
      }
    }, {
      key: "cancel",
      value: function cancel(evt) {
        this.cancelAll();
        this.touchCancel.dispatch(evt, this.element);
      }
    }, {
      key: "_cancelLongTap",
      value: function _cancelLongTap() {
        clearTimeout(this.longTapTimeout);
      }
    }, {
      key: "_cancelSingleTap",
      value: function _cancelSingleTap() {
        clearTimeout(this.singleTapTimeout);
      }
    }, {
      key: "_swipeDirection",
      value: function _swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
      }
    }, {
      key: "on",
      value: function on(evt, handler) {
        if (this[evt]) {
          this[evt].add(handler);
        }
      }
    }, {
      key: "off",
      value: function off(evt, handler) {
        if (this[evt]) {
          this[evt].del(handler);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
        if (this.tapTimeout) clearTimeout(this.tapTimeout);
        if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
        if (this.swipeTimeout) clearTimeout(this.swipeTimeout);
        this.element.removeEventListener("touchstart", this.start);
        this.element.removeEventListener("touchmove", this.move);
        this.element.removeEventListener("touchend", this.end);
        this.element.removeEventListener("touchcancel", this.cancel);
        this.rotate.del();
        this.touchStart.del();
        this.multipointStart.del();
        this.multipointEnd.del();
        this.pinch.del();
        this.swipe.del();
        this.tap.del();
        this.doubleTap.del();
        this.longTap.del();
        this.singleTap.del();
        this.pressMove.del();
        this.twoFingerPressMove.del();
        this.touchMove.del();
        this.touchEnd.del();
        this.touchCancel.del();
        this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
        window.removeEventListener('scroll', this._cancelAllHandler);
        return null;
      }
    }]);

    return TouchEvents;
  }();

  function resetSlideMove(slide) {
    var transitionEnd = whichTransitionEvent();
    var media = hasClass(slide, 'gslide-media') ? slide : slide.querySelector('.gslide-media');
    var desc = slide.querySelector('.gslide-description');
    addClass(media, 'greset');
    cssTransform(media, "translate3d(0, 0, 0)");
    var animation = addEvent(transitionEnd, {
      onElement: media,
      once: true,
      withCallback: function withCallback(event, target) {
        removeClass(media, 'greset');
      }
    });
    media.style.opacity = '';

    if (desc) {
      desc.style.opacity = '';
    }
  }

  function touchNavigation(instance) {
    if (instance.events.hasOwnProperty('touch')) {
      return false;
    }

    var winSize = windowSize();
    var winWidth = winSize.width;
    var winHeight = winSize.height;
    var process = false;
    var currentSlide = null;
    var media = null;
    var mediaImage = null;
    var doingMove = false;
    var initScale = 1;
    var maxScale = 4.5;
    var currentScale = 1;
    var doingZoom = false;
    var imageZoomed = false;
    var zoomedPosX = null;
    var zoomedPosY = null;
    var lastZoomedPosX = null;
    var lastZoomedPosY = null;
    var hDistance;
    var vDistance;
    var hDistancePercent = 0;
    var vDistancePercent = 0;
    var vSwipe = false;
    var hSwipe = false;
    var startCoords = {};
    var endCoords = {};
    var xDown = 0;
    var yDown = 0;
    var isInlined;
    var sliderWrapper = document.getElementById('glightbox-slider');
    var overlay = document.querySelector('.goverlay');
    var touchInstance = new TouchEvents(sliderWrapper, {
      touchStart: function touchStart(e) {
        if (hasClass(e.targetTouches[0].target, 'ginner-container') || closest(e.targetTouches[0].target, '.gslide-desc')) {
          process = false;
          return false;
        }

        process = true;
        endCoords = e.targetTouches[0];
        startCoords.pageX = e.targetTouches[0].pageX;
        startCoords.pageY = e.targetTouches[0].pageY;
        xDown = e.targetTouches[0].clientX;
        yDown = e.targetTouches[0].clientY;
        currentSlide = instance.activeSlide;
        media = currentSlide.querySelector('.gslide-media');
        isInlined = currentSlide.querySelector('.gslide-inline');
        mediaImage = null;

        if (hasClass(media, 'gslide-image')) {
          mediaImage = media.querySelector('img');
        }

        removeClass(overlay, 'greset');
        if (e.pageX > 20 && e.pageX < window.innerWidth - 20) return;
        e.preventDefault();
      },
      touchMove: function touchMove(e) {
        if (!process) {
          return;
        }

        endCoords = e.targetTouches[0];

        if (doingZoom || imageZoomed) {
          return;
        }

        if (isInlined && isInlined.offsetHeight > winHeight) {
          var moved = startCoords.pageX - endCoords.pageX;

          if (Math.abs(moved) <= 13) {
            return false;
          }
        }

        doingMove = true;
        var xUp = e.targetTouches[0].clientX;
        var yUp = e.targetTouches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          vSwipe = false;
          hSwipe = true;
        } else {
          hSwipe = false;
          vSwipe = true;
        }

        hDistance = endCoords.pageX - startCoords.pageX;
        hDistancePercent = hDistance * 100 / winWidth;
        vDistance = endCoords.pageY - startCoords.pageY;
        vDistancePercent = vDistance * 100 / winHeight;
        var opacity;

        if (vSwipe && mediaImage) {
          opacity = 1 - Math.abs(vDistance) / winHeight;
          overlay.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            hDistancePercent = 0;
          }
        }

        if (hSwipe) {
          opacity = 1 - Math.abs(hDistance) / winWidth;
          media.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            vDistancePercent = 0;
          }
        }

        if (!mediaImage) {
          return cssTransform(media, "translate3d(".concat(hDistancePercent, "%, 0, 0)"));
        }

        cssTransform(media, "translate3d(".concat(hDistancePercent, "%, ").concat(vDistancePercent, "%, 0)"));
      },
      touchEnd: function touchEnd() {
        if (!process) {
          return;
        }

        doingMove = false;

        if (imageZoomed || doingZoom) {
          lastZoomedPosX = zoomedPosX;
          lastZoomedPosY = zoomedPosY;
          return;
        }

        var v = Math.abs(parseInt(vDistancePercent));
        var h = Math.abs(parseInt(hDistancePercent));

        if (v > 29 && mediaImage) {
          instance.close();
          return;
        }

        if (v < 29 && h < 25) {
          addClass(overlay, 'greset');
          overlay.style.opacity = 1;
          return resetSlideMove(media);
        }
      },
      multipointEnd: function multipointEnd() {
        setTimeout(function () {
          doingZoom = false;
        }, 50);
      },
      multipointStart: function multipointStart() {
        doingZoom = true;
        initScale = currentScale ? currentScale : 1;
      },
      pinch: function pinch(evt) {
        if (!mediaImage || doingMove) {
          return false;
        }

        doingZoom = true;
        mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
        var scale = initScale * evt.zoom;
        imageZoomed = true;

        if (scale <= 1) {
          imageZoomed = false;
          scale = 1;
          lastZoomedPosY = null;
          lastZoomedPosX = null;
          zoomedPosX = null;
          zoomedPosY = null;
          mediaImage.setAttribute('style', '');
          return;
        }

        if (scale > maxScale) {
          scale = maxScale;
        }

        mediaImage.style.transform = "scale3d(".concat(scale, ", ").concat(scale, ", 1)");
        currentScale = scale;
      },
      pressMove: function pressMove(e) {
        if (imageZoomed && !doingZoom) {
          var mhDistance = endCoords.pageX - startCoords.pageX;
          var mvDistance = endCoords.pageY - startCoords.pageY;

          if (lastZoomedPosX) {
            mhDistance = mhDistance + lastZoomedPosX;
          }

          if (lastZoomedPosY) {
            mvDistance = mvDistance + lastZoomedPosY;
          }

          zoomedPosX = mhDistance;
          zoomedPosY = mvDistance;
          var style = "translate3d(".concat(mhDistance, "px, ").concat(mvDistance, "px, 0)");

          if (currentScale) {
            style += " scale3d(".concat(currentScale, ", ").concat(currentScale, ", 1)");
          }

          cssTransform(mediaImage, style);
        }
      },
      swipe: function swipe(evt) {
        if (imageZoomed) {
          return;
        }

        if (doingZoom) {
          doingZoom = false;
          return;
        }

        if (evt.direction == 'Left') {
          if (instance.index == instance.elements.length - 1) {
            return resetSlideMove(media);
          }

          instance.nextSlide();
        }

        if (evt.direction == 'Right') {
          if (instance.index == 0) {
            return resetSlideMove(media);
          }

          instance.prevSlide();
        }
      }
    });
    instance.events['touch'] = touchInstance;
  }

  var ZoomImages = function () {
    function ZoomImages(el, slide) {
      var _this = this;

      var onclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, ZoomImages);

      this.img = el;
      this.slide = slide;
      this.onclose = onclose;

      if (this.img.setZoomEvents) {
        return false;
      }

      this.active = false;
      this.zoomedIn = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.img.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.img.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.img.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
      this.img.addEventListener('click', function (e) {
        if (_this.slide.classList.contains('dragging-nav')) {
          _this.zoomOut();

          return false;
        }

        if (!_this.zoomedIn) {
          return _this.zoomIn();
        }

        if (_this.zoomedIn && !_this.dragging) {
          _this.zoomOut();
        }
      }, false);
      this.img.setZoomEvents = true;
    }

    _createClass(ZoomImages, [{
      key: "zoomIn",
      value: function zoomIn() {
        var winWidth = this.widowWidth();

        if (this.zoomedIn || winWidth <= 768) {
          return;
        }

        var img = this.img;
        img.setAttribute('data-style', img.getAttribute('style'));
        img.style.maxWidth = img.naturalWidth + 'px';
        img.style.maxHeight = img.naturalHeight + 'px';

        if (img.naturalWidth > winWidth) {
          var centerX = winWidth / 2 - img.naturalWidth / 2;
          this.setTranslate(this.img.parentNode, centerX, 0);
        }

        this.slide.classList.add('zoomed');
        this.zoomedIn = true;
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.img.parentNode.setAttribute('style', '');
        this.img.setAttribute('style', this.img.getAttribute('data-style'));
        this.slide.classList.remove('zoomed');
        this.zoomedIn = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;

        if (this.onclose && typeof this.onclose == 'function') {
          this.onclose();
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(e) {
        e.preventDefault();

        if (!this.zoomedIn) {
          this.active = false;
          return;
        }

        if (e.type === "touchstart") {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        if (e.target === this.img) {
          this.active = true;
          this.img.classList.add('dragging');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e.preventDefault();
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
        setTimeout(function () {
          _this2.dragging = false;
          _this2.img.isDragging = false;

          _this2.img.classList.remove('dragging');
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.img.isDragging = true;
          this.dragging = true;
          this.setTranslate(this.img, this.currentX, this.currentY);
        }
      }
    }, {
      key: "onMove",
      value: function onMove(e) {
        if (!this.zoomedIn) {
          return;
        }

        var xOffset = e.clientX - this.img.naturalWidth / 2;
        var yOffset = e.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, xOffset, yOffset);
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }, {
      key: "widowWidth",
      value: function widowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }]);

    return ZoomImages;
  }();

  var DragSlides = function () {
    function DragSlides() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DragSlides);

      var dragEl = config.dragEl,
          _config$toleranceX = config.toleranceX,
          toleranceX = _config$toleranceX === void 0 ? 40 : _config$toleranceX,
          _config$toleranceY = config.toleranceY,
          toleranceY = _config$toleranceY === void 0 ? 65 : _config$toleranceY,
          _config$slide = config.slide,
          slide = _config$slide === void 0 ? null : _config$slide,
          _config$instance = config.instance,
          instance = _config$instance === void 0 ? null : _config$instance;
      this.el = dragEl;
      this.active = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.direction = null;
      this.lastDirection = null;
      this.toleranceX = toleranceX;
      this.toleranceY = toleranceY;
      this.toleranceReached = false;
      this.dragContainer = this.el;
      this.slide = slide;
      this.instance = instance;
      this.el.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.el.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.el.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
    }

    _createClass(DragSlides, [{
      key: "dragStart",
      value: function dragStart(e) {
        if (this.slide.classList.contains('zoomed')) {
          this.active = false;
          return;
        }

        if (e.type === 'touchstart') {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        var clicked = e.target.nodeName.toLowerCase();
        var exludeClicks = ['input', 'select', 'textarea', 'button', 'a'];

        if (e.target.classList.contains('nodrag') || closest(e.target, '.nodrag') || exludeClicks.indexOf(clicked) !== -1) {
          this.active = false;
          return;
        }

        e.preventDefault();

        if (e.target === this.el || clicked !== 'img' && closest(e.target, '.gslide-inline')) {
          this.active = true;
          this.el.classList.add('dragging');
          this.dragContainer = closest(e.target, '.ginner-container');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e && e.preventDefault();
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.active = false;

        if (this.doSlideChange) {
          this.instance.preventOutsideClick = true;
          this.doSlideChange == 'right' && this.instance.prevSlide();
          this.doSlideChange == 'left' && this.instance.nextSlide();
        }

        if (this.doSlideClose) {
          this.instance.close();
        }

        if (!this.toleranceReached) {
          this.setTranslate(this.dragContainer, 0, 0, true);
        }

        setTimeout(function () {
          _this2.instance.preventOutsideClick = false;
          _this2.toleranceReached = false;
          _this2.lastDirection = null;
          _this2.dragging = false;
          _this2.el.isDragging = false;

          _this2.el.classList.remove('dragging');

          _this2.slide.classList.remove('dragging-nav');

          _this2.dragContainer.style.transform = "";
          _this2.dragContainer.style.transition = "";
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();
          this.slide.classList.add('dragging-nav');

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.el.isDragging = true;
          this.dragging = true;
          this.doSlideChange = false;
          this.doSlideClose = false;
          var currentXInt = Math.abs(this.currentX);
          var currentYInt = Math.abs(this.currentY);

          if (currentXInt > 0 && currentXInt >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == 'x')) {
            this.yOffset = 0;
            this.lastDirection = 'x';
            this.setTranslate(this.dragContainer, this.currentX, 0);
            var doChange = this.shouldChange();

            if (!this.instance.settings.dragAutoSnap && doChange) {
              this.doSlideChange = doChange;
            }

            if (this.instance.settings.dragAutoSnap && doChange) {
              this.instance.preventOutsideClick = true;
              this.toleranceReached = true;
              this.active = false;
              this.instance.preventOutsideClick = true;
              this.dragEnd(null);
              doChange == 'right' && this.instance.prevSlide();
              doChange == 'left' && this.instance.nextSlide();
              return;
            }
          }

          if (this.toleranceY > 0 && currentYInt > 0 && currentYInt >= currentXInt && (!this.lastDirection || this.lastDirection == 'y')) {
            this.xOffset = 0;
            this.lastDirection = 'y';
            this.setTranslate(this.dragContainer, 0, this.currentY);
            var doClose = this.shouldClose();

            if (!this.instance.settings.dragAutoSnap && doClose) {
              this.doSlideClose = true;
            }

            if (this.instance.settings.dragAutoSnap && doClose) {
              this.instance.close();
            }

            return;
          }
        }
      }
    }, {
      key: "shouldChange",
      value: function shouldChange() {
        var doChange = false;
        var currentXInt = Math.abs(this.currentX);

        if (currentXInt >= this.toleranceX) {
          var dragDir = this.currentX > 0 ? 'right' : 'left';

          if (dragDir == 'left' && this.slide !== this.slide.parentNode.lastChild || dragDir == 'right' && this.slide !== this.slide.parentNode.firstChild) {
            doChange = dragDir;
          }
        }

        return doChange;
      }
    }, {
      key: "shouldClose",
      value: function shouldClose() {
        var doClose = false;
        var currentYInt = Math.abs(this.currentY);

        if (currentYInt >= this.toleranceY) {
          doClose = true;
        }

        return doClose;
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        var animated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (animated) {
          node.style.transition = "all .2s ease";
        } else {
          node.style.transition = "";
        }

        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }]);

    return DragSlides;
  }();

  function slideImage(slide, data, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var img = new Image();
    var titleID = 'gSlideTitle_' + data.index;
    var textID = 'gSlideDesc_' + data.index;
    img.addEventListener('load', function () {
      if (isFunction(callback)) {
        callback();
      }
    }, false);
    img.src = data.href;
    img.alt = '';

    if (data.title !== '') {
      img.setAttribute('aria-labelledby', titleID);
    }

    if (data.description !== '') {
      img.setAttribute('aria-describedby', textID);
    }

    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
  }

  function slideVideo(slide, data, callback) {
    var _this = this;

    var slideContainer = slide.querySelector('.ginner-container');
    var videoID = 'gvideo' + data.index;
    var slideMedia = slide.querySelector('.gslide-media');
    var videoPlayers = this.getAllPlayers();
    addClass(slideContainer, "gvideo-container");
    slideMedia.insertBefore(createHTML('<div class="gvideo-wrapper"></div>'), slideMedia.firstChild);
    var videoWrapper = slide.querySelector('.gvideo-wrapper');
    injectAssets(this.settings.plyr.css);
    var url = data.href;
    var urlObj = new URL(url);
    var pathname = urlObj.pathname;
    var protocol = location.protocol.replace(':', '');
    var videoSource = '';
    var embedID = '';
    var customPlaceholder = false;

    if (protocol == 'file') {
      protocol = 'http';
    }

    slideMedia.style.maxWidth = data.width;
    injectAssets(this.settings.plyr.js, 'Plyr', function () {
      if (url.match(/vimeo\.com\/([0-9]*)/)) {
        var vimeoID = /vimeo.*\/(\d+)/i.exec(url);
        videoSource = 'vimeo';
        embedID = vimeoID[1];
      } // Sayontan - changed "if" to "else if"
      else if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          var youtubeID = getYoutubeID(url);
          videoSource = 'youtube';
          embedID = youtubeID;
        } // Sayontan - changed "if" to "else"
        else {
            //if (url.match(/\.(mp4|ogg|webm|mov)$/) !== null) {
            videoSource = 'local';
            var html = '<video id="' + videoID + '" ';
            html += "style=\"background:#000; max-width: ".concat(data.width, ";\" ");
            html += 'preload="metadata" ';
            html += 'x-webkit-airplay="allow" ';
            html += 'webkit-playsinline="" ';
            html += 'controls ';
            html += 'class="gvideo-local">'; // Sayontan - changed to consider the 'data-format' on the 'a' element, if available. Also changed the code to use a URL Object instead of parsing the URL
            // var format = url.toLowerCase().split('.').pop();

            var format = data.node.getAttribute('data-format') ? data.node.getAttribute('data-format') : pathname.toLowerCase().split('.').pop();
            var sources = {
              'mp4': '',
              'ogg': '',
              'webm': ''
            };
            format = format == 'mov' ? 'mp4' : format;
            sources[format] = url;

            for (var key in sources) {
              if (sources.hasOwnProperty(key)) {
                var videoFile = sources[key];

                if (data.hasOwnProperty(key)) {
                  videoFile = data[key];
                }

                if (videoFile !== '') {
                  html += "<source src=\"".concat(videoFile, "\" type=\"video/").concat(key, "\">");
                }
              }
            }

            html += '</video>';
            customPlaceholder = createHTML(html);
          }

      var placeholder = customPlaceholder ? customPlaceholder : createHTML("<div id=\"".concat(videoID, "\" data-plyr-provider=\"").concat(videoSource, "\" data-plyr-embed-id=\"").concat(embedID, "\"></div>"));
      addClass(videoWrapper, "".concat(videoSource, "-video gvideo"));
      videoWrapper.appendChild(placeholder);
      videoWrapper.setAttribute('data-id', videoID);
      videoWrapper.setAttribute('data-index', data.index);
      var playerConfig = has(_this.settings.plyr, 'config') ? _this.settings.plyr.config : {};
      var player = new Plyr('#' + videoID, playerConfig);
      player.on('ready', function (event) {
        var instance = event.detail.plyr;
        videoPlayers[videoID] = instance;

        if (isFunction(callback)) {
          callback();
        }
      });
      player.on('enterfullscreen', handleMediaFullScreen);
      player.on('exitfullscreen', handleMediaFullScreen);
    });
  }

  function getYoutubeID(url) {
    var videoID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if (url[2] !== undefined) {
      videoID = url[2].split(/[^0-9a-z_\-]/i);
      videoID = videoID[0];
    } else {
      videoID = url;
    }

    return videoID;
  }

  function handleMediaFullScreen(event) {
    var media = closest(event.target, '.gslide-media');

    if (event.type == 'enterfullscreen') {
      addClass(media, 'fullscreen');
    }

    if (event.type == 'exitfullscreen') {
      removeClass(media, 'fullscreen');
    }
  }

  function slideInline(slide, data, callback) {
    var _this = this;

    var slideMedia = slide.querySelector('.gslide-media');
    var hash = has(data, 'href') && data.href ? data.href.split('#').pop().trim() : false;
    var content = has(data, 'content') && data.content ? data.content : false;
    var innerContent;

    if (content) {
      if (isString(content)) {
        innerContent = createHTML("<div class=\"ginlined-content\">".concat(content, "</div>"));
      }

      if (isNode(content)) {
        if (content.style.display == 'none') {
          content.style.display = 'block';
        }

        var container = document.createElement('div');
        container.className = 'ginlined-content';
        container.appendChild(content);
        innerContent = container;
      }
    }

    if (hash) {
      var div = document.getElementById(hash);

      if (!div) {
        return false;
      }

      var cloned = div.cloneNode(true);
      cloned.style.height = data.height;
      cloned.style.maxWidth = data.width;
      addClass(cloned, 'ginlined-content');
      innerContent = cloned;
    }

    if (!innerContent) {
      console.error('Unable to append inline slide content', data);
      return false;
    }

    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events['inlineclose' + hash] = addEvent('click', {
      onElement: slideMedia.querySelectorAll('.gtrigger-close'),
      withCallback: function withCallback(e) {
        e.preventDefault();

        _this.close();
      }
    });

    if (isFunction(callback)) {
      callback();
    }

    return;
  }

  function slideIframe(slide, data, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var iframe = createIframe({
      url: data.href,
      callback: callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
  }

  var SlideConfigParser = function () {
    function SlideConfigParser(el, settings) {
      _classCallCheck(this, SlideConfigParser);

      this.element = el;
      this.settings = settings;
      this.defaults = {
        href: '',
        title: '',
        type: '',
        description: '',
        descPosition: 'bottom',
        effect: '',
        width: '',
        height: '',
        node: false,
        content: false,
        zoomable: true,
        draggable: true
      };
    }

    _createClass(SlideConfigParser, [{
      key: "sourceType",
      value: function sourceType(url) {
        var origin = url;
        url = url.toLowerCase();

        if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) !== null) {
          return 'image';
        }

        if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          return 'video';
        }

        if (url.match(/vimeo\.com\/([0-9]*)/)) {
          return 'video';
        }

        if (url.match(/\.(mp4|ogg|webm|mov)$/) !== null) {
          return 'video';
        }

        if (url.match(/\.(mp3|wav|wma|aac|ogg)$/) !== null) {
          return 'audio';
        }

        if (url.indexOf("#") > -1) {
          var hash = origin.split('#').pop();

          if (hash.trim() !== '') {
            return 'inline';
          }
        }

        if (url.indexOf("goajax=true") > -1) {
          return 'ajax';
        }

        return 'external';
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(element, settings) {
        var _this = this;

        var data = extend({
          descPosition: settings.descPosition
        }, this.defaults);

        if (isObject(element) && !isNode(element)) {
          if (!has(element, 'type')) {
            if (has(element, 'content') && element.content) {
              element.type = 'inline';
            } else if (has(element, 'href')) {
              element.type = this.sourceType(element.href);
            }
          }

          var objectData = extend(data, element);
          this.setSize(objectData, settings);
          return objectData;
        }

        var url = '';
        var config = element.getAttribute('data-glightbox');
        var nodeType = element.nodeName.toLowerCase();
        if (nodeType === 'a') url = element.href;
        if (nodeType === 'img') url = element.src;
        data.href = url;
        each(data, function (val, key) {
          if (has(settings, key) && key !== 'width') {
            data[key] = settings[key];
          }

          var nodeData = element.dataset[key];

          if (!isNil(nodeData)) {
            data[key] = _this.sanitizeValue(nodeData);
          }
        });

        if (data.content) {
          data.type = 'inline';
        }

        if (!data.type && url) {
          data.type = this.sourceType(url);
        }

        if (!isNil(config)) {
          var cleanKeys = [];
          each(data, function (v, k) {
            cleanKeys.push(';\\s?' + k);
          });
          cleanKeys = cleanKeys.join('\\s?:|');

          if (config.trim() !== '') {
            each(data, function (val, key) {
              var str = config;
              var match = '\s?' + key + '\s?:\s?(.*?)(' + cleanKeys + '\s?:|$)';
              var regex = new RegExp(match);
              var matches = str.match(regex);

              if (matches && matches.length && matches[1]) {
                var value = matches[1].trim().replace(/;\s*$/, '');
                data[key] = _this.sanitizeValue(value);
              }
            });
          }
        } else {
          if (nodeType == 'a') {
            var title = element.title;
            if (!isNil(title) && title !== '' && (data.title == null || data.title === '')) data.title = title;
          }

          if (nodeType == 'img') {
            var alt = element.alt;
            if (!isNil(alt) && alt !== '') data.title = alt;
          }

          var desc = element.getAttribute('data-description');
          if (!isNil(desc) && desc !== '') data.description = desc;
        }

        if (data.description && data.description.substring(0, 1) == '.' && document.querySelector(data.description)) {
          data.description = document.querySelector(data.description).innerHTML;
        } else {
          var nodeDesc = element.querySelector('.glightbox-desc');

          if (nodeDesc) {
            data.description = nodeDesc.innerHTML;
          }
        }

        this.setSize(data, settings);
        this.slideConfig = data;
        return data;
      }
    }, {
      key: "setSize",
      value: function setSize(data, settings) {
        var defaultWith = data.type == 'video' ? this.checkSize(settings.videosWidth) : this.checkSize(settings.width);
        var defaultHeight = this.checkSize(settings.height);
        data.width = has(data, 'width') && data.width !== '' ? this.checkSize(data.width) : defaultWith;
        data.height = has(data, 'height') && data.height !== '' ? this.checkSize(data.height) : defaultHeight;
        return data;
      }
    }, {
      key: "checkSize",
      value: function checkSize(size) {
        return isNumber(size) ? "".concat(size, "px") : size;
      }
    }, {
      key: "sanitizeValue",
      value: function sanitizeValue(val) {
        if (val !== 'true' && val !== 'false') {
          return val;
        }

        return val === 'true';
      }
    }]);

    return SlideConfigParser;
  }();

  var Slide = function () {
    function Slide(el, instance) {
      _classCallCheck(this, Slide);

      this.element = el;
      this.instance = instance;
    }

    _createClass(Slide, [{
      key: "setContent",
      value: function setContent() {
        var _this = this;

        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (hasClass(slide, 'loaded')) {
          return false;
        }

        var settings = this.instance.settings;
        var slideConfig = this.slideConfig;
        var isMobileDevice = isMobile();

        if (isFunction(settings.beforeSlideLoad)) {
          settings.beforeSlideLoad({
            index: slideConfig.index,
            slide: slide,
            player: false
          });
        }

        var type = slideConfig.type;
        var position = slideConfig.descPosition;
        var slideMedia = slide.querySelector('.gslide-media');
        var slideTitle = slide.querySelector('.gslide-title');
        var slideText = slide.querySelector('.gslide-desc');
        var slideDesc = slide.querySelector('.gdesc-inner');
        var finalCallback = callback;
        var titleID = 'gSlideTitle_' + slideConfig.index;
        var textID = 'gSlideDesc_' + slideConfig.index;

        if (isFunction(settings.afterSlideLoad)) {
          finalCallback = function finalCallback() {
            if (isFunction(callback)) {
              callback();
            }

            settings.afterSlideLoad({
              index: slideConfig.index,
              slide: slide,
              player: _this.instance.getSlidePlayerInstance(slideConfig.index)
            });
          };
        }

        if (slideConfig.title == '' && slideConfig.description == '') {
          if (slideDesc) {
            slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
          }
        } else {
          if (slideTitle && slideConfig.title !== '') {
            slideTitle.id = titleID;
            slideTitle.innerHTML = slideConfig.title;
          } else {
            slideTitle.parentNode.removeChild(slideTitle);
          }

          if (slideText && slideConfig.description !== '') {
            slideText.id = textID;

            if (isMobileDevice && settings.moreLength > 0) {
              slideConfig.smallDescription = this.slideShortDesc(slideConfig.description, settings.moreLength, settings.moreText);
              slideText.innerHTML = slideConfig.smallDescription;
              this.descriptionEvents(slideText, slideConfig);
            } else {
              slideText.innerHTML = slideConfig.description;
            }
          } else {
            slideText.parentNode.removeChild(slideText);
          }

          addClass(slideMedia.parentNode, "desc-".concat(position));
          addClass(slideDesc.parentNode, "description-".concat(position));
        }

        addClass(slideMedia, "gslide-".concat(type));
        addClass(slide, 'loaded');

        if (type === 'video') {
          slideVideo.apply(this.instance, [slide, slideConfig, finalCallback]);
          return;
        }

        if (type === 'external') {
          slideIframe.apply(this, [slide, slideConfig, finalCallback]);
          return;
        }

        if (type === 'inline') {
          slideInline.apply(this.instance, [slide, slideConfig, finalCallback]);

          if (slideConfig.draggable) {
            new DragSlides({
              dragEl: slide.querySelector('.gslide-inline'),
              toleranceX: settings.dragToleranceX,
              toleranceY: settings.dragToleranceY,
              slide: slide,
              instance: this.instance
            });
          }

          return;
        }

        if (type === 'image') {
          slideImage(slide, slideConfig, function () {
            var img = slide.querySelector('img');

            if (slideConfig.draggable) {
              new DragSlides({
                dragEl: img,
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide: slide,
                instance: _this.instance
              });
            }

            if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
              addClass(img, 'zoomable');
              new ZoomImages(img, slide, function () {
                _this.instance.resize();
              });
            }

            if (isFunction(finalCallback)) {
              finalCallback();
            }
          });
          return;
        }

        if (isFunction(finalCallback)) {
          finalCallback();
        }
      }
    }, {
      key: "slideShortDesc",
      value: function slideShortDesc(string) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
        var wordBoundary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var useWordBoundary = wordBoundary;
        string = string.trim();

        if (string.length <= n) {
          return string;
        }

        var subString = string.substr(0, n - 1);

        if (!useWordBoundary) {
          return subString;
        }

        return subString + '... <a href="#" class="desc-more">' + wordBoundary + '</a>';
      }
    }, {
      key: "descriptionEvents",
      value: function descriptionEvents(desc, data) {
        var _this2 = this;

        var moreLink = desc.querySelector('.desc-more');

        if (!moreLink) {
          return false;
        }

        addEvent('click', {
          onElement: moreLink,
          withCallback: function withCallback(event, target) {
            event.preventDefault();
            var body = document.body;
            var desc = closest(target, '.gslide-desc');

            if (!desc) {
              return false;
            }

            desc.innerHTML = data.description;
            addClass(body, 'gdesc-open');
            var shortEvent = addEvent('click', {
              onElement: [body, closest(desc, '.gslide-description')],
              withCallback: function withCallback(event, target) {
                if (event.target.nodeName.toLowerCase() !== 'a') {
                  removeClass(body, 'gdesc-open');
                  addClass(body, 'gdesc-closed');
                  desc.innerHTML = data.smallDescription;

                  _this2.descriptionEvents(desc, data);

                  setTimeout(function () {
                    removeClass(body, 'gdesc-closed');
                  }, 400);
                  shortEvent.destroy();
                }
              }
            });
          }
        });
      }
    }, {
      key: "create",
      value: function create() {
        return createHTML(this.instance.settings.slideHTML);
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        var parser = new SlideConfigParser();
        this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
        return this.slideConfig;
      }
    }]);

    return Slide;
  }();

  var _version = '3.0.4';
  var isMobile$1 = isMobile();
  var isTouch$1 = isTouch();
  var html = document.getElementsByTagName('html')[0];
  var defaults = {
    selector: '.glightbox',
    elements: null,
    skin: 'clean',
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    descPosition: 'bottom',
    width: '900px',
    height: '506px',
    videosWidth: '960px',
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plyr: {
      css: 'https://cdn.plyr.io/3.5.6/plyr.css',
      js: 'https://cdn.plyr.io/3.5.6/plyr.js',
      config: {
        ratio: '16:9',
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false
        }
      }
    },
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    moreText: 'See more',
    moreLength: 60,
    lightboxHTML: '',
    cssEfects: {
      fade: {
        "in": 'fadeIn',
        out: 'fadeOut'
      },
      zoom: {
        "in": 'zoomIn',
        out: 'zoomOut'
      },
      slide: {
        "in": 'slideInRight',
        out: 'slideOutLeft'
      },
      slide_back: {
        "in": 'slideInLeft',
        out: 'slideOutRight'
      },
      none: {
        "in": 'none',
        out: 'none'
      }
    },
    svg: {
      close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
  };
  defaults.slideHTML = "<div class=\"gslide\">\n    <div class=\"gslide-inner-content\">\n        <div class=\"ginner-container\">\n            <div class=\"gslide-media\">\n            </div>\n            <div class=\"gslide-description\">\n                <div class=\"gdesc-inner\">\n                    <h4 class=\"gslide-title\"></h4>\n                    <div class=\"gslide-desc\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  defaults.lightboxHTML = "<div id=\"glightbox-body\" class=\"glightbox-container\">\n    <div class=\"gloader visible\"></div>\n    <div class=\"goverlay\"></div>\n    <div class=\"gcontainer\">\n    <div id=\"glightbox-slider\" class=\"gslider\"></div>\n    <button class=\"gnext gbtn\" tabindex=\"0\" aria-label=\"Next\">{nextSVG}</button>\n    <button class=\"gprev gbtn\" tabindex=\"1\" aria-label=\"Previous\">{prevSVG}</button>\n    <button class=\"gclose gbtn\" tabindex=\"2\" aria-label=\"Close\">{closeSVG}</button>\n</div>\n</div>";

  var GlightboxInit = function () {
    function GlightboxInit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GlightboxInit);

      this.settings = extend(defaults, options);
      this.effectsClasses = this.getAnimationClasses();
      this.videoPlayers = {};
      this.apiEvents = [];
      this.fullElementsList = false;
    }

    _createClass(GlightboxInit, [{
      key: "init",
      value: function init() {
        var _this = this;

        var selector = this.getSelector();

        if (selector) {
          this.baseEvents = addEvent('click', {
            onElement: selector,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this.open(target);
            }
          });
        }

        this.elements = this.getElements();
      }
    }, {
      key: "open",
      value: function open() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this.elements.length == 0) return false;
        this.activeSlide = null;
        this.prevActiveSlideIndex = null;
        this.prevActiveSlide = null;
        var index = isNumber(startAt) ? startAt : this.settings.startAt;

        if (isNode(element)) {
          var gallery = element.getAttribute('data-gallery');

          if (gallery) {
            this.fullElementsList = this.elements;
            this.elements = this.getGalleryElements(this.elements, gallery);
          }

          if (isNil(index)) {
            index = this.getElementIndex(element);

            if (index < 0) {
              index = 0;
            }
          }
        }

        if (!isNumber(index)) {
          index = 0;
        }

        this.build();
        animateElement(this.overlay, this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade["in"]);
        var body = document.body;
        var scrollBar = window.innerWidth - document.documentElement.clientWidth;

        if (scrollBar > 0) {
          var styleSheet = document.createElement("style");
          styleSheet.type = 'text/css';
          styleSheet.className = 'gcss-styles';
          styleSheet.innerText = ".gscrollbar-fixer {margin-right: ".concat(scrollBar, "px}");
          document.head.appendChild(styleSheet);
          addClass(body, 'gscrollbar-fixer');
        }

        addClass(body, 'glightbox-open');
        addClass(html, 'glightbox-open');

        if (isMobile$1) {
          addClass(document.body, 'glightbox-mobile');
          this.settings.slideEffect = 'slide';
        }

        this.showSlide(index, true);

        if (this.elements.length == 1) {
          hide(this.prevButton);
          hide(this.nextButton);
        } else {
          show(this.prevButton);
          show(this.nextButton);
        }

        this.lightboxOpen = true;
        this.trigger('open');

        if (isFunction(this.settings.onOpen)) {
          this.settings.onOpen();
        }

        if (isTouch$1 && this.settings.touchNavigation) {
          touchNavigation(this);
        }

        if (this.settings.keyboardNavigation) {
          keyboardNavigation(this);
        }
      }
    }, {
      key: "openAt",
      value: function openAt() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.open(null, index);
      }
    }, {
      key: "showSlide",
      value: function showSlide() {
        var _this2 = this;

        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        show(this.loader);
        this.index = parseInt(index);
        var current = this.slidesContainer.querySelector('.current');

        if (current) {
          removeClass(current, 'current');
        }

        this.slideAnimateOut();
        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          this.slideAnimateIn(slideNode, first);
          hide(this.loader);
        } else {
          show(this.loader);
          var slide = this.elements[index];
          this.trigger('slide_before_load', slide);
          slide.instance.setContent(slideNode, function () {
            hide(_this2.loader);

            _this2.resize();

            _this2.slideAnimateIn(slideNode, first);

            _this2.trigger('slide_after_load', slide);
          });
        }

        this.slideDescription = slideNode.querySelector('.gslide-description');
        this.slideDescriptionContained = this.slideDescription && hasClass(this.slideDescription.parentNode, 'gslide-media');

        if (this.settings.preload) {
          this.preloadSlide(index + 1);
          this.preloadSlide(index - 1);
        }

        this.updateNavigationClasses();
        this.activeSlide = slideNode;
      }
    }, {
      key: "preloadSlide",
      value: function preloadSlide(index) {
        var _this3 = this;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        if (isNil(this.elements[index])) {
          return false;
        }

        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          return false;
        }

        var slide = this.elements[index];
        var type = slide.type;
        this.trigger('slide_before_load', slide);

        if (type == 'video' || type == 'external') {
          setTimeout(function () {
            slide.instance.setContent(slideNode, function () {
              _this3.trigger('slide_after_load', slide);
            });
          }, 200);
        } else {
          slide.instance.setContent(slideNode, function () {
            _this3.trigger('slide_after_load', slide);
          });
        }
      }
    }, {
      key: "prevSlide",
      value: function prevSlide() {
        this.goToSlide(this.index - 1);
      }
    }, {
      key: "nextSlide",
      value: function nextSlide() {
        this.goToSlide(this.index + 1);
      }
    }, {
      key: "goToSlide",
      value: function goToSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.prevActiveSlide = this.activeSlide;
        this.prevActiveSlideIndex = this.index;

        if (!this.loop() && (index < 0 || index > this.elements.length - 1)) {
          return false;
        }

        if (index < 0) {
          index = this.elements.length - 1;
        } else if (index >= this.elements.length) {
          index = 0;
        }

        this.showSlide(index);
      }
    }, {
      key: "insertSlide",
      value: function insertSlide() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var slide = new Slide(config, this);
        var data = slide.getConfig();
        var newSlide = slide.create();
        var totalSlides = this.elements.length - 1;

        if (index < 0) {
          index = this.elements.length;
        }

        data.index = index;
        data.node = false;
        data.instance = slide;
        this.elements.splice(index, 0, data);

        if (this.slidesContainer) {
          if (index > totalSlides) {
            this.slidesContainer.appendChild(newSlide);
          } else {
            var existingSlide = this.slidesContainer.querySelectorAll('.gslide')[index];
            this.slidesContainer.insertBefore(newSlide, existingSlide);
          }

          if (this.settings.preload && this.index == 0 && index == 0 || this.index - 1 == index || this.index + 1 == index) {
            this.preloadSlide(index);
          }

          if (this.index == 0 && index == 0) {
            this.index = 1;
          }

          this.updateNavigationClasses(); // Changed by Sayontan... moved from outside "if (this.slidescontainer) {}" to inside

          this.trigger('slide_inserted', {
            index: index,
            slide: this.slidesContainer.querySelectorAll('.gslide')[index],
            player: this.getSlidePlayerInstance(index)
          });

          if (isFunction(this.settings.slideInserted)) {
            this.settings.slideInserted({
              index: index,
              slide: this.slidesContainer.querySelectorAll('.gslide')[index],
              player: this.getSlidePlayerInstance(index)
            });
          } // <- End change by Sayontan.

        }
      }
    }, {
      key: "removeSlide",
      value: function removeSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        var slide = this.slidesContainer && this.slidesContainer.querySelectorAll('.gslide')[index];

        if (slide) {
          if (this.getActiveSlideIndex() == index) {
            if (index == this.elements.length - 1) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          }

          slide.parentNode.removeChild(slide);
        }

        this.elements.splice(index, 1);
        this.trigger('slide_removed', index);

        if (isFunction(this.settings.slideRemoved)) {
          this.settings.slideRemoved(index);
        }
      }
    }, {
      key: "slideAnimateIn",
      value: function slideAnimateIn(slide, first) {
        var _this4 = this;

        var slideMedia = slide.querySelector('.gslide-media');
        var slideDesc = slide.querySelector('.gslide-description');
        var prevData = {
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        };
        var nextData = {
          index: this.index,
          slide: this.activeSlide,
          player: this.getSlidePlayerInstance(this.index)
        };

        if (slideMedia.offsetWidth > 0 && slideDesc) {
          hide(slideDesc);
          slideDesc.style.display = '';
        }

        removeClass(slide, this.effectsClasses);

        if (first) {
          animateElement(slide, this.settings.cssEfects[this.settings.openEffect]["in"], function () {
            if (!isMobile$1 && _this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        } else {
          var effect_name = this.settings.slideEffect;
          var animIn = effect_name !== 'none' ? this.settings.cssEfects[effect_name]["in"] : effect_name;

          if (this.prevActiveSlideIndex > this.index) {
            if (this.settings.slideEffect == 'slide') {
              animIn = this.settings.cssEfects.slide_back["in"];
            }
          }

          animateElement(slide, animIn, function () {
            if (!isMobile$1 && _this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        }

        setTimeout(function () {
          _this4.resize(slide);
        }, 100);
        addClass(slide, 'current');
      }
    }, {
      key: "slideAnimateOut",
      value: function slideAnimateOut() {
        if (!this.prevActiveSlide) {
          return false;
        }

        var prevSlide = this.prevActiveSlide;
        removeClass(prevSlide, this.effectsClasses);
        addClass(prevSlide, 'prev');
        var animation = this.settings.slideEffect;
        var animOut = animation !== 'none' ? this.settings.cssEfects[animation].out : animation;
        this.slidePlayerPause(prevSlide);
        this.trigger('slide_before_change', {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }
        });

        if (isFunction(this.settings.beforeSlideChange)) {
          this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]);
        }

        if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == 'slide') {
          animOut = this.settings.cssEfects.slide_back.out;
        }

        animateElement(prevSlide, animOut, function () {
          var media = prevSlide.querySelector('.gslide-media');
          var desc = prevSlide.querySelector('.gslide-description');
          media.style.transform = '';
          removeClass(media, 'greset');
          media.style.opacity = '';

          if (desc) {
            desc.style.opacity = '';
          }

          removeClass(prevSlide, 'prev');
        });
      }
    }, {
      key: "getAllPlayers",
      value: function getAllPlayers() {
        return this.videoPlayers;
      }
    }, {
      key: "getSlidePlayerInstance",
      value: function getSlidePlayerInstance(index) {
        var id = 'gvideo' + index;
        var videoPlayers = this.getAllPlayers();

        if (has(videoPlayers, id) && videoPlayers[id]) {
          return videoPlayers[id];
        }

        return false;
      }
    }, {
      key: "stopSlideVideo",
      value: function stopSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "slidePlayerPause",
      value: function slidePlayerPause(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "playSlideVideo",
      value: function playSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "slidePlayerPlay",
      value: function slidePlayerPlay(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "setElements",
      value: function setElements(elements) {
        var _this5 = this;

        this.settings.elements = false;
        var newElements = [];

        if (elements && elements.length) {
          each(elements, function (el, i) {
            var slide = new Slide(el, _this5);
            var data = slide.getConfig();
            data.instance = slide;
            data.index = i;
            newElements.push(data);
          });
        }

        this.elements = newElements;

        if (this.lightboxOpen) {
          this.slidesContainer.innerHTML = '';

          if (this.elements.length) {
            each(this.elements, function () {
              var slide = createHTML(_this5.settings.slideHTML);

              _this5.slidesContainer.appendChild(slide);
            });
            this.showSlide(0, true);
          }
        }
      }
    }, {
      key: "getElementIndex",
      value: function getElementIndex(node) {
        var index = false;
        each(this.elements, function (el, i) {
          if (has(el, 'node') && el.node == node) {
            index = i;
            return true;
          }
        });
        return index;
      }
    }, {
      key: "getElements",
      value: function getElements() {
        var _this6 = this;

        var list = [];
        this.elements = this.elements ? this.elements : [];

        if (!isNil(this.settings.elements) && isArray(this.settings.elements) && this.settings.elements.length) {
          each(this.settings.elements, function (el, i) {
            var slide = new Slide(el, _this6);
            var elData = slide.getConfig();
            elData.node = false;
            elData.index = i;
            elData.instance = slide;
            list.push(elData);
          });
        }

        var nodes = false;
        var selector = this.getSelector();

        if (selector) {
          nodes = document.querySelectorAll(this.getSelector());
        }

        if (!nodes) {
          return list;
        }

        each(nodes, function (el, i) {
          var slide = new Slide(el, _this6);
          var elData = slide.getConfig();
          elData.node = el;
          elData.index = i;
          elData.instance = slide;
          elData.gallery = el.getAttribute('data-gallery');
          list.push(elData);
        });
        return list;
      }
    }, {
      key: "getGalleryElements",
      value: function getGalleryElements(list, gallery) {
        return list.filter(function (el) {
          return el.gallery == gallery;
        });
      }
    }, {
      key: "getSelector",
      value: function getSelector() {
        if (this.settings.elements) {
          return false;
        }

        if (this.settings.selector && this.settings.selector.substring(0, 5) == 'data-') {
          return "*[".concat(this.settings.selector, "]");
        }

        return this.settings.selector;
      }
    }, {
      key: "getActiveSlide",
      value: function getActiveSlide() {
        return this.slidesContainer.querySelectorAll('.gslide')[this.index];
      }
    }, {
      key: "getActiveSlideIndex",
      value: function getActiveSlideIndex() {
        return this.index;
      }
    }, {
      key: "getAnimationClasses",
      value: function getAnimationClasses() {
        var effects = [];

        for (var key in this.settings.cssEfects) {
          if (this.settings.cssEfects.hasOwnProperty(key)) {
            var effect = this.settings.cssEfects[key];
            effects.push("g".concat(effect["in"]));
            effects.push("g".concat(effect.out));
          }
        }

        return effects.join(' ');
      }
    }, {
      key: "build",
      value: function build() {
        var _this7 = this;

        if (this.built) {
          return false;
        }

        var nextSVG = has(this.settings.svg, 'next') ? this.settings.svg.next : '';
        var prevSVG = has(this.settings.svg, 'prev') ? this.settings.svg.prev : '';
        var closeSVG = has(this.settings.svg, 'close') ? this.settings.svg.close : '';
        var lightboxHTML = this.settings.lightboxHTML;
        lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
        lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
        lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
        lightboxHTML = createHTML(lightboxHTML);
        document.body.appendChild(lightboxHTML);
        var modal = document.getElementById('glightbox-body');
        this.modal = modal;
        var closeButton = modal.querySelector('.gclose');
        this.prevButton = modal.querySelector('.gprev');
        this.nextButton = modal.querySelector('.gnext');
        this.overlay = modal.querySelector('.goverlay');
        this.loader = modal.querySelector('.gloader');
        this.slidesContainer = document.getElementById('glightbox-slider');
        this.events = {};
        addClass(this.modal, 'glightbox-' + this.settings.skin);

        if (this.settings.closeButton && closeButton) {
          this.events['close'] = addEvent('click', {
            onElement: closeButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.close();
            }
          });
        }

        if (closeButton && !this.settings.closeButton) {
          closeButton.parentNode.removeChild(closeButton);
        }

        if (this.nextButton) {
          this.events['next'] = addEvent('click', {
            onElement: this.nextButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.nextSlide();
            }
          });
        }

        if (this.prevButton) {
          this.events['prev'] = addEvent('click', {
            onElement: this.prevButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.prevSlide();
            }
          });
        }

        if (this.settings.closeOnOutsideClick) {
          this.events['outClose'] = addEvent('click', {
            onElement: modal,
            withCallback: function withCallback(e, target) {
              if (!_this7.preventOutsideClick && !hasClass(document.body, 'glightbox-mobile') && !closest(e.target, '.ginner-container')) {
                if (!closest(e.target, '.gbtn') && !hasClass(e.target, 'gnext') && !hasClass(e.target, 'gprev')) {
                  _this7.close();
                }
              }
            }
          });
        }

        each(this.elements, function (slide) {
          _this7.slidesContainer.appendChild(slide.instance.create());
        });

        if (isTouch$1) {
          addClass(document.body, 'glightbox-touch');
        }

        this.events['resize'] = addEvent('resize', {
          onElement: window,
          withCallback: function withCallback() {
            _this7.resize();
          }
        });
        this.built = true;
      }
    }, {
      key: "resize",
      value: function resize() {
        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        slide = !slide ? this.activeSlide : slide;

        if (!slide || hasClass(slide, 'zoomed')) {
          return;
        }

        var winSize = windowSize();
        var video = slide.querySelector('.gvideo-wrapper');
        var image = slide.querySelector('.gslide-image');
        var description = this.slideDescription;
        var winWidth = winSize.width;
        var winHeight = winSize.height;

        if (winWidth <= 768) {
          addClass(document.body, 'glightbox-mobile');
        } else {
          removeClass(document.body, 'glightbox-mobile');
        }

        if (!video && !image) {
          return;
        }

        var descriptionResize = false;

        if (description && (hasClass(description, 'description-bottom') || hasClass(description, 'description-top')) && !hasClass(description, 'gabsolute')) {
          descriptionResize = true;
        }

        if (image) {
          if (winWidth <= 768) {
            var imgNode = image.querySelector('img');
            imgNode.setAttribute('style', '');
          } else if (descriptionResize) {
            var descHeight = description.offsetHeight;

            var _imgNode = image.querySelector('img');

            _imgNode.setAttribute('style', "max-height: calc(100vh - ".concat(descHeight, "px)"));

            description.setAttribute('style', "max-width: ".concat(_imgNode.offsetWidth, "px;"));
          }
        }

        if (video) {
          var ratio = has(this.settings.plyr.config, 'ratio') ? this.settings.plyr.config.ratio : '16:9';
          var videoRatio = ratio.split(':');
          var _maxWidth = 900;

          var maxHeight = _maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));

          maxHeight = Math.floor(maxHeight);

          if (descriptionResize) {
            winHeight = winHeight - description.offsetHeight;
          }

          if (winHeight < maxHeight && winWidth > _maxWidth) {
            var vwidth = video.offsetWidth;
            var vheight = video.offsetHeight;

            var _ratio = winHeight / vheight;

            var vsize = {
              width: vwidth * _ratio,
              height: vheight * _ratio
            };
            video.parentNode.setAttribute('style', "max-width: ".concat(vsize.width, "px"));

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(vsize.width, "px;"));
            }
          } else {
            video.parentNode.style.maxWidth = "".concat(_maxWidth, "px");

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(_maxWidth, "px;"));
            }
          }
        }
      }
    }, {
      key: "reload",
      value: function reload() {
        this.init();
      }
    }, {
      key: "updateNavigationClasses",
      value: function updateNavigationClasses() {
        var loop = this.loop();
        removeClass(this.nextButton, 'disabled');
        removeClass(this.prevButton, 'disabled');

        if (this.index == 0 && this.elements.length - 1 == 0) {
          addClass(this.prevButton, 'disabled');
          addClass(this.nextButton, 'disabled');
        } else if (this.index === 0 && !loop) {
          addClass(this.prevButton, 'disabled');
        } else if (this.index === this.elements.length - 1 && !loop) {
          addClass(this.nextButton, 'disabled');
        }
      }
    }, {
      key: "loop",
      value: function loop() {
        var loop = has(this.settings, 'loopAtEnd') ? this.settings.loopAtEnd : null;
        loop = has(this.settings, 'loop') ? this.settings.loop : loop;
        return loop;
      }
    }, {
      key: "close",
      value: function close() {
        var _this8 = this;

        if (!this.lightboxOpen) {
          if (this.events) {
            for (var key in this.events) {
              if (this.events.hasOwnProperty(key)) {
                this.events[key].destroy();
              }
            }

            this.events = null;
          }

          return false;
        }

        if (this.closing) {
          return false;
        }

        this.closing = true;
        this.slidePlayerPause(this.activeSlide);

        if (this.fullElementsList) {
          this.elements = this.fullElementsList;
        }

        addClass(this.modal, 'glightbox-closing');
        animateElement(this.overlay, this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade.out);
        animateElement(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
          _this8.activeSlide = null;
          _this8.prevActiveSlideIndex = null;
          _this8.prevActiveSlide = null;
          _this8.built = false;

          if (_this8.events) {
            for (var _key in _this8.events) {
              if (_this8.events.hasOwnProperty(_key)) {
                _this8.events[_key].destroy();
              }
            }

            _this8.events = null;
          }

          var body = document.body;
          removeClass(html, 'glightbox-open');
          removeClass(body, 'glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer');

          _this8.modal.parentNode.removeChild(_this8.modal);

          _this8.trigger('close');

          if (isFunction(_this8.settings.onClose)) {
            _this8.settings.onClose();
          }

          var styles = document.querySelector('.gcss-styles');

          if (styles) {
            styles.parentNode.removeChild(styles);
          }

          _this8.lightboxOpen = false;
          _this8.closing = null;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.close();
        this.clearAllEvents();
        this.baseEvents.destroy();
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!evt || !isFunction(callback)) {
          throw new TypeError('Event name and callback must be defined');
        }

        this.apiEvents.push({
          evt: evt,
          once: once,
          callback: callback
        });
      }
    }, {
      key: "once",
      value: function once(evt, callback) {
        this.on(evt, callback, true);
      }
    }, {
      key: "trigger",
      value: function trigger(eventName) {
        var _this9 = this;

        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var onceTriggered = [];
        each(this.apiEvents, function (event, i) {
          var evt = event.evt,
              once = event.once,
              callback = event.callback;

          if (evt == eventName) {
            callback(data);

            if (once) {
              onceTriggered.push(i);
            }
          }
        });

        if (onceTriggered.length) {
          each(onceTriggered, function (i) {
            return _this9.apiEvents.splice(i, 1);
          });
        }
      }
    }, {
      key: "clearAllEvents",
      value: function clearAllEvents() {
        // Changed by Sayontan ... the original code had evt: evt, once: once, callback: callback, which was causing an error
        // Modified this to use the evt, once and callback values from "this"
        var self = this;
        this.apiEvents.push({
          evt: self.evt,
          once: self.once,
          callback: self.callback
        }); // <-- End changes by Sayontan
      }
    }, {
      key: "version",
      value: function version() {
        return _version;
      }
    }]);

    return GlightboxInit;
  }();

  function glightbox() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instance = new GlightboxInit(options);
    instance.init();
    return instance;
  }

  return glightbox;
});

/***/ }),

/***/ "../include/js/front-end/src/Components/Modal.js":
/*!*******************************************************!*\
  !*** ../include/js/front-end/src/Components/Modal.js ***!
  \*******************************************************/
/*! flagged exports */
/*! export Modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modal = void 0;

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

    for (var [key, value] of Object.entries(initStyles)) {
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
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modalise = void 0;

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
class Modalise {
  constructor(id, options) {
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


  show() {
    this.modal.dispatchEvent(this.events.onShow);
    this.modal.style.display = "block";
    return this;
  }
  /* Modalise.hide() :
   *
   * Hides the modal
   */


  hide() {
    this.modal.dispatchEvent(this.events.onHide);
    this.modal.style.display = "none";
    return this;
  }
  /*
  * Modalise.removeEvents() :
  *
  * Removes the events (by cloning the modal)
  */


  removeEvents() {
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


  on(event, callback) {
    this.modal.addEventListener(event, callback);
    return this;
  }
  /*
  * Modalise.attach() :
  *
  * Attaches the click events on the elements with classes ".confirm", ".hide", ".cancel" plus the elements to show the modal
  */


  attach() {
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


  addOpenBtn(element) {
    this.btnsOpen.push(element);
  }

}

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
/***/ ((__unused_webpack_module, exports) => {



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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Core = void 0;

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

var _Modalise = __webpack_require__(/*! ./Components/Modalise */ "../include/js/front-end/src/Components/Modalise.js");

class Core {}

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
  var _ref = (0, _asyncToGenerator2.default)(function* (selector) {
    var imageUrlArray = [];

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

    var promiseArray = []; // create an array for promises

    var imageArray = []; // array for the images

    var _loop = function _loop(imageUrl) {
      promiseArray.push(new Promise(function (resolve) {
        var img = new Image();

        img.onload = function () {
          resolve();
        };

        img.src = imageUrl;
        imageArray.push(img);
      }));
    };

    for (var imageUrl of imageUrlArray) {
      _loop(imageUrl);
    }

    yield Promise.all(promiseArray); // wait for all the images to be loaded

    return imageArray;
  });

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

/***/ "../include/js/front-end/src/Entries/GLightbox.js":
/*!********************************************************!*\
  !*** ../include/js/front-end/src/Entries/GLightbox.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var _GLightbox = __webpack_require__(/*! ../Lightboxes/GLightbox */ "../include/js/front-end/src/Lightboxes/GLightbox.js");

var Listeners = _interopRequireWildcard(__webpack_require__(/*! ../Listeners */ "../include/js/front-end/src/Listeners.js"));

var Layout = _interopRequireWildcard(__webpack_require__(/*! ../Layouts/Layout */ "../include/js/front-end/src/Layouts/Layout.js"));

document.addEventListener('DOMContentLoaded', function () {
  var lightbox = new _GLightbox.PhotonicGLightbox();

  _Core.Core.setLightbox(lightbox);

  lightbox.initialize();
  lightbox.initialize('.launch-gallery-glightbox-solo, .glightbox-video, .glightbox-html5-video');

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

/***/ "../include/js/front-end/src/Lightboxes/GLightbox.js":
/*!***********************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/GLightbox.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export PhotonicGLightbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var GLightbox = __webpack_require__(/*! ../../../../ext/glightbox/glightbox.js */ "../include/ext/glightbox/glightbox.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotonicGLightbox = void 0;

var _Lightbox = __webpack_require__(/*! ./Lightbox */ "../include/js/front-end/src/Lightboxes/Lightbox.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

class PhotonicGLightbox extends _Lightbox.Lightbox {
  constructor() {
    super();
  }

  hostedVideo(a) {
    var self = this;
    var html5 = a.getAttribute('href').match(new RegExp(/(\.mp4|\.webm|\.ogg)/i)),
        css = a.classList.contains('photonic-launch-gallery');

    if (html5 !== null && !css) {
      a.classList.add(Photonic_JS.slideshow_library + "-html5-video");
    }
  }

  initialize(selector) {
    this.handleSolos();
    var self = this;
    var selection;

    if (selector == null) {
      selection = document.querySelectorAll('.photonic-level-1-container');
    } else if (selector instanceof NodeList) {
      selection = selector;
    } else if (selector instanceof Element) {
      selection = [selector];
    } else {
      selection = document.querySelectorAll(selector);
    }

    selection.forEach(function (gallery) {
      var galleryItems = gallery.querySelectorAll('.photonic-launch-gallery');

      if (galleryItems.length > 0) {
        var rel = galleryItems.item(0).getAttribute('rel'); // Get "rel" from first "a" element

        if (rel != null) {
          var lightbox;
          lightbox = _Core.Core.getLightboxList()[rel];

          if (lightbox) {
            lightbox.destroy();
          }

          lightbox = GLightbox({
            selector: '[rel="' + rel + '"]',
            loop: Photonic_JS.lightbox_loop
          });
          lightbox.on('slide_changed', function (_ref) {
            var {
              prev,
              current
            } = _ref;
            var idx = current.index;
            var thumb = galleryItems.item(idx);
            var social = document.querySelector('#photonic-social');

            if (social) {
              social.parentNode.removeChild(social);
            }

            self.setHash(thumb);
            var shareable = {
              'url': location.href,
              'title': Util.getText(thumb.getAttribute('data-title')),
              'image': thumb.getAttribute('href')
            };
            self.addSocial('.gslide.loaded.current .ginner-container', shareable);
          });
          lightbox.on('close', function () {
            self.unsetHash();
          });

          _Core.Core.addToLightboxList(rel, lightbox);
        }
      } else if (!gallery.classList.contains('photonic-level-2-container') && !gallery.querySelector('.photonic-level-2-container')) {
        // Probably a solo item
        GLightbox({
          selector: selector
        });
      }
    });
  }

  initializeForNewContainer(containerId) {
    this.initialize(containerId);
  }

}

exports.PhotonicGLightbox = PhotonicGLightbox;

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Lightbox = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

class Lightbox {
  constructor() {
    (0, _defineProperty2.default)(this, "deep", void 0);
    (0, _defineProperty2.default)(this, "lastDeep", void 0);
    this.socialIcons = "<div id='photonic-social'>" + "<a class='photonic-share-fb' href='https://www.facebook.com/sharer/sharer.php?u={photonic_share_link}&amp;title={photonic_share_title}&amp;picture={photonic_share_image}' target='_blank' title='Share on Facebook'><div class='icon-facebook'></div></a>" + "<a class='photonic-share-twitter' href='https://twitter.com/share?url={photonic_share_link}&amp;text={photonic_share_title}' target='_blank' title='Share on Twitter'><div class='icon-twitter'></div></a>" + "<a class='photonic-share-pinterest' data-pin-do='buttonPin' href='https://www.pinterest.com/pin/create/button/?url={photonic_share_link}&media={photonic_share_image}&description={photonic_share_title}' data-pin-custom='true' target='_blank' title='Share on Pinterest'><div class='icon-pinterest'></div></a>" + "</div>";
    this.videoIndex = 1;
  }

  getVideoSize(url, baseline) {
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

  getImageSize(url, baseline) {
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

  addSocial(selector, shareable) {
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

  setHash(a) {
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

  unsetHash() {
    this.lastDeep = this.lastDeep === undefined || this.deep !== '' ? location.hash : this.lastDeep;

    if (window.history && 'replaceState' in window.history) {
      history.replaceState({}, document.title, location.href.substr(0, location.href.length - location.hash.length));
    } else {
      window.location.hash = '';
    }
  }

  changeHash(e) {
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

  catchYouTubeURL(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
        match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }
  }

  catchVimeoURL(url) {
    var regExp = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/,
        match = url.match(regExp);

    if (match) {
      return match[1];
    }
  }

  soloImages() {
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

  changeVideoURL(element, regular, embed) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
  }

  hostedVideo(a) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
  }

  soloVideos() {
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

  handleSolos() {
    if (Photonic_JS.lightbox_for_all) {
      this.soloImages();
    }

    this.soloVideos();

    if (Photonic_JS.deep_linking !== undefined && Photonic_JS.deep_linking !== 'none') {
      window.addEventListener('load', this.changeHash);
      window.addEventListener('hashchange', this.changeHash);
    }
  }

  initialize() {
    this.handleSolos(); // Implemented by child classes
  }

  initializeForNewContainer(containerId) {// Implemented by individual lightboxes. Empty for cases where not required
  }

  initializeForExisting() {// Implemented by child classes
  }

  modifyAdditionalVideoProperties(anchor) {// Implemented by individual lightboxes. Empty for cases where not required
  }

}

exports.Lightbox = Lightbox;

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



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
   true ? factory() : 0;
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
        return reject(new TypeError(typeof arr + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
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

      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
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
          if (val && (typeof val === 'object' || typeof val === 'function')) {
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
    if (value && typeof value === 'object' && value.constructor === Promise) {
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
      } else if (typeof init === 'object' && isSequence(init)) {
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();

          $this._list.push({
            name: String(nv[0]),
            value: String(nv[1])
          });
        });
      } else if (typeof init === 'object' && init) {
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
      if (init && typeof init === 'object' && isSequence(init)) {
        var o = new orig();
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();
          o.append(nv[0], nv[1]);
        });
        return o;
      } else if (init && typeof init === 'object') {
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hide = exports.show = exports.fadeOut = exports.fadeIn = exports.slideUpTitle = exports.slideUpDown = exports.getText = exports.getElement = exports.next = exports.get = exports.post = exports.hasClass = void 0;

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

  for (var [key, value] of Object.entries(args)) {
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
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("../include/js/front-end/src/Polyfill.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("../include/ext/glightbox/glightbox.js");
/******/ 	__webpack_require__("../include/js/front-end/src/Entries/GLightbox.js");
/******/ })()
;
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

/***/ "../include/ext/photoswipe/photoswipe-ui-default.js":
/*!**********************************************************!*\
  !*** ../include/ext/photoswipe/photoswipe-ui-default.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */

/**
 *
 * UI on top of main sliding area (caption, arrows, close button, etc.).
 * Built just using public methods/properties of PhotoSwipe.
 *
 */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function () {
  'use strict';

  var PhotoSwipeUI_Default = function PhotoSwipeUI_Default(pswp, framework) {
    var ui = this;

    var _overlayUIUpdated = false,
        _controlsVisible = true,
        _fullscrenAPI,
        _controls,
        _captionContainer,
        _fakeCaptionContainer,
        _indexIndicator,
        _shareButton,
        _shareModal,
        _shareModalHidden = true,
        _initalCloseOnScrollValue,
        _isIdle,
        _listen,
        _loadingIndicator,
        _loadingIndicatorHidden,
        _loadingIndicatorTimeout,
        _galleryHasOneSlide,
        _options,
        _defaultUIOptions = {
      barsSize: {
        top: 44,
        bottom: 'auto'
      },
      closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
      timeToIdle: 4000,
      timeToIdleOutside: 1000,
      loadingIndicatorDelay: 1000,
      // 2s
      addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl
      /*, isFake */
      ) {
        if (!item.title) {
          captionEl.children[0].innerHTML = '';
          return false;
        }

        captionEl.children[0].innerHTML = item.title;
        return true;
      },
      closeEl: true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: true,
      counterEl: true,
      arrowEl: true,
      preloaderEl: true,
      tapToClose: false,
      tapToToggleControls: true,
      clickToCloseNonZoomable: true,
      shareButtons: [{
        id: 'facebook',
        label: 'Share on Facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
      }, {
        id: 'twitter',
        label: 'Tweet',
        url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
      }, {
        id: 'pinterest',
        label: 'Pin it',
        url: 'http://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}'
      }, {
        id: 'download',
        label: 'Download image',
        url: '{{raw_image_url}}',
        download: true
      }],
      getImageURLForShare: function getImageURLForShare()
      /* shareButtonData */
      {
        return pswp.currItem.src || '';
      },
      getPageURLForShare: function getPageURLForShare()
      /* shareButtonData */
      {
        return window.location.href;
      },
      getTextForShare: function getTextForShare()
      /* shareButtonData */
      {
        return pswp.currItem.title || '';
      },
      indexIndicatorSep: ' / ',
      fitControlsWidth: 1200
    },
        _blockControlsTap,
        _blockControlsTapTimeout;

    var _onControlsTap = function _onControlsTap(e) {
      if (_blockControlsTap) {
        return true;
      }

      e = e || window.event;

      if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
        // reset idle timer
        _onIdleMouseMove();
      }

      var target = e.target || e.srcElement,
          uiElement,
          clickedClass = target.getAttribute('class') || '',
          found;

      for (var i = 0; i < _uiElements.length; i++) {
        uiElement = _uiElements[i];

        if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
          uiElement.onTap();
          found = true;
        }
      }

      if (found) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }

        _blockControlsTap = true; // Some versions of Android don't prevent ghost click event
        // when preventDefault() was called on touchstart and/or touchend.
        //
        // This happens on v4.3, 4.2, 4.1,
        // older versions strangely work correctly,
        // but just in case we add delay on all of them)

        var tapDelay = framework.features.isOldAndroid ? 600 : 30;
        _blockControlsTapTimeout = setTimeout(function () {
          _blockControlsTap = false;
        }, tapDelay);
      }
    },
        _fitControlsInViewport = function _fitControlsInViewport() {
      return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
    },
        _togglePswpClass = function _togglePswpClass(el, cName, add) {
      framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
    },
        // add class when there is just one item in the gallery
    // (by default it hides left/right arrows and 1ofX counter)
    _countNumItems = function _countNumItems() {
      var hasOneSlide = _options.getNumItemsFn() === 1;

      if (hasOneSlide !== _galleryHasOneSlide) {
        _togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);

        _galleryHasOneSlide = hasOneSlide;
      }
    },
        _toggleShareModalClass = function _toggleShareModalClass() {
      _togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
    },
        _toggleShareModal = function _toggleShareModal() {
      _shareModalHidden = !_shareModalHidden;

      if (!_shareModalHidden) {
        _toggleShareModalClass();

        setTimeout(function () {
          if (!_shareModalHidden) {
            framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
          }
        }, 30);
      } else {
        framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
        setTimeout(function () {
          if (_shareModalHidden) {
            _toggleShareModalClass();
          }
        }, 300);
      }

      if (!_shareModalHidden) {
        _updateShareURLs();
      }

      return false;
    },
        _openWindowPopup = function _openWindowPopup(e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      pswp.shout('shareLinkClick', e, target);

      if (!target.href) {
        return false;
      }

      if (target.hasAttribute('download')) {
        return true;
      }

      window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' + 'location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));

      if (!_shareModalHidden) {
        _toggleShareModal();
      }

      return false;
    },
        _updateShareURLs = function _updateShareURLs() {
      var shareButtonOut = '',
          shareButtonData,
          shareURL,
          image_url,
          page_url,
          share_text;

      for (var i = 0; i < _options.shareButtons.length; i++) {
        shareButtonData = _options.shareButtons[i];
        image_url = _options.getImageURLForShare(shareButtonData);
        page_url = _options.getPageURLForShare(shareButtonData);
        share_text = _options.getTextForShare(shareButtonData);
        shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));
        shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? 'download' : '') + '>' + shareButtonData.label + '</a>';

        if (_options.parseShareButtonOut) {
          shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
        }
      }

      _shareModal.children[0].innerHTML = shareButtonOut;
      _shareModal.children[0].onclick = _openWindowPopup;
    },
        _hasCloseClass = function _hasCloseClass(target) {
      for (var i = 0; i < _options.closeElClasses.length; i++) {
        if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
          return true;
        }
      }
    },
        _idleInterval,
        _idleTimer,
        _idleIncrement = 0,
        _onIdleMouseMove = function _onIdleMouseMove() {
      clearTimeout(_idleTimer);
      _idleIncrement = 0;

      if (_isIdle) {
        ui.setIdle(false);
      }
    },
        _onMouseLeaveWindow = function _onMouseLeaveWindow(e) {
      e = e ? e : window.event;
      var from = e.relatedTarget || e.toElement;

      if (!from || from.nodeName === 'HTML') {
        clearTimeout(_idleTimer);
        _idleTimer = setTimeout(function () {
          ui.setIdle(true);
        }, _options.timeToIdleOutside);
      }
    },
        _setupFullscreenAPI = function _setupFullscreenAPI() {
      if (_options.fullscreenEl && !framework.features.isOldAndroid) {
        if (!_fullscrenAPI) {
          _fullscrenAPI = ui.getFullscreenAPI();
        }

        if (_fullscrenAPI) {
          framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
          ui.updateFullscreen();
          framework.addClass(pswp.template, 'pswp--supports-fs');
        } else {
          framework.removeClass(pswp.template, 'pswp--supports-fs');
        }
      }
    },
        _setupLoadingIndicator = function _setupLoadingIndicator() {
      // Setup loading indicator
      if (_options.preloaderEl) {
        _toggleLoadingIndicator(true);

        _listen('beforeChange', function () {
          clearTimeout(_loadingIndicatorTimeout); // display loading indicator with delay

          _loadingIndicatorTimeout = setTimeout(function () {
            if (pswp.currItem && pswp.currItem.loading) {
              if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                // show preloader if progressive loading is not enabled,
                // or image width is not defined yet (because of slow connection)
                _toggleLoadingIndicator(false); // items-controller.js function allowProgressiveImg

              }
            } else {
              _toggleLoadingIndicator(true); // hide preloader

            }
          }, _options.loadingIndicatorDelay);
        });

        _listen('imageLoadComplete', function (index, item) {
          if (pswp.currItem === item) {
            _toggleLoadingIndicator(true);
          }
        });
      }
    },
        _toggleLoadingIndicator = function _toggleLoadingIndicator(hide) {
      if (_loadingIndicatorHidden !== hide) {
        _togglePswpClass(_loadingIndicator, 'preloader--active', !hide);

        _loadingIndicatorHidden = hide;
      }
    },
        _applyNavBarGaps = function _applyNavBarGaps(item) {
      var gap = item.vGap;

      if (_fitControlsInViewport()) {
        var bars = _options.barsSize;

        if (_options.captionEl && bars.bottom === 'auto') {
          if (!_fakeCaptionContainer) {
            _fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');

            _fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));

            _controls.insertBefore(_fakeCaptionContainer, _captionContainer);

            framework.addClass(_controls, 'pswp__ui--fit');
          }

          if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
            var captionSize = _fakeCaptionContainer.clientHeight;
            gap.bottom = parseInt(captionSize, 10) || 44;
          } else {
            gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
          }
        } else {
          gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
        } // height of top bar is static, no need to calculate it


        gap.top = bars.top;
      } else {
        gap.top = gap.bottom = 0;
      }
    },
        _setupIdle = function _setupIdle() {
      // Hide controls when mouse is used
      if (_options.timeToIdle) {
        _listen('mouseUsed', function () {
          framework.bind(document, 'mousemove', _onIdleMouseMove);
          framework.bind(document, 'mouseout', _onMouseLeaveWindow);
          _idleInterval = setInterval(function () {
            _idleIncrement++;

            if (_idleIncrement === 2) {
              ui.setIdle(true);
            }
          }, _options.timeToIdle / 2);
        });
      }
    },
        _setupHidingControlsDuringGestures = function _setupHidingControlsDuringGestures() {
      // Hide controls on vertical drag
      _listen('onVerticalDrag', function (now) {
        if (_controlsVisible && now < 0.95) {
          ui.hideControls();
        } else if (!_controlsVisible && now >= 0.95) {
          ui.showControls();
        }
      }); // Hide controls when pinching to close


      var pinchControlsHidden;

      _listen('onPinchClose', function (now) {
        if (_controlsVisible && now < 0.9) {
          ui.hideControls();
          pinchControlsHidden = true;
        } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
          ui.showControls();
        }
      });

      _listen('zoomGestureEnded', function () {
        pinchControlsHidden = false;

        if (pinchControlsHidden && !_controlsVisible) {
          ui.showControls();
        }
      });
    };

    var _uiElements = [{
      name: 'caption',
      option: 'captionEl',
      onInit: function onInit(el) {
        _captionContainer = el;
      }
    }, {
      name: 'share-modal',
      option: 'shareEl',
      onInit: function onInit(el) {
        _shareModal = el;
      },
      onTap: function onTap() {
        _toggleShareModal();
      }
    }, {
      name: 'button--share',
      option: 'shareEl',
      onInit: function onInit(el) {
        _shareButton = el;
      },
      onTap: function onTap() {
        _toggleShareModal();
      }
    }, {
      name: 'button--zoom',
      option: 'zoomEl',
      onTap: pswp.toggleDesktopZoom
    }, {
      name: 'counter',
      option: 'counterEl',
      onInit: function onInit(el) {
        _indexIndicator = el;
      }
    }, {
      name: 'button--close',
      option: 'closeEl',
      onTap: pswp.close
    }, {
      name: 'button--arrow--left',
      option: 'arrowEl',
      onTap: pswp.prev
    }, {
      name: 'button--arrow--right',
      option: 'arrowEl',
      onTap: pswp.next
    }, {
      name: 'button--fs',
      option: 'fullscreenEl',
      onTap: function onTap() {
        if (_fullscrenAPI.isFullscreen()) {
          _fullscrenAPI.exit();
        } else {
          _fullscrenAPI.enter();
        }
      }
    }, {
      name: 'preloader',
      option: 'preloaderEl',
      onInit: function onInit(el) {
        _loadingIndicator = el;
      }
    }];

    var _setupUIElements = function _setupUIElements() {
      var item, classAttr, uiElement;

      var loopThroughChildElements = function loopThroughChildElements(sChildren) {
        if (!sChildren) {
          return;
        }

        var l = sChildren.length;

        for (var i = 0; i < l; i++) {
          item = sChildren[i];
          classAttr = item.className;

          for (var a = 0; a < _uiElements.length; a++) {
            uiElement = _uiElements[a];

            if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {
              if (_options[uiElement.option]) {
                // if element is not disabled from options
                framework.removeClass(item, 'pswp__element--disabled');

                if (uiElement.onInit) {
                  uiElement.onInit(item);
                } //item.style.display = 'block';

              } else {
                framework.addClass(item, 'pswp__element--disabled'); //item.style.display = 'none';
              }
            }
          }
        }
      };

      loopThroughChildElements(_controls.children);
      var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');

      if (topBar) {
        loopThroughChildElements(topBar.children);
      }
    };

    ui.init = function () {
      // extend options
      framework.extend(pswp.options, _defaultUIOptions, true); // create local link for fast access

      _options = pswp.options; // find pswp__ui element

      _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui'); // create local link

      _listen = pswp.listen;

      _setupHidingControlsDuringGestures(); // update controls when slides change


      _listen('beforeChange', ui.update); // toggle zoom on double-tap


      _listen('doubleTap', function (point) {
        var initialZoomLevel = pswp.currItem.initialZoomLevel;

        if (pswp.getZoomLevel() !== initialZoomLevel) {
          pswp.zoomTo(initialZoomLevel, point, 333);
        } else {
          pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
        }
      }); // Allow text selection in caption


      _listen('preventDragEvent', function (e, isDown, preventObj) {
        var t = e.target || e.srcElement;

        if (t && t.getAttribute('class') && e.type.indexOf('mouse') > -1 && (t.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
          preventObj.prevent = false;
        }
      }); // bind events for UI


      _listen('bindEvents', function () {
        framework.bind(_controls, 'pswpTap click', _onControlsTap);
        framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

        if (!pswp.likelyTouchDevice) {
          framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
        }
      }); // unbind events for UI


      _listen('unbindEvents', function () {
        if (!_shareModalHidden) {
          _toggleShareModal();
        }

        if (_idleInterval) {
          clearInterval(_idleInterval);
        }

        framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
        framework.unbind(document, 'mousemove', _onIdleMouseMove);
        framework.unbind(_controls, 'pswpTap click', _onControlsTap);
        framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
        framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

        if (_fullscrenAPI) {
          framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);

          if (_fullscrenAPI.isFullscreen()) {
            _options.hideAnimationDuration = 0;

            _fullscrenAPI.exit();
          }

          _fullscrenAPI = null;
        }
      }); // clean up things when gallery is destroyed


      _listen('destroy', function () {
        if (_options.captionEl) {
          if (_fakeCaptionContainer) {
            _controls.removeChild(_fakeCaptionContainer);
          }

          framework.removeClass(_captionContainer, 'pswp__caption--empty');
        }

        if (_shareModal) {
          _shareModal.children[0].onclick = null;
        }

        framework.removeClass(_controls, 'pswp__ui--over-close');
        framework.addClass(_controls, 'pswp__ui--hidden');
        ui.setIdle(false);
      });

      if (!_options.showAnimationDuration) {
        framework.removeClass(_controls, 'pswp__ui--hidden');
      }

      _listen('initialZoomIn', function () {
        if (_options.showAnimationDuration) {
          framework.removeClass(_controls, 'pswp__ui--hidden');
        }
      });

      _listen('initialZoomOut', function () {
        framework.addClass(_controls, 'pswp__ui--hidden');
      });

      _listen('parseVerticalMargin', _applyNavBarGaps);

      _setupUIElements();

      if (_options.shareEl && _shareButton && _shareModal) {
        _shareModalHidden = true;
      }

      _countNumItems();

      _setupIdle();

      _setupFullscreenAPI();

      _setupLoadingIndicator();
    };

    ui.setIdle = function (isIdle) {
      _isIdle = isIdle;

      _togglePswpClass(_controls, 'ui--idle', isIdle);
    };

    ui.update = function () {
      // Don't update UI if it's hidden
      if (_controlsVisible && pswp.currItem) {
        ui.updateIndexIndicator();

        if (_options.captionEl) {
          _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

          _togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
        }

        _overlayUIUpdated = true;
      } else {
        _overlayUIUpdated = false;
      }

      if (!_shareModalHidden) {
        _toggleShareModal();
      }

      _countNumItems();
    };

    ui.updateFullscreen = function (e) {
      if (e) {
        // some browsers change window scroll position during the fullscreen
        // so PhotoSwipe updates it just in case
        setTimeout(function () {
          pswp.setScrollOffset(0, framework.getScrollY());
        }, 50);
      } // toogle pswp--fs class on root element


      framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
    };

    ui.updateIndexIndicator = function () {
      if (_options.counterEl) {
        _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
      }
    };

    ui.onGlobalTap = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      if (_blockControlsTap) {
        return;
      }

      if (e.detail && e.detail.pointerType === 'mouse') {
        // close gallery if clicked outside of the image
        if (_hasCloseClass(target)) {
          pswp.close();
          return;
        }

        if (framework.hasClass(target, 'pswp__img')) {
          if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
            if (_options.clickToCloseNonZoomable) {
              pswp.close();
            }
          } else {
            pswp.toggleDesktopZoom(e.detail.releasePoint);
          }
        }
      } else {
        // tap anywhere (except buttons) to toggle visibility of controls
        if (_options.tapToToggleControls) {
          if (_controlsVisible) {
            ui.hideControls();
          } else {
            ui.showControls();
          }
        } // tap to close gallery


        if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
          pswp.close();
          return;
        }
      }
    };

    ui.onMouseOver = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement; // add class when mouse is over an element that should close the gallery

      _togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
    };

    ui.hideControls = function () {
      framework.addClass(_controls, 'pswp__ui--hidden');
      _controlsVisible = false;
    };

    ui.showControls = function () {
      _controlsVisible = true;

      if (!_overlayUIUpdated) {
        ui.update();
      }

      framework.removeClass(_controls, 'pswp__ui--hidden');
    };

    ui.supportsFullscreen = function () {
      var d = document;
      return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
    };

    ui.getFullscreenAPI = function () {
      var dE = document.documentElement,
          api,
          tF = 'fullscreenchange';

      if (dE.requestFullscreen) {
        api = {
          enterK: 'requestFullscreen',
          exitK: 'exitFullscreen',
          elementK: 'fullscreenElement',
          eventK: tF
        };
      } else if (dE.mozRequestFullScreen) {
        api = {
          enterK: 'mozRequestFullScreen',
          exitK: 'mozCancelFullScreen',
          elementK: 'mozFullScreenElement',
          eventK: 'moz' + tF
        };
      } else if (dE.webkitRequestFullscreen) {
        api = {
          enterK: 'webkitRequestFullscreen',
          exitK: 'webkitExitFullscreen',
          elementK: 'webkitFullscreenElement',
          eventK: 'webkit' + tF
        };
      } else if (dE.msRequestFullscreen) {
        api = {
          enterK: 'msRequestFullscreen',
          exitK: 'msExitFullscreen',
          elementK: 'msFullscreenElement',
          eventK: 'MSFullscreenChange'
        };
      }

      if (api) {
        api.enter = function () {
          // disable close-on-scroll in fullscreen
          _initalCloseOnScrollValue = _options.closeOnScroll;
          _options.closeOnScroll = false;

          if (this.enterK === 'webkitRequestFullscreen') {
            pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
          } else {
            return pswp.template[this.enterK]();
          }
        };

        api.exit = function () {
          _options.closeOnScroll = _initalCloseOnScrollValue;
          return document[this.exitK]();
        };

        api.isFullscreen = function () {
          return document[this.elementK];
        };
      }

      return api;
    };
  };

  return PhotoSwipeUI_Default;
});

/***/ }),

/***/ "../include/ext/photoswipe/photoswipe.js":
/*!***********************************************!*\
  !*** ../include/ext/photoswipe/photoswipe.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function () {
  'use strict';

  var PhotoSwipe = function PhotoSwipe(template, UiClass, items, options) {
    /*>>framework-bridge*/

    /**
     *
     * Set of generic functions used by gallery.
     *
     * You're free to modify anything here as long as functionality is kept.
     *
     */
    var framework = {
      features: null,
      bind: function bind(target, type, listener, unbind) {
        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
        type = type.split(' ');

        for (var i = 0; i < type.length; i++) {
          if (type[i]) {
            target[methodName](type[i], listener, false);
          }
        }
      },
      isArray: function isArray(obj) {
        return obj instanceof Array;
      },
      createEl: function createEl(classes, tag) {
        var el = document.createElement(tag || 'div');

        if (classes) {
          el.className = classes;
        }

        return el;
      },
      getScrollY: function getScrollY() {
        var yOffset = window.pageYOffset;
        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
      },
      unbind: function unbind(target, type, listener) {
        framework.bind(target, type, listener, true);
      },
      removeClass: function removeClass(el, className) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },
      addClass: function addClass(el, className) {
        if (!framework.hasClass(el, className)) {
          el.className += (el.className ? ' ' : '') + className;
        }
      },
      hasClass: function hasClass(el, className) {
        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
      },
      getChildByClass: function getChildByClass(parentEl, childClassName) {
        var node = parentEl.firstChild;

        while (node) {
          if (framework.hasClass(node, childClassName)) {
            return node;
          }

          node = node.nextSibling;
        }
      },
      arraySearch: function arraySearch(array, value, key) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            return i;
          }
        }

        return -1;
      },
      extend: function extend(o1, o2, preventOverwrite) {
        for (var prop in o2) {
          if (o2.hasOwnProperty(prop)) {
            if (preventOverwrite && o1.hasOwnProperty(prop)) {
              continue;
            }

            o1[prop] = o2[prop];
          }
        }
      },
      easing: {
        sine: {
          out: function out(k) {
            return Math.sin(k * (Math.PI / 2));
          },
          inOut: function inOut(k) {
            return -(Math.cos(Math.PI * k) - 1) / 2;
          }
        },
        cubic: {
          out: function out(k) {
            return --k * k * k + 1;
          }
        }
        /*
        	elastic: {
        		out: function ( k ) {
        				var s, a = 0.1, p = 0.4;
        			if ( k === 0 ) return 0;
        			if ( k === 1 ) return 1;
        			if ( !a || a < 1 ) { a = 1; s = p / 4; }
        			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
        			},
        	},
        	back: {
        		out: function ( k ) {
        			var s = 1.70158;
        			return --k * k * ( ( s + 1 ) * k + s ) + 1;
        		}
        	}
        */

      },

      /**
       *
       * @return {object}
       *
       * {
       *  raf : request animation frame function
       *  caf : cancel animation frame function
       *  transfrom : transform property key (with vendor), or null if not supported
       *  oldIE : IE8 or below
       * }
       *
       */
      detectFeatures: function detectFeatures() {
        if (framework.features) {
          return framework.features;
        }

        var helperEl = framework.createEl(),
            helperStyle = helperEl.style,
            vendor = '',
            features = {}; // IE8 and below

        features.oldIE = document.all && !document.addEventListener;
        features.touch = 'ontouchstart' in window;

        if (window.requestAnimationFrame) {
          features.raf = window.requestAnimationFrame;
          features.caf = window.cancelAnimationFrame;
        }

        features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled; // fix false-positive detection of old Android in new IE
        // (IE11 ua string contains "Android 4.0")

        if (!features.pointerEvent) {
          var ua = navigator.userAgent; // Detect if device is iPhone or iPod and if it's older than iOS 8
          // http://stackoverflow.com/a/14223920
          //
          // This detection is made because of buggy top/bottom toolbars
          // that don't trigger window.resize event.
          // For more info refer to _isFixedPosition variable in core.js

          if (/iP(hone|od)/.test(navigator.platform)) {
            var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

            if (v && v.length > 0) {
              v = parseInt(v[1], 10);

              if (v >= 1 && v < 8) {
                features.isOldIOSPhone = true;
              }
            }
          } // Detect old Android (before KitKat)
          // due to bugs related to position:fixed
          // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript


          var match = ua.match(/Android\s([0-9\.]*)/);
          var androidversion = match ? match[1] : 0;
          androidversion = parseFloat(androidversion);

          if (androidversion >= 1) {
            if (androidversion < 4.4) {
              features.isOldAndroid = true; // for fixed position bug & performance
            }

            features.androidVersion = androidversion; // for touchend bug
          }

          features.isMobileOpera = /opera mini|opera mobi/i.test(ua); // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
        }

        var styleChecks = ['transform', 'perspective', 'animationName'],
            vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
            styleCheckItem,
            styleName;

        for (var i = 0; i < 4; i++) {
          vendor = vendors[i];

          for (var a = 0; a < 3; a++) {
            styleCheckItem = styleChecks[a]; // uppercase first letter of property name, if vendor is present

            styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);

            if (!features[styleCheckItem] && styleName in helperStyle) {
              features[styleCheckItem] = styleName;
            }
          }

          if (vendor && !features.raf) {
            vendor = vendor.toLowerCase();
            features.raf = window[vendor + 'RequestAnimationFrame'];

            if (features.raf) {
              features.caf = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
            }
          }
        }

        if (!features.raf) {
          var lastTime = 0;

          features.raf = function (fn) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
              fn(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };

          features.caf = function (id) {
            clearTimeout(id);
          };
        } // Detect SVG support


        features.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
        framework.features = features;
        return features;
      }
    };
    framework.detectFeatures(); // Override addEventListener for old versions of IE

    if (framework.features.oldIE) {
      framework.bind = function (target, type, listener, unbind) {
        type = type.split(' ');

        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
            evName,
            _handleEv = function _handleEv() {
          listener.handleEvent.call(listener);
        };

        for (var i = 0; i < type.length; i++) {
          evName = type[i];

          if (evName) {
            if (typeof listener === 'object' && listener.handleEvent) {
              if (!unbind) {
                listener['oldIE' + evName] = _handleEv;
              } else {
                if (!listener['oldIE' + evName]) {
                  return false;
                }
              }

              target[methodName]('on' + evName, listener['oldIE' + evName]);
            } else {
              target[methodName]('on' + evName, listener);
            }
          }
        }
      };
    }
    /*>>framework-bridge*/

    /*>>core*/
    //function(template, UiClass, items, options)


    var self = this;
    /**
     * Static vars, don't change unless you know what you're doing.
     */

    var DOUBLE_TAP_RADIUS = 25,
        NUM_HOLDERS = 3;
    /**
     * Options
     */

    var _options = {
      allowPanToNext: true,
      spacing: 0.12,
      bgOpacity: 1,
      mouseUsed: false,
      loop: true,
      pinchToClose: true,
      closeOnScroll: true,
      closeOnVerticalDrag: true,
      verticalDragRange: 0.75,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      showHideOpacity: false,
      focus: true,
      escKey: true,
      arrowKeys: true,
      mainScrollEndFriction: 0.35,
      panEndFriction: 0.35,
      isClickableElement: function isClickableElement(el) {
        return el.tagName === 'A';
      },
      getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
        if (isMouseClick) {
          return 1;
        } else {
          return item.initialZoomLevel < 0.7 ? 1 : 1.33;
        }
      },
      maxSpreadZoom: 1.33,
      modal: true,
      // not fully implemented yet
      scaleMode: 'fit' // TODO

    };
    framework.extend(_options, options);
    /**
     * Private helper variables & functions
     */

    var _getEmptyPoint = function _getEmptyPoint() {
      return {
        x: 0,
        y: 0
      };
    };

    var _isOpen,
        _isDestroying,
        _closedByScroll,
        _currentItemIndex,
        _containerStyle,
        _containerShiftIndex,
        _currPanDist = _getEmptyPoint(),
        _startPanOffset = _getEmptyPoint(),
        _panOffset = _getEmptyPoint(),
        _upMoveEvents,
        // drag move, drag end & drag cancel events array
    _downEvents,
        // drag start events array
    _globalEventHandlers,
        _viewportSize = {},
        _currZoomLevel,
        _startZoomLevel,
        _translatePrefix,
        _translateSufix,
        _updateSizeInterval,
        _itemsNeedUpdate,
        _currPositionIndex = 0,
        _offset = {},
        _slideSize = _getEmptyPoint(),
        // size of slide area, including spacing
    _itemHolders,
        _prevItemIndex,
        _indexDiff = 0,
        // difference of indexes since last content update
    _dragStartEvent,
        _dragMoveEvent,
        _dragEndEvent,
        _dragCancelEvent,
        _transformKey,
        _pointerEventEnabled,
        _isFixedPosition = true,
        _likelyTouchDevice,
        _modules = [],
        _requestAF,
        _cancelAF,
        _initalClassName,
        _initalWindowScrollY,
        _oldIE,
        _currentWindowScrollY,
        _features,
        _windowVisibleSize = {},
        _renderMaxResolution = false,
        _orientationChangeTimeout,
        // Registers PhotoSWipe module (History, Controller ...)
    _registerModule = function _registerModule(name, module) {
      framework.extend(self, module.publicMethods);

      _modules.push(name);
    },
        _getLoopedId = function _getLoopedId(index) {
      var numSlides = _getNumItems();

      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }

      return index;
    },
        // Micro bind/trigger
    _listeners = {},
        _listen = function _listen(name, fn) {
      if (!_listeners[name]) {
        _listeners[name] = [];
      }

      return _listeners[name].push(fn);
    },
        _shout = function _shout(name) {
      var listeners = _listeners[name];

      if (listeners) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].apply(self, args);
        }
      }
    },
        _getCurrentTime = function _getCurrentTime() {
      return new Date().getTime();
    },
        _applyBgOpacity = function _applyBgOpacity(opacity) {
      _bgOpacity = opacity;
      self.bg.style.opacity = opacity * _options.bgOpacity;
    },
        _applyZoomTransform = function _applyZoomTransform(styleObj, x, y, zoom, item) {
      if (!_renderMaxResolution || item && item !== self.currItem) {
        zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
      }

      styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
    },
        _applyCurrentZoomPan = function _applyCurrentZoomPan(allowRenderResolution) {
      if (_currZoomElementStyle) {
        if (allowRenderResolution) {
          if (_currZoomLevel > self.currItem.fitRatio) {
            if (!_renderMaxResolution) {
              _setImageSize(self.currItem, false, true);

              _renderMaxResolution = true;
            }
          } else {
            if (_renderMaxResolution) {
              _setImageSize(self.currItem);

              _renderMaxResolution = false;
            }
          }
        }

        _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
      }
    },
        _applyZoomPanToItem = function _applyZoomPanToItem(item) {
      if (item.container) {
        _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
      }
    },
        _setTranslateX = function _setTranslateX(x, elStyle) {
      elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
    },
        _moveMainScroll = function _moveMainScroll(x, dragging) {
      if (!_options.loop && dragging) {
        var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
            delta = Math.round(x - _mainScrollPos.x);

        if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) {
          x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
        }
      }

      _mainScrollPos.x = x;

      _setTranslateX(x, _containerStyle);
    },
        _calculatePanOffset = function _calculatePanOffset(axis, zoomLevel) {
      var m = _midZoomPoint[axis] - _offset[axis];
      return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
    },
        _equalizePoints = function _equalizePoints(p1, p2) {
      p1.x = p2.x;
      p1.y = p2.y;

      if (p2.id) {
        p1.id = p2.id;
      }
    },
        _roundPoint = function _roundPoint(p) {
      p.x = Math.round(p.x);
      p.y = Math.round(p.y);
    },
        _mouseMoveTimeout = null,
        _onFirstMouseMove = function _onFirstMouseMove() {
      // Wait until mouse move event is fired at least twice during 100ms
      // We do this, because some mobile browsers trigger it on touchstart
      if (_mouseMoveTimeout) {
        framework.unbind(document, 'mousemove', _onFirstMouseMove);
        framework.addClass(template, 'pswp--has_mouse');
        _options.mouseUsed = true;

        _shout('mouseUsed');
      }

      _mouseMoveTimeout = setTimeout(function () {
        _mouseMoveTimeout = null;
      }, 100);
    },
        _bindEvents = function _bindEvents() {
      framework.bind(document, 'keydown', self);

      if (_features.transform) {
        // don't bind click event in browsers that don't support transform (mostly IE8)
        framework.bind(self.scrollWrap, 'click', self);
      }

      if (!_options.mouseUsed) {
        framework.bind(document, 'mousemove', _onFirstMouseMove);
      }

      framework.bind(window, 'resize scroll orientationchange', self);

      _shout('bindEvents');
    },
        _unbindEvents = function _unbindEvents() {
      framework.unbind(window, 'resize scroll orientationchange', self);
      framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
      framework.unbind(document, 'keydown', self);
      framework.unbind(document, 'mousemove', _onFirstMouseMove);

      if (_features.transform) {
        framework.unbind(self.scrollWrap, 'click', self);
      }

      if (_isDragging) {
        framework.unbind(window, _upMoveEvents, self);
      }

      clearTimeout(_orientationChangeTimeout);

      _shout('unbindEvents');
    },
        _calculatePanBounds = function _calculatePanBounds(zoomLevel, update) {
      var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);

      if (update) {
        _currPanBounds = bounds;
      }

      return bounds;
    },
        _getMinZoomLevel = function _getMinZoomLevel(item) {
      if (!item) {
        item = self.currItem;
      }

      return item.initialZoomLevel;
    },
        _getMaxZoomLevel = function _getMaxZoomLevel(item) {
      if (!item) {
        item = self.currItem;
      }

      return item.w > 0 ? _options.maxSpreadZoom : 1;
    },
        // Return true if offset is out of the bounds
    _modifyDestPanOffset = function _modifyDestPanOffset(axis, destPanBounds, destPanOffset, destZoomLevel) {
      if (destZoomLevel === self.currItem.initialZoomLevel) {
        destPanOffset[axis] = self.currItem.initialPosition[axis];
        return true;
      } else {
        destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

        if (destPanOffset[axis] > destPanBounds.min[axis]) {
          destPanOffset[axis] = destPanBounds.min[axis];
          return true;
        } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
          destPanOffset[axis] = destPanBounds.max[axis];
          return true;
        }
      }

      return false;
    },
        _setupTransforms = function _setupTransforms() {
      if (_transformKey) {
        // setup 3d transforms
        var allow3dTransform = _features.perspective && !_likelyTouchDevice;
        _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
        _translateSufix = _features.perspective ? ', 0px)' : ')';
        return;
      } // Override zoom/pan/move functions in case old browser is used (most likely IE)
      // (so they use left/top/width/height, instead of CSS transform)


      _transformKey = 'left';
      framework.addClass(template, 'pswp--ie');

      _setTranslateX = function _setTranslateX(x, elStyle) {
        elStyle.left = x + 'px';
      };

      _applyZoomPanToItem = function _applyZoomPanToItem(item) {
        var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
            s = item.container.style,
            w = zoomRatio * item.w,
            h = zoomRatio * item.h;
        s.width = w + 'px';
        s.height = h + 'px';
        s.left = item.initialPosition.x + 'px';
        s.top = item.initialPosition.y + 'px';
      };

      _applyCurrentZoomPan = function _applyCurrentZoomPan() {
        if (_currZoomElementStyle) {
          var s = _currZoomElementStyle,
              item = self.currItem,
              zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
              w = zoomRatio * item.w,
              h = zoomRatio * item.h;
          s.width = w + 'px';
          s.height = h + 'px';
          s.left = _panOffset.x + 'px';
          s.top = _panOffset.y + 'px';
        }
      };
    },
        _onKeyDown = function _onKeyDown(e) {
      var keydownAction = '';

      if (_options.escKey && e.keyCode === 27) {
        keydownAction = 'close';
      } else if (_options.arrowKeys) {
        if (e.keyCode === 37) {
          keydownAction = 'prev';
        } else if (e.keyCode === 39) {
          keydownAction = 'next';
        }
      }

      if (keydownAction) {
        // don't do anything if special key pressed to prevent from overriding default browser actions
        // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }

          self[keydownAction]();
        }
      }
    },
        _onGlobalClick = function _onGlobalClick(e) {
      if (!e) {
        return;
      } // don't allow click event to pass through when triggering after drag or some other gesture


      if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
        _updatePageScrollOffset = function _updatePageScrollOffset() {
      self.setScrollOffset(0, framework.getScrollY());
    }; // Micro animation engine


    var _animations = {},
        _numAnimations = 0,
        _stopAnimation = function _stopAnimation(name) {
      if (_animations[name]) {
        if (_animations[name].raf) {
          _cancelAF(_animations[name].raf);
        }

        _numAnimations--;
        delete _animations[name];
      }
    },
        _registerStartAnimation = function _registerStartAnimation(name) {
      if (_animations[name]) {
        _stopAnimation(name);
      }

      if (!_animations[name]) {
        _numAnimations++;
        _animations[name] = {};
      }
    },
        _stopAllAnimations = function _stopAllAnimations() {
      for (var prop in _animations) {
        if (_animations.hasOwnProperty(prop)) {
          _stopAnimation(prop);
        }
      }
    },
        _animateProp = function _animateProp(name, b, endProp, d, easingFn, onUpdate, onComplete) {
      var startAnimTime = _getCurrentTime(),
          t;

      _registerStartAnimation(name);

      var animloop = function animloop() {
        if (_animations[name]) {
          t = _getCurrentTime() - startAnimTime; // time diff
          //b - beginning (start prop)
          //d - anim duration

          if (t >= d) {
            _stopAnimation(name);

            onUpdate(endProp);

            if (onComplete) {
              onComplete();
            }

            return;
          }

          onUpdate((endProp - b) * easingFn(t / d) + b);
          _animations[name].raf = _requestAF(animloop);
        }
      };

      animloop();
    };

    var publicMethods = {
      // make a few local variables and functions public
      shout: _shout,
      listen: _listen,
      viewportSize: _viewportSize,
      options: _options,
      isMainScrollAnimating: function isMainScrollAnimating() {
        return _mainScrollAnimating;
      },
      getZoomLevel: function getZoomLevel() {
        return _currZoomLevel;
      },
      getCurrentIndex: function getCurrentIndex() {
        return _currentItemIndex;
      },
      isDragging: function isDragging() {
        return _isDragging;
      },
      isZooming: function isZooming() {
        return _isZooming;
      },
      setScrollOffset: function setScrollOffset(x, y) {
        _offset.x = x;
        _currentWindowScrollY = _offset.y = y;

        _shout('updateScrollOffset', _offset);
      },
      applyZoomPan: function applyZoomPan(zoomLevel, panX, panY, allowRenderResolution) {
        _panOffset.x = panX;
        _panOffset.y = panY;
        _currZoomLevel = zoomLevel;

        _applyCurrentZoomPan(allowRenderResolution);
      },
      init: function init() {
        if (_isOpen || _isDestroying) {
          return;
        }

        var i;
        self.framework = framework; // basic functionality

        self.template = template; // root DOM element of PhotoSwipe

        self.bg = framework.getChildByClass(template, 'pswp__bg');
        _initalClassName = template.className;
        _isOpen = true;
        _features = framework.detectFeatures();
        _requestAF = _features.raf;
        _cancelAF = _features.caf;
        _transformKey = _features.transform;
        _oldIE = _features.oldIE;
        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');
        _containerStyle = self.container.style; // for fast access
        // Objects that hold slides (there are only 3 in DOM)

        self.itemHolders = _itemHolders = [{
          el: self.container.children[0],
          wrap: 0,
          index: -1
        }, {
          el: self.container.children[1],
          wrap: 0,
          index: -1
        }, {
          el: self.container.children[2],
          wrap: 0,
          index: -1
        }]; // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)

        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

        _setupTransforms(); // Setup global events


        _globalEventHandlers = {
          resize: self.updateSize,
          // Fixes: iOS 10.3 resize event
          // does not update scrollWrap.clientWidth instantly after resize
          // https://github.com/dimsemenov/PhotoSwipe/issues/1315
          orientationchange: function orientationchange() {
            clearTimeout(_orientationChangeTimeout);
            _orientationChangeTimeout = setTimeout(function () {
              if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                self.updateSize();
              }
            }, 500);
          },
          scroll: _updatePageScrollOffset,
          keydown: _onKeyDown,
          click: _onGlobalClick
        }; // disable show/hide effects on old browsers that don't support CSS animations or transforms,
        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.

        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;

        if (!_features.animationName || !_features.transform || oldPhone) {
          _options.showAnimationDuration = _options.hideAnimationDuration = 0;
        } // init modules


        for (i = 0; i < _modules.length; i++) {
          self['init' + _modules[i]]();
        } // init


        if (UiClass) {
          var ui = self.ui = new UiClass(self, framework);
          ui.init();
        }

        _shout('firstUpdate');

        _currentItemIndex = _currentItemIndex || _options.index || 0; // validate index

        if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
          _currentItemIndex = 0;
        }

        self.currItem = _getItemAt(_currentItemIndex);

        if (_features.isOldIOSPhone || _features.isOldAndroid) {
          _isFixedPosition = false;
        }

        template.setAttribute('aria-hidden', 'false');

        if (_options.modal) {
          if (!_isFixedPosition) {
            template.style.position = 'absolute';
            template.style.top = framework.getScrollY() + 'px';
          } else {
            template.style.position = 'fixed';
          }
        }

        if (_currentWindowScrollY === undefined) {
          _shout('initialLayout');

          _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
        } // add classes to root element of PhotoSwipe


        var rootClasses = 'pswp--open ';

        if (_options.mainClass) {
          rootClasses += _options.mainClass + ' ';
        }

        if (_options.showHideOpacity) {
          rootClasses += 'pswp--animate_opacity ';
        }

        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
        rootClasses += _features.svg ? ' pswp--svg' : '';
        framework.addClass(template, rootClasses);
        self.updateSize(); // initial update

        _containerShiftIndex = -1;
        _indexDiff = null;

        for (i = 0; i < NUM_HOLDERS; i++) {
          _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
        }

        if (!_oldIE) {
          framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
        }

        _listen('initialZoomInEnd', function () {
          self.setContent(_itemHolders[0], _currentItemIndex - 1);
          self.setContent(_itemHolders[2], _currentItemIndex + 1);
          _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

          if (_options.focus) {
            // focus causes layout,
            // which causes lag during the animation,
            // that's why we delay it untill the initial zoom transition ends
            template.focus();
          }

          _bindEvents();
        }); // set content for center slide (first time)


        self.setContent(_itemHolders[1], _currentItemIndex);
        self.updateCurrItem();

        _shout('afterInit');

        if (!_isFixedPosition) {
          // On all versions of iOS lower than 8.0, we check size of viewport every second.
          //
          // This is done to detect when Safari top & bottom bars appear,
          // as this action doesn't trigger any events (like resize).
          //
          // On iOS8 they fixed this.
          //
          // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
          _updateSizeInterval = setInterval(function () {
            if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
              self.updateSize();
            }
          }, 1000);
        }

        framework.addClass(template, 'pswp--visible');
      },
      // Close the gallery, then destroy it
      close: function close() {
        if (!_isOpen) {
          return;
        }

        _isOpen = false;
        _isDestroying = true;

        _shout('close');

        _unbindEvents();

        _showOrHide(self.currItem, null, true, self.destroy);
      },
      // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
      destroy: function destroy() {
        _shout('destroy');

        if (_showOrHideTimeout) {
          clearTimeout(_showOrHideTimeout);
        }

        template.setAttribute('aria-hidden', 'true');
        template.className = _initalClassName;

        if (_updateSizeInterval) {
          clearInterval(_updateSizeInterval);
        }

        framework.unbind(self.scrollWrap, _downEvents, self); // we unbind scroll event at the end, as closing animation may depend on it

        framework.unbind(window, 'scroll', self);

        _stopDragUpdateLoop();

        _stopAllAnimations();

        _listeners = null;
      },

      /**
       * Pan image to position
       * @param {Number} x
       * @param {Number} y
       * @param {Boolean} force Will ignore bounds if set to true.
       */
      panTo: function panTo(x, y, force) {
        if (!force) {
          if (x > _currPanBounds.min.x) {
            x = _currPanBounds.min.x;
          } else if (x < _currPanBounds.max.x) {
            x = _currPanBounds.max.x;
          }

          if (y > _currPanBounds.min.y) {
            y = _currPanBounds.min.y;
          } else if (y < _currPanBounds.max.y) {
            y = _currPanBounds.max.y;
          }
        }

        _panOffset.x = x;
        _panOffset.y = y;

        _applyCurrentZoomPan();
      },
      handleEvent: function handleEvent(e) {
        e = e || window.event;

        if (_globalEventHandlers[e.type]) {
          _globalEventHandlers[e.type](e);
        }
      },
      goTo: function goTo(index) {
        index = _getLoopedId(index);
        var diff = index - _currentItemIndex;
        _indexDiff = diff;
        _currentItemIndex = index;
        self.currItem = _getItemAt(_currentItemIndex);
        _currPositionIndex -= diff;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _stopAllAnimations();

        _mainScrollAnimating = false;
        self.updateCurrItem();
      },
      next: function next() {
        self.goTo(_currentItemIndex + 1);
      },
      prev: function prev() {
        self.goTo(_currentItemIndex - 1);
      },
      // update current zoom/pan objects
      updateCurrZoomItem: function updateCurrZoomItem(emulateSetContent) {
        if (emulateSetContent) {
          _shout('beforeChange', 0);
        } // itemHolder[1] is middle (current) item


        if (_itemHolders[1].el.children.length) {
          var zoomElement = _itemHolders[1].el.children[0];

          if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
            _currZoomElementStyle = zoomElement.style;
          } else {
            _currZoomElementStyle = null;
          }
        } else {
          _currZoomElementStyle = null;
        }

        _currPanBounds = self.currItem.bounds;
        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _panOffset.x = _currPanBounds.center.x;
        _panOffset.y = _currPanBounds.center.y;

        if (emulateSetContent) {
          _shout('afterChange');
        }
      },
      invalidateCurrItems: function invalidateCurrItems() {
        _itemsNeedUpdate = true;

        for (var i = 0; i < NUM_HOLDERS; i++) {
          if (_itemHolders[i].item) {
            _itemHolders[i].item.needsUpdate = true;
          }
        }
      },
      updateCurrItem: function updateCurrItem(beforeAnimation) {
        if (_indexDiff === 0) {
          return;
        }

        var diffAbs = Math.abs(_indexDiff),
            tempHolder;

        if (beforeAnimation && diffAbs < 2) {
          return;
        }

        self.currItem = _getItemAt(_currentItemIndex);
        _renderMaxResolution = false;

        _shout('beforeChange', _indexDiff);

        if (diffAbs >= NUM_HOLDERS) {
          _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
          diffAbs = NUM_HOLDERS;
        }

        for (var i = 0; i < diffAbs; i++) {
          if (_indexDiff > 0) {
            tempHolder = _itemHolders.shift();
            _itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

            _containerShiftIndex++;

            _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);

            self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
          } else {
            tempHolder = _itemHolders.pop();

            _itemHolders.unshift(tempHolder); // move last to first


            _containerShiftIndex--;

            _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);

            self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
          }
        } // reset zoom/pan on previous item


        if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
          var prevItem = _getItemAt(_prevItemIndex);

          if (prevItem.initialZoomLevel !== _currZoomLevel) {
            _calculateItemSize(prevItem, _viewportSize);

            _setImageSize(prevItem);

            _applyZoomPanToItem(prevItem);
          }
        } // reset diff after update


        _indexDiff = 0;
        self.updateCurrZoomItem();
        _prevItemIndex = _currentItemIndex;

        _shout('afterChange');
      },
      updateSize: function updateSize(force) {
        if (!_isFixedPosition && _options.modal) {
          var windowScrollY = framework.getScrollY();

          if (_currentWindowScrollY !== windowScrollY) {
            template.style.top = windowScrollY + 'px';
            _currentWindowScrollY = windowScrollY;
          }

          if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
            return;
          }

          _windowVisibleSize.x = window.innerWidth;
          _windowVisibleSize.y = window.innerHeight; //template.style.width = _windowVisibleSize.x + 'px';

          template.style.height = _windowVisibleSize.y + 'px';
        }

        _viewportSize.x = self.scrollWrap.clientWidth;
        _viewportSize.y = self.scrollWrap.clientHeight;

        _updatePageScrollOffset();

        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
        _slideSize.y = _viewportSize.y;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _shout('beforeResize'); // even may be used for example to switch image sources
        // don't re-calculate size on inital size update


        if (_containerShiftIndex !== undefined) {
          var holder, item, hIndex;

          for (var i = 0; i < NUM_HOLDERS; i++) {
            holder = _itemHolders[i];

            _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

            hIndex = _currentItemIndex + i - 1;

            if (_options.loop && _getNumItems() > 2) {
              hIndex = _getLoopedId(hIndex);
            } // update zoom level on items and refresh source (if needsUpdate)


            item = _getItemAt(hIndex); // re-render gallery item if `needsUpdate`,
            // or doesn't have `bounds` (entirely new slide object)

            if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
              self.cleanSlide(item);
              self.setContent(holder, hIndex); // if "center" slide

              if (i === 1) {
                self.currItem = item;
                self.updateCurrZoomItem(true);
              }

              item.needsUpdate = false;
            } else if (holder.index === -1 && hIndex >= 0) {
              // add content first time
              self.setContent(holder, hIndex);
            }

            if (item && item.container) {
              _calculateItemSize(item, _viewportSize);

              _setImageSize(item);

              _applyZoomPanToItem(item);
            }
          }

          _itemsNeedUpdate = false;
        }

        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _currPanBounds = self.currItem.bounds;

        if (_currPanBounds) {
          _panOffset.x = _currPanBounds.center.x;
          _panOffset.y = _currPanBounds.center.y;

          _applyCurrentZoomPan(true);
        }

        _shout('resize');
      },
      // Zoom current item to
      zoomTo: function zoomTo(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
        /*
        	if(destZoomLevel === 'fit') {
        		destZoomLevel = self.currItem.fitRatio;
        	} else if(destZoomLevel === 'fill') {
        		destZoomLevel = self.currItem.fillRatio;
        	}
        */
        if (centerPoint) {
          _startZoomLevel = _currZoomLevel;
          _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
          _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;

          _equalizePoints(_startPanOffset, _panOffset);
        }

        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
            destPanOffset = {};

        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);

        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

        var initialZoomLevel = _currZoomLevel;
        var initialPanOffset = {
          x: _panOffset.x,
          y: _panOffset.y
        };

        _roundPoint(destPanOffset);

        var onUpdate = function onUpdate(now) {
          if (now === 1) {
            _currZoomLevel = destZoomLevel;
            _panOffset.x = destPanOffset.x;
            _panOffset.y = destPanOffset.y;
          } else {
            _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
            _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
            _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
          }

          if (updateFn) {
            updateFn(now);
          }

          _applyCurrentZoomPan(now === 1);
        };

        if (speed) {
          _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
        } else {
          onUpdate(1);
        }
      }
    };
    /*>>core*/

    /*>>gestures*/

    /**
     * Mouse/touch/pointer event handlers.
     *
     * separated from @core.js for readability
     */

    var MIN_SWIPE_DISTANCE = 30,
        DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

    var _gestureStartTime,
        _gestureCheckSpeedTime,
        // pool of objects that are used during dragging of zooming
    p = {},
        // first point
    p2 = {},
        // second point (for zoom gesture)
    delta = {},
        _currPoint = {},
        _startPoint = {},
        _currPointers = [],
        _startMainScrollPos = {},
        _releaseAnimData,
        _posPoints = [],
        // array of points during dragging, used to determine type of gesture
    _tempPoint = {},
        _isZoomingIn,
        _verticalDragInitiated,
        _oldAndroidTouchEndTimeout,
        _currZoomedItemIndex = 0,
        _centerPoint = _getEmptyPoint(),
        _lastReleaseTime = 0,
        _isDragging,
        // at least one pointer is down
    _isMultitouch,
        // at least two _pointers are down
    _zoomStarted,
        // zoom level changed during zoom gesture
    _moved,
        _dragAnimFrame,
        _mainScrollShifted,
        _currentPoints,
        // array of current touch points
    _isZooming,
        _currPointsDistance,
        _startPointsDistance,
        _currPanBounds,
        _mainScrollPos = _getEmptyPoint(),
        _currZoomElementStyle,
        _mainScrollAnimating,
        // true, if animation after swipe gesture is running
    _midZoomPoint = _getEmptyPoint(),
        _currCenterPoint = _getEmptyPoint(),
        _direction,
        _isFirstMove,
        _opacityChanged,
        _bgOpacity,
        _wasOverInitialZoom,
        _isEqualPoints = function _isEqualPoints(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    },
        _isNearbyPoints = function _isNearbyPoints(touch0, touch1) {
      return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
    },
        _calculatePointsDistance = function _calculatePointsDistance(p1, p2) {
      _tempPoint.x = Math.abs(p1.x - p2.x);
      _tempPoint.y = Math.abs(p1.y - p2.y);
      return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
    },
        _stopDragUpdateLoop = function _stopDragUpdateLoop() {
      if (_dragAnimFrame) {
        _cancelAF(_dragAnimFrame);

        _dragAnimFrame = null;
      }
    },
        _dragUpdateLoop = function _dragUpdateLoop() {
      if (_isDragging) {
        _dragAnimFrame = _requestAF(_dragUpdateLoop);

        _renderMovement();
      }
    },
        _canPan = function _canPan() {
      return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
    },
        // find the closest parent DOM element
    _closestElement = function _closestElement(el, fn) {
      if (!el || el === document) {
        return false;
      } // don't search elements above pswp__scroll-wrap


      if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
        return false;
      }

      if (fn(el)) {
        return el;
      }

      return _closestElement(el.parentNode, fn);
    },
        _preventObj = {},
        _preventDefaultEventBehaviour = function _preventDefaultEventBehaviour(e, isDown) {
      _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

      _shout('preventDragEvent', e, isDown, _preventObj);

      return _preventObj.prevent;
    },
        _convertTouchToPoint = function _convertTouchToPoint(touch, p) {
      p.x = touch.pageX;
      p.y = touch.pageY;
      p.id = touch.identifier;
      return p;
    },
        _findCenterOfPoints = function _findCenterOfPoints(p1, p2, pCenter) {
      pCenter.x = (p1.x + p2.x) * 0.5;
      pCenter.y = (p1.y + p2.y) * 0.5;
    },
        _pushPosPoint = function _pushPosPoint(time, x, y) {
      if (time - _gestureCheckSpeedTime > 50) {
        var o = _posPoints.length > 2 ? _posPoints.shift() : {};
        o.x = x;
        o.y = y;

        _posPoints.push(o);

        _gestureCheckSpeedTime = time;
      }
    },
        _calculateVerticalDragOpacityRatio = function _calculateVerticalDragOpacityRatio() {
      var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position

      return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
    },
        // points pool, reused during touch events
    _ePoint1 = {},
        _ePoint2 = {},
        _tempPointsArr = [],
        _tempCounter,
        _getTouchPoints = function _getTouchPoints(e) {
      // clean up previous points, without recreating array
      while (_tempPointsArr.length > 0) {
        _tempPointsArr.pop();
      }

      if (!_pointerEventEnabled) {
        if (e.type.indexOf('touch') > -1) {
          if (e.touches && e.touches.length > 0) {
            _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);

            if (e.touches.length > 1) {
              _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
            }
          }
        } else {
          _ePoint1.x = e.pageX;
          _ePoint1.y = e.pageY;
          _ePoint1.id = '';
          _tempPointsArr[0] = _ePoint1; //_ePoint1;
        }
      } else {
        _tempCounter = 0; // we can use forEach, as pointer events are supported only in modern browsers

        _currPointers.forEach(function (p) {
          if (_tempCounter === 0) {
            _tempPointsArr[0] = p;
          } else if (_tempCounter === 1) {
            _tempPointsArr[1] = p;
          }

          _tempCounter++;
        });
      }

      return _tempPointsArr;
    },
        _panOrMoveMainScroll = function _panOrMoveMainScroll(axis, delta) {
      var panFriction,
          overDiff = 0,
          newOffset = _panOffset[axis] + delta[axis],
          startOverDiff,
          dir = delta[axis] > 0,
          newMainScrollPosition = _mainScrollPos.x + delta.x,
          mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
          newPanPos,
          newMainScrollPos; // calculate fdistance over the bounds and friction

      if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
        panFriction = _options.panEndFriction; // Linear increasing of friction, so at 1/4 of viewport it's at max value.
        // Looks not as nice as was expected. Left for history.
        // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
      } else {
        panFriction = 1;
      }

      newOffset = _panOffset[axis] + delta[axis] * panFriction; // move main scroll or start panning

      if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
        if (!_currZoomElementStyle) {
          newMainScrollPos = newMainScrollPosition;
        } else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {
          if (dir) {
            if (newOffset > _currPanBounds.min[axis]) {
              panFriction = _options.panEndFriction;
              overDiff = _currPanBounds.min[axis] - newOffset;
              startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
            } // drag right


            if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
              newMainScrollPos = newMainScrollPosition;

              if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                newMainScrollPos = _startMainScrollPos.x;
              }
            } else {
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                newPanPos = newOffset;
              }
            }
          } else {
            if (newOffset < _currPanBounds.max[axis]) {
              panFriction = _options.panEndFriction;
              overDiff = newOffset - _currPanBounds.max[axis];
              startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
            }

            if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
              newMainScrollPos = newMainScrollPosition;

              if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                newMainScrollPos = _startMainScrollPos.x;
              }
            } else {
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                newPanPos = newOffset;
              }
            }
          } //

        }

        if (axis === 'x') {
          if (newMainScrollPos !== undefined) {
            _moveMainScroll(newMainScrollPos, true);

            if (newMainScrollPos === _startMainScrollPos.x) {
              _mainScrollShifted = false;
            } else {
              _mainScrollShifted = true;
            }
          }

          if (_currPanBounds.min.x !== _currPanBounds.max.x) {
            if (newPanPos !== undefined) {
              _panOffset.x = newPanPos;
            } else if (!_mainScrollShifted) {
              _panOffset.x += delta.x * panFriction;
            }
          }

          return newMainScrollPos !== undefined;
        }
      }

      if (!_mainScrollAnimating) {
        if (!_mainScrollShifted) {
          if (_currZoomLevel > self.currItem.fitRatio) {
            _panOffset[axis] += delta[axis] * panFriction;
          }
        }
      }
    },
        // Pointerdown/touchstart/mousedown handler
    _onDragStart = function _onDragStart(e) {
      // Allow dragging only via left mouse button.
      // As this handler is not added in IE8 - we ignore e.which
      //
      // http://www.quirksmode.org/js/events_properties.html
      // https://developer.mozilla.org/en-US/docs/Web/API/event.button
      if (e.type === 'mousedown' && e.button > 0) {
        return;
      }

      if (_initialZoomRunning) {
        e.preventDefault();
        return;
      }

      if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
        return;
      }

      if (_preventDefaultEventBehaviour(e, true)) {
        e.preventDefault();
      }

      _shout('pointerDown');

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex < 0) {
          pointerIndex = _currPointers.length;
        }

        _currPointers[pointerIndex] = {
          x: e.pageX,
          y: e.pageY,
          id: e.pointerId
        };
      }

      var startPointsList = _getTouchPoints(e),
          numPoints = startPointsList.length;

      _currentPoints = null;

      _stopAllAnimations(); // init drag


      if (!_isDragging || numPoints === 1) {
        _isDragging = _isFirstMove = true;
        framework.bind(window, _upMoveEvents, self);
        _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
        _direction = null;

        _shout('firstTouchStart', startPointsList);

        _equalizePoints(_startPanOffset, _panOffset);

        _currPanDist.x = _currPanDist.y = 0;

        _equalizePoints(_currPoint, startPointsList[0]);

        _equalizePoints(_startPoint, _currPoint); //_equalizePoints(_startMainScrollPos, _mainScrollPos);


        _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
        _posPoints = [{
          x: _currPoint.x,
          y: _currPoint.y
        }];
        _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime(); //_mainScrollAnimationEnd(true);

        _calculatePanBounds(_currZoomLevel, true); // Start rendering


        _stopDragUpdateLoop();

        _dragUpdateLoop();
      } // init zoom


      if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
        _startZoomLevel = _currZoomLevel;
        _zoomStarted = false; // true if zoom changed at least once

        _isZooming = _isMultitouch = true;
        _currPanDist.y = _currPanDist.x = 0;

        _equalizePoints(_startPanOffset, _panOffset);

        _equalizePoints(p, startPointsList[0]);

        _equalizePoints(p2, startPointsList[1]);

        _findCenterOfPoints(p, p2, _currCenterPoint);

        _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
        _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
        _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
      }
    },
        // Pointermove/touchmove/mousemove handler
    _onDragMove = function _onDragMove(e) {
      e.preventDefault();

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex > -1) {
          var p = _currPointers[pointerIndex];
          p.x = e.pageX;
          p.y = e.pageY;
        }
      }

      if (_isDragging) {
        var touchesList = _getTouchPoints(e);

        if (!_direction && !_moved && !_isZooming) {
          if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
            // if main scroll position is shifted – direction is always horizontal
            _direction = 'h';
          } else {
            var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y); // check the direction of movement

            if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
              _direction = diff > 0 ? 'h' : 'v';
              _currentPoints = touchesList;
            }
          }
        } else {
          _currentPoints = touchesList;
        }
      }
    },
        //
    _renderMovement = function _renderMovement() {
      if (!_currentPoints) {
        return;
      }

      var numPoints = _currentPoints.length;

      if (numPoints === 0) {
        return;
      }

      _equalizePoints(p, _currentPoints[0]);

      delta.x = p.x - _currPoint.x;
      delta.y = p.y - _currPoint.y;

      if (_isZooming && numPoints > 1) {
        // Handle behaviour for more than 1 point
        _currPoint.x = p.x;
        _currPoint.y = p.y; // check if one of two points changed

        if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
          return;
        }

        _equalizePoints(p2, _currentPoints[1]);

        if (!_zoomStarted) {
          _zoomStarted = true;

          _shout('zoomGestureStarted');
        } // Distance between two points


        var pointsDistance = _calculatePointsDistance(p, p2);

        var zoomLevel = _calculateZoomLevel(pointsDistance); // slightly over the of initial zoom level


        if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
          _wasOverInitialZoom = true;
        } // Apply the friction if zoom level is out of the bounds


        var zoomFriction = 1,
            minZoomLevel = _getMinZoomLevel(),
            maxZoomLevel = _getMaxZoomLevel();

        if (zoomLevel < minZoomLevel) {
          if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
            // fade out background if zooming out
            var minusDiff = minZoomLevel - zoomLevel;
            var percent = 1 - minusDiff / (minZoomLevel / 1.2);

            _applyBgOpacity(percent);

            _shout('onPinchClose', percent);

            _opacityChanged = true;
          } else {
            zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;

            if (zoomFriction > 1) {
              zoomFriction = 1;
            }

            zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
          }
        } else if (zoomLevel > maxZoomLevel) {
          // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
          zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);

          if (zoomFriction > 1) {
            zoomFriction = 1;
          }

          zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
        }

        if (zoomFriction < 0) {
          zoomFriction = 0;
        } // distance between touch points after friction is applied


        _currPointsDistance = pointsDistance; // _centerPoint - The point in the middle of two pointers

        _findCenterOfPoints(p, p2, _centerPoint); // paning with two pointers pressed


        _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
        _currPanDist.y += _centerPoint.y - _currCenterPoint.y;

        _equalizePoints(_currCenterPoint, _centerPoint);

        _panOffset.x = _calculatePanOffset('x', zoomLevel);
        _panOffset.y = _calculatePanOffset('y', zoomLevel);
        _isZoomingIn = zoomLevel > _currZoomLevel;
        _currZoomLevel = zoomLevel;

        _applyCurrentZoomPan();
      } else {
        // handle behaviour for one point (dragging or panning)
        if (!_direction) {
          return;
        }

        if (_isFirstMove) {
          _isFirstMove = false; // subtract drag distance that was used during the detection direction

          if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
            delta.x -= _currentPoints[0].x - _startPoint.x;
          }

          if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
            delta.y -= _currentPoints[0].y - _startPoint.y;
          }
        }

        _currPoint.x = p.x;
        _currPoint.y = p.y; // do nothing if pointers position hasn't changed

        if (delta.x === 0 && delta.y === 0) {
          return;
        }

        if (_direction === 'v' && _options.closeOnVerticalDrag) {
          if (!_canPan()) {
            _currPanDist.y += delta.y;
            _panOffset.y += delta.y;

            var opacityRatio = _calculateVerticalDragOpacityRatio();

            _verticalDragInitiated = true;

            _shout('onVerticalDrag', opacityRatio);

            _applyBgOpacity(opacityRatio);

            _applyCurrentZoomPan();

            return;
          }
        }

        _pushPosPoint(_getCurrentTime(), p.x, p.y);

        _moved = true;
        _currPanBounds = self.currItem.bounds;

        var mainScrollChanged = _panOrMoveMainScroll('x', delta);

        if (!mainScrollChanged) {
          _panOrMoveMainScroll('y', delta);

          _roundPoint(_panOffset);

          _applyCurrentZoomPan();
        }
      }
    },
        // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
    _onDragRelease = function _onDragRelease(e) {
      if (_features.isOldAndroid) {
        if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
          return;
        } // on Android (v4.1, 4.2, 4.3 & possibly older)
        // ghost mousedown/up event isn't preventable via e.preventDefault,
        // which causes fake mousedown event
        // so we block mousedown/up for 600ms


        if (e.type.indexOf('touch') > -1) {
          clearTimeout(_oldAndroidTouchEndTimeout);
          _oldAndroidTouchEndTimeout = setTimeout(function () {
            _oldAndroidTouchEndTimeout = 0;
          }, 600);
        }
      }

      _shout('pointerUp');

      if (_preventDefaultEventBehaviour(e, false)) {
        e.preventDefault();
      }

      var releasePoint;

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex > -1) {
          releasePoint = _currPointers.splice(pointerIndex, 1)[0];

          if (navigator.pointerEnabled) {
            releasePoint.type = e.pointerType || 'mouse';
          } else {
            var MSPOINTER_TYPES = {
              4: 'mouse',
              // event.MSPOINTER_TYPE_MOUSE
              2: 'touch',
              // event.MSPOINTER_TYPE_TOUCH
              3: 'pen' // event.MSPOINTER_TYPE_PEN

            };
            releasePoint.type = MSPOINTER_TYPES[e.pointerType];

            if (!releasePoint.type) {
              releasePoint.type = e.pointerType || 'mouse';
            }
          }
        }
      }

      var touchList = _getTouchPoints(e),
          gestureType,
          numPoints = touchList.length;

      if (e.type === 'mouseup') {
        numPoints = 0;
      } // Do nothing if there were 3 touch points or more


      if (numPoints === 2) {
        _currentPoints = null;
        return true;
      } // if second pointer released


      if (numPoints === 1) {
        _equalizePoints(_startPoint, touchList[0]);
      } // pointer hasn't moved, send "tap release" point


      if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
        if (!releasePoint) {
          if (e.type === 'mouseup') {
            releasePoint = {
              x: e.pageX,
              y: e.pageY,
              type: 'mouse'
            };
          } else if (e.changedTouches && e.changedTouches[0]) {
            releasePoint = {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY,
              type: 'touch'
            };
          }
        }

        _shout('touchRelease', e, releasePoint);
      } // Difference in time between releasing of two last touch points (zoom gesture)


      var releaseTimeDiff = -1; // Gesture completed, no pointers left

      if (numPoints === 0) {
        _isDragging = false;
        framework.unbind(window, _upMoveEvents, self);

        _stopDragUpdateLoop();

        if (_isZooming) {
          // Two points released at the same time
          releaseTimeDiff = 0;
        } else if (_lastReleaseTime !== -1) {
          releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
        }
      }

      _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

      if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
        gestureType = 'zoom';
      } else {
        gestureType = 'swipe';
      }

      if (_isZooming && numPoints < 2) {
        _isZooming = false; // Only second point released

        if (numPoints === 1) {
          gestureType = 'zoomPointerUp';
        }

        _shout('zoomGestureEnded');
      }

      _currentPoints = null;

      if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
        // nothing to animate
        return;
      }

      _stopAllAnimations();

      if (!_releaseAnimData) {
        _releaseAnimData = _initDragReleaseAnimationData();
      }

      _releaseAnimData.calculateSwipeSpeed('x');

      if (_verticalDragInitiated) {
        var opacityRatio = _calculateVerticalDragOpacityRatio();

        if (opacityRatio < _options.verticalDragRange) {
          self.close();
        } else {
          var initalPanY = _panOffset.y,
              initialBgOpacity = _bgOpacity;

          _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {
            _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

            _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);

            _applyCurrentZoomPan();
          });

          _shout('onVerticalDrag', 1);
        }

        return;
      } // main scroll


      if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
        var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);

        if (itemChanged) {
          return;
        }

        gestureType = 'zoomPointerUp';
      } // prevent zoom/pan animation when main scroll animation runs


      if (_mainScrollAnimating) {
        return;
      } // Complete simple zoom gesture (reset zoom level if it's out of the bounds)


      if (gestureType !== 'swipe') {
        _completeZoomGesture();

        return;
      } // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image


      if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
        _completePanGesture(_releaseAnimData);
      }
    },
        // Returns object with data about gesture
    // It's created only once and then reused
    _initDragReleaseAnimationData = function _initDragReleaseAnimationData() {
      // temp local vars
      var lastFlickDuration, tempReleasePos; // s = this

      var s = {
        lastFlickOffset: {},
        lastFlickDist: {},
        lastFlickSpeed: {},
        slowDownRatio: {},
        slowDownRatioReverse: {},
        speedDecelerationRatio: {},
        speedDecelerationRatioAbs: {},
        distanceOffset: {},
        backAnimDestination: {},
        backAnimStarted: {},
        calculateSwipeSpeed: function calculateSwipeSpeed(axis) {
          if (_posPoints.length > 1) {
            lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
            tempReleasePos = _posPoints[_posPoints.length - 2][axis];
          } else {
            lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration

            tempReleasePos = _startPoint[axis];
          }

          s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
          s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);

          if (s.lastFlickDist[axis] > 20) {
            s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
          } else {
            s.lastFlickSpeed[axis] = 0;
          }

          if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
            s.lastFlickSpeed[axis] = 0;
          }

          s.slowDownRatio[axis] = 0.95;
          s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
          s.speedDecelerationRatio[axis] = 1;
        },
        calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(axis, speed) {
          if (!s.backAnimStarted[axis]) {
            if (_panOffset[axis] > _currPanBounds.min[axis]) {
              s.backAnimDestination[axis] = _currPanBounds.min[axis];
            } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
              s.backAnimDestination[axis] = _currPanBounds.max[axis];
            }

            if (s.backAnimDestination[axis] !== undefined) {
              s.slowDownRatio[axis] = 0.7;
              s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];

              if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                s.lastFlickSpeed[axis] = 0;
                s.backAnimStarted[axis] = true;

                _animateProp('bounceZoomPan' + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function (pos) {
                  _panOffset[axis] = pos;

                  _applyCurrentZoomPan();
                });
              }
            }
          }
        },
        // Reduces the speed by slowDownRatio (per 10ms)
        calculateAnimOffset: function calculateAnimOffset(axis) {
          if (!s.backAnimStarted[axis]) {
            s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
            s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
            s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
            _panOffset[axis] += s.distanceOffset[axis];
          }
        },
        panAnimLoop: function panAnimLoop() {
          if (_animations.zoomPan) {
            _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
            s.now = _getCurrentTime();
            s.timeDiff = s.now - s.lastNow;
            s.lastNow = s.now;
            s.calculateAnimOffset('x');
            s.calculateAnimOffset('y');

            _applyCurrentZoomPan();

            s.calculateOverBoundsAnimOffset('x');
            s.calculateOverBoundsAnimOffset('y');

            if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
              // round pan position
              _panOffset.x = Math.round(_panOffset.x);
              _panOffset.y = Math.round(_panOffset.y);

              _applyCurrentZoomPan();

              _stopAnimation('zoomPan');

              return;
            }
          }
        }
      };
      return s;
    },
        _completePanGesture = function _completePanGesture(animData) {
      // calculate swipe speed for Y axis (paanning)
      animData.calculateSwipeSpeed('y');
      _currPanBounds = self.currItem.bounds;
      animData.backAnimDestination = {};
      animData.backAnimStarted = {}; // Avoid acceleration animation if speed is too low

      if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
        animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0; // Run pan drag release animation. E.g. if you drag image and release finger without momentum.

        animData.calculateOverBoundsAnimOffset('x');
        animData.calculateOverBoundsAnimOffset('y');
        return true;
      } // Animation loop that controls the acceleration after pan gesture ends


      _registerStartAnimation('zoomPan');

      animData.lastNow = _getCurrentTime();
      animData.panAnimLoop();
    },
        _finishSwipeMainScrollGesture = function _finishSwipeMainScrollGesture(gestureType, _releaseAnimData) {
      var itemChanged;

      if (!_mainScrollAnimating) {
        _currZoomedItemIndex = _currentItemIndex;
      }

      var itemsDiff;

      if (gestureType === 'swipe') {
        var totalShiftDist = _currPoint.x - _startPoint.x,
            isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10; // if container is shifted for more than MIN_SWIPE_DISTANCE,
        // and last flick gesture was in right direction

        if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
          // go to prev item
          itemsDiff = -1;
        } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
          // go to next item
          itemsDiff = 1;
        }
      }

      var nextCircle;

      if (itemsDiff) {
        _currentItemIndex += itemsDiff;

        if (_currentItemIndex < 0) {
          _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
          nextCircle = true;
        } else if (_currentItemIndex >= _getNumItems()) {
          _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
          nextCircle = true;
        }

        if (!nextCircle || _options.loop) {
          _indexDiff += itemsDiff;
          _currPositionIndex -= itemsDiff;
          itemChanged = true;
        }
      }

      var animateToX = _slideSize.x * _currPositionIndex;
      var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
      var finishAnimDuration;

      if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
        // "return to current" duration, e.g. when dragging from slide 0 to -1
        finishAnimDuration = 333;
      } else {
        finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 333;
        finishAnimDuration = Math.min(finishAnimDuration, 400);
        finishAnimDuration = Math.max(finishAnimDuration, 250);
      }

      if (_currZoomedItemIndex === _currentItemIndex) {
        itemChanged = false;
      }

      _mainScrollAnimating = true;

      _shout('mainScrollAnimStart');

      _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function () {
        _stopAllAnimations();

        _mainScrollAnimating = false;
        _currZoomedItemIndex = -1;

        if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
          self.updateCurrItem();
        }

        _shout('mainScrollAnimComplete');
      });

      if (itemChanged) {
        self.updateCurrItem(true);
      }

      return itemChanged;
    },
        _calculateZoomLevel = function _calculateZoomLevel(touchesDistance) {
      return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
    },
        // Resets zoom if it's out of bounds
    _completeZoomGesture = function _completeZoomGesture() {
      var destZoomLevel = _currZoomLevel,
          minZoomLevel = _getMinZoomLevel(),
          maxZoomLevel = _getMaxZoomLevel();

      if (_currZoomLevel < minZoomLevel) {
        destZoomLevel = minZoomLevel;
      } else if (_currZoomLevel > maxZoomLevel) {
        destZoomLevel = maxZoomLevel;
      }

      var destOpacity = 1,
          onUpdate,
          initialOpacity = _bgOpacity;

      if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
        //_closedByScroll = true;
        self.close();
        return true;
      }

      if (_opacityChanged) {
        onUpdate = function onUpdate(now) {
          _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
        };
      }

      self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
      return true;
    };

    _registerModule('Gestures', {
      publicMethods: {
        initGestures: function initGestures() {
          // helper function that builds touch/pointer/mouse events
          var addEventNames = function addEventNames(pref, down, move, up, cancel) {
            _dragStartEvent = pref + down;
            _dragMoveEvent = pref + move;
            _dragEndEvent = pref + up;

            if (cancel) {
              _dragCancelEvent = pref + cancel;
            } else {
              _dragCancelEvent = '';
            }
          };

          _pointerEventEnabled = _features.pointerEvent;

          if (_pointerEventEnabled && _features.touch) {
            // we don't need touch events, if browser supports pointer events
            _features.touch = false;
          }

          if (_pointerEventEnabled) {
            if (navigator.pointerEnabled) {
              addEventNames('pointer', 'down', 'move', 'up', 'cancel');
            } else {
              // IE10 pointer events are case-sensitive
              addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
            }
          } else if (_features.touch) {
            addEventNames('touch', 'start', 'move', 'end', 'cancel');
            _likelyTouchDevice = true;
          } else {
            addEventNames('mouse', 'down', 'move', 'up');
          }

          _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
          _downEvents = _dragStartEvent;

          if (_pointerEventEnabled && !_likelyTouchDevice) {
            _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
          } // make variable public


          self.likelyTouchDevice = _likelyTouchDevice;
          _globalEventHandlers[_dragStartEvent] = _onDragStart;
          _globalEventHandlers[_dragMoveEvent] = _onDragMove;
          _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

          if (_dragCancelEvent) {
            _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
          } // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.


          if (_features.touch) {
            _downEvents += ' mousedown';
            _upMoveEvents += ' mousemove mouseup';
            _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
            _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
            _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
          }

          if (!_likelyTouchDevice) {
            // don't allow pan to next slide from zoomed state on Desktop
            _options.allowPanToNext = false;
          }
        }
      }
    });
    /*>>gestures*/

    /*>>show-hide-transition*/

    /**
     * show-hide-transition.js:
     *
     * Manages initial opening or closing transition.
     *
     * If you're not planning to use transition for gallery at all,
     * you may set options hideAnimationDuration and showAnimationDuration to 0,
     * and just delete startAnimation function.
     *
     */


    var _showOrHideTimeout,
        _showOrHide = function _showOrHide(item, img, out, completeFn) {
      if (_showOrHideTimeout) {
        clearTimeout(_showOrHideTimeout);
      }

      _initialZoomRunning = true;
      _initialContentSet = true; // dimensions of small thumbnail {x:,y:,w:}.
      // Height is optional, as calculated based on large image.

      var thumbBounds;

      if (item.initialLayout) {
        thumbBounds = item.initialLayout;
        item.initialLayout = null;
      } else {
        thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
      }

      var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

      var onComplete = function onComplete() {
        _stopAnimation('initialZoom');

        if (!out) {
          _applyBgOpacity(1);

          if (img) {
            img.style.display = 'block';
          }

          framework.addClass(template, 'pswp--animated-in');

          _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
        } else {
          self.template.removeAttribute('style');
          self.bg.removeAttribute('style');
        }

        if (completeFn) {
          completeFn();
        }

        _initialZoomRunning = false;
      }; // if bounds aren't provided, just open gallery without animation


      if (!duration || !thumbBounds || thumbBounds.x === undefined) {
        _shout('initialZoom' + (out ? 'Out' : 'In'));

        _currZoomLevel = item.initialZoomLevel;

        _equalizePoints(_panOffset, item.initialPosition);

        _applyCurrentZoomPan();

        template.style.opacity = out ? 0 : 1;

        _applyBgOpacity(1);

        if (duration) {
          setTimeout(function () {
            onComplete();
          }, duration);
        } else {
          onComplete();
        }

        return;
      }

      var startAnimation = function startAnimation() {
        var closeWithRaf = _closedByScroll,
            fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity; // apply hw-acceleration to image

        if (item.miniImg) {
          item.miniImg.style.webkitBackfaceVisibility = 'hidden';
        }

        if (!out) {
          _currZoomLevel = thumbBounds.w / item.w;
          _panOffset.x = thumbBounds.x;
          _panOffset.y = thumbBounds.y - _initalWindowScrollY;
          self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;

          _applyCurrentZoomPan();
        }

        _registerStartAnimation('initialZoom');

        if (out && !closeWithRaf) {
          framework.removeClass(template, 'pswp--animated-in');
        }

        if (fadeEverything) {
          if (out) {
            framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
          } else {
            setTimeout(function () {
              framework.addClass(template, 'pswp--animate_opacity');
            }, 30);
          }
        }

        _showOrHideTimeout = setTimeout(function () {
          _shout('initialZoom' + (out ? 'Out' : 'In'));

          if (!out) {
            // "in" animation always uses CSS transitions (instead of rAF).
            // CSS transition work faster here,
            // as developer may also want to animate other things,
            // like ui on top of sliding area, which can be animated just via CSS
            _currZoomLevel = item.initialZoomLevel;

            _equalizePoints(_panOffset, item.initialPosition);

            _applyCurrentZoomPan();

            _applyBgOpacity(1);

            if (fadeEverything) {
              template.style.opacity = 1;
            } else {
              _applyBgOpacity(1);
            }

            _showOrHideTimeout = setTimeout(onComplete, duration + 20);
          } else {
            // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
            var destZoomLevel = thumbBounds.w / item.w,
                initialPanOffset = {
              x: _panOffset.x,
              y: _panOffset.y
            },
                initialZoomLevel = _currZoomLevel,
                initalBgOpacity = _bgOpacity,
                onUpdate = function onUpdate(now) {
              if (now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = thumbBounds.x;
                _panOffset.y = thumbBounds.y - _currentWindowScrollY;
              } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
              }

              _applyCurrentZoomPan();

              if (fadeEverything) {
                template.style.opacity = 1 - now;
              } else {
                _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
              }
            };

            if (closeWithRaf) {
              _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
            } else {
              onUpdate(1);
              _showOrHideTimeout = setTimeout(onComplete, duration + 20);
            }
          }
        }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
        // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
        // Which avoids lag at the beginning of scale transition.
      };

      startAnimation();
    };
    /*>>show-hide-transition*/

    /*>>items-controller*/

    /**
     *
     * Controller manages gallery items, their dimensions, and their content.
     *
     */


    var _items,
        _tempPanAreaSize = {},
        _imagesToAppendPool = [],
        _initialContentSet,
        _initialZoomRunning,
        _controllerDefaultOptions = {
      index: 0,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
      forceProgressiveLoading: false,
      // TODO
      preload: [1, 1],
      getNumItemsFn: function getNumItemsFn() {
        return _items.length;
      }
    };

    var _getItemAt,
        _getNumItems,
        _initialIsLoop,
        _getZeroBounds = function _getZeroBounds() {
      return {
        center: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        },
        min: {
          x: 0,
          y: 0
        }
      };
    },
        _calculateSingleItemPanBounds = function _calculateSingleItemPanBounds(item, realPanElementW, realPanElementH) {
      var bounds = item.bounds; // position of element when it's centered

      bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
      bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top; // maximum pan position

      bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
      bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y; // minimum pan position

      bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
      bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
    },
        _calculateItemSize = function _calculateItemSize(item, viewportSize, zoomLevel) {
      if (item.src && !item.loadError) {
        var isInitial = !zoomLevel;

        if (isInitial) {
          if (!item.vGap) {
            item.vGap = {
              top: 0,
              bottom: 0
            };
          } // allows overriding vertical margin for individual items


          _shout('parseVerticalMargin', item);
        }

        _tempPanAreaSize.x = viewportSize.x;
        _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

        if (isInitial) {
          var hRatio = _tempPanAreaSize.x / item.w;
          var vRatio = _tempPanAreaSize.y / item.h;
          item.fitRatio = hRatio < vRatio ? hRatio : vRatio; //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

          var scaleMode = _options.scaleMode;

          if (scaleMode === 'orig') {
            zoomLevel = 1;
          } else if (scaleMode === 'fit') {
            zoomLevel = item.fitRatio;
          }

          if (zoomLevel > 1) {
            zoomLevel = 1;
          }

          item.initialZoomLevel = zoomLevel;

          if (!item.bounds) {
            // reuse bounds object
            item.bounds = _getZeroBounds();
          }
        }

        if (!zoomLevel) {
          return;
        }

        _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

        if (isInitial && zoomLevel === item.initialZoomLevel) {
          item.initialPosition = item.bounds.center;
        }

        return item.bounds;
      } else {
        item.w = item.h = 0;
        item.initialZoomLevel = item.fitRatio = 1;
        item.bounds = _getZeroBounds();
        item.initialPosition = item.bounds.center; // if it's not image, we return zero bounds (content is not zoomable)

        return item.bounds;
      }
    },
        _appendImage = function _appendImage(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
      if (item.loadError) {
        return;
      }

      if (img) {
        item.imageAppended = true;

        _setImageSize(item, img, item === self.currItem && _renderMaxResolution);

        baseDiv.appendChild(img);

        if (keepPlaceholder) {
          setTimeout(function () {
            if (item && item.loaded && item.placeholder) {
              item.placeholder.style.display = 'none';
              item.placeholder = null;
            }
          }, 500);
        }
      }
    },
        _preloadImage = function _preloadImage(item) {
      item.loading = true;
      item.loaded = false;
      var img = item.img = framework.createEl('pswp__img', 'img');

      var onComplete = function onComplete() {
        item.loading = false;
        item.loaded = true;

        if (item.loadComplete) {
          item.loadComplete(item);
        } else {
          item.img = null; // no need to store image object
        }

        img.onload = img.onerror = null;
        img = null;
      };

      img.onload = onComplete;

      img.onerror = function () {
        item.loadError = true;
        onComplete();
      };

      img.src = item.src; // + '?a=' + Math.random();

      return img;
    },
        _checkForError = function _checkForError(item, cleanUp) {
      if (item.src && item.loadError && item.container) {
        if (cleanUp) {
          item.container.innerHTML = '';
        }

        item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
        return true;
      }
    },
        _setImageSize = function _setImageSize(item, img, maxRes) {
      if (!item.src) {
        return;
      }

      if (!img) {
        img = item.container.lastChild;
      }

      var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
          h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

      if (item.placeholder && !item.loaded) {
        item.placeholder.style.width = w + 'px';
        item.placeholder.style.height = h + 'px';
      }

      img.style.width = w + 'px';
      img.style.height = h + 'px';
    },
        _appendImagesPool = function _appendImagesPool() {
      if (_imagesToAppendPool.length) {
        var poolItem;

        for (var i = 0; i < _imagesToAppendPool.length; i++) {
          poolItem = _imagesToAppendPool[i];

          if (poolItem.holder.index === poolItem.index) {
            _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
          }
        }

        _imagesToAppendPool = [];
      }
    };

    _registerModule('Controller', {
      publicMethods: {
        lazyLoadItem: function lazyLoadItem(index) {
          index = _getLoopedId(index);

          var item = _getItemAt(index);

          if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
            return;
          }

          _shout('gettingData', index, item);

          if (!item.src) {
            return;
          }

          _preloadImage(item);
        },
        initController: function initController() {
          framework.extend(_options, _controllerDefaultOptions, true);
          self.items = _items = items;
          _getItemAt = self.getItemAt;
          _getNumItems = _options.getNumItemsFn; //self.getNumItems;

          _initialIsLoop = _options.loop;

          if (_getNumItems() < 3) {
            _options.loop = false; // disable loop if less then 3 items
          }

          _listen('beforeChange', function (diff) {
            var p = _options.preload,
                isNext = diff === null ? true : diff >= 0,
                preloadBefore = Math.min(p[0], _getNumItems()),
                preloadAfter = Math.min(p[1], _getNumItems()),
                i;

            for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
              self.lazyLoadItem(_currentItemIndex + i);
            }

            for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
              self.lazyLoadItem(_currentItemIndex - i);
            }
          });

          _listen('initialLayout', function () {
            self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
          });

          _listen('mainScrollAnimComplete', _appendImagesPool);

          _listen('initialZoomInEnd', _appendImagesPool);

          _listen('destroy', function () {
            var item;

            for (var i = 0; i < _items.length; i++) {
              item = _items[i]; // remove reference to DOM elements, for GC

              if (item.container) {
                item.container = null;
              }

              if (item.placeholder) {
                item.placeholder = null;
              }

              if (item.img) {
                item.img = null;
              }

              if (item.preloader) {
                item.preloader = null;
              }

              if (item.loadError) {
                item.loaded = item.loadError = false;
              }
            }

            _imagesToAppendPool = null;
          });
        },
        getItemAt: function getItemAt(index) {
          if (index >= 0) {
            return _items[index] !== undefined ? _items[index] : false;
          }

          return false;
        },
        allowProgressiveImg: function allowProgressiveImg() {
          // 1. Progressive image loading isn't working on webkit/blink
          //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
          //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
          //
          // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
          //    That's why it's disabled on touch devices (mainly because of swipe transition)
          //
          // 3. Progressive image loading sometimes doesn't work in IE (up to 11).
          // Don't allow progressive loading on non-large touch devices
          return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
        },
        setContent: function setContent(holder, index) {
          if (_options.loop) {
            index = _getLoopedId(index);
          }

          var prevItem = self.getItemAt(holder.index);

          if (prevItem) {
            prevItem.container = null;
          }

          var item = self.getItemAt(index),
              img;

          if (!item) {
            holder.el.innerHTML = '';
            return;
          } // allow to override data


          _shout('gettingData', index, item);

          holder.index = index;
          holder.item = item; // base container DIV is created only once for each of 3 holders

          var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');

          if (!item.src && item.html) {
            if (item.html.tagName) {
              baseDiv.appendChild(item.html);
            } else {
              baseDiv.innerHTML = item.html;
            }
          }

          _checkForError(item);

          _calculateItemSize(item, _viewportSize);

          if (item.src && !item.loadError && !item.loaded) {
            item.loadComplete = function (item) {
              // gallery closed before image finished loading
              if (!_isOpen) {
                return;
              } // check if holder hasn't changed while image was loading


              if (holder && holder.index === index) {
                if (_checkForError(item, true)) {
                  item.loadComplete = item.img = null;

                  _calculateItemSize(item, _viewportSize);

                  _applyZoomPanToItem(item);

                  if (holder.index === _currentItemIndex) {
                    // recalculate dimensions
                    self.updateCurrZoomItem();
                  }

                  return;
                }

                if (!item.imageAppended) {
                  if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                    _imagesToAppendPool.push({
                      item: item,
                      baseDiv: baseDiv,
                      img: item.img,
                      index: index,
                      holder: holder,
                      clearPlaceholder: true
                    });
                  } else {
                    _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                  }
                } else {
                  // remove preloader & mini-img
                  if (!_initialZoomRunning && item.placeholder) {
                    item.placeholder.style.display = 'none';
                    item.placeholder = null;
                  }
                }
              }

              item.loadComplete = null;
              item.img = null; // no need to store image element after it's added

              _shout('imageLoadComplete', index, item);
            };

            if (framework.features.transform) {
              var placeholderClassName = 'pswp__img pswp__img--placeholder';
              placeholderClassName += item.msrc ? '' : ' pswp__img--placeholder--blank';
              var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');

              if (item.msrc) {
                placeholder.src = item.msrc;
              }

              _setImageSize(item, placeholder);

              baseDiv.appendChild(placeholder);
              item.placeholder = placeholder;
            }

            if (!item.loading) {
              _preloadImage(item);
            }

            if (self.allowProgressiveImg()) {
              // just append image
              if (!_initialContentSet && _features.transform) {
                _imagesToAppendPool.push({
                  item: item,
                  baseDiv: baseDiv,
                  img: item.img,
                  index: index,
                  holder: holder
                });
              } else {
                _appendImage(index, item, baseDiv, item.img, true, true);
              }
            }
          } else if (item.src && !item.loadError) {
            // image object is created every time, due to bugs of image loading & delay when switching images
            img = framework.createEl('pswp__img', 'img');
            img.style.opacity = 1;
            img.src = item.src;

            _setImageSize(item, img);

            _appendImage(index, item, baseDiv, img, true);
          }

          if (!_initialContentSet && index === _currentItemIndex) {
            _currZoomElementStyle = baseDiv.style;

            _showOrHide(item, img || item.img);
          } else {
            _applyZoomPanToItem(item);
          }

          holder.el.innerHTML = '';
          holder.el.appendChild(baseDiv);
        },
        cleanSlide: function cleanSlide(item) {
          if (item.img) {
            item.img.onload = item.img.onerror = null;
          }

          item.loaded = item.loading = item.img = item.imageAppended = false;
        }
      }
    });
    /*>>items-controller*/

    /*>>tap*/

    /**
     * tap.js:
     *
     * Displatches tap and double-tap events.
     *
     */


    var tapTimer,
        tapReleasePoint = {},
        _dispatchTapEvent = function _dispatchTapEvent(origEvent, releasePoint, pointerType) {
      var e = document.createEvent('CustomEvent'),
          eDetail = {
        origEvent: origEvent,
        target: origEvent.target,
        releasePoint: releasePoint,
        pointerType: pointerType || 'touch'
      };
      e.initCustomEvent('pswpTap', true, true, eDetail);
      origEvent.target.dispatchEvent(e);
    };

    _registerModule('Tap', {
      publicMethods: {
        initTap: function initTap() {
          _listen('firstTouchStart', self.onTapStart);

          _listen('touchRelease', self.onTapRelease);

          _listen('destroy', function () {
            tapReleasePoint = {};
            tapTimer = null;
          });
        },
        onTapStart: function onTapStart(touchList) {
          if (touchList.length > 1) {
            clearTimeout(tapTimer);
            tapTimer = null;
          }
        },
        onTapRelease: function onTapRelease(e, releasePoint) {
          if (!releasePoint) {
            return;
          }

          if (!_moved && !_isMultitouch && !_numAnimations) {
            var p0 = releasePoint;

            if (tapTimer) {
              clearTimeout(tapTimer);
              tapTimer = null; // Check if taped on the same place

              if (_isNearbyPoints(p0, tapReleasePoint)) {
                _shout('doubleTap', p0);

                return;
              }
            }

            if (releasePoint.type === 'mouse') {
              _dispatchTapEvent(e, releasePoint, 'mouse');

              return;
            }

            var clickedTagName = e.target.tagName.toUpperCase(); // avoid double tap delay on buttons and elements that have class pswp__single-tap

            if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
              _dispatchTapEvent(e, releasePoint);

              return;
            }

            _equalizePoints(tapReleasePoint, p0);

            tapTimer = setTimeout(function () {
              _dispatchTapEvent(e, releasePoint);

              tapTimer = null;
            }, 300);
          }
        }
      }
    });
    /*>>tap*/

    /*>>desktop-zoom*/

    /**
     *
     * desktop-zoom.js:
     *
     * - Binds mousewheel event for paning zoomed image.
     * - Manages "dragging", "zoomed-in", "zoom-out" classes.
     *   (which are used for cursors and zoom icon)
     * - Adds toggleDesktopZoom function.
     *
     */


    var _wheelDelta;

    _registerModule('DesktopZoom', {
      publicMethods: {
        initDesktopZoom: function initDesktopZoom() {
          if (_oldIE) {
            // no zoom for old IE (<=8)
            return;
          }

          if (_likelyTouchDevice) {
            // if detected hardware touch support, we wait until mouse is used,
            // and only then apply desktop-zoom features
            _listen('mouseUsed', function () {
              self.setupDesktopZoom();
            });
          } else {
            self.setupDesktopZoom(true);
          }
        },
        setupDesktopZoom: function setupDesktopZoom(onInit) {
          _wheelDelta = {};
          var events = 'wheel mousewheel DOMMouseScroll';

          _listen('bindEvents', function () {
            framework.bind(template, events, self.handleMouseWheel);
          });

          _listen('unbindEvents', function () {
            if (_wheelDelta) {
              framework.unbind(template, events, self.handleMouseWheel);
            }
          });

          self.mouseZoomedIn = false;

          var hasDraggingClass,
              updateZoomable = function updateZoomable() {
            if (self.mouseZoomedIn) {
              framework.removeClass(template, 'pswp--zoomed-in');
              self.mouseZoomedIn = false;
            }

            if (_currZoomLevel < 1) {
              framework.addClass(template, 'pswp--zoom-allowed');
            } else {
              framework.removeClass(template, 'pswp--zoom-allowed');
            }

            removeDraggingClass();
          },
              removeDraggingClass = function removeDraggingClass() {
            if (hasDraggingClass) {
              framework.removeClass(template, 'pswp--dragging');
              hasDraggingClass = false;
            }
          };

          _listen('resize', updateZoomable);

          _listen('afterChange', updateZoomable);

          _listen('pointerDown', function () {
            if (self.mouseZoomedIn) {
              hasDraggingClass = true;
              framework.addClass(template, 'pswp--dragging');
            }
          });

          _listen('pointerUp', removeDraggingClass);

          if (!onInit) {
            updateZoomable();
          }
        },
        handleMouseWheel: function handleMouseWheel(e) {
          if (_currZoomLevel <= self.currItem.fitRatio) {
            if (_options.modal) {
              if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                e.preventDefault();
              } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                // close PhotoSwipe
                // if browser supports transforms & scroll changed enough
                _closedByScroll = true;
                self.close();
              }
            }

            return true;
          } // allow just one event to fire


          e.stopPropagation(); // https://developer.mozilla.org/en-US/docs/Web/Events/wheel

          _wheelDelta.x = 0;

          if ('deltaX' in e) {
            if (e.deltaMode === 1
            /* DOM_DELTA_LINE */
            ) {
                // 18 - average line height
                _wheelDelta.x = e.deltaX * 18;
                _wheelDelta.y = e.deltaY * 18;
              } else {
              _wheelDelta.x = e.deltaX;
              _wheelDelta.y = e.deltaY;
            }
          } else if ('wheelDelta' in e) {
            if (e.wheelDeltaX) {
              _wheelDelta.x = -0.16 * e.wheelDeltaX;
            }

            if (e.wheelDeltaY) {
              _wheelDelta.y = -0.16 * e.wheelDeltaY;
            } else {
              _wheelDelta.y = -0.16 * e.wheelDelta;
            }
          } else if ('detail' in e) {
            _wheelDelta.y = e.detail;
          } else {
            return;
          }

          _calculatePanBounds(_currZoomLevel, true);

          var newPanX = _panOffset.x - _wheelDelta.x,
              newPanY = _panOffset.y - _wheelDelta.y; // only prevent scrolling in nonmodal mode when not at edges

          if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
            e.preventDefault();
          } // TODO: use rAF instead of mousewheel?


          self.panTo(newPanX, newPanY);
        },
        toggleDesktopZoom: function toggleDesktopZoom(centerPoint) {
          centerPoint = centerPoint || {
            x: _viewportSize.x / 2 + _offset.x,
            y: _viewportSize.y / 2 + _offset.y
          };

          var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);

          var zoomOut = _currZoomLevel === doubleTapZoomLevel;
          self.mouseZoomedIn = !zoomOut;
          self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
          framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
        }
      }
    });
    /*>>desktop-zoom*/

    /*>>history*/

    /**
     *
     * history.js:
     *
     * - Back button to close gallery.
     *
     * - Unique URL for each slide: example.com/&pid=1&gid=3
     *   (where PID is picture index, and GID and gallery index)
     *
     * - Switch URL when slides change.
     *
     */


    var _historyDefaultOptions = {
      history: true,
      galleryUID: 1
    };

    var _historyUpdateTimeout,
        _hashChangeTimeout,
        _hashAnimCheckTimeout,
        _hashChangedByScript,
        _hashChangedByHistory,
        _hashReseted,
        _initialHash,
        _historyChanged,
        _closedFromURL,
        _urlChangedOnce,
        _windowLoc,
        _supportsPushState,
        _getHash = function _getHash() {
      return _windowLoc.hash.substring(1);
    },
        _cleanHistoryTimeouts = function _cleanHistoryTimeouts() {
      if (_historyUpdateTimeout) {
        clearTimeout(_historyUpdateTimeout);
      }

      if (_hashAnimCheckTimeout) {
        clearTimeout(_hashAnimCheckTimeout);
      }
    },
        // pid - Picture index
    // gid - Gallery index
    _parseItemIndexFromURL = function _parseItemIndexFromURL() {
      var hash = _getHash(),
          params = {};

      if (hash.length < 5) {
        // pid=1
        return params;
      }

      var i,
          vars = hash.split('&');

      for (i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split('=');

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (_options.galleryPIDs) {
        // detect custom pid in hash and search for it among the items collection
        var searchfor = params.pid;
        params.pid = 0; // if custom pid cannot be found, fallback to the first item

        for (i = 0; i < _items.length; i++) {
          if (_items[i].pid === searchfor) {
            params.pid = i;
            break;
          }
        }
      } else {
        params.pid = parseInt(params.pid, 10) - 1;
      }

      if (params.pid < 0) {
        params.pid = 0;
      }

      return params;
    },
        _updateHash = function _updateHash() {
      if (_hashAnimCheckTimeout) {
        clearTimeout(_hashAnimCheckTimeout);
      }

      if (_numAnimations || _isDragging) {
        // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
        // that's why we update hash only when no animations running
        _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
        return;
      }

      if (_hashChangedByScript) {
        clearTimeout(_hashChangeTimeout);
      } else {
        _hashChangedByScript = true;
      }

      var pid = _currentItemIndex + 1;

      var item = _getItemAt(_currentItemIndex);

      if (item.hasOwnProperty('pid')) {
        // carry forward any custom pid assigned to the item
        pid = item.pid;
      }

      var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

      if (!_historyChanged) {
        if (_windowLoc.hash.indexOf(newHash) === -1) {
          _urlChangedOnce = true;
        } // first time - add new hisory record, then just replace

      }

      var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

      if (_supportsPushState) {
        if ('#' + newHash !== window.location.hash) {
          history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
        }
      } else {
        if (_historyChanged) {
          _windowLoc.replace(newURL);
        } else {
          _windowLoc.hash = newHash;
        }
      }

      _historyChanged = true;
      _hashChangeTimeout = setTimeout(function () {
        _hashChangedByScript = false;
      }, 60);
    };

    _registerModule('History', {
      publicMethods: {
        initHistory: function initHistory() {
          framework.extend(_options, _historyDefaultOptions, true);

          if (!_options.history) {
            return;
          }

          _windowLoc = window.location;
          _urlChangedOnce = false;
          _closedFromURL = false;
          _historyChanged = false;
          _initialHash = _getHash();
          _supportsPushState = 'pushState' in history;

          if (_initialHash.indexOf('gid=') > -1) {
            _initialHash = _initialHash.split('&gid=')[0];
            _initialHash = _initialHash.split('?gid=')[0];
          }

          _listen('afterChange', self.updateURL);

          _listen('unbindEvents', function () {
            framework.unbind(window, 'hashchange', self.onHashChange);
          });

          var returnToOriginal = function returnToOriginal() {
            _hashReseted = true;

            if (!_closedFromURL) {
              if (_urlChangedOnce) {
                history.back();
              } else {
                if (_initialHash) {
                  _windowLoc.hash = _initialHash;
                } else {
                  if (_supportsPushState) {
                    // remove hash from url without refreshing it or scrolling to top
                    history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
                  } else {
                    _windowLoc.hash = '';
                  }
                }
              }
            }

            _cleanHistoryTimeouts();
          };

          _listen('unbindEvents', function () {
            if (_closedByScroll) {
              // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
              // this is done to keep the scroll position
              returnToOriginal();
            }
          });

          _listen('destroy', function () {
            if (!_hashReseted) {
              returnToOriginal();
            }
          });

          _listen('firstUpdate', function () {
            _currentItemIndex = _parseItemIndexFromURL().pid;
          });

          var index = _initialHash.indexOf('pid=');

          if (index > -1) {
            _initialHash = _initialHash.substring(0, index);

            if (_initialHash.slice(-1) === '&') {
              _initialHash = _initialHash.slice(0, -1);
            }
          }

          setTimeout(function () {
            if (_isOpen) {
              // hasn't destroyed yet
              framework.bind(window, 'hashchange', self.onHashChange);
            }
          }, 40);
        },
        onHashChange: function onHashChange() {
          if (_getHash() === _initialHash) {
            _closedFromURL = true;
            self.close();
            return;
          }

          if (!_hashChangedByScript) {
            _hashChangedByHistory = true;
            self.goTo(_parseItemIndexFromURL().pid);
            _hashChangedByHistory = false;
          }
        },
        updateURL: function updateURL() {
          // Delay the update of URL, to avoid lag during transition,
          // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
          _cleanHistoryTimeouts();

          if (_hashChangedByHistory) {
            return;
          }

          if (!_historyChanged) {
            _updateHash(); // first time

          } else {
            _historyUpdateTimeout = setTimeout(_updateHash, 800);
          }
        }
      }
    });
    /*>>history*/


    framework.extend(self, publicMethods);
  };

  return PhotoSwipe;
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

/***/ "../include/js/front-end/src/Lightboxes/PhotoSwipe.js":
/*!************************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/PhotoSwipe.js ***!
  \************************************************************/
/*! flagged exports */
/*! export PhotonicPhotoSwipe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var PhotoSwipe = __webpack_require__(/*! ../../../../ext/photoswipe/photoswipe.js */ "../include/ext/photoswipe/photoswipe.js");
/* provided dependency */ var PhotoSwipeUI_Default = __webpack_require__(/*! ../../../../ext/photoswipe/photoswipe-ui-default.js */ "../include/ext/photoswipe/photoswipe-ui-default.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotonicPhotoSwipe = void 0;

var _Lightbox = __webpack_require__(/*! ./Lightbox */ "../include/js/front-end/src/Lightboxes/Lightbox.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

class PhotonicPhotoSwipe extends _Lightbox.Lightbox {
  constructor() {
    super();
    this.pswpSelector = '.pswp';
    this.videoSelector = 'a.photoswipe-video, a.photoswipe-html5-video';
    this.pswp = document.querySelector(this.pswpSelector);

    if (this.pswp === null) {
      this.pswp = '<!-- Root element of PhotoSwipe. Must have class pswp. -->\n' + '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n' + '\n' + '    <!-- Background of PhotoSwipe. \n' + '         It\'s a separate element as animating opacity is faster than rgba(). -->\n' + '    <div class="pswp__bg"></div>\n' + '\n' + '    <!-- Slides wrapper with overflow:hidden. -->\n' + '    <div class="pswp__scroll-wrap">\n' + '\n' + '        <!-- Container that holds slides. \n' + '            PhotoSwipe keeps only 3 of them in the DOM to save memory.\n' + '            Don\'t modify these 3 pswp__item elements, data is added later on. -->\n' + '        <div class="pswp__container">\n' + '            <div class="pswp__item"></div>\n' + '            <div class="pswp__item"></div>\n' + '            <div class="pswp__item"></div>\n' + '        </div>\n' + '\n' + '        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n' + '        <div class="pswp__ui pswp__ui--hidden">\n' + '\n' + '            <div class="pswp__top-bar">\n' + '                <!--  Controls are self-explanatory. Order can be changed. -->\n' + '                <div class="pswp__counter"></div>\n' + '                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n' + '                <button class="pswp__button pswp__button--share" title="Share"></button>\n' + '                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>\n' + '                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n' + '\n' + '                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n' + '                <!-- element will get class pswp__preloader--active when preloader is running -->\n' + '                <div class="pswp__preloader">\n' + '                    <div class="pswp__preloader__icn">\n' + '                      <div class="pswp__preloader__cut">\n' + '                        <div class="pswp__preloader__donut"></div>\n' + '                      </div>\n' + '                    </div>\n' + '                </div>\n' + '            </div>\n' + '\n' + '            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n' + '                <div class="pswp__share-tooltip"></div> \n' + '            </div>\n' + '\n' + '            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">\n' + '            </button>\n' + '\n' + '            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">\n' + '            </button>\n' + '\n' + '            <div class="pswp__caption">\n' + '                <div class="pswp__caption__center"></div>\n' + '            </div>\n' + '\n' + '        </div>\n' + '\n' + '    </div>\n' + '\n' + '</div>';
      document.body.insertAdjacentHTML('beforeend', this.pswp);
      this.pswp = document.querySelector(this.pswpSelector);
    }
  }

  hostedVideo(a) {
    var html5 = a.getAttribute('href').match(new RegExp(/(\.mp4|\.webm|\.ogg)/i));
    var css = a.classList.contains('photonic-launch-gallery');

    if (html5 !== null && !css) {
      a.classList.add(Photonic_JS.slideshow_library + "-html5-video");
      var videos = document.querySelector('#photonic-html5-videos');

      if (videos === null) {
        videos = document.createElement('div');
        videos.style.display = 'none';
        videos.setAttribute('id', 'photonic-html5-videos');
        document.body.appendChild(videos);
      }

      videos.insertAdjacentHTML('beforeend', '<div id="photonic-html5-video-' + this.videoIndex + '"><video controls preload="none"><source src="' + a.getAttribute('href') + '" type="video/mp4">Your browser does not support HTML5 video.</video></div>');
      a.setAttribute('data-html5-href', a.getAttribute('href'));
      a.setAttribute('href', '#photonic-html5-video-' + this.videoIndex);
      this.videoIndex++;
    }
  }

  initialize(selector, selfSelect) {
    this.handleSolos();
    var self = this;
    self.items = {};
    self.solos = [];
    self.videos = [];
    var containers = document.querySelectorAll('.photonic-level-1-container');
    containers.forEach(function (container) {
      var parent = container.closest('.photonic-stream') || container.closest('.photonic-panel'); //			if (parent != null) {

      var galleryId = parent.getAttribute('id');
      var links = container.querySelectorAll('.photonic-launch-gallery');
      var gallery = [];
      links.forEach(function (link) {
        var deep = link.getAttribute('data-photonic-deep');
        var pid = deep.split('/');
        var item;

        if (link.getAttribute('data-html5-href') !== null) {
          item = {
            html: '<div class="photonic-video" id="ps-' + link.getAttribute('href').substring(1) + '">\n<video class="photonic" controls preload="none"><source src="' + link.getAttribute('data-html5-href') + '" type="video/mp4">Your browser does not support HTML5 videos</video>',
            title: link.getAttribute('data-title')
          };
        } else {
          item = {
            src: link.getAttribute('href'),
            w: 0,
            h: 0,
            title: link.getAttribute('data-title'),
            pid: pid[1]
          };
        }

        gallery.push(item);
      });
      self.items[galleryId] = gallery; //			}
    });
    var a = document.querySelectorAll('a.launch-gallery-photoswipe');
    var solos = Array.from(a).filter(function (elem) {
      return elem.closest('.photonic-level-1') === null;
    });
    solos.forEach(function (link) {
      var item = {
        src: link.getAttribute('href'),
        w: 0,
        h: 0,
        title: Util.getText(link.getAttribute('data-title'))
      };
      self.solos.push([item]);
    });
    var videos = document.querySelectorAll(this.videoSelector);
    videos.forEach(function (link) {
      var item;

      if (link.classList.contains('photoswipe-video')) {
        // YouTube / Vimeo
        item = {
          html: '<div class="photonic-video"><iframe class="pswp__video" width="640" height="480" src="' + link.getAttribute('href') + '" frameborder="0" allowfullscreen></iframe></div>'
        };
      } else {
        var href = link.getAttribute('href');
        href = document.querySelector(href);
        item = {
          html: '<div class="photonic-video" id="ps-' + href.getAttribute('id') + '">\n<video class="photonic" controls preload="none"><source src="' + link.getAttribute('data-html5-href') + '" type="video/mp4">Your browser does not support HTML5 videos</video>',
          title: link.getAttribute('data-title') || link.getAttribute('title') || ''
        };
      }

      self.videos.push([item]);
    });
  }

  initializeForNewContainer(containerId) {
    this.initialize(containerId);
  }

  parsePhotoSwipeHash() {
    var hash = window.location.hash.substring(1);
    var params = {};
    var vars = hash.split('&');

    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }

      var pair = vars[i].split('=');

      if (pair.length < 2) {
        continue;
      }

      params[pair[0]] = pair[1];
    }

    if (params.gid && params.gid.indexOf('photonic') !== 0) {
      // Not a Photonic hash
      return {};
    }

    return params;
  }

  openPhotoSwipe(index, galleryId, fromURL, isVideo) {
    var idx;
    var self = this;

    if (fromURL) {
      var _gallery = document.querySelector('#' + galleryId);

      var a = _gallery.querySelector('a[data-photonic-deep="gallery[' + galleryId + ']/' + index + '/"]');

      idx = [...a.parentNode.children].indexOf(a);
    }

    var deepLinking = !(Photonic_JS.deep_linking === undefined || Photonic_JS.deep_linking === 'none' || galleryId === undefined || galleryId.indexOf('-stream') < 0);
    var shareButtons = [];

    if (!(Photonic_JS.social_media === undefined || Photonic_JS.social_media === '')) {
      shareButtons = [{
        id: 'facebook',
        label: 'Share on Facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}&title={{text}}'
      }, {
        id: 'twitter',
        label: 'Share on Twitter',
        url: 'https://twitter.com/share?url={{url}}&text={{text}}'
      }, {
        id: 'pinterest',
        label: 'Pin it',
        url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
      }];
    }

    shareButtons.push({
      id: 'download',
      label: 'Download image',
      url: '{{raw_image_url}}',
      download: true
    });
    var options = {
      index: fromURL && deepLinking ? idx : index,
      history: deepLinking,
      shareButtons: shareButtons,
      loop: Photonic_JS.lightbox_loop,
      galleryUID: galleryId,
      galleryPIDs: deepLinking
    };
    var galleryItems = isVideo ? self.videos[index] : galleryId !== undefined ? self.items[galleryId] : self.solos[index];
    var gallery = new PhotoSwipe(this.pswp, PhotoSwipeUI_Default, galleryItems, options);
    gallery.listen('gettingData', function (i, item) {
      if (item.src !== undefined && (item.w < 1 || item.h < 1)) {
        // unknown size
        var img = new Image();

        img.onload = function () {
          // will get size after load
          item.w = this.width; // set image width

          item.h = this.height; // set image height

          item.needsUpdate = true;
          gallery.updateSize(true); // reinit Items
        };

        img.src = item.src; // let's download image
      } else if (item.html !== undefined && (item.w < 1 || item.h < 1)) {
        var html = document.createElement("div");
        html.innerHTML = item.html;
        var video = html.querySelector('video');

        if (video !== null) {
          var videoSrc = html.querySelector('source');

          if (videoSrc !== null) {
            videoSrc = videoSrc.getAttribute('src');
            self.getVideoSize(videoSrc, {
              width: window.innerWidth,
              height: window.innerHeight
            }).then(function (dimensions) {
              item.h = dimensions.newHeight;
              item.w = dimensions.newWidth;
              var videoContainer = document.querySelector(html.getAttribute('id'));

              if (videoContainer) {
                var containedVideo = videoContainer.querySelector('video');
                containedVideo.width = dimensions.newWidth;
                containedVideo.height = dimensions.newHeight;
              }
            });
          }
        }
      }
    });
    gallery.init();
  }

  initializeForExisting() {
    var self = this;
    document.addEventListener('click', function (e) {
      if (!(e.target instanceof Element) || !e.target.closest('a.launch-gallery-photoswipe')) {
        return;
      }

      e.preventDefault();
      var clicked = e.target.closest('a.launch-gallery-photoswipe'); //e.currentTarget;

      var parent = clicked.closest('.photonic-stream') || clicked.closest('.photonic-panel');
      var index;

      if (parent !== null) {
        var node = clicked.closest('.photonic-level-1');
        var galleryId = parent.getAttribute('id');

        if (node) {
          index = [...node.parentNode.children].indexOf(node);
          self.openPhotoSwipe(index, galleryId);
        }
      } else {
        var a = document.querySelectorAll('a.launch-gallery-photoswipe');
        var solos = Array.from(a).filter(function (elem) {
          return elem.closest('.photonic-level-1') === null;
        });
        index = solos.indexOf(clicked);
        self.openPhotoSwipe(index, undefined);
      }
    });
    document.addEventListener('click', function (e) {
      if (!(e.target instanceof Element) || !e.target.closest(self.videoSelector)) {
        return;
      }

      e.preventDefault();
      var clicked = e.target.closest(self.videoSelector); //e.currentTarget;

      var videos = document.querySelectorAll(self.videoSelector);
      var index = Array.from(videos).indexOf(clicked);
      self.openPhotoSwipe(index, undefined, false, true);
    });
  }

}

exports.PhotonicPhotoSwipe = PhotonicPhotoSwipe;

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
(() => {
/*!***********************************************!*\
  !*** ../include/js/front-end/src/Polyfill.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */


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
})();

(() => {
/*!*********************************************************!*\
  !*** ../include/js/front-end/src/Entries/PhotoSwipe.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var _PhotoSwipe = __webpack_require__(/*! ../Lightboxes/PhotoSwipe */ "../include/js/front-end/src/Lightboxes/PhotoSwipe.js");

var Listeners = _interopRequireWildcard(__webpack_require__(/*! ../Listeners */ "../include/js/front-end/src/Listeners.js"));

var Layout = _interopRequireWildcard(__webpack_require__(/*! ../Layouts/Layout */ "../include/js/front-end/src/Layouts/Layout.js"));

document.addEventListener('DOMContentLoaded', function () {
  var lightbox = new _PhotoSwipe.PhotonicPhotoSwipe();

  _Core.Core.setLightbox(lightbox);

  lightbox.initialize();
  lightbox.initializeForExisting();

  _Core.Core.executeCommon();

  Listeners.addAllListeners();
  Layout.initializeLayouts(lightbox);
});
})();

/******/ })()
;
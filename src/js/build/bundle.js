"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		/* Cookie */

		var FacebookMessenger = {};

		(function (root, $, undefined) {
			"use strict";

			$(function () {
				$("footer").after("<div id='fb-root'></div>\n\t\t\t\t\t<script>(function(d, s, id) {\n\t\t\t\t\t  var js, fjs = d.getElementsByTagName(s)[0];\n\t\t\t\t\t  js = d.createElement(s); js.id = id;\n\t\t\t\t\t  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';\n\t\t\t\t\t  fjs.parentNode.insertBefore(js, fjs);\n\t\t\t\t\t}(document, 'script', 'facebook-jssdk'));</script>\n\t\t\t\t\t<div class='fb-customerchat'\n\t\t\t\t\t  attribution=\"wordpress\"\n\t\t\t\t\t  page_id='571666800020233'\n\t\t\t\t\t  theme_color='#dde8e2'\n\t\t\t\t  >\n\t\t\t\t\t>\n\t\t\t\t  </div>");
			});
		})(undefined, jQuery);

		module.exports = {
			FacebookMessenger: FacebookMessenger
		};
	}, {}], 2: [function (require, module, exports) {
		/* Cookie */

		var SmoothScrolling = {
			aFunction: function aFunction(name, value) {}
		};

		(function (root, $, undefined) {
			"use strict";

			$(function () {
				console.log("Smooth Scrolling Loaded");
				//
				// SmoothScroll for websites v1.4.8 (Balazs Galambosi)
				// http://www.smoothscroll.net/
				//
				// Licensed under the terms of the MIT license.
				//
				// You may use it in your theme if you credit me.
				// It is also free to use on any individual website.
				//
				// Exception:
				// The only restriction is to not publish any
				// extension for browsers or native application
				// without getting a written permission first.
				//

				(function () {
					// Scroll Variables (tweakable)
					var defaultOptions = {
						// Scrolling Core
						frameRate: 150, // [Hz]
						animationTime: 400, // [ms]
						stepSize: 100, // [px]

						// Pulse (less tweakable)
						// ratio of "tail" to "acceleration"
						pulseAlgorithm: true,
						pulseScale: 4,
						pulseNormalize: 1,

						// Acceleration
						accelerationDelta: 50, // 50
						accelerationMax: 3, // 3

						// Keyboard Settings
						keyboardSupport: true, // option
						arrowScroll: 50, // [px]

						// Other
						fixedBackground: true,
						excluded: ""
					};

					var options = defaultOptions;

					// Other Variables
					var isExcluded = false;
					var isFrame = false;
					var direction = { x: 0, y: 0 };
					var initDone = false;
					var root = document.documentElement;
					var activeElement;
					var observer;
					var refreshSize;
					var deltaBuffer = [];
					var deltaBufferTimer;
					var isMac = /^Mac/.test(navigator.platform);

					var key = {
						left: 37,
						up: 38,
						right: 39,
						down: 40,
						spacebar: 32,
						pageup: 33,
						pagedown: 34,
						end: 35,
						home: 36
					};
					var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

					/***********************************************
      * INITIALIZE
      ***********************************************/

					/**
      * Tests if smooth scrolling is allowed. Shuts down everything if not.
      */
					function initTest() {
						if (options.keyboardSupport) {
							addEvent("keydown", keydown);
						}
					}

					/**
      * Sets up scrolls array, determines if frames are involved.
      */
					function init() {
						if (initDone || !document.body) return;

						initDone = true;

						var body = document.body;
						var html = document.documentElement;
						var windowHeight = window.innerHeight;
						var scrollHeight = body.scrollHeight;

						// check compat mode for root element
						root = document.compatMode.indexOf("CSS") >= 0 ? html : body;
						activeElement = body;

						initTest();

						// Checks if this script is running in a frame
						if (top != self) {
							isFrame = true;
						} else if (
						/**
       * Safari 10 fixed it, Chrome fixed it in v45:
       * This fixes a bug where the areas left and right to
       * the content does not trigger the onmousewheel event
       * on some pages. e.g.: html, body { height: 100% }
       */
						isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
							var fullPageElem = document.createElement("div");
							fullPageElem.style.cssText = "position:absolute; z-index:-10000; " + "top:0; left:0; right:0; height:" + root.scrollHeight + "px";
							document.body.appendChild(fullPageElem);

							// DOM changed (throttled) to fix height
							var pendingRefresh;
							refreshSize = function refreshSize() {
								if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
								pendingRefresh = setTimeout(function () {
									if (isExcluded) return; // could be running after cleanup
									fullPageElem.style.height = "0";
									fullPageElem.style.height = root.scrollHeight + "px";
									pendingRefresh = null;
								}, 500); // act rarely to stay fast
							};

							setTimeout(refreshSize, 10);

							addEvent("resize", refreshSize);

							// TODO: attributeFilter?
							var config = {
								attributes: true,
								childList: true,
								characterData: false
								// subtree: true
							};

							observer = new MutationObserver(refreshSize);
							observer.observe(body, config);

							if (root.offsetHeight <= windowHeight) {
								var clearfix = document.createElement("div");
								clearfix.style.clear = "both";
								body.appendChild(clearfix);
							}
						}

						// disable fixed background
						if (!options.fixedBackground && !isExcluded) {
							body.style.backgroundAttachment = "scroll";
							html.style.backgroundAttachment = "scroll";
						}
					}

					/**
      * Removes event listeners and other traces left on the page.
      */
					function cleanup() {
						observer && observer.disconnect();
						removeEvent(wheelEvent, wheel);
						removeEvent("mousedown", mousedown);
						removeEvent("keydown", keydown);
						removeEvent("resize", refreshSize);
						removeEvent("load", init);
					}

					/************************************************
      * SCROLLING
      ************************************************/

					var que = [];
					var pending = false;
					var lastScroll = Date.now();

					/**
      * Pushes scroll actions to the scrolling queue.
      */
					function scrollArray(elem, left, top) {
						directionCheck(left, top);

						if (options.accelerationMax != 1) {
							var now = Date.now();
							var elapsed = now - lastScroll;
							if (elapsed < options.accelerationDelta) {
								var factor = (1 + 50 / elapsed) / 2;
								if (factor > 1) {
									factor = Math.min(factor, options.accelerationMax);
									left *= factor;
									top *= factor;
								}
							}
							lastScroll = Date.now();
						}

						// push a scroll command
						que.push({
							x: left,
							y: top,
							lastX: left < 0 ? 0.99 : -0.99,
							lastY: top < 0 ? 0.99 : -0.99,
							start: Date.now()
						});

						// don't act if there's a pending queue
						if (pending) {
							return;
						}

						var scrollRoot = getScrollRoot();
						var isWindowScroll = elem === scrollRoot || elem === document.body;

						// if we haven't already fixed the behavior,
						// and it needs fixing for this sesh
						if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
							elem.$scrollBehavior = elem.style.scrollBehavior;
							elem.style.scrollBehavior = "auto";
						}

						var step = function step(time) {
							var now = Date.now();
							var scrollX = 0;
							var scrollY = 0;

							for (var i = 0; i < que.length; i++) {
								var item = que[i];
								var elapsed = now - item.start;
								var finished = elapsed >= options.animationTime;

								// scroll position: [0, 1]
								var position = finished ? 1 : elapsed / options.animationTime;

								// easing [optional]
								if (options.pulseAlgorithm) {
									position = pulse(position);
								}

								// only need the difference
								var x = item.x * position - item.lastX >> 0;
								var y = item.y * position - item.lastY >> 0;

								// add this to the total scrolling
								scrollX += x;
								scrollY += y;

								// update last values
								item.lastX += x;
								item.lastY += y;

								// delete and step back if it's over
								if (finished) {
									que.splice(i, 1);
									i--;
								}
							}

							// scroll left and top
							if (isWindowScroll) {
								window.scrollBy(scrollX, scrollY);
							} else {
								if (scrollX) elem.scrollLeft += scrollX;
								if (scrollY) elem.scrollTop += scrollY;
							}

							// clean up if there's nothing left to do
							if (!left && !top) {
								que = [];
							}

							if (que.length) {
								requestFrame(step, elem, 1000 / options.frameRate + 1);
							} else {
								pending = false;
								// restore default behavior at the end of scrolling sesh
								if (elem.$scrollBehavior != null) {
									elem.style.scrollBehavior = elem.$scrollBehavior;
									elem.$scrollBehavior = null;
								}
							}
						};

						// start a new queue of actions
						requestFrame(step, elem, 0);
						pending = true;
					}

					/***********************************************
      * EVENTS
      ***********************************************/

					/**
      * Mouse wheel handler.
      * @param {Object} event
      */
					function wheel(event) {
						if (!initDone) {
							init();
						}

						var target = event.target;

						// leave early if default action is prevented
						// or it's a zooming event with CTRL
						if (event.defaultPrevented || event.ctrlKey) {
							return true;
						}

						// leave embedded content alone (flash & pdf)
						if (isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src) || isNodeName(activeElement, "object") || target.shadowRoot) {
							return true;
						}

						var deltaX = -event.wheelDeltaX || event.deltaX || 0;
						var deltaY = -event.wheelDeltaY || event.deltaY || 0;

						if (isMac) {
							if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
								deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
							}
							if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
								deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
							}
						}

						// use wheelDelta if deltaX/Y is not available
						if (!deltaX && !deltaY) {
							deltaY = -event.wheelDelta || 0;
						}

						// line based scrolling (Firefox mostly)
						if (event.deltaMode === 1) {
							deltaX *= 40;
							deltaY *= 40;
						}

						var overflowing = overflowingAncestor(target);

						// nothing to do if there's no element that's scrollable
						if (!overflowing) {
							// except Chrome iframes seem to eat wheel events, which we need to
							// propagate up, if the iframe has nothing overflowing to scroll
							if (isFrame && isChrome) {
								// change target to iframe element itself for the parent frame
								Object.defineProperty(event, "target", {
									value: window.frameElement
								});
								return parent.wheel(event);
							}
							return true;
						}

						// check if it's a touchpad scroll that should be ignored
						if (isTouchpad(deltaY)) {
							return true;
						}

						// scale by step size
						// delta is 120 most of the time
						// synaptics seems to send 1 sometimes
						if (Math.abs(deltaX) > 1.2) {
							deltaX *= options.stepSize / 120;
						}
						if (Math.abs(deltaY) > 1.2) {
							deltaY *= options.stepSize / 120;
						}

						scrollArray(overflowing, deltaX, deltaY);
						event.preventDefault();
						scheduleClearCache();
					}

					/**
      * Keydown event handler.
      * @param {Object} event
      */
					function keydown(event) {
						var target = event.target;
						var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;

						// our own tracked active element could've been removed from the DOM
						if (!document.body.contains(activeElement)) {
							activeElement = document.activeElement;
						}

						// do nothing if user is editing text
						// or using a modifier key (except shift)
						// or in a dropdown
						// or inside interactive elements
						var inputNodeNames = /^(textarea|select|embed|object)$/i;
						var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
						if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, "input") && !buttonTypes.test(target.type) || isNodeName(activeElement, "video") || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
							return true;
						}

						// [spacebar] should trigger button press, leave it alone
						if ((isNodeName(target, "button") || isNodeName(target, "input") && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
							return true;
						}

						// [arrwow keys] on radio buttons should be left alone
						if (isNodeName(target, "input") && target.type == "radio" && arrowKeys[event.keyCode]) {
							return true;
						}

						var shift,
						    x = 0,
						    y = 0;
						var overflowing = overflowingAncestor(activeElement);

						if (!overflowing) {
							// Chrome iframes seem to eat key events, which we need to
							// propagate up, if the iframe has nothing overflowing to scroll
							return isFrame && isChrome ? parent.keydown(event) : true;
						}

						var clientHeight = overflowing.clientHeight;

						if (overflowing == document.body) {
							clientHeight = window.innerHeight;
						}

						switch (event.keyCode) {
							case key.up:
								y = -options.arrowScroll;
								break;
							case key.down:
								y = options.arrowScroll;
								break;
							case key.spacebar:
								// (+ shift)
								shift = event.shiftKey ? 1 : -1;
								y = -shift * clientHeight * 0.9;
								break;
							case key.pageup:
								y = -clientHeight * 0.9;
								break;
							case key.pagedown:
								y = clientHeight * 0.9;
								break;
							case key.home:
								if (overflowing == document.body && document.scrollingElement) overflowing = document.scrollingElement;
								y = -overflowing.scrollTop;
								break;
							case key.end:
								var scroll = overflowing.scrollHeight - overflowing.scrollTop;
								var scrollRemaining = scroll - clientHeight;
								y = scrollRemaining > 0 ? scrollRemaining + 10 : 0;
								break;
							case key.left:
								x = -options.arrowScroll;
								break;
							case key.right:
								x = options.arrowScroll;
								break;
							default:
								return true; // a key we don't care about
						}

						scrollArray(overflowing, x, y);
						event.preventDefault();
						scheduleClearCache();
					}

					/**
      * Mousedown event only for updating activeElement
      */
					function mousedown(event) {
						activeElement = event.target;
					}

					/***********************************************
      * OVERFLOW
      ***********************************************/

					var uniqueID = function () {
						var i = 0;
						return function (el) {
							return el.uniqueID || (el.uniqueID = i++);
						};
					}();

					var cacheX = {}; // cleared out after a scrolling session
					var cacheY = {}; // cleared out after a scrolling session
					var clearCacheTimer;
					var smoothBehaviorForElement = {};

					//setInterval(function () { cache = {}; }, 10 * 1000);

					function scheduleClearCache() {
						clearTimeout(clearCacheTimer);
						clearCacheTimer = setInterval(function () {
							cacheX = cacheY = smoothBehaviorForElement = {};
						}, 1 * 1000);
					}

					function setCache(elems, overflowing, x) {
						var cache = x ? cacheX : cacheY;
						for (var i = elems.length; i--;) {
							cache[uniqueID(elems[i])] = overflowing;
						}return overflowing;
					}

					function getCache(el, x) {
						return (x ? cacheX : cacheY)[uniqueID(el)];
					}

					//  (body)                (root)
					//         | hidden | visible | scroll |  auto  |
					// hidden  |   no   |    no   |   YES  |   YES  |
					// visible |   no   |   YES   |   YES  |   YES  |
					// scroll  |   no   |   YES   |   YES  |   YES  |
					// auto    |   no   |   YES   |   YES  |   YES  |

					function overflowingAncestor(el) {
						var elems = [];
						var body = document.body;
						var rootScrollHeight = root.scrollHeight;
						do {
							var cached = getCache(el, false);
							if (cached) {
								return setCache(elems, cached);
							}
							elems.push(el);
							if (rootScrollHeight === el.scrollHeight) {
								var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
								var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
								if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
									return setCache(elems, getScrollRoot());
								}
							} else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
								return setCache(elems, el);
							}
						} while (el = el.parentElement);
					}

					function isContentOverflowing(el) {
						return el.clientHeight + 10 < el.scrollHeight;
					}

					// typically for <body> and <html>
					function overflowNotHidden(el) {
						var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
						return overflow !== "hidden";
					}

					// for all other elements
					function overflowAutoOrScroll(el) {
						var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
						return overflow === "scroll" || overflow === "auto";
					}

					// for all other elements
					function isScrollBehaviorSmooth(el) {
						var id = uniqueID(el);
						if (smoothBehaviorForElement[id] == null) {
							var scrollBehavior = getComputedStyle(el, "")["scroll-behavior"];
							smoothBehaviorForElement[id] = "smooth" == scrollBehavior;
						}
						return smoothBehaviorForElement[id];
					}

					/***********************************************
      * HELPERS
      ***********************************************/

					function addEvent(type, fn) {
						window.addEventListener(type, fn, false);
					}

					function removeEvent(type, fn) {
						window.removeEventListener(type, fn, false);
					}

					function isNodeName(el, tag) {
						return el && (el.nodeName || "").toLowerCase() === tag.toLowerCase();
					}

					function directionCheck(x, y) {
						x = x > 0 ? 1 : -1;
						y = y > 0 ? 1 : -1;
						if (direction.x !== x || direction.y !== y) {
							direction.x = x;
							direction.y = y;
							que = [];
							lastScroll = 0;
						}
					}

					if (window.localStorage && localStorage.SS_deltaBuffer) {
						try {
							// #46 Safari throws in private browsing for localStorage
							deltaBuffer = localStorage.SS_deltaBuffer.split(",");
						} catch (e) {}
					}

					function isTouchpad(deltaY) {
						if (!deltaY) return;
						if (!deltaBuffer.length) {
							deltaBuffer = [deltaY, deltaY, deltaY];
						}
						deltaY = Math.abs(deltaY);
						deltaBuffer.push(deltaY);
						deltaBuffer.shift();
						clearTimeout(deltaBufferTimer);
						deltaBufferTimer = setTimeout(function () {
							try {
								// #46 Safari throws in private browsing for localStorage
								localStorage.SS_deltaBuffer = deltaBuffer.join(",");
							} catch (e) {}
						}, 1000);
						var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY); // win64
						return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
					}

					function isDivisible(n, divisor) {
						return Math.floor(n / divisor) == n / divisor;
					}

					function allDeltasDivisableBy(divisor) {
						return isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor);
					}

					function isInsideYoutubeVideo(event) {
						var elem = event.target;
						var isControl = false;
						if (document.URL.indexOf("www.youtube.com/watch") != -1) {
							do {
								isControl = elem.classList && elem.classList.contains("html5-video-controls");
								if (isControl) break;
							} while (elem = elem.parentNode);
						}
						return isControl;
					}

					var requestFrame = function () {
						return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element, delay) {
							window.setTimeout(callback, delay || 1000 / 60);
						};
					}();

					var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

					var getScrollRoot = function () {
						var SCROLL_ROOT = document.scrollingElement;
						return function () {
							if (!SCROLL_ROOT) {
								var dummy = document.createElement("div");
								dummy.style.cssText = "height:10000px;width:1px;";
								document.body.appendChild(dummy);
								var bodyScrollTop = document.body.scrollTop;
								var docElScrollTop = document.documentElement.scrollTop;
								window.scrollBy(0, 3);
								if (document.body.scrollTop != bodyScrollTop) SCROLL_ROOT = document.body;else SCROLL_ROOT = document.documentElement;
								window.scrollBy(0, -3);
								document.body.removeChild(dummy);
							}
							return SCROLL_ROOT;
						};
					}();

					/***********************************************
      * PULSE (by Michael Herf)
      ***********************************************/

					/**
      * Viscous fluid with a pulse for part and decay for the rest.
      * - Applies a fixed force over an interval (a damped acceleration), and
      * - Lets the exponential bleed away the velocity over a longer interval
      * - Michael Herf, http://stereopsis.com/stopping/
      */
					function pulse_(x) {
						var val, start, expx;
						// test
						x = x * options.pulseScale;
						if (x < 1) {
							// acceleartion
							val = x - (1 - Math.exp(-x));
						} else {
							// tail
							// the previous animation ended here:
							start = Math.exp(-1);
							// simple viscous drag
							x -= 1;
							expx = 1 - Math.exp(-x);
							val = start + expx * (1 - start);
						}
						return val * options.pulseNormalize;
					}

					function pulse(x) {
						if (x >= 1) return 1;
						if (x <= 0) return 0;

						if (options.pulseNormalize == 1) {
							options.pulseNormalize /= pulse_(1);
						}
						return pulse_(x);
					}

					/***********************************************
      * FIRST RUN
      ***********************************************/

					var userAgent = window.navigator.userAgent;
					var isEdge = /Edge/.test(userAgent); // thank you MS
					var isChrome = /chrome/i.test(userAgent) && !isEdge;
					var isSafari = /safari/i.test(userAgent) && !isEdge;
					var isMobile = /mobile/i.test(userAgent);
					var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
					var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
					var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

					var wheelEvent;
					if ("onwheel" in document.createElement("div")) wheelEvent = "wheel";else if ("onmousewheel" in document.createElement("div")) wheelEvent = "mousewheel";

					if (wheelEvent && isEnabledForBrowser) {
						addEvent(wheelEvent, wheel);
						addEvent("mousedown", mousedown);
						addEvent("load", init);
					}

					/***********************************************
      * PUBLIC INTERFACE
      ***********************************************/

					function SmoothScroll(optionsToSet) {
						for (var key in optionsToSet) {
							if (defaultOptions.hasOwnProperty(key)) options[key] = optionsToSet[key];
						}
					}
					SmoothScroll.destroy = cleanup;

					if (window.SmoothScrollOptions)
						// async API
						SmoothScroll(window.SmoothScrollOptions);

					if (typeof define === "function" && define.amd) define(function () {
						return SmoothScroll;
					});else if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) module.exports = SmoothScroll;else window.SmoothScroll = SmoothScroll;
				})();
			});
		})(undefined, jQuery);

		module.exports = {
			SmoothScrolling: SmoothScrolling
		};
	}, {}], 3: [function (require, module, exports) {
		// if ($(".gmaps").length > 0) {
		// 	const {gmaps} = require('./maps');
		// }

		// const {cookie} = require('./cookie');
		// const {contact} = require('./contact');

		var _require = require("./SmoothScrolling"),
		    SmoothScrolling = _require.SmoothScrolling;

		(function (root, $, undefined) {
			"use strict";

			$(function () {
				// DOM ready, take it away
				console.log("JS/JQ Ready v.5 ");

				/* Loader */
				$(window).on("load", function (e) {
					scrollDis(e);
					console.log("Window loaded ");
					setTimeout(function () {
						$(".loader-rectangle").toggleClass("animate");

						//fadeout text whils square animation is playing
						setTimeout(function () {
							$(".loader").fadeOut("slow");
						}, 250);

						//show messenger chat 4secs after load animation has finished
						setTimeout(function () {
							var _require2 = require("./FacebookMessenger"),
							    FacebookMessenger = _require2.FacebookMessenger;
						}, 4000);
					}, 4000);
				});

				var segments = document.querySelectorAll(".segment");
				// let elementHeight = segments.clientHeight;
				var segmentHeight = 15;

				var inView = function inView(element) {
					// get window height
					var windowHeight = window.innerHeight;
					// get number of pixels that the document is scrolled
					var scrollY = window.scrollY || window.pageYOffset;

					// get current scroll position (distance from the top of the page to the bottom of the current viewport)
					var scrollPosition = scrollY + windowHeight;
					// get element position (distance from the top of the page to the bottom of the element)
					var elementPosition = element.getBoundingClientRect().top + scrollY + segmentHeight;

					// is scroll position greater than element position? (is element in view?)
					if (scrollPosition > elementPosition) {
						return true;
					}

					return false;
				};

				var animateLines = function animateLines() {
					// is element in view?
					segments.forEach(function (element) {
						if (inView(element)) {
							// element is in view, add class to element
							element.classList.add("animate");
						}
					});
				};

				var scrollDis = function scrollDis(e) {
					var targets = document.querySelectorAll(".scroll");
					var scrolled = window.pageYOffset;

					targets.forEach(function (target) {
						var pos = window.pageYOffset * target.dataset.rate;
						// console.log("target", target);
						// console.log("target.dataset.rate", target.dataset.rate);
						target.style.transform = "translate3d(0px," + pos + "px,0px)";
					});
				};

				window.addEventListener("scroll", function (e) {
					scrollDis(e);
					animateLines();
				});

				// $(".see-examples a, button.see-examples").click(e => {
				// 	e.preventDefault();
				// 	$(".navs_wrapper nav").toggleClass("active");
				// });

				// messenger
				$("a.messenger").click(function (e) {
					e.preventDefault();
					jQuery(".fb_customer_chat_bounce_out_v2").removeClass("fb_customer_chat_bounce_out_v2").addClass("fb_customer_chat_bounce_in_v2").css("max-height", "100%");
				});

				// $("#buy-tickets div.button").on("click", function(e, el) {
				// 	var $button = $(this);
				// 	var oldValue = $button
				// 		.parent()
				// 		.find("input")
				// 		.val();

				// 	if ($button.text() == "+") {
				// 		var newVal = parseFloat(oldValue) + 1;
				// 	} else {
				// 		// Don't allow decrementing below zero
				// 		if (oldValue > 0) {
				// 			var newVal = parseFloat(oldValue) - 1;
				// 		} else {
				// 			newVal = 0;
				// 		}
				// 	}

				// 	$button
				// 		.parent()
				// 		.find("input")
				// 		.val(newVal);

				// 	// wooTicketsValidation(e, el);
				// });

				// TODO
				// if (jQuery('button[type="submit"][name="wootickets_process"]')) {
				// 	//checking if there is a chosen ticket on input change
				// 	jQuery('input[type="number"], #buy-tickets div.button').change(
				// 		function(e, el) {
				// 			wooTicketsValidation(e, el);
				// 		}
				// 	);
				// }

				// var wooTicketsValidation = function(e, el) {
				// 	// sync tickets,  -> but was adding double?
				// 	jQuery('input[type="number"][name="' + e.target.name + '"').val(
				// 		e.target.value
				// 	);
				// 	console.log("e.target.value", e.target.value);

				// 	// jQuery('button[type="submit"][name="wootickets_process"]').attr(
				// 	// 	{
				// 	// 		disabled: true
				// 	// 	}
				// 	// );

				// 	// change to addclaass
				// 	// jQuery('input[type="number"]').css("border", "2px solid red");
				// 	// jQuery('input[type="number"]').each(function(i, a) {
				// 	// 	if (jQuery(a).val() != "0") {
				// 	// 		// jQuery(
				// 	// 		// 	'button[type="submit"][name="wootickets_process"]'
				// 	// 		// ).attr({
				// 	// 		// 	disabled: false
				// 	// 		// });

				// 	// 		jQuery('input[type="number"]').css(
				// 	// 			"border-top",
				// 	// 			"1px solid  #052238"
				// 	// 		);
				// 	// 		jQuery('input[type="number"]').css(
				// 	// 			"border-bottom",
				// 	// 			"1px solid  #052238"
				// 	// 		);
				// 	// 		jQuery('input[type="number"]').css("border-left", "none");
				// 	// 		jQuery('input[type="number"]').css("border-right", "none");
				// 	// 	}
				// 	// });

				// 	jQuery('input[type="number"]').css("border", "2px solid red");
				// 	if (jQuery(a).val() != "0") {
				// 		// jQuery(
				// 		// 	'button[type="submit"][name="wootickets_process"]'
				// 		// ).attr({
				// 		// 	disabled: false
				// 		// });

				// 		jQuery('input[type="number"]').css(
				// 			"border-top",
				// 			"1px solid  #052238"
				// 		);
				// 		jQuery('input[type="number"]').css(
				// 			"border-bottom",
				// 			"1px solid  #052238"
				// 		);
				// 		jQuery('input[type="number"]').css("border-left", "none");
				// 		jQuery('input[type="number"]').css("border-right", "none");
				// 	}
				// };

				// function getDegNumber(string) {
				// 	var deg = "";
				// 	var index = string.indexOf("deg") - 1;
				// 	var isnumber = true;

				// 	// while charAt is a number
				// 	while (isnumber) {
				// 		// console.log('in while loop');
				// 		if (!isNaN(string.charAt(index))) {
				// 			deg = string.charAt(index) + deg;
				// 			--index;
				// 		} else {
				// 			// console.log(string.charAt(index) + 'is nan');
				// 			isnumber = false;
				// 		}
				// 	}

				// 	return deg;
				// }

				/* Hamburger menu */
				var hamburger = $("#hamburger-icon");
				hamburger.click(function (e) {
					e.preventDefault();
					//hmmm surely can do better
					$(".navs_wrapper nav").toggleClass("tablet_menu_active");
					hamburger.toggleClass("active");
				});

				/*Show more events*/

				// setTimeout(() => {
				// 	$('.more_events').click((e) => {
				// 		console.log("showing more events");
				// 		e.preventDefault();
				// 		$('.event.ninja').fadeIn();
				// 		$('.more_events').css('left', '100%');
				// 	});
				// 	$('.more_photos').click((e) => {
				// 		console.log("showing more events");
				// 		e.preventDefault();
				// 		$('.album_thumb.ninja').fadeIn(() => {
				// 			// $('.more_photos').fadeOut(() => {
				// 			// 	console.log('slidup');
				// 			// });
				// 		});
				// 		$('.more_photos').css('left', '100%');
				// 	});
				// }, 10);

				/* Magnific popup */
				// $('.photo_gallery .photo').magnificPopup({
				// 	delegate: 'a', // child items selector, by clicking on it popup will open
				// 	type: 'image'
				// // other options
				// });

				// $('.photo_gallery .photo a').magnificPopup({
				// 	type: 'image',

				// 	gallery: {
				// 		enabled: true,
				// 		preload: [0, 2], // read about this option in next Lazy-loading section

				// 		navigateByImgClick: true,

				// 		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

				// 		tPrev: 'Previous (Left arrow key)', // title for left button
				// 		tNext: 'Next (Right arrow key)', // title for right button
				// 		tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
				// 	}
				// });

				// 	if (matchMedia('only screen and (max-width: 768px)').matches) {
				// 	// Menu highlight when scroll/click
				// 	//https://codepen.io/joxmar/pen/NqqMEg

				// 	console.log('$(".nav").find("a")', $(".nav").find("a"));

				// 	// Cache selectors
				// var lastId,
				// 	topMenu = $(".nav"),
				// 	topMenuHeight = topMenu.outerHeight() + 1,
				// 	// All list items
				// 	menuItems = topMenu.find("a"),
				// 	// Anchors corresponding to menu items
				// 	scrollItems = menuItems.map(function() {
				// 		// console.log("$(this)", $(this));
				// 		// console.log('$($(this).attr("href"))', $($(this).hash));
				// 		var item = $($(this).attr("href"));
				// 		// console.log("item", item);
				// 		if (item.length) {
				// 			return item;
				// 		}
				// 	});

				// // 	// console.log('menuItems', menuItems);

				// // Bind click handler to menu items
				// // so we can get a fancy scroll animation
				// menuItems.click(function(e) {
				// 	var href = $(this).attr("href"),
				// 		offsetTop =
				// 			href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
				// 	$("html, body")
				// 		.stop()
				// 		.animate(
				// 			{
				// 				scrollTop: offsetTop
				// 			},
				// 			850
				// 		);
				// 	e.preventDefault();
				// });

				// // 	// Bind to scroll
				// $(window).scroll(function() {
				// 	// Get container scroll position
				// 	var fromTop = $(this).scrollTop() + topMenuHeight;

				// 	// Get id of current scroll item
				// 	var cur = scrollItems.map(function() {
				// 		if ($(this).offset().top < fromTop) return this;
				// 	});
				// 	// Get the id of the current element
				// 	cur = cur[cur.length - 1];
				// 	var id = cur && cur.length ? cur[0].id : "";

				// 	if (lastId !== id) {
				// 		lastId = id;
				// 		// Set/remove active class
				// 		menuItems
				// 			.parent()
				// 			.removeClass("active")
				// 			.end()
				// 			.filter("[href=#" + id + "]")
				// 			.parent()
				// 			.addClass("active");
				// 	}
				// });

				// $(".nav a").on("click", function(event) {
				// 	$(this)
				// 		.parent()
				// 		.parent()
				// 		.find("li:not(.wpml-ls-item)")
				// 		.removeClass("active");
				// 	$(this)
				// 		.parent()
				// 		.addClass("active");
				// });

				// $(window).on("scroll", function() {
				// 	$(".section").each(function() {
				// 		if ($(window).scrollTop() >= $(this).offset().top) {
				// 			var id = $(this).attr("id");
				// 			// console.log('$(window).scrollTop()', $(window).scrollTop());
				// 			// console.log('$(this).offset().top', $(this).offset().top);
				// 			// console.log(id, 'id');
				// 			$(".nav li:not(.wpml-ls-item)").removeClass("active");
				// 			$(".nav a[href='/#" + id + "']")
				// 				.parent()
				// 				.addClass("active");
				// 		}
				// 	});
				// });

				var $root = $("html, body");
				$("a").on("click", function (event) {
					var hash = this.hash;
					// Is the anchor on the same page?
					if (hash && this.href.slice(0, -hash.length - 1) == location.href.slice(0, -location.hash.length - 1)) {
						var scrollTo = $(hash).offset().top;
						var bodyHeight = $("body").height();
						var windowHeight = $(window).height();
						if (bodyHeight - windowHeight < scrollTo) {
							scrollTo = bodyHeight - windowHeight;
						}

						$root.animate({
							scrollTop: scrollTo
						}, "normal", function () {
							location.hash = hash;
							// console.log("done");
							setTimeout(function () {}, 1000);
						});
						return false;
					}
				});
			});
		})(undefined, jQuery);
	}, { "./FacebookMessenger": 1, "./SmoothScrolling": 2 }] }, {}, [3]);
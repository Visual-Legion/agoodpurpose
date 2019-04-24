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
				$("footer").after("<div id='fb-root'></div>\n\t\t\t\t\t<script>(function(d, s, id) {\n\t\t\t\t\t  var js, fjs = d.getElementsByTagName(s)[0];\n\t\t\t\t\t  js = d.createElement(s); js.id = id;\n\t\t\t\t\t  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';\n\t\t\t\t\t  fjs.parentNode.insertBefore(js, fjs);\n\t\t\t\t\t}(document, 'script', 'facebook-jssdk'));</script>\n\t\t\t\t\t<div class='fb-customerchat'\n\t\t\t\t\t  attribution=\"wordpress\"\n\t\t\t\t\t  page_id='571666800020233'\n\t\t\t\t\t  theme_color='#dde8e2'\n\t\t\t\t  >\n\t\t\t\t  </div>");
			});
		})(undefined, jQuery);

		module.exports = {
			FacebookMessenger: FacebookMessenger
		};
	}, {}], 2: [function (require, module, exports) {
		// if ($(".gmaps").length > 0) {
		// 	const {gmaps} = require('./maps');
		// }

		// const {cookie} = require('./cookie');
		// const {contact} = require('./contact');

		// const { SmoothScrolling } = require("../lib/SmoothScrolling");

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

		(function (root, $, undefined) {
			"use strict";

			var _this = this;

			$(function () {
				// DOM ready, take it away
				console.log("DOM Ready v.3");

				/**
     *
     */

				/*!
     * luxy.js v0.1.0: Inertia scroll and parallax effect plugin in Vanilla.js
     * (c) 2018 Mineo Okuda
     * MIT License
     * git+ssh://git@github.com:min30327/luxy.js.git
     */

				/**
     * Written by Mineo Okuda on 01/03/18.
     *
     * Mineo Okuda - development + design
     * https://willstyle.co.jp
     * https://github.com/min30327
     *
     * MIT license.
     */
				setTimeout(function () {
					(function (root, factory) {
						"use strict";

						if (typeof define === "function" && define.amd) {
							// AMD. Register as an anonymous module.
							define([], factory);
						} else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
							// COMMONJS
							module.exports = factory();
						} else {
							// BROWSER
							root.luxy = factory();
						}
					})(_this, function () {
						"use strict";

						var defaults = {
							wrapper: "#luxy",
							targets: ".luxy-el",
							wrapperSpeed: 0.08,
							targetSpeed: 0.02,
							targetPercentage: 0.1
						};

						var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
						window.requestAnimationFrame = requestAnimationFrame;
						var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

						/**
       * Merge two or more objects. Returns a new object.
       * @param {Object}   objects  The objects to merge together
       * @returns {Object}          Merged values of defaults and options
       */
						var extend = function extend() {
							// Variables
							var extended = {};
							var deep = false;
							var i = 0;
							var length = arguments.length;

							// Merge the object into the extended object
							var merge = function merge(obj) {
								for (var prop in obj) {
									if (obj.hasOwnProperty(prop)) {
										extended[prop] = obj[prop];
									}
								}
							};

							// Loop through each object and conduct a merge
							for (; i < length; i++) {
								var obj = arguments[i];
								merge(obj);
							}

							return extended;
						};

						var Luxy = function Luxy() {
							this.Targets = [];
							this.TargetsLength = 0;
							this.wrapper = "";
							this.windowHeight = 0;
							this.wapperOffset = 0;
						};
						Luxy.prototype = {
							isAnimate: false,
							isResize: false,
							scrollId: "",
							resizeId: "",
							init: function init(options) {
								this.settings = extend(defaults, options || {});
								console.log("this.settings", this.settings);
								this.wrapper = document.querySelector(this.settings.wrapper);

								if (this.wrapper === "undefined") {
									return false;
								}
								this.targets = document.querySelectorAll(this.settings.targets);
								document.body.style.height = this.wrapper.clientHeight + "px";

								this.windowHeight = window.clientHeight;
								this.attachEvent();
								this.apply(this.targets, this.wrapper);
								this.animate();
								this.resize();
							},
							apply: function apply(targets, wrapper) {
								this.wrapperInit();

								this.targetsLength = targets.length;
								for (var i = 0; i < this.targetsLength; i++) {
									var attr = {
										offset: targets[i].getAttribute("data-offset"),
										speedX: targets[i].getAttribute("data-speed-x"),
										speedY: targets[i].getAttribute("data-speed-Y"),
										percentage: targets[i].getAttribute("data-percentage"),
										horizontal: targets[i].getAttribute("data-horizontal")
									};
									this.targetsInit(targets[i], attr);
								}
							},
							wrapperInit: function wrapperInit() {
								this.wrapper.style.width = "100%";
								this.wrapper.style.position = "fixed";
							},
							targetsInit: function targetsInit(elm, attr) {
								this.Targets.push({
									elm: elm,
									offset: attr.offset ? attr.offset : 0,
									horizontal: attr.horizontal ? attr.horizontal : 0,
									top: 0,
									left: 0,
									speedX: attr.speedX ? attr.speedX : 1,
									speedY: attr.speedY ? attr.speedY : 1,
									percentage: attr.percentage ? attr.percentage : 0
								});
							},
							scroll: function scroll() {
								var scrollTopTmp = document.documentElement.scrollTop || document.body.scrollTop;
								this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
								var offsetBottom = this.scrollTop + this.windowHeight;
								this.wrapperUpdate(this.scrollTop);
								for (var i = 0; i < this.Targets.length; i++) {
									this.targetsUpdate(this.Targets[i]);
								}
							},
							animate: function animate() {
								this.scroll();
								this.scrollId = requestAnimationFrame(this.animate.bind(this));
							},
							wrapperUpdate: function wrapperUpdate() {
								this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed;
								this.wrapper.style.transform = "translate3d(" + 0 + "," + Math.round(-this.wapperOffset * 100) / 100 + "px ," + 0 + ")";
							},
							targetsUpdate: function targetsUpdate(target) {
								target.top += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedY) - target.top) * this.settings.targetPercentage;
								target.left += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedX) - target.left) * this.settings.targetPercentage;
								var targetOffsetTop = parseInt(target.percentage) - target.top - parseInt(target.offset);
								var offsetY = Math.round(targetOffsetTop * -100) / 100;
								var offsetX = 0;
								if (target.horizontal) {
									var targetOffsetLeft = parseInt(target.percentage) - target.left - parseInt(target.offset);
									offsetX = Math.round(targetOffsetLeft * -100) / 100;
								}
								target.elm.style.transform = "translate3d(" + offsetX + "px ," + offsetY + "px ," + 0 + ")";
							},
							resize: function resize() {
								var self = this;
								self.windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;
								if (parseInt(self.wrapper.clientHeight) != parseInt(document.body.style.height)) {
									document.body.style.height = self.wrapper.clientHeight + "px";
								}
								self.resizeId = requestAnimationFrame(self.resize.bind(self));
							},
							attachEvent: function attachEvent() {
								var self = this;
								window.addEventListener("resize", function () {
									if (!self.isResize) {
										cancelAnimationFrame(self.resizeId);
										cancelAnimationFrame(self.scrollId);
										self.isResize = true;
										setTimeout(function () {
											self.isResize = false;
											self.resizeId = requestAnimationFrame(self.resize.bind(self));
											self.scrollId = requestAnimationFrame(self.animate.bind(self));
										}, 200);
									}
								});
							}
						};

						var luxy = new Luxy();

						// return luxy;
						luxy.init();
					});
				}, 1000);
				/**
     * Show back arrow for home menu on click and scroll
     */

				if (matchMedia("only screen and (max-width: 600px)").matches) {
					if ($(".home").length > 0) {
						$("a").click(function (e) {
							$(".reveal").addClass("animate");
						});
						$(".reveal").click(function (e) {
							$(".reveal").removeClass("animate");
							$(".navs_wrapper").removeClass("menu-left");
							$(".see").removeClass("see");
						});
						$(".menu-item-has-children").click(function (e) {
							$(".navs_wrapper").addClass("menu-left");
							$(e.currentTarget.children[1]).addClass("see");
						});
					}
				}
				if (matchMedia("only screen and (max-width: 1280px)").matches) {
					if ($(".wellness").length > 0) {
						console.log("wellness page");
						$(".reveal, #hamburger-icon ").click(function (e) {
							$(".reveal").removeClass("animate");
							$(".navs_wrapper").removeClass("menu-left");
							$(".see").removeClass("see");
							setInterval(function (e) {
								// $(".see").css("opacity", "0");
								// $(".see").css("display", "none");
							}, 1000);
						});
						$(".menu-item-has-children > a").click(function (e) {
							e.preventDefault();
							$(".reveal").addClass("animate");
							$(".navs_wrapper").addClass("menu-left");
							// $(e.currentTarget.parent.children[1]).addClass("see");
							// jQuery(".menu-item-has-children > a").parent().find('ul')
							console.log('$(e.currentTarget).parent().find("ul")', $(e.currentTarget).parent().find("ul"));
							$(e.currentTarget).parent().find("ul").addClass("see");
							$(e.currentTarget).parent().find("ul")
							// .css("display", "block")
							.css("opacity", "1");
						});
					}
				}
				if ($(".community").length > 0) {
					$(".mail").click(function (e) {
						$(".contact input[type=email]").focus();
					});
				}

				/**
     * Image move
     */

				// if (matchMedia("only screen and (min-width: 600px)").matches) {
				// 		jQuery(".nk-awb")[1].remove();
				// 	} else {
				// 	jQuery(".nk-awb")[0].remove();
				// }

				if (matchMedia("only screen and (min-width: 600px)").matches) {
					var moveBackground = function moveBackground() {
						x += (lFollowX - x) * friction;
						y += (lFollowY - y) * friction;

						var translate = "translate(" + x + "px, " + y + "px) scale(1.1)";

						$(".bg").css({
							"-webit-transform": translate,
							"-moz-transform": translate,
							transform: translate
						});

						window.requestAnimationFrame(moveBackground);
					};

					if (jQuery(".nk-awb").length > 0) {
						jQuery(".nk-awb")[0].remove();
					}

					var lFollowX = 0,
					    lFollowY = 0,
					    x = 0,
					    y = 0,

					// friction = 1 / 30;
					friction = 1 / 30;

					$(window).on("mousemove click", function (e) {
						var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
						var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
						lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
						lFollowY = 10 * lMouseY / 100;
					});

					moveBackground();
				} else {
					if (jQuery(".bg").length > 0) {
						jQuery(".bg")[0].remove();
					}
				}

				/**
     * Animated segments
     */

				var segments = document.querySelectorAll(".segment");
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

				window.addEventListener("scroll", function (e) {
					scrollDis(e);
					animateLines();
				});

				// $(".see-examples a, button.see-examples").click(e => {
				// 	e.preventDefault();
				// 	$(".navs_wrapper nav").toggleClass("active");
				// });

				// messenger
				// $("a.messenger").click(e => {
				// 	e.preventDefault();
				// 	jQuery(".fb_customer_chat_bounce_out_v2")
				// 		.toggleClass("fb_customer_chat_bounce_out_v2")
				// 		.toggleClass("fb_customer_chat_bounce_in_v2")
				// 		.css("max-height", "100%");
				// 	// jQuery(".promptButton").click();
				// });

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
					$(".navs_wrapper").toggleClass("tablet_menu_active");
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

				if (matchMedia("only screen and (max-width: 980px)").matches) {
					$("body, a").click(function (e) {
						$(".active-csp").removeClass("active-csp");
					});

					$(".to-come").click(function (e) {
						// console.log(e);
						var el = e.target.nextElementSibling;
						// console.log(el);
						// console.log($(el));
						$(el).addClass("active-csp");
					});
				}

				var $root = $("html, body");
				$("a").on("click", function (event) {
					var _this2 = this;

					var hash = this.hash;
					// Is the anchor on the same page?
					if (hash && this.href.slice(0, -hash.length - 1) == location.href.slice(0, -location.hash.length - 1)) {
						if ($(hash).length > 0) {
							// console.log("hash", hash);
							// console.log("$(hash)", $(hash));
							// console.log("$(hash).offset()", $(hash).offset());
							// console.log("$(hash).offset().top", $(hash).offset().top);
							// console.log('$("body").height()', $("body").height());
							// console.log("$(window).height()", $(window).height());
							var scrollTo = $(hash).offset().top;
							var bodyHeight = $("body").height();
							var windowHeight = $(window).height();
							// if (bodyHeight - windowHeight < scrollTo) {
							// 	scrollTo = bodyHeight - windowHeight;
							// }

							$root.animate({
								scrollTop: scrollTo
							}, "normal", function () {
								location.hash = hash;
								// console.log("done");
								// setTimeout(() => {}, 1000);
							});
							return false;
						}
					} else {
						// console.log("event", event);
						console.log("event.target.attributes", event.target.attributes);
						// console.log(
						// 	"event.target.attributes.href",
						// 	event.target.attributes.href
						// );
						if (event.target.attributes.length > 0 && event.target.attributes.href && event.target.attributes.href.value != "#") {
							event.preventDefault();
							// console.log("animating in");
							if (event.target.attributes.target && event.target.attributes.target.value == "_blank") {
								console.log("event.target.attributes.href.nodeValue", event.target.attributes.href.nodeValue);
								var win = window.open(
								// `https://${event.target.attributes.href.nodeValue}`,
								event.target.attributes.href.nodeValue, "_blank");
								win.focus();
							} else {
								if ($(".loader-rectangle-2").length > 0) {
									$(".loader-rectangle-2").removeClass("animate-away");
									$(".loader-rectangle-2").addClass("animate-in");
								} else if ($(".loader-rectangle-3").length > 0) {
									$(".loader-rectangle-3").removeClass("animate-away");
									$(".loader-rectangle-3").addClass("animate-in");
									$(".loader-rectangle-4").addClass("animate-in");
								}
								setTimeout(function () {
									window.location = _this2.href;
								}, 2000);
							}
						}
					}
				});
			});
			/* Loader */
			$(window).on("load", function (e) {
				// scrollDis(e);
				console.log("Window loaded ");

				if ($(".loader-rectangle-2").length > 0) {
					$(".loader-rectangle-2").addClass("animate-away");
				}
				if ($(".loader-rectangle-3").length > 0) {
					$(".loader-rectangle-3").addClass("animate-away");
					$(".reveal-min-divi").addClass("animate");
				}
				if ($(".wellness").length > 0) {
					setTimeout(function () {
						$(".loader-rectangle").toggleClass("animate");

						//fadeout text whils square animation is playing
						setTimeout(function () {
							$(".loader").fadeOut("slow");
						}, 250);

						//show messenger chat 4secs after load animation has finished
						setTimeout(function () {
							var _require = require("./FacebookMessenger"),
							    FacebookMessenger = _require.FacebookMessenger;

							setTimeout(function () {
								console.log("FacebookMessenger", FacebookMessenger);
							}, 2000);
						}, 4000);
					}, 4000);
				}
				if ($(".contaaaaccct").length > 0) {
					console.log("contact page");
					setTimeout(function () {
						console.log("loading fb messnger");

						var _require2 = require("./FacebookMessenger"),
						    FacebookMessenger = _require2.FacebookMessenger;
					}, 2000);
				}

				/////
			});
		})(undefined, jQuery);

		////
	}, { "./FacebookMessenger": 1 }] }, {}, [2]);
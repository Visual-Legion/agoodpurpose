"use strict";

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
		// if ($(".gmaps").length > 0) {
		// 	const {gmaps} = require('./maps');
		// }

		// const {cookie} = require('./cookie');
		// const {contact} = require('./contact');

		(function (root, $, undefined) {
			"use strict";

			$(function () {
				// DOM ready, take it away
				console.log("JS/JQ Ready v.1 ");

				/* Loader */
				$(window).on("load", function (e) {
					scrollDis(e);
					// setTimeout(function() {
					// 	$(".loader").fadeOut("slow");
					// }, 500);
				});

				var scrollDis = function scrollDis(e) {
					var targets = document.querySelectorAll(".scroll");
					var scrolled = window.pageYOffset;

					targets.forEach(function (target) {
						var pos = window.pageYOffset * target.dataset.rate;
						console.log("target", target);
						console.log("target.dataset.rate", target.dataset.rate);
						target.style.transform = "translate3d(0px," + pos + "px,0px)";
					});
				};

				window.addEventListener("scroll", function (e) {
					scrollDis(e);
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

				/****************************/
				/* Mockup scroll animations */
				/****************************/

				// var top_imac_svg = $('.md-imac .md-screen svg');
				// var top_imac_svg_size = $('.md-imac .md-screen svg').height();
				// var top_imac_size = $('.md-imac .md-screen').height();
				// var top_imac_toScroll = top_imac_svg_size - top_imac_size;

				// (function topImacScrollUpDownloop() {

				// 	console.log('dqdqsdsqdqdqs');

				// 	$('.md-imac .md-screen svg').animate({

				// 		step: (now, fx) => {
				// 			console.log('$(this)', $(this));
				// 			$(this).css('transform', 'translateY(-' + top_imac_size + ')');
				// 		}
				// 	}, { //.animate takes 2 args: direction, distance in px
				// 		duration: 3000, //duration is ms
				// 		complete: function() {
				// 			$('.md-imac .md-screen svg').animate({
				// 				step: (now, fx) => {
				// 					$(this).css('transform', 'translateY(0)');
				// 				}
				// 			}, {
				// 				duration: 3000,
				// 				complete: topImacScrollUpDownloop
				// 			});
				// 		}
				// 	});
				// })();

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

				/* Smooth anchor scroll from css-tricks */
				// Select all links with hashes
				// only tablet because of pagepiling
				// $('a[href*="#"]')
				// 	// Remove links that don't actually link to anything
				// 	.not('[href="#"]')
				// 	.not('[href="#0"]')
				// 	.click(function(event) {
				// 		// On-page links
				// 		if (
				// 			location.pathname.replace(/^\//, "") ==
				// 				this.pathname.replace(/^\//, "") &&
				// 			location.hostname == this.hostname
				// 		) {
				// 			// Figure out element to scroll to
				// 			var target = $(this.hash);
				// 			target = target.length
				// 				? target
				// 				: $("[name=" + this.hash.slice(1) + "]");
				// 			// Does a scroll target exist?
				// 			if (target.length) {
				// 				// Only prevent default if animation is actually gonna happen
				// 				event.preventDefault();
				// 				$("html, body").animate(
				// 					{
				// 						scrollTop: target.offset().top
				// 					},
				// 					1000,
				// 					function() {
				// 						// Callback after animation
				// 						// Must change focus!
				// 						var $target = $(target);
				// 						$target.focus();
				// 						if ($target.is(":focus")) {
				// 							// Checking if the target was focused
				// 							return false;
				// 						} else {
				// 							$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
				// 							$target.focus(); // Set focus again
				// 						}
				// 					}
				// 				);
				// 			}
				// 		}
				// 	});
			});
		})(undefined, jQuery);
	}, {}] }, {}, [1]);
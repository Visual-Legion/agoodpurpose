// if ($(".gmaps").length > 0) {
// 	const {gmaps} = require('./maps');
// }

// const {cookie} = require('./cookie');
// const {contact} = require('./contact');

const { SmoothScrolling } = require("./SmoothScrolling");

(function(root, $, undefined) {
	"use strict";

	$(() => {
		// DOM ready, take it away
		console.log("JS/JQ Ready v.5 ");

		/* Loader */
		$(window).on("load", function(e) {
			scrollDis(e);
			console.log("Window loaded ");
			setTimeout(() => {
				$(".loader-rectangle").toggleClass("animate");

				//fadeout text whils square animation is playing
				setTimeout(() => {
					$(".loader").fadeOut("slow");
				}, 250);

				//show messenger chat 4secs after load animation has finished
				setTimeout(() => {
					const {
						FacebookMessenger
					} = require("./FacebookMessenger");
				}, 4000);
			}, 4000);
		});

		let segments = document.querySelectorAll(".segment");
		let segmentHeight = 15;

		let inView = element => {
			// get window height
			let windowHeight = window.innerHeight;
			// get number of pixels that the document is scrolled
			let scrollY = window.scrollY || window.pageYOffset;

			// get current scroll position (distance from the top of the page to the bottom of the current viewport)
			let scrollPosition = scrollY + windowHeight;
			// get element position (distance from the top of the page to the bottom of the element)
			let elementPosition =
				element.getBoundingClientRect().top + scrollY + segmentHeight;

			// is scroll position greater than element position? (is element in view?)
			if (scrollPosition > elementPosition) {
				return true;
			}

			return false;
		};

		let animateLines = () => {
			// is element in view?
			segments.forEach(element => {
				if (inView(element)) {
					// element is in view, add class to element
					element.classList.add("animate");
				}
			});
		};

		let scrollDis = e => {
			const targets = document.querySelectorAll(".scroll");
			var scrolled = window.pageYOffset;

			targets.forEach(target => {
				let pos = window.pageYOffset * target.dataset.rate;
				// console.log("target", target);
				// console.log("target.dataset.rate", target.dataset.rate);
				target.style.transform = "translate3d(0px," + pos + "px,0px)";
			});
		};

		window.addEventListener("scroll", e => {
			scrollDis(e);
			animateLines();
		});

		// $(".see-examples a, button.see-examples").click(e => {
		// 	e.preventDefault();
		// 	$(".navs_wrapper nav").toggleClass("active");
		// });

		// messenger
		$("a.messenger").click(e => {
			e.preventDefault();
			jQuery(".fb_customer_chat_bounce_out_v2")
				.removeClass("fb_customer_chat_bounce_out_v2")
				.addClass("fb_customer_chat_bounce_in_v2")
				.css("max-height", "100%");
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
		hamburger.click(e => {
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
		$("a").on("click", function(event) {
			var hash = this.hash;
			// Is the anchor on the same page?
			if (
				hash &&
				this.href.slice(0, -hash.length - 1) ==
					location.href.slice(0, -location.hash.length - 1)
			) {
				var scrollTo = $(hash).offset().top;
				var bodyHeight = $("body").height();
				var windowHeight = $(window).height();
				if (bodyHeight - windowHeight < scrollTo) {
					scrollTo = bodyHeight - windowHeight;
				}

				$root.animate(
					{
						scrollTop: scrollTo
					},
					"normal",
					function() {
						location.hash = hash;
						// console.log("done");
						setTimeout(() => {}, 1000);
					}
				);
				return false;
			}
		});
	});
})(undefined, jQuery);

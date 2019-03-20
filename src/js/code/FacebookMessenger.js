/* Cookie */

var FacebookMessenger = {};

(function(root, $, undefined) {
	"use strict";

	$(() => {
		$("footer").after(`<div id='fb-root'></div>
					<script>(function(d, s, id) {
					  var js, fjs = d.getElementsByTagName(s)[0];
					  js = d.createElement(s); js.id = id;
					  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
					  fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));</script>
					<div class='fb-customerchat'
					  attribution="wordpress"
					  page_id='571666800020233'
					  theme_color='#dde8e2'
				  >
					>
				  </div>`);
	});
})(undefined, jQuery);

module.exports = {
	FacebookMessenger
};

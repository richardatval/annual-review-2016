$(document).ready(function() {
	setTimeout(func, 1000);
	function func() {
		$('body').addClass('loaded');
	}
	$('.animation-wrap').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('is-in-view');
		} else {
		}
	});
	
	$('h1.title').fitText(0.84, { minFontSize: '75px' });
	$('h3.subtitle').fitText(1.6, { minFontSize: '30px' });
});

(function(jQuery) {
	jQuery.mark = {
		jump: function(options) {
			var defaults = {
				selector: 'a.scroll-on-page-link'
			};
			if (typeof options == 'string') {
				defaults.selector = options;
			}

			options = jQuery.extend(defaults, options);
			return jQuery(options.selector).click(function(e) {
				var jumpobj = jQuery(this);
				var target = jumpobj.attr('href');
				var thespeed = 1000;
				var offset = jQuery(target).offset().top;
				jQuery('html,body').animate({
					scrollTop: offset
				}, thespeed, 'swing');
				e.preventDefault();
			});
		}
	};
})(jQuery);
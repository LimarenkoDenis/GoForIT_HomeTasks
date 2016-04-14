(function($) {
	$.fn.myCarousel = function(option) {
		var leftUIEl = $('.carousel-arrow-left');
		var rightUIEl = $('.carousel-arrow-right');
		var elementsList = $('.carousel-list');

		var pixelsOffset = 125;
		var currentLeftValue = 0;
		var elementsCount = elementsList.find('.carousel-element').length;
		var minimumOffset = -((elementsCount - 5) * pixelsOffset);
		var maximumOffset = 0;

		var defaults = {
			
		}
		var settings = $.extend(defaults, option );

		leftUIEl.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += 125;
				elementsList.animate({
					left: currentLeftValue + "px"
				}, 500);
			}
		});

		rightUIEl.click(function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= 125;
				elementsList.animate({
					left: currentLeftValue + "px"
				}, 500);
			}
		});
	};
})(jQuery);


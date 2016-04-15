(function($) {
	$.fn.myCarousel = function(option) {
		var defaults = {
			current:3,
			colorBtn: 'blue',
			// imgWidth: '50px'
		};

		var settings = $.extend(defaults, option );
		// var img = $('.carousel-element img');

		// 	img.css({
		// 		'width' : settings.imgWidth
		// 	})

		var widthElem = $('.carousel-element').width();
		var elementsWrap = $('.carousel-list');
		var count = $('.carousel-element').length - settings.current; 
		count = count * widthElem;
		console.log(count);

		elementsWrap.before('<div class="carousel-arrow-left btn"><span>Влево</span></div>');
		elementsWrap.after('<div class="carousel-arrow-right btn"><span>Вправо</span></div>');

		var leftBtn = $('.carousel-arrow-left');
		var rightBtn = $('.carousel-arrow-right');
		var btn = $('.btn');

		elementsWrap.wrap('<div class="carousel-hider"></div>');

		var currentLeftValue = 0;
		var minimumOffset = -count ;
		var maximumOffset = 0;
// debugger

		leftBtn.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += widthElem;
				elementsWrap.animate({
					left: currentLeftValue + "px"
				}, 100);
			}
		});

		rightBtn.click(function() {
			// debugger
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= widthElem;
				elementsWrap.animate({
					left: currentLeftValue + "px"
				}, 100);
			}
		});

		btn.css({
			'background': settings.colorBtn
		})
	};
})(jQuery);


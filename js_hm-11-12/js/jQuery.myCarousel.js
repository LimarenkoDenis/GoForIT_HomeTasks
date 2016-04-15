(function($) {
	$.fn.myCarousel = function(option) {
		var defaults = {
			colorBtn: '#fff',
			imgWidth: '150px'
		};

		var settings = $.extend(defaults, option);

		$('.carousel-element img').css({
			'width': settings.imgWidth
		})

		var widthElem = $('.carousel-element').width();
		var elementsWrap = $('.carousel-list');

		elementsWrap.before('<div class="carousel-arrow-left btn"><span>Влево</span></div>');
		elementsWrap.after('<div class="carousel-arrow-right btn"><span>Вправо</span></div>');
		elementsWrap.wrap('<div class="carousel-hider"></div>');

		var widthHider = $('.carousel-hider').width();
		var count = $('.carousel-element').length;
		count = count * widthElem - widthHider;


		var leftBtn = $('.carousel-arrow-left');
		var rightBtn = $('.carousel-arrow-right');
		var btn = $('.btn');


		var currentLeftValue = 0;
		var minimumOffset = -count;
		var maximumOffset = 0;

		leftBtn.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += widthElem;
				elementsWrap.animate({
					left: currentLeftValue + "px"
				}, 100);
			}
		});

		rightBtn.click(function() {
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
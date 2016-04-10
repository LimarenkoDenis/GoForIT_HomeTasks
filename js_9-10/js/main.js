(function($) {

// Function of changing the type and value of the checkbox 
//el - span container for normal checkbox input   
    function changeCheck(el) {
        var el = el,
            input = el.find("input").eq(0);
        if (!input.attr("checked")) {
            el.css("background-position", "0 -17px");
            input.attr("checked", true)
        } else {
            el.css("background-position", "0 0");
            input.attr("checked", false)
        }
        return true;
    }

//if the attribute is set to checked, change the view of the checkbox
    function changeCheckStart(el) {
        var el = el,
            input = el.find("input").eq(0);
        if (input.attr("checked")) {
            el.css("background-position", "0 -17px");
        }
        return true;
    }

//RESPONSIVE CAROUSEL
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function() {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
//END OF RESPONSIVE CAROUSEL

    //CUSTOM SELECT
        $('select').styler({
            selectSearch: true,
            selectSearchLimit: 5
        });
        $('input').attr('class', 'styler');

    //CASTOTM CHECKBOX
        $(".niceCheck").mousedown(function() {
            changeCheck($(this));
        });
        $(".niceCheck").each(function() {
            changeCheckStart($(this));
        });


    // DROPDOWN MENU
        $('.dropdown').hover(
            function() {
                $(this).children('.sub-menu').stop( false, false ).slideDown(400);
            },
            function() {
                $(this).children('.sub-menu').stop( false, false ).slideUp(400);
            }
        );
    //END OF DROPDOWN MENU 

    });
})(jQuery);
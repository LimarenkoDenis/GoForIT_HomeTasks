(function($) {
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
    });
})(jQuery);


$(function() {
    $('select').styler({
        selectSearch: true,
        selectSearchLimit: 5
    });
    $('input').attr('class', 'styler');
});



//checkbox

jQuery(document).ready(function() {
    jQuery(".niceCheck").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
        function() {
            changeCheck(jQuery(this));
        });
    jQuery(".niceCheck").each(
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        function() {
            changeCheckStart(jQuery(this));
        });
});

/* 
    функция смены вида и значения чекбокса
    el - span контейнер дял обычного чекбокса
    input - чекбокс
*/
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

/*     если установлен атрибут checked, меняем вид чекбокса*/
function changeCheckStart(el) {
    var el = el,
        input = el.find("input").eq(0);
    if (input.attr("checked")) {
        el.css("background-position", "0 -17px");
    }
    return true;
}



$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
}); // end ready
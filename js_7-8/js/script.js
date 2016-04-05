$(function(){
//forms hints
   $('input').on('mouseenter', function(){
   		$(this).siblings('.hint').animate({opacity: "show"}, "fast");
   });
   $('input').on('mouseleave', function(){
   		$(this).siblings('.hint').animate({opacity: "hide"}, "fast");
   });
   $('.btnHelp').on('click',function(){
   		$('.hint').show('fast');
   });

// tabs
   $(".link").on('click', function () {
        $(".link").removeClass("is-current");
        $(this).addClass("is-current");        
        $(".content").hide()
        $($(this).attr("href")).show();
   });
});


      // $(".content").hide().removeClass('is-active');
      // $($(this).attr("href")).show().addClass('is-active');
      // var i = $(this).attr('href');
      // $(i).show();






// это способ с visibility, opacity и transition. в  сss раскомитить
// $(function(){
//    $('input').on('mouseenter', function(){
//    		$(this).siblings('.hint').addClass('show');
//    });
//    $('input').on('mouseleave', function(){
//    		$(this).siblings('.hint').removeClass('show')
//    });
//    $('.btnHelp').on('click',function(){
//    		$('.hint').addClass('show');
//    })
// });

// остальные варианты решения

// $(function(){
//    $('input').hover(function(){
//    		$(this).siblings('span').show('2000');
//    },
//    function () {
//    		$(this).siblings('span').hide('1000');
//    });
// });

// $(function(){
//    $('input').on('mouseenter', function(){
//    		$(this).siblings('span').show();
//    });
//    $('input').on('mouseleave', function(){
//    		$(this).siblings('span').hide();
//    });
//    $('.btnHelp').on('click',function(){
//    		$('.tip').show('fast');
//    })
// });
$(function() {
   'use strict;'
//localStorage 

   //   var data = {
   //   pageTitle: 'Тест по програмированию',

   //   categories:[
   //   {
   //     categoryName : "Мальчик заплатил за бутылку с пробкой 11 рублей. Бутылка стоит на 10 рублей больше, чем пробка. Сколько стоит пробка? ",

   //     variant : [
   //       '1грн',
   //       '50 копеек',
   //       '2грн'
   //     ],
   //     answer:'12',
   //     inputName: ['11','12','13']

   //   },
   //   {
   //     categoryName : "По чему ходят часто, а ездят редко? ",

   //     variant : [
   //       'По лестнице',
   //       'По дороге',
   //       'По полю'
   //     ],
   //     answer:'21',
   //     inputName: ['21','22','23']
   //   },
   //   {
   //     categoryName : "Идет то в гору, то с горы, но остается на месте. ",

   //     variant : [
   //       'Часы',
   //       'Дорога',
   //       'Дом'
   //     ],
   //     answer:'32',
   //     inputName: ['31','32','33']
   //   }
   //   ],
   //   result: "Проверить мои результаты"
   // }



   // localStorage.setItem('data', JSON.stringify(data));

   // var test = localStorage.getItem('data');
   // test = JSON.parse(test);
   // console.log(test);


   var page = localStorage.getItem('data');
   console.log(page);

   var myData = JSON.parse(page);
   console.log(myData);

//end of localStorage end object



//tamplate 

   var html = $('#test').html();
   var $body = $('body');

   var content = tmpl(html, {
      data: myData
   });

   $body.append(content);

//end tamplate


//modal window
   var sucsess;

   var $overlay;
   var $modal = $('.modal');

   function showModal(e) {
      e.preventDefault();
      $overlay = $('<div class="overlay"></div>');
      $body.append($overlay);
      $overlay.one('click', hideModal);
      $modal.addClass('show');

      //verify

      $('.block').each(function(){
         var that = $(this);
         console.log(that);
         that.find('ul li').each(function(){
            var check = $(this).find('input')
         })
      });
   };

   function hideModal() {
      $overlay.remove();
      $modal.removeClass('show')
   }

   $('.js-verify').on('click', showModal);
//end of modal window

   





});








// var sucsess;

//    var $overlay;
//    var $modal = $('.modal');

//    function showModal(e) {
//       e.preventDefault();
//       $overlay = $('<div class="overlay"></div>');
//       $body.append($overlay);
//       $overlay.one('click', hideModal);
//       $modal.addClass('show');
      
//       if (sucsess){
//          var b = $('<div class="true"></div>');
//          $modal.append(b);
//          b.html( "<p>Успешно</p>" );
//       }else{
//          var b = $('<div class="true"></div>');
//          $modal.append(b);
//          b.html( "<p>Не успешно</p>" );
//       }
//    };

//    function hideModal() {
//       $overlay.remove();
//       $modal.removeClass('show')
//    }
//     $('.js-verify').on('click', checkAnswer);
//    $('.js-verify').on('click', showModal);
// //end of modal window




//    var name = [];
//    $('input').on('change', function () {
//       if($(this).is(':checked') ){
//          name.push($(this).attr('name')); 
//       }
//    });

//    function checkAnswer () {

//       for (var i = 0; i < myData.categories.length; i ++){
//          console.log(name[i]);
//          console.log(myData.categories[i].answer);

//          if (name[i] == myData.categories[i].answer) {
//             sucsess = true;
//             // debugger
//          }else{
//             sucsess = false;
//             break
//          }
//       }
//       console.log(sucsess);
//    }
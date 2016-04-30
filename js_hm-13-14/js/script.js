$(function() {
   'use strict;'

   var data = {
      pageTitle: 'Тест по програмированию',

      categories: [{
         questionName: "Мальчик заплатил за бутылку с пробкой 11 рублей. Бутылка стоит на 10 рублей больше, чем пробка. Сколько стоит пробка? ",
         variant: [{
            answer: '1грн',
            rigth: false
         }, {
            answer: '50 копеек',
            rigth: true
         }, {
            answer: '2грн',
            rigth: false
         }],
         inputName: ['11', '12', '13']
      }, {
         questionName: "По чему ходят часто, а ездят редко? ",
         variant: [{
            answer: 'По лестнице',
            rigth: true
         }, {
            answer: 'По дороге',
            rigth: true
         }, {
            answer: 'По полю',
            rigth: false
         }],
         inputName: ['21', '22', '23']
      }, {
         questionName: "Идет то в гору, то с горы, но остается на месте. ",

         variant: [{
            answer: 'Часы',
            rigth: true
         }, {
            answer: 'Дорога',
            rigth: true
         }, {
            answer: 'Дом',
            rigth: false
         }],
         inputName: ['31', '32', '33']
      }],
      result: "Проверить мои результаты"
   };
   localStorage.setItem('data', JSON.stringify(data));
   var page = localStorage.getItem('data');
   var myData = JSON.parse(page);
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
   var $overlay;
   var $modal = $('.js-modal');
   var $close = $('.js-close');
   var $result = $('.js-result');

   function showModal(e) {
      e.preventDefault();
      $close.one('click', hideModal);

      $overlay = $('<div class="overlay"></div>');
      $body.append($overlay);
      $modal.addClass('show');

      // FIND ALL INPUT
      $('.block').each(function() {
         var $that = $(this);
         $that.find('input[type="checkbox"]');
      });

      // Find default correct answers
      var rightAnswers = [];
      for (var i = 0; i < myData.categories.length; i++) {
         for (var j = 0; j < myData.categories[i].variant.length; j++) {
            var currentAnswer = myData.categories[i].variant[j].rigth;
            rightAnswers.push(currentAnswer);
         }
      }

      //collected user answers
      var givenAnswers = [];
      $('input[type="checkbox"]').each(function() {
         if ($(this).prop('checked')) {
            givenAnswers.push(true);
         } else {
            givenAnswers.push(false);
         }
      });

      var result = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
      if (result) {
         $result.text('Congratulations, successfully!')
      } else {
         $result.text('Unsuccessful');
      }

      //delete checked
      $('input[type="checkbox"]').each(function() {
         $(this).removeAttr("checked");
      });

   };

   function hideModal() {
      $overlay.remove();
      $modal.removeClass('show')
   }

   $('.js-verify').on('click', showModal);
});
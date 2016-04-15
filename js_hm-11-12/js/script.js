$(function() {
    $('.carousel-list').myCarousel();
    
    var html = $('#test').html();
    var articles = [
      {
          title: 'News',
          firstName: 'Denis',
          lastName: 'Limar',
          email: 'limarden.com',
          more: 'https://www.google.com',
          article: 'Nisi voluptatum, esse vitae laboriosam libero expedita ea vel eius, ullam quis assumenda, quia repudiandae, neque natus omnis in consequatur at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, tempore!'
      }, 
      {
          title: 'Sports',
          firstName: 'Dana',
          lastName: 'Cart',
          email: 'dancart@gmail.com',
          more: 'https://www.yandex.com',
          article: 'Eveniet quam ut natus harum molestias reiciendis veritatis vel ipsa earum ex laudantium, quas atque commodi asperiores distinctio quae incidunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse, officia commodi quis maxime laborum est. Possimus, illum voluptate nostrum.'
      }, 
      {
          title: 'The weather',
          firstName: 'Danil',
          lastName: 'Moroz',
          email: 'danbalan@mail.ru',
          more: 'https://mail.ru',
          article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellendus eius eaque minus quia adipisci delectus, voluptatem consectetur tempore dolorem!'
      }
    ];

    var content = tmpl(html, {
        data: articles
    });

    $('body').append(content);



});

var data = {
	pageTitle: 'Тест по програмированию',

	categories:[
	{
		categoryName : "1. Вопрос #1",

		variant : [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['11','12','13']
		
	},
	{
		categoryName : "2. Вопрос #2",

		variant : [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['21','22','23']
	},
	{
		categoryName : "3. Вопрос #3",

		variant : [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['31','32','33']
	}
	],
	result: "Проверить мои результаты"

	
}


	for(var i = 0; i < data.categories.length; i++){
			console.log( data.categories[i].categoryName );

		for(var j = 0; j < data.categories[i].variant.length; j++) {
			console.log( data.categories[i].variant[j] );
		}
	}

var page = {
	buildTitle : function () {
		var wrap = document.createElement('form');
		wrap.classList.add('wrapper');
		var body = document.querySelector('body');
		document.body.insertBefore(wrap, body.children[0]);

		var h1 = document.createElement('h1');
		wrap.appendChild(h1);
		h1.innerHTML = data.pageTitle;
	},
	buildQuestion : function () {

		for(var i = 0; i < data.categories.length; i++){
			var wrapper = document.querySelector('.wrapper');
			var block = document.createElement('div');
			block.classList.add('block');
			wrapper.appendChild(block);
			
			var span = document.createElement('p');
			block.appendChild(span)
			span.innerHTML = data.categories[i].categoryName;

			console.log( data.categories[i].categoryName );

			var listWrap = document.createElement('ul');
			block.appendChild(listWrap);

			for(var j = 0; j < data.categories[i].variant.length; j++) {
				console.log( data.categories[i].variant[j] );

				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);
				var label = document.createElement('label');
				listItem.appendChild(label);
				// 	

				var input = document.createElement('input');
				label.appendChild(input);
				input.setAttribute('type', 'checkbox');
				input.setAttribute('name', data.categories[i].inputName[j])

				var spanLabel = document.createElement('span')
				label.appendChild(spanLabel);

				spanLabel.innerHTML = data.categories[i].variant[j];

			}
		}
	},
	btn: function () {
		var block = document.querySelector('.wrapper');
		var btn = document.createElement('input');
		block.appendChild(btn);
		btn.setAttribute('type', 'submit');
		btn.classList.add('btn', 'btn-primary');
		btn.value = data.result;
	}

}

page.buildTitle();
page.buildQuestion();
page.btn();
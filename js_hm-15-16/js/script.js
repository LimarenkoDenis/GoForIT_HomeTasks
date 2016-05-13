function GoogleCallback(jqueryObj, data) {

	var resultObj = data.results;
	console.log('data', resultObj);
	$('.js-result').find('li').remove();

	for (var i = 0; i < resultObj.length; i++) {
		console.log(resultObj[i]);
		var item = '<li class="item">' +
			'<a class="title" href="' + resultObj[i].url + '" target="_blank">' + resultObj[i].title + '</a>' +
			'<p class="contentBox">' + resultObj[i].content + '</p>' +
			'</li>';

		$('.js-result').append(item);
	}
}

$(function() {
	function search() {
		var inputTxt = $('.js-input').val();

		$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + inputTxt + '&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			success: function(data) {
			}
		});
	}

	$('body').on('click', '.js-btn', function() {
		search();
	});
	$(document).keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
			search();
		}
	});


	// part two
	function Human(name, age, sex, height, weight){
	  this.name = name;
	  this.age = age;
	  this.sex = sex;
	  this.height = height;
	  this.weight = weight
	}

	Human.prototype.constructor = Human;

	function Worker(name, age, sex, height, weight, job, salary){
	  Human.apply(this, arguments);
	  this.job = job;
	  this.salary = salary;
	}

	Worker.prototype = Object.create(Human.prototype);

	Worker.prototype.work = function(){
	  console.log("I'm work");
	}

	Worker.prototype.constructor = Worker;

	function Student(name, age, sex, height, weight, study, stipend){
	  Human.apply(this, arguments);
	  this.study = study;
	  this.stipend = stipend;
	}

	Student.prototype = Object.create(Human.prototype);

	Student.prototype.watchTvShows = function(){
	  console.log("I'm watch TV shows");
	}

	Student.prototype.constructor = Student;

	worker1 = new Worker('Petro', 24, 'male', '170cm', '80kg', 'it', '200$');
	console.log(worker1);
	worker2 = new Worker('Коля', 30, 'мужской', '160cm', '60kg', 'завод', '2 рубля');
	console.log(worker2);
	student1 = new Student('Петя', 19, 'мужской', '170cm', '90kg', 'студент института', '4 рубля');
	console.log(student1);
});

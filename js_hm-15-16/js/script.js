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
				// console.log(data);
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
	function Human(name, age, sex, height, weight) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.height = height;	
		this.weight = weight;
	}

	function Worker(workPlace, salary) {
		this.workPlace = workPlace;
		this.salary = salary;
	}	
	Worker.prototype.toWork = function () {
		return 'go work!';
	}


	function Student (studyPlace, grant) {
		this.studyPlace = studyPlace;
		this.grant = grant;
	}
	Student.prototype.watch = function () {
		console.log('time to watch TV shows');
	}


	// Worker.prototype = Object.create(Human.prototype);
	// Student.prototype = Object.create(Human.prototype);

	

	var developer = new Worker('it', 300);
	developer = new Human('Kolia', 20, 'male', 190, 100);



	// console.dir(developer);
	// console.log(developer.age);









	function Human() {
		this.name = 'Dansis';
		this.age = 19;
		this.sex = 'male';
		this.height = 190
		this.weight = 90;
	}

	function Worker(workPlace, salary) {
		this.workPlace = workPlace;
		this.salary = salary;
	}	
	Worker.prototype.toWork = function () {
		return 'go work!';
	}


	function Student (studyPlace, grant) {
		this.studyPlace = studyPlace;
		this.grant = grant;
	}
	Student.prototype.watch = function () {
		console.log('time to watch TV shows');
	}


	Worker.prototype = new Human();
	Student.prototype = new Human();

	var worker1 = new Worker('It', 200);

	console.log(worker1.name);
	console.log(worker1.toWork());
});





// function Human(name, age, sex, height, weight) {
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// 	this.height = height;
// 	this.weight = weight;
// }



// function Worker(workPlace, salary) {
// 	this.workPlace = workPlace;
// 	this.salary = salary;
// 	Human.apply(this, arguments);
// }
// inherit(Worker, Human);
// Worker.prototype.toWork = function() {
// 	return  this.name + ', go to work!';
// }


// function Student(studyPlace, grant) {
// 	this.studyPlace = studyPlace;
// 	this.grant = grant;
// 	Human.apply(this, arguments);
// }
// inherit(Student, Human);
// Student.prototype.watch = function() {
// 	return  this.name + ', time to watch TV shows';
// }


// function inherit(C, P) {
// 	var F = function() {};
// 	F.prototype = P.prototype;
// 	C.prototype = new F();
// }

// var developer = new Worker('It', '700$', "Ivan", 21, 'male', 190, 60);
// var copywriter = new Worker('It', '300$', "Danis", 32, 'male', 160, 80);
// var economist = new Student("Lena", 20, 'girl', 176, 50 ,'ХНУ', 0 );

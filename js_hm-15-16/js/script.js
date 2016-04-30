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
			// AJAX-specified URL
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + inputTxt + '&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			// Handle the success event
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
		this.toWork = function () {
			return 'go work!';
		}
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
	Student.prototype = new Worker();

	var denis = new Human('danis', 19, 'male', 175, 65, 43);
	var worker = new Worker('It' , 1200);
	var student = new Student('Kpi', 0);

	// console.log(worker.name);
	// console.log(student.salary);
	// console.log(student.toWork());
});
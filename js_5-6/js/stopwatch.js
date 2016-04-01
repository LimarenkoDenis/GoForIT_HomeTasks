(function() {
	var timer = document.querySelector('.timer');
	var start = document.querySelector('.start');
	var clear = document.querySelector('.clear');
	var wrapper = document.querySelector('.wrapper');

	timer.innerHTML = '00:00:000';
	start.innerHTML = 'Start';
	clear.innerHTML = 'Clear';

	function startTimer() {
		id = setInterval(function() {
			timer.innerHTML = calculate();
		}, 1);

		start.removeEventListener('click', startTimer);
		start.addEventListener('click', pauseTimer);
		start.innerHTML = "Pause..";
	}

	function pauseTimer() {
		clearInterval(id);
		start.addEventListener('click', startTimer);
		start.innerHTML = 'Cont..';
	}


	start.addEventListener('click', startTimer);
	clear.addEventListener('click', stop);

	function stop() {

		clearInterval(id);
		timer.innerHTML = '00:00:000';
		start.innerHTML = 'Start';
		start.addEventListener('click', startTimer);
		milliseconds = 0;
		seconds = 0;
		minutes = 0;

		date = new Date(0, 0);

		var block = document.querySelectorAll('.block');
		for (var i = 0; i < block.length; i++) {
			wrapper.removeChild(block[i])
		};
	};

	var milliseconds = 0;
	var seconds = 0;
	var minutes = 0;

	var id;
	var millisecondsTime = 0;
	var date = new Date(0, 0);


	function calculate() {

		date.setMilliseconds(date.getMilliseconds() + 4);
		var milliseconds = date.getMilliseconds();

		if (milliseconds === 996) {
			milliseconds = 0;
			millisecondsTime = "000";
			++seconds;
		}
		if (milliseconds >= 100) {
			millisecondsTime = milliseconds;
		}
		if (milliseconds < 100) {
			millisecondsTime = "0" + Number(milliseconds);
		}
		if (milliseconds < 10) {
			millisecondsTime = "0" + "0" + Number(milliseconds);
		}
		if (seconds >= 60) {
			seconds = 0;
			++minutes;
		}
		if (seconds < 10) {
			seconds = "0" + Number(seconds);
		}
		if (minutes < 10) {
			minutes = "0" + Number(minutes);
		}

		++milliseconds;
		return minutes + ':' + seconds + ':' + millisecondsTime;
	}

	var btnSplit = document.querySelector('.btn');

	btnSplit.onclick = function() {
		var block = document.createElement('div');
		block.className = 'block';
		wrapper.appendChild(block);

		block.innerHTML = minutes + ':' + seconds + ':' + millisecondsTime;
		if (timer.innerHTML == '00:00:000') {
			block.innerHTML = '00:00:000';
		}
	}
})();
// ПЕРВАЯ ЧАСТЬ
function pow(userInput, userPow) {
  var result = 1;

  for (var i = 0; i < userPow; i++) {
    result *= userInput;
  }

  return result;
}

function minusPow(userInput, userPow) {
  var result = 1;

  for (var i = 0; i > userPow; i--) {
    result *= userInput;
  }
  
  result = 1 / result;
  return result;
}

var userInput = prompt('Введите число', '');
var userPow = prompt('Введите степень', '');

if (userPow < 0) {
  console.log(minusPow(userInput, userPow));
} else {
  console.log( pow(userInput, userPow) );
}




// ВТОРАЯ ЧАСТЬ

var arrName = [];
var userName = prompt('Теперь введите свое имя', '');

function find(array) {
	for (var i = 0; i < array.length; i++) {
     if ( array[i] == userName ) return true;
  }

  return false;
}

for(var x = 0; x < 5; x++) {
  var inputName = prompt('ВВедте имя', '')
  
  arrName[x] = inputName;

  console.log( arrName[x] );
}

if( find(arrName) == true ){
  alert(userName+" Вы успешно вошли")
} else{
  alert('Ошибка')
}	
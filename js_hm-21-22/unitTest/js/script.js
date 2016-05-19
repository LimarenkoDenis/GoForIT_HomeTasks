var app = {
    userInput : +prompt('Введите число', ''),
    userPow : +prompt('Введите степень', ''),

    pow: function(userInput, userPow) {
        var result = 1;

        for (var i = 0; i < userPow; i++) {
            result *= userInput;
        };

        return result;
    },

    minusPow:function (userInput, userPow) {
        var result = 1;

        for (var i = 0; i > userPow; i--) {
            result *= userInput;
        }

        result = 1 / result;
        return result;
    }

};

if (app.userPow < 0) {
    console.log(app.minusPow(app.userInput, app.userPow));
} else {
    console.log(app.pow(app.userInput, app.userPow));
};

module.exports = app;

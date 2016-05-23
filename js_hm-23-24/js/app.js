requirejs.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
	},
	shim:{
		'jquery':{
			exports:'jQuery'
		}
	}
});

require(
	[
		'jquery',
		'model', 
		'controller',
		'view'
	],
	function($, model, controller, view){
		console.log($);
		console.log(model);
		console.log(controller);

		console.log(Model);
		console.log(Controller);
		
		var arr = ['test1', 'test2', 'test3'];
		var  model1 = new Model(arr);
		var view1 = new View(model);
		var controller1 = new Controller(model, view);
	}
);
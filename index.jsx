var $ = require('jquery');


$(document).ready(function(){

	$('footer').html('( Don Shieh &copy; ' + new Date().getFullYear() + ' )');

	setTimeout(function(){
		$('#cssskills').removeClass('start');
	}, 500);

	setTimeout(function(){
		$('#works').removeClass('start');
	}, 1000);

	setTimeout(function(){
		$('#jsskills').removeClass('start');
	}, 1500);

	setTimeout(function(){
		$('#worksurroundings').removeClass('start');
	}, 2000);

// for animation
	// $(window).on('scroll', function(){
	// 	// console.log(window.pageYOffset);
	// 	if(window.pageYOffset > 0){
	// 		$('#selfpart').addClass('selfpart-nav');
	// 		$('body').addClass('fatPadding');

	// 	}

	// 	if(window.pageYOffset <= 0){
	// 		// console.log('alert!')
	// 		$('#selfpart').removeClass('selfpart-nav');
	// 		$('body').removeClass('fatPadding');

	// 	}
	// })

});
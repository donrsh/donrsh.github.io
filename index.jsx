var $ = require('jquery');

$(document).ready(function(){
	
	//remove 'start' classname to initialze the animation 
	(function(){
		var counter = 1;
		$('.infoBlock.start').each(function(){
			var self = this;
			setTimeout(function(){
				$(self).removeClass('start');
			}, counter * 500);
	
			counter ++;
		})
	})();

	//bind event on .itemTitle
	$('.itemTitle').on('click', function(){
		console.log('t!');
		$(this).siblings('.itemContent').toggleClass('show');
	});

	$('footer').html('( Don Shieh &copy; ' + new Date().getFullYear() + ' )');
});
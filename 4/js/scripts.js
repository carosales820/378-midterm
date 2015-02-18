// Change Day and Night reading modes


// Upon Clicking "Nightime"
// REF: http://api.jquery.com/click/

$('#night').click(function(){



	$('body').removeclass('day');
	$('body').addclass('night');
});


// remove `day` class
// REF: http://api.jquery.com/removeclass/

// Add `night` class
// REF: http://api.jquery.com/addclass/


// Upon Clicking "Daytime"
// REF: http://api.jquery.com/click/

$('#day').click(function(){
	$('body').removeclass('night');
	$('body').addclass('day');
});


// remove `night` class
// REF: http://api.jquery.com/removeclass/

// Add `day` class
// REF: http://api.jquery.com/addclass/
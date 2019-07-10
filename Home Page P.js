function scrollToPgTwo() {
	$('html,body').animate({
		scrollTop: $("#PgTwo").offset().top}, 700) 
	event.preventDefault(); // Prevents page from flashing before scrolling due to race condition
	// e.stopPropagation; //Home Page P.js:5 Uncaught ReferenceError: e is not defined
}
function scrollToPgThree() {
	$('html,body').animate({ scrollTop: $("#PgThree").offset().top}, 1400);
	event.preventDefault();
	// e.stopPropagation;
}
function scrollToPgFour() {
	$('html,body').animate({ scrollTop: $("#PgFour").offset().top}, 2100);
	event.preventDefault();
	// e.stopPropagation;
}
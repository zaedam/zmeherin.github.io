function fadein(str) {
    divId = '#' + str;
    /* Check the location of each desired element */
    $(divId).each( function(i){
            var bottom_of_object = $(divId).offset().top + (($(divId).outerHeight())/5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(divId).animate({'opacity':'1'}, 1000);
            }
    });
}

$(document).ready(function() {
    // Run this after 2 seconds of loading
    setTimeout(function(){ 
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.display = "block";
        document.body.style.background = "#e5e5e5";
        $('.PgOne').each( function(i){
            $(this).animate({'opacity':'1'}, 3000);
            console.log($(this));  
        });
    }, 1500);
    
    $(window).scroll( function() {
        fadein('main2', 'full'),
        fadein('ME'),
        fadein('main3'),
        fadein('Student'),
        fadein('RA'),
        fadein('C1'),
        fadein('TextEx'),
        fadein('CSSG'),
        fadein('Contact')
    });
});


function scrollToPgTwo() {
    $('html,body').animate({
        scrollTop: $("#PgTwo").offset().top}, 700) 
    event.preventDefault(); // Prevents page from flashing before scrolling due to race condition
    // e.stopPropagation; //Uncaught ReferenceError: e is not defined
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
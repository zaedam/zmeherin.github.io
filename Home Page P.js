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

function makeCharts() {
    docWidth = document.body.clientWidth;
    strwidth = docWidth.toString();
    console.log(strwidth);
    console.log(docWidth);

    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '50%',
            backgroundColor: 'rgb(50,50,50)',
            color: 'white',
            margin: [100, 100, 100, 100]
        },
        title: false,
        legend: {
            backgroundColor: '#e5e5e5',
            enabled: true,
            align: 'center',
            verticalAlign: 'top',
        },
        tooltip: { enabled: false },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '120%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 25
                    },
                    style: {
                        color: 'white',
                        textOutline: 'none',
                        fontWeight: 'normal',
                        fontSize: '25px'
                    }
                }
            }
        },
        series: [
        {
            name: 'Software',
            data: [
                { name: "AWS", value: 100 }, // 5
                { name: "Git", value: 300 }, // 6
                { name: "Python", value: 1000 }, // 10
                { name: "Java", value: 700 }, // 7 
                { name: "Javascript", value: 800 }, // 10
                { name: "C#", value: 600 }, // 8
                { name: "C++", value: 50 }, // 3
                { name: "PHP", value: 75 }, // 3
                { name: "Django", value: 1000 }, // 10
                { name: "HTML", value: 400 }, // 5
                { name: "CSS", value: 400 }, // 5
                { name: "React.js", value: 200 } // 3
            ],
            color: "rgba(95, 195, 227, .70)"
        }, 
        {
            name: 'Product',
            data: [
                { name: "USA", value: 5334.5 }, 
                { name: "Canada", value: 566 }, 
                { name: "Mexico", value: 456.3 }
            ],
            color: "rgba(255, 166, 166, .55)"
          }
        ]
    });    
}

$(document).ready(function() {
    // Run this after 2 seconds of loading
    setTimeout(function(){ 
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.display = "block";
        document.body.style.background = "#e5e5e5";

        // PgOne fades in
        $('.PgOne').each( function(i){
            $(this).animate({'opacity':'1'}, 3000);
        });

        makeCharts();
    }, 1500);
    
    $(window).scroll( function() {
        fadein('main2'),
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
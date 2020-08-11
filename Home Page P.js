var main5loaded = false;

function fadein(str) {
    divId = '#' + str;
    /* Check the location of each desired element */
    $(divId).each( function(i){
            var bottom_of_object = $(divId).offset().top + (($(divId).outerHeight())/5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // If the object is completely visible in the window, fade it in
            if( bottom_of_window > bottom_of_object ){
                $(divId).animate({'opacity':'1'}, 1000);
                
                // Additionally, make bubble chart if Skills section is visible
                if (str === 'main5' && main5loaded == false) {
                    makeBubbleChart();
                    main5loaded = true;
                }
            }
    });
}

function makeBubbleChart() {
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%',
            backgroundColor: 'rgb(50,50,50)',
        },
        title: false,
        legend: {
            backgroundColor: 'rgb(50,50,50)',
            enabled: true,
            align: 'center',
            verticalAlign: 'top',
    		symbolHeight: 30,
            symbolPadding: 15,
            itemMarginBottom: 30,
            itemWidth: 200,
            itemStyle: {
                'fontFamily': 'Raleway',
                'font-size':'30px',
                'color': 'white',
                'textOutline': 'none',
                'fontWeight': 'normal',
                'transition':'.5s',
            },
            itemHoverStyle: {
                'color': 'white',
                'font-size':'32px',
            }
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
                        fontSize: '25px',
                        fontFamily: 'Raleway',
                    }
                }
            }
        },
        series: [
        {
            name: 'Software',
            data: [
                { name: "AWS", value: 200 },
                { name: "Git", value: 300 },
                { name: "Python", value: 1000 },
                { name: "Java", value: 700 },
                { name: "Javascript", value: 800 },
                { name: "C#", value: 600 },
                { name: "C++", value: 50 },
                { name: "PHP", value: 75 },
                { name: "Django", value: 1000 },
                { name: "HTML", value: 350 },
                { name: "CSS", value: 350 },
                { name: "Bootstrap", value: 350 },
                { name: "React", value: 75 }
            ],
            color: "#9a5d24",
            marker: {
                fillOpacity: 1
            },
        }, 
        {
            name: 'Product',
            data: [
                { name: "USA", value: 5334.5 }, 
                { name: "Canada", value: 566 }, 
                { name: "Mexico", value: 456.3 }
            ],
            color: "#c0594a",
            marker: {
                fillOpacity: 1
            },
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

        main5loaded = false;
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
        fadein('Contact'),
        fadein('main5'),
        fadein('Bubbles')
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
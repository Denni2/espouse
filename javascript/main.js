var myFullpage = new fullpage('#content', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 1500,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 2000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true
});

/*
function animateHome (){
}


/*
function hoverMouse(id) {
    let val = document.getElementById(id);
    val.className = val.className.replace(' rounders', ' heart');
}
function clearMouse(id){
    let val = document.getElementById(id);
    val.className = val.className.replace(' heart', ' rounders');
}
*/
/*
 * the below code caters for the map in the code
 * and the timer that is yet to be implemented
 *

var day_zero = new Date ("November 10, 2018 10:30:00");

var countUpdate = setInterval(function () {
    var now = new Date().getTime();

    //get the difference between today and then

    var daysLeft = day_zero - now;

    // calculations
    var days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);

    // output

    //document.getElementById("countdown").innerHTML = ();

    // actions after countdown complete
    /*if (daysLeft <= 0){
        document.getElementById("countdown").innerHTML = ("WEDDING DAY!!!!!!");
    }*
    
});

//LatLng(-1.2299108, 36.853296)
// my api key: - AIzaSyAANZDGmMfdy8mH-s38Ylm08hO5fU08AA4

var map;
function initMap (){
    var latLng = {lat: -1.229218, lng: 36.853312};
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLng, 
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Ol Arabel'
    });
}
*/
//refresh all pages on reload

window.addEventListener('load', function () {
    Barba.Pjax.start();    
});

var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */

        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function () {
        /**
         * this.oldContainer is the HTMLElement of the old Container
         */

        return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function () {
        /**
         * this.newContainer is the HTMLElement of the new Container
         * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
         * Please note, newContainer is available just after newContainerLoading is resolved!
         */

        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility: 'visible',
            opacity: 0
        });

        $el.animate({ opacity: 1 }, 400, function () {
            /**
             * Do not forget to call .done() as soon your transition is finished!
             * .done() will automatically remove from the DOM the old Container
             */

            _this.done();
        });
    }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function () {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
};


//gallery area


let innerId = document.getElementById('img1');

function getImg (vals){
    alert("This is a funny day" + vals);
}

function getImg(innerId);

// wedding area 

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById('sixth');

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

var span;

function mouseHover(new_val) {
    new_val.addEventListener('mouseenter', function () {
        if (new_val.classList == 'info-bubble') {
            new_val.classList.remove('info-bubble');
            new_val.classList.add("info-bubbled");
        }
    });
    new_val.addEventListener('mouseleave', function () {
        if (new_val.className == 'info-bubbled') {
            new_val.classList.remove('info-bubbled');
            new_val.classList.add("info-bubble");
        }
    });
}
mouseHover(first);
mouseHover(second);
mouseHover(third);
mouseHover(fourth);
mouseHover(fifth);
mouseHover(sixth);

// insert modals 

function clicker(vals, mod_val){
    vals.onclick = function () {
        mod_val.style.display = 'block';    
    }
    span = mod_val;
    span.onclick = function () {
        mod_val.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == mod_val){
            mod_val.style.display = 'none';
        }
    }
}

// images
//clicker(im1, img1);


// wedding ideas
clicker(first, one);
clicker(second, two);
clicker(third, three);
clicker(fourth, four);
clicker(fifth, five);
clicker(sixth, six);

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
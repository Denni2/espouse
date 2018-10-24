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
    if (daysLeft < 0){
        document.getElementById("countdown").innerHTML = ("WEDDING DAY!!!!!!");
    }
    
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

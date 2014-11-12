function initialize_map() {
    var myLatlng = new google.maps.LatLng(41.359811, 2.061942);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        styles: [{
            stylers: [{
                gamma: 0.60
            }, {
                hue: "#dd0d0d"
            }, {
                invert_lightness: false
            }, {
                lightness: 2
            }, {
                saturation: -20
            }, {
                visibility: "on"
            }]
        }]
    }
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Citilab'
    });

    google.maps.event.addListener(marker, 'click', function() {
    });
}

$( document ).ready(function() {
    initialize_map();

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

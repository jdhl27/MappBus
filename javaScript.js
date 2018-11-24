/*--------------------------- ENLACES SUAVES*/

$(function () {

    $('a[href*=\\#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('*[id=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                jQuery('html,body').animate({scrollTop: targetOffset}, 1500);

            }
        }
    });
});


//-------------------------------------SCROLL NAV BAR
$(document).ready(function () {

    if ($(window).width() >= 768) {
        $(window).scroll(function () {

            if ($(this).scrollTop()) {
                $('.navbar').addClass('navbarScroll');
            } else {
                $('.navbar').removeClass('navbarScroll');
            }

        });
    }


    if ($(window).width() >= 768) {
        $(window).scroll(function () {

            if ($(this).scrollTop()) {
                $('.menu').addClass('menuScroll');
            } else {
                $('.menu').removeClass('menuScroll');
            }

        });
    }


});


/*   MENU HAMBURGUESA                       -------------------------------------------------------*/



$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');


});


var desplegado = false;
$('.hamburger').click(function(){
    if (desplegado==false) {
        $('.menu').css("left","4vw");

        desplegado = true;
    }
    else{

        $('.menu').css("left","104vw");

        desplegado = false;
    }
});


/*   MAPA SIN RUTAS ----------------------------------------------------------------------------------*/


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


    infoWindow = new google.maps.InfoWindow;


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

        map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }


}


/*    ------------------------------------------------------------------ RUTA TRANS MEDELLIN 284 */

function ruta284() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]


    });

    infoWindow = new google.maps.InfoWindow;

//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }


    var flightPlanCoordinates = [

        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion284").css("display", "block");
    $("#informacion288").css("display", "none");
    $("#informacion283").css("display", "none");


}


/*   --------------------------------------------------------------  RUTA TRANS MEDELLIN 283 */


function ruta283() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    infoWindow = new google.maps.InfoWindow;

//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#ff1300',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion283").css("display", "block");
    $("#informacion284").css("display", "none");
    $("#informacion288").css("display", "none");


}


/*   -------------------------------------------------------------- ---  RUTA TRANS MEDELLIN 288*/


function ruta288() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    infoWindow = new google.maps.InfoWindow;

//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }


    var flightPlanCoordinates = [
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#ff1300',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion288").css("display", "block");
    $("#informacion284").css("display", "none");
    $("#informacion283").css("display", "none");


}


/*   ------------------------------------------------------------------------- ENFOQUES PARA INFORMACION 284 */


/*   ENFOQUE SENA  */

function sena() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.3002273, lng: -75.5688634},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.3002273, lng: -75.5688634},
        map: map,
        icon: image
    });




    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}


/*   ENFOQUE ITM CASTILLA  */

function itmCastilla() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.293566, lng: -75.569044},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.293566, lng: -75.569044},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}



/*   ENFOQUE TERMINAL DEL NORTE  */

function terminalNorte() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.279882, lng: -75.571388},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.279882, lng: -75.571388},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}



/*   ENFOQUE CERRO VOLADOR  */

function cerroVolador() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.267976, lng: -75.576966},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.267976, lng: -75.576966},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}


/*   ENFOQUE UNIVERSIDAD LUIS AMIGO  */

function uniLuis() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.258900, lng:  -75.584128},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.258900, lng:  -75.584128},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}


/*   ENFOQUE ESTADIO  */

function estadio() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.258441, lng:  -75.586755},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.258441, lng:  -75.586755},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}



/*   ENFOQUE EXITO COLOMBIA  */

function exitoColombia() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.256362, lng:  -75.583204},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.256362, lng:  -75.583204},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}



/*   ENFOQUE UNIVERSIDAD NACIONAL SEDE EL VOLADOR  */

function uniNacionalVolador() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng:  -75.579330},
        // mapTypeId: 'roadmap'
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


//  GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var contentString = 'Mi Ubicación';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Mi ubicación',
                draggable: true,
                animation: google.maps.Animation.DROP,

            });
            marker.addListener('click', toggleBounce);


            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    infowindow.open(map, marker);

                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        // NAVEGADOR NO SOPORTA GEOLOCALIZACION
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: El servicio de geolocalización falló.' :
            'Error: Tu navegador no admite la geolocalización');
        infoWindow.open(map);
    }

// MARKER LUGARES DESTACADOS

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng:  -75.579330},
        map: map,
        icon: image
    });



    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng:  -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng:  -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng:  -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng:  -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng:  -75.569182},
        {lat: 6.309711, lng:  -75.569451},
        {lat: 6.307985, lng:  -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng:  -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng:   -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng:  -75.570755},
        {lat: 6.303285, lng:  -75.571055},
        {lat: 6.302518, lng:  -75.572121},
        {lat: 6.302418, lng:  -75.572207},
        {lat: 6.301994, lng:  -75.572442},
        {lat: 6.301601, lng:  -75.572637},
        {lat: 6.301572, lng: -75.572580},
        {lat: 6.300192, lng: -75.569817},
        {lat: 6.300288, lng: -75.569012},
        {lat: 6.301461, lng: -75.566276},
        {lat: 6.301013, lng: -75.566297},
        {lat: 6.297771, lng: -75.567166},
        {lat: 6.296780, lng: -75.567552},
        {lat: 6.296471, lng: -75.567606},
        {lat: 6.295543, lng: -75.567660},
        {lat: 6.295031, lng: -75.567960},
        {lat: 6.294253, lng: -75.568625},
        {lat: 6.293251, lng: -75.569129},
        {lat: 6.291449, lng: -75.569623},
        {lat: 6.288996, lng: -75.570513},
        {lat: 6.287396, lng: -75.570363},
        {lat: 6.287055, lng: -75.570406},
        {lat: 6.285370, lng: -75.570953},
        {lat: 6.283642, lng: -75.571811},
        {lat: 6.282949, lng: -75.572036},
        {lat: 6.279366, lng: -75.572637},
        {lat: 6.274940, lng: -75.573935},
        {lat: 6.270922, lng: -75.575680},
        {lat: 6.268085, lng: -75.576860},
        {lat: 6.266336, lng: -75.577246},
        {lat: 6.265728, lng: -75.577503},
        {lat: 6.263104, lng: -75.579338},
        {lat: 6.262635, lng: -75.579638},
        {lat: 6.261995, lng: -75.579863},
        {lat: 6.261515, lng: -75.579927},
        {lat: 6.260235, lng: -75.579788},
        {lat: 6.259830, lng: -75.579842},
        {lat: 6.256677, lng: -75.580938},
        {lat: 6.259012, lng: -75.585853},
        {lat: 6.258431, lng: -75.586153},
        {lat: 6.255968, lng: -75.580891},
        {lat: 6.253280, lng: -75.575553},
        {lat: 6.252805, lng: -75.575263},
        {lat: 6.252442, lng: -75.575150},
        {lat: 6.248839, lng: -75.575301}


    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000bff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);


}













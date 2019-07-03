



function validarCampos(form) {

    var nombre = document.getElementById('inputName').value;
    var direccion = document.getElementById('inputDireccion').value;
    var latitud = document.getElementById('inputLat').value;
    var longitud = document.getElementById('inputLng').value;
    var tipo = document.getElementById('inputType').value;
    var btnEnviar = document.getElementById('enviarDatos');



    if (nombre !="" && direccion !="" && latitud !="" && longitud !="" && tipo !="") {

        btnEnviar.disabled=false;

    }else{
        btnEnviar.disabled=true;
    }
}



/*---------------------------- CONEXION SERVIDOR FORMULARIOS SIN RECARGAR*/
$("#enviarDatos").click(function() {

    var nombre = document.getElementById('inputName').value;
    var direccion = document.getElementById('inputDireccion').value;
    var latitud = document.getElementById('inputLat').value;
    var longitud = document.getElementById('inputLng').value;
    var tipo = document.getElementById('inputType').value;
    var btnEnviar = document.getElementById('enviarDatos');

    var datos = "inputName=" + nombre + "&inputDireccion=" + direccion + "&inputLat=" + latitud + "&inputLng=" + longitud + "&inputType=" + tipo;

    if (nombre !== "" || direccion !== "" || latitud !== "" || longitud !== "" || tipo !== "") {
        btnEnviar.disabled=true;

         $.ajax({
             type:'post',
             url: 'registro.php',
             data: datos, //$('#formularioRegistroEmpresa').serialize()
             success: function(respuesta){
                 $('#answerExito').html(respuesta);
             }
         });


         nombre = document.getElementById('inputName').disabled = true;
         direccion = document.getElementById('inputDireccion').disabled = true;
         latitud = document.getElementById('inputLat').disabled = true;
         longitud = document.getElementById('inputLng').disabled = true;
         tipo = document.getElementById('inputType').disabled = true;
         /*btnEnviar.style.opacity = "0";
         btnEnviar.style.visibility = "hidden";*/
         btnEnviar.replace(/<[^>]*>?/g, '');
         $(btnEnviar).text();



    } else {
        console.log("mal");

    }


});

/*--------------------------- ENLACES SUAVES*/

$(function () {

    $('a[href*=\\#]').click(function () {

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

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

    if ($(window).width() >= 768) {
        $(window).scroll(function () {

            if ($(this).scrollTop()) {
                $('.titulo').addClass('tituloBlanco');
            } else {
                $('.titulo').removeClass('tituloBlanco');
            }

        });
    }


});


/* ESCONDIENDO MODAL CALIFICACION       ---------------------------------------------------------*/


var url = window.location.href;
if (url === "http://localhost:63342/MappBus/recomendaciones.html") {
    $(".contenido").css("display", "none")
    $("#btn-cerrar").css("display", "none")
    $(".modal").attr("style", "display: none !important")


}

if (url === "http://localhost:63342/MappBus/index.html") {
    $(".contenido").css("display", "none")
    $("#btn-cerrar").css("display", "none")
    $(".modal").attr("style", "display: none !important")

}


if (url === "http://localhost:63342/MappBus/index.html#inicio") {
    $(".contenido").css("display", "none")
    $("#btn-cerrar").css("display", "none")
    $(".modal").attr("style", "display: none !important")

}


if (url === "http://localhost:63342/MappBus/index.html#quienesSomos") {
    $(".contenido").css("display", "none")
    $("#btn-cerrar").css("display", "none")
    $(".modal").attr("style", "display: none !important")

}

if (url === "http://localhost:63342/MappBus/index.html#contactenos") {
    $(".contenido").css("display", "none")
    $("#btn-cerrar").css("display", "none")
    $(".modal").attr("style", "display: none !important")

}


/*   MENU HAMBURGUESA                       -------------------------------------------------------*/


$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');


});


var desplegado = false;
$('.hamburger').click(function () {
    if (desplegado == false) {
        $('.menu').css("left", "4vw");

        desplegado = true;
    }
    else {

        $('.menu').css("left", "104vw");

        desplegado = false;
    }
});


/*   MAPA SIN RUTAS ----------------------------------------------------------------------------------*/


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
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
                title: 'Mi Ubicación',
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
                title: 'Mi Ubicación',
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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
    $("#informacion254").css("display", "none");
    $("#informacion263").css("display", "none");
    $("#informacion261").css("display", "none");


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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
    $("#informacion254").css("display", "none");
    $("#informacion263").css("display", "none");
    $("#informacion261").css("display", "none");


}


/*   -------------------------------------------------------------- ---  RUTA PARIS 288*/


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
        strokeColor: '#fffc00',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion288").css("display", "block");
    $("#informacion284").css("display", "none");
    $("#informacion283").css("display", "none");
    $("#informacion254").css("display", "none");
    $("#informacion263").css("display", "none");
    $("#informacion261").css("display", "none");


}


/*   --------------------------------------------------------------  RUTA PICACHO 254 */


function ruta254() {
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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        strokeColor: '#2eff00',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion283").css("display", "none");
    $("#informacion284").css("display", "none");
    $("#informacion288").css("display", "none");
    $("#informacion254").css("display", "block");
    $("#informacion263").css("display", "none");
    $("#informacion261").css("display", "none");


}


/*   -------------------------------------------------------------- ---  RUTA CASTILLA 261*/


function ruta261() {
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
        strokeColor: '#ff7f00',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion288").css("display", "none");
    $("#informacion284").css("display", "none");
    $("#informacion283").css("display", "none");
    $("#informacion254").css("display", "none");
    $("#informacion261").css("display", "block");
    $("#informacion263").css("display", "none");


}


/*   -------------------------------------------------------------- ---  RUTA CASTILLA 263*/


function ruta263() {
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
        strokeColor: '#00ceff',
        strokeOpacity: 2.0,
        strokeWeight: 5
    });


    flightPath.setMap(map);

    /*  APARECER Y DESAPARECER CUADRO DE INFORMACION   */

    $("#informacion288").css("display", "none");
    $("#informacion284").css("display", "none");
    $("#informacion283").css("display", "none");
    $("#informacion254").css("display", "none");
    $("#informacion261").css("display", "none");
    $("#informacion263").css("display", "block");


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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        center: {lat: 6.258900, lng: -75.584128},
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
        position: {lat: 6.258900, lng: -75.584128},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        center: {lat: 6.258441, lng: -75.586755},
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
        position: {lat: 6.258441, lng: -75.586755},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        center: {lat: 6.256362, lng: -75.583204},
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
        position: {lat: 6.256362, lng: -75.583204},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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


/*   ENFOQUE PARQUE SAN ANTONIO */

function parqueSanAntonio() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.245454, lng: -75.568120},
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
        position: {lat: 6.245454, lng: -75.568120},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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


/*   ENFOQUE TECNOPARQUES */

function tecnoparque() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.253023, lng: -75.562808},
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
        position: {lat: 6.253023, lng: -75.562808},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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
        center: {lat: 6.262831, lng: -75.579330},
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
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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


/*   ENFOQUE COCA COLA */

function cocacola() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.267211, lng: -75.575865},
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
        position: {lat: 6.267211, lng: -75.575865},
        map: map,
        icon: image
    });


    var flightPlanCoordinates = [
        {lat: 6.313505, lng: -75.570131},
        {lat: 6.313129, lng: -75.570095},
        {lat: 6.312812, lng: -75.570097},
        {lat: 6.312655, lng: -75.570084},
        {lat: 6.312610, lng: -75.570070},
        {lat: 6.312160, lng: -75.569945},
        {lat: 6.311232, lng: -75.569894},
        {lat: 6.311168, lng: -75.569897},
        {lat: 6.311096, lng: -75.569905},
        {lat: 6.310767, lng: -75.570024},
        {lat: 6.310723, lng: -75.569979},
        {lat: 6.310487, lng: -75.569182},
        {lat: 6.309711, lng: -75.569451},
        {lat: 6.307985, lng: -75.570009},
        {lat: 6.307507, lng: -75.570235},
        {lat: 6.306709, lng: -75.570527},
        {lat: 6.306624, lng: -75.570549},
        {lat: 6.306373, lng: -75.570583},
        {lat: 6.303782, lng: -75.570619},
        {lat: 6.303725, lng: -75.570627},
        {lat: 6.303579, lng: -75.570679},
        {lat: 6.303497, lng: -75.570755},
        {lat: 6.303285, lng: -75.571055},
        {lat: 6.302518, lng: -75.572121},
        {lat: 6.302418, lng: -75.572207},
        {lat: 6.301994, lng: -75.572442},
        {lat: 6.301601, lng: -75.572637},
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
        {lat: 6.248839, lng: -75.575301},
        {lat: 6.247313, lng: -75.575384},
        {lat: 6.246918, lng: -75.575403},
        {lat: 6.246834, lng: -75.575425},
        {lat: 6.246753, lng: -75.575468},
        {lat: 6.246675, lng: -75.575607},
        {lat: 6.246578, lng: -75.575698},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246466, lng: -75.575774},
        {lat: 6.246048, lng: -75.575677},
        {lat: 6.245866, lng: -75.575528},
        {lat: 6.245793, lng: -75.575418},
        {lat: 6.245744, lng: -75.575281},
        {lat: 6.245749, lng: -75.575119},
        {lat: 6.245787, lng: -75.575038},
        {lat: 6.245944, lng: -75.574858},
        {lat: 6.245955, lng: -75.574824},
        {lat: 6.245922, lng: -75.574642},
        {lat: 6.245852, lng: -75.574398},
        {lat: 6.245725, lng: -75.574036},
        {lat: 6.245585, lng: -75.573650},
        {lat: 6.245411, lng: -75.573167},
        {lat: 6.245244, lng: -75.572700},
        {lat: 6.245194, lng: -75.572569},
        {lat: 6.245101, lng: -75.572257},
        {lat: 6.245067, lng: -75.572125},
        {lat: 6.245087, lng: -75.571975},
        {lat: 6.244881, lng: -75.571447},
        {lat: 6.244686, lng: -75.570923},
        {lat: 6.244499, lng: -75.570480},
        {lat: 6.244344, lng: -75.570048},
        {lat: 6.244180, lng: -75.569599},
        {lat: 6.244024, lng: -75.569146},
        {lat: 6.243882, lng: -75.568769},
        {lat: 6.243767, lng: -75.568423},
        {lat: 6.243691, lng: -75.568214},
        {lat: 6.243476, lng: -75.568109},
        {lat: 6.243346, lng: -75.568084},
        {lat: 6.243226, lng: -75.568106},
        {lat: 6.243132, lng: -75.568178},
        {lat: 6.243059, lng: -75.568323},
        {lat: 6.243064, lng: -75.568408},
        {lat: 6.243133, lng: -75.568552},
        {lat: 6.243404, lng: -75.568649},
        {lat: 6.243887, lng: -75.568418},
        {lat: 6.244234, lng: -75.568197},
        {lat: 6.244601, lng: -75.567962},
        {lat: 6.245130, lng: -75.567582},
        {lat: 6.245530, lng: -75.567285},
        {lat: 6.247001, lng: -75.566153},
        {lat: 6.247542, lng: -75.565744},
        {lat: 6.248069, lng: -75.565361},
        {lat: 6.248580, lng: -75.565029},
        {lat: 6.248985, lng: -75.564763},
        {lat: 6.249465, lng: -75.564491},
        {lat: 6.249870, lng: -75.564267},
        {lat: 6.250809, lng: -75.563731},
        {lat: 6.251673, lng: -75.563227},
        {lat: 6.252399, lng: -75.562813},
        {lat: 6.252897, lng: -75.562530},
        {lat: 6.253288, lng: -75.562282},
        {lat: 6.253545, lng: -75.562184},
        {lat: 6.253884, lng: -75.562130},
        {lat: 6.254168, lng: -75.562139},
        {lat: 6.254345, lng: -75.562185},
        {lat: 6.254633, lng: -75.562327},
        {lat: 6.254884, lng: -75.562541},
        {lat: 6.255675, lng: -75.563739},
        {lat: 6.256654, lng: -75.565287},
        {lat: 6.256894, lng: -75.565864},
        {lat: 6.257177, lng: -75.567489},
        {lat: 6.257502, lng: -75.569264},
        {lat: 6.257852, lng: -75.571120},
        {lat: 6.257919, lng: -75.571294},
        {lat: 6.257981, lng: -75.571394},
        {lat: 6.258149, lng: -75.571616},
        {lat: 6.260519, lng: -75.573359},
        {lat: 6.262287, lng: -75.574643},
        {lat: 6.262473, lng: -75.574772},
        {lat: 6.262602, lng: -75.574834},
        {lat: 6.262797, lng: -75.574899},
        {lat: 6.263336, lng: -75.574987},
        {lat: 6.264166, lng: -75.574993},
        {lat: 6.264266, lng: -75.574937},
        {lat: 6.265278, lng: -75.574845},
        {lat: 6.265506, lng: -75.574887},
        {lat: 6.265567, lng: -75.574906},
        {lat: 6.265609, lng: -75.575031},
        {lat: 6.265647, lng: -75.575087},
        {lat: 6.265721, lng: -75.575091},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.265838, lng: -75.575346},
        {lat: 6.266147, lng: -75.575841},
        {lat: 6.266246, lng: -75.575954},
        {lat: 6.266669, lng: -75.576198},
        {lat: 6.266912, lng: -75.576238},
        {lat: 6.267252, lng: -75.576196},
        {lat: 6.267785, lng: -75.576023},
        {lat: 6.267978, lng: -75.575925},
        {lat: 6.268187, lng: -75.575787},
        {lat: 6.268484, lng: -75.575691},
        {lat: 6.268752, lng: -75.575683},
        {lat: 6.269027, lng: -75.575734},
        {lat: 6.269298, lng: -75.575831},
        {lat: 6.269669, lng: -75.575900},
        {lat: 6.269930, lng: -75.575899},
        {lat: 6.270247, lng: -75.575831},
        {lat: 6.270504, lng: -75.575685},
        {lat: 6.270962, lng: -75.575529},
        {lat: 6.271095, lng: -75.575473},
        {lat: 6.271252, lng: -75.575450},
        {lat: 6.272191, lng: -75.575058},
        {lat: 6.272412, lng: -75.574975},
        {lat: 6.274122, lng: -75.574190},
        {lat: 6.274839, lng: -75.573843},
        {lat: 6.275523, lng: -75.573577},
        {lat: 6.277635, lng: -75.573018},
        {lat: 6.277874, lng: -75.572935},
        {lat: 6.279218, lng: -75.572557},
        {lat: 6.280034, lng: -75.572389},
        {lat: 6.282092, lng: -75.572122},
        {lat: 6.282385, lng: -75.571997},
        {lat: 6.282485, lng: -75.571962},
        {lat: 6.283559, lng: -75.571725},
        {lat: 6.285355, lng: -75.570813},
        {lat: 6.287064, lng: -75.570230},
        {lat: 6.287170, lng: -75.570196},
        {lat: 6.288267, lng: -75.570310},
        {lat: 6.288549, lng: -75.570348},
        {lat: 6.288894, lng: -75.570336},
        {lat: 6.289038, lng: -75.570311},
        {lat: 6.289890, lng: -75.569976},
        {lat: 6.291367, lng: -75.569495},
        {lat: 6.292042, lng: -75.569349},
        {lat: 6.293080, lng: -75.569087},
        {lat: 6.293357, lng: -75.568974},
        {lat: 6.294271, lng: -75.568450},
        {lat: 6.294427, lng: -75.568339},
        {lat: 6.295008, lng: -75.567783},
        {lat: 6.295569, lng: -75.567530},
        {lat: 6.296011, lng: -75.567438},
        {lat: 6.296454, lng: -75.567503},
        {lat: 6.296676, lng: -75.567528},
        {lat: 6.297411, lng: -75.567209},
        {lat: 6.298174, lng: -75.566916},
        {lat: 6.298808, lng: -75.566778},
        {lat: 6.299966, lng: -75.566473},
        {lat: 6.300844, lng: -75.566227},
        {lat: 6.301149, lng: -75.566177},
        {lat: 6.301507, lng: -75.566173},
        {lat: 6.301569, lng: -75.566194},
        {lat: 6.301055, lng: -75.567404},
        {lat: 6.300252, lng: -75.569367},
        {lat: 6.300231, lng: -75.569697},
        {lat: 6.300288, lng: -75.569852},
        {lat: 6.301698, lng: -75.572577},
        {lat: 6.302029, lng: -75.572404},
        {lat: 6.302385, lng: -75.572218},
        {lat: 6.302475, lng: -75.572148},
        {lat: 6.303481, lng: -75.570757},
        {lat: 6.303597, lng: -75.570658},
        {lat: 6.303780, lng: -75.570600},
        {lat: 6.306327, lng: -75.570568},
        {lat: 6.306535, lng: -75.570548},
        {lat: 6.306736, lng: -75.570503},
        {lat: 6.307424, lng: -75.570254},
        {lat: 6.307964, lng: -75.570006},
        {lat: 6.309213, lng: -75.569582},
        {lat: 6.310500, lng: -75.569160},
        {lat: 6.310751, lng: -75.570004},
        {lat: 6.311105, lng: -75.569884},
        {lat: 6.311247, lng: -75.569872},
        {lat: 6.312140, lng: -75.569923},
        {lat: 6.312313, lng: -75.569756},
        {lat: 6.312679, lng: -75.569480},
        {lat: 6.312951, lng: -75.569215},
        {lat: 6.313484, lng: -75.568643}


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


/*------------------------------------------------------------------------------- LUGARES FAVORITOS-------*/


/*----------------------------------------------------- RESTAURANTES*/

function restaurantes() {
    $("#restaurantes").css("display", "block");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "none");


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");

    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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


function restaurante1() {

    $("#restaurante1").css("display", "block");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.223922, lng: -75.606627},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.223922, lng: -75.606627},
        map: map,
        icon: image
    });
}


function restaurante2() {

    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "block");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.301530, lng: -75.572534},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.301530, lng: -75.572534},
        map: map,
        icon: image
    });
}


function restaurante3() {


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "block");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 6.2615713, lng: -75.5745807},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.214203, lng: -75.571595},
        map: map,
        icon: image
    })

    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.255844, lng: -75.598485},
        map: map,
        icon: image
    });
}


function lavocaderaP() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.214203, lng: -75.571595},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.214203, lng: -75.571595},
        map: map,
        icon: image
    });
}


function lavocaderaF() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.255844, lng: -75.598485},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.255844, lng: -75.598485},
        map: map,
        icon: image
    });
}


function restaurante4() {


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "block");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.303919, lng: -75.574587},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.303919, lng: -75.574587},
        map: map,
        icon: image
    });
}


function restaurante5() {


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "block");
    $("#restaurante6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 6.2615713, lng: -75.5745807},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.314140, lng: -75.560818},
        map: map,
        icon: image
    });

    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.234830, lng: -75.596310},
        map: map,
        icon: image
    });
}

function guadalupeB() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.234830, lng: -75.596310},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.234830, lng: -75.596310},
        map: map,
        icon: image
    });
}

function guadalupeC() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.314140, lng: -75.560818},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.314140, lng: -75.560818},
        map: map,
        icon: image
    });
}


function restaurante6() {

    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.310235, lng: -75.563502},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.310235, lng: -75.563502},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- BARES*/

function bares() {
    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "block");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "none");

    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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


function bar1() {

    $("#bar1").css("display", "block");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.303629, lng: -75.570637},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.303629, lng: -75.570637},
        map: map,
        icon: image
    });
}

function bar2() {


    $("#bar1").css("display", "none");
    $("#bar2").css("display", "block");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function bar3() {


    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "block");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function bar4() {

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "block");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function bar5() {


    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "block");
    $("#bar6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function bar6() {


    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- HOTELES*/


function hoteles() {

    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "block");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "none");

    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");


    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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


function hotel1() {

    $("#hotel1").css("display", "block");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function hotel2() {


    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "block");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function hotel3() {


    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "block");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function hotel4() {

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "block");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function hotel5() {

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "block");
    $("#hotel6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function hotel6() {

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- DISCOTECAS*/

function discotecas() {
    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "block");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "none");


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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


function disco1() {


    $("#disco1").css("display", "block");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.149332, lng: -75.628199},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.149332, lng: -75.628199},
        map: map,
        icon: image
    });
}

function disco2() {


    $("#disco1").css("display", "none");
    $("#disco2").css("display", "block");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function disco3() {


    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "block");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function disco4() {


    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "block");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}

function disco5() {


    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "block");
    $("#disco6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function disco6() {


    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- SUPER MERCADOS*/

function superMercados() {
    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "block");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "none");


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");

    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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

function superMercado1() {


    $("#superMercado1").css("display", "block");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function superMercado2() {


    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "block");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function superMercado3() {


    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "block");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function superMercado4() {


    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "block");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function superMercado5() {


    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "block");
    $("#superMercado6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function superMercado6() {


    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- HELADERIAS*/

function heladerias() {
    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "block");
    $("#carnicerias").css("display", "none");


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");

    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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

function heladeria1() {


    $("#heladeria1").css("display", "block");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.255584, lng: -75.603001},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.255584, lng: -75.603001},
        map: map,
        icon: image
    });
}


function heladeria2() {


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "block");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function heladeria3() {


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "block");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function heladeria4() {


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "block");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function heladeria5() {


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "block");
    $("#heladeria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function heladeria6() {


    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


/*----------------------------------------------------- CARNICERAS*/

function carnicerias() {
    $("#restaurantes").css("display", "none");
    $("#bares").css("display", "none");
    $("#hoteles").css("display", "none");
    $("#discotecas").css("display", "none");
    $("#superMercados").css("display", "none");
    $("#heladerias").css("display", "none");
    $("#carnicerias").css("display", "block");


    $("#restaurante1").css("display", "none");
    $("#restaurante2").css("display", "none");
    $("#restaurante3").css("display", "none");
    $("#restaurante4").css("display", "none");
    $("#restaurante5").css("display", "none");
    $("#restaurante6").css("display", "none");

    $("#bar1").css("display", "none");
    $("#bar2").css("display", "none");
    $("#bar3").css("display", "none");
    $("#bar4").css("display", "none");
    $("#bar5").css("display", "none");
    $("#bar6").css("display", "none");

    $("#hotel1").css("display", "none");
    $("#hotel2").css("display", "none");
    $("#hotel3").css("display", "none");
    $("#hotel4").css("display", "none");
    $("#hotel5").css("display", "none");
    $("#hotel6").css("display", "none");

    $("#disco1").css("display", "none");
    $("#disco2").css("display", "none");
    $("#disco3").css("display", "none");
    $("#disco4").css("display", "none");
    $("#disco5").css("display", "none");
    $("#disco6").css("display", "none");

    $("#superMercado1").css("display", "none");
    $("#superMercado2").css("display", "none");
    $("#superMercado3").css("display", "none");
    $("#superMercado4").css("display", "none");
    $("#superMercado5").css("display", "none");
    $("#superMercado6").css("display", "none");

    $("#heladeria1").css("display", "none");
    $("#heladeria2").css("display", "none");
    $("#heladeria3").css("display", "none");
    $("#heladeria4").css("display", "none");
    $("#heladeria5").css("display", "none");
    $("#heladeria6").css("display", "none");

    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


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

function carniceria1() {


    $("#carniceria1").css("display", "block");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function carniceria2() {


    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "block");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function carniceria3() {


    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "block");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function carniceria4() {


    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "block");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function carniceria5() {


    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "block");
    $("#carniceria6").css("display", "none");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}


function carniceria6() {


    $("#carniceria1").css("display", "none");
    $("#carniceria2").css("display", "none");
    $("#carniceria3").css("display", "none");
    $("#carniceria4").css("display", "none");
    $("#carniceria5").css("display", "none");
    $("#carniceria6").css("display", "block");


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 6.262831, lng: -75.579330},
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


    var image = '/MappBus/imagenes/favo2.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 6.262831, lng: -75.579330},
        map: map,
        icon: image
    });
}
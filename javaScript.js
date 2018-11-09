

/*  RUTA TRANS MEDELLIN 284   */
function ruta284() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        mapTypeId: 'terrain'
    });

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
        strokeColor: '#feff00',
        strokeOpacity: 2.0,
        strokeWeight: 3
    });


    flightPath.setMap(map);
}



/*  INICIO MAPA EN BLANCO*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.2615713, lng: -75.5745807},
        mapTypeId: 'terrain'
    });


}







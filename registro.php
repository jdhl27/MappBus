<?php

//LLAMANDO CONEXION
require("conectarBD.php");

$nombre = $_POST['inputName'];
$direccion = $_POST['inputDireccion'];
$latitud = $_POST['inputLat'];
$longitud = $_POST['inputLng'];
$tipo = $_POST['inputType'];


//INSERTANDO DATOS A BASE DE DATOS
if (mysqli_query($conectar,"INSERT INTO ubicacion (nombre,direccion,lat,lng,tipo)
                              VALUES ('$nombre','$direccion','$latitud','$longitud','$tipo')"))
{
    echo "<style>.mensaje{display:block;}</style>BIEN! ". strtoupper($nombre) ." SE REGISTRÓ EN MAPPBUS.";

    header('Refresh: 5;Location: http://localhost:63342/MappBus/index.html');


}else{
    echo "<style>.mensaje{display:block;width: 30%;height: 2.8vw;margin-left: 16vw;background-color: #fdfdfd00;border-top: 1px solid #ff00004a;  border-bottom: 1px solid #ff00004a;}#answerExito{margin-left: 4.5vw;color: red;}</style>ERROR.";
}

//CERRANDO CONEXION
mysqli_close($conectar);


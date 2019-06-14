<?php

//LLAMANDO CONEXION
require("conectarBD.php");

$nombre = $_POST['inputNombre'];
$direccion = $_POST['inputAddress'];
$latitud = $_POST['inputLat'];
$longitud = $_POST['inputLng'];
$tipo = $_POST['inputType'];


//INSERTANDO DATOS A BASE DE DATOS
if (mysqli_query($conectar,"INSERT INTO ubicacionEmpresa (nombreEmpresa,direccionEmpresa,latitud,longitud,tipo)
                              VALUES ('$nombre','$direccion','$latitud','$longitud','$tipo')"))
{
     header('Location: http://localhost:63342/MappBus/index.html');
}else{
    echo "ERROR";
}

//CERRANDO CONEXION
mysqli_close($conectar);


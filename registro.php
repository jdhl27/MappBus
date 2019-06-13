<?php

//LLAMANDO CONEXION
require("conectarBD.php");

$nombre = $_POST['inputNombre'];
$direccion = $_POST['inputAddress'];
$latitud = $_POST['inputLat'];
$longitud = $_POST['inputLng'];
$tipo = $_POST['inputType'];


//INSERTANDO DATOS A BASE DE DATOS
mysqli_query($conectar,"INSERT INTO ubicacion (nombre,direccion,lat,lng,tipo)
                              VALUES ('$nombre','$direccion','$latitud','$longitud','$tipo')");


//CERRANDO CONEXION
mysqli_close($conectar);

echo 'EXITO';

?>


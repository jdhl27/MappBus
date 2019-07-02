<?php

//LLAMANDO CONEXION
require("conectarBD.php");




//INSERTANDO DATOS A BASE DE DATOS
if (mysqli_query($conectar,"INSERT INTO ubicacionEmpresa (nombreEmpresa,direccionEmpresa,latitud,longitud,tipo)
                              VALUES ('$nombre','$direccion','$latitud','$longitud','$tipo')"))
{
    echo "BIEN";

}else{
    echo "ERROR";
}

//CERRANDO CONEXION
mysqli_close($conectar);


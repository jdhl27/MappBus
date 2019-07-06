<?php

//LLAMANDO CONEXION
require("conectarBD.php");

/*if (isset($_POST['inputType'])){
    $categoria = $_POST['inputType'];
}
*/

$nombre = $_POST['inputName'];
$direccion = $_POST['inputDireccion'];
$latitud = $_POST['inputLat'];
$longitud = $_POST['inputLng'];
$logo = addcslashes(file_get_contents($_FILES['inputLogo']['tmp_name']));
$categoria = $_POST['inputType'];


//INSERTANDO DATOS A BASE DE DATOS
if (mysqli_query($conectar,"INSERT INTO empresa (nombre,direccion,lat,lng,logo,categoria_id)
                              VALUES ('$nombre','$direccion','$latitud','$longitud','$logo','$categoria')"))
{
    echo "<style>.mensaje{display:block;}</style>BIEN! ". strtoupper($nombre) ." SE REGISTRÓ EN MAPPBUS.";


}else{
    echo "<style>.mensaje{display:block;width: 30%;height: 2.8vw;margin-left: 16vw;background-color: #fdfdfd00;border-top: 1px solid #ff00004a;  border-bottom: 1px solid #ff00004a;}#answerExito{margin-left: 4.5vw;color: red;}</style>ERROR.";
}

//CERRANDO CONEXION
mysqli_close($conectar);


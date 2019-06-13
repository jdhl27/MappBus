
<?php
// CONECTAMOS CON EL SERVIDOR

    $conectar = mysqli_connect("localhost", "root", "juan123");

//VERIFICAR CONEXION

    if (!$conectar){
        echo "No se pudo conectar con el servidor ".mysqli_connect_error();
    }else{
        $base = mysqli_select_db($conectar,'mappbus');
        if(!$base){
            echo"No se encontró la base de datos";
        }
    }

?>

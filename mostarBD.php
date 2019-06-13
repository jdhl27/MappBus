

<?php
include '.../conectarBD.php';

?>

<!doctype html>
<html>
<head>
    <title>mostrar datos</title>
</head>
<body>

<br>

<table BORDER="1">
    <tr>
        <td>nombre</td>
        <td>apellido</td>


    </tr>
    <?php

    $sql="SELECT * FROM usuarios";
    $result = mysqli_query($enlace,$sql);

    while ($mostrar=mysqli_fetch_array($result)){
        ?>

        <tr>
            <td><?php echo $mostrar['nombre']?></td>
            <td><?php echo $mostrar['apellido']?></td>

        </tr>
        <?php
    }
    ?>
</table>

</body>
</html>
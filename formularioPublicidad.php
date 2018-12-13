<!doctype html>
<html lang="es">
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="/MappBus/imagenes/faviconBus.png">
    <link rel="stylesheet" href="/MappBus/estilos.css">
    <link rel="stylesheet" href="/MappBus/responsive.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


    <title>Publicidad</title>
</head>
<body>


<form>
    <div class="form-row columna">
        <div class="form-group col-md-4">
            <label for="inputEmail4" class="labelForm">Nombre*</label>
            <input type="text" class="form-control" id="nombreEmpresa"  required="required">
        </div>
        <div class="form-group col-md-4">
            <label for="inputPassword4" class="labelForm">Descripción*</label>
            <textArea  required="required" class="form-control" id="descripcionEmpresa"></textArea>
        </div>
    </div>
    <div class="form-row columna">
        <div class="form-group col-md-4">
            <label for="inputEmail4" class="labelForm">Telefono*</label>
            <input type="number" class="form-control" id="telefonoEmpresa"  required="required">
        </div>
        <div class="form-group col-md-4">
            <label for="inputPassword4" class="labelForm">Dirección*</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" required="required">
        </div>
    </div>
    <div class="form-row columna">


        <div class="form-group col-md-4">
            <label for="inputPassword4" class="labelForm">Correo Personal*</label>
            <input type="email" class="form-control" id="correoPers"  required="required">
        </div>

    </div>

    <button type="submit" class="btn btn-primary">ENVIAR</button>
</form>



</body>
</html>
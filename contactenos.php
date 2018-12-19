<?php
$nombre = utf8_decode($_POST['nombre']);
$email = $_POST["email"];
$tel = $_POST["tel"];
$ciudad = utf8_decode($_POST['ciudad']);
$mensaje = utf8_decode($_POST['mensaje']);



$recipient = "independientemedellin.27.03@gmail.com";
$subject = "Nuevo mensaje de $nombre desde MappBus";

$email_content = "Nombre: $nombre<br>\n";
$email_content .= "Email: $email<br>\n";
$email_content .= "Telefono: $tel<br>\n";
$email_content .= "Ciudad: $ciudad<br>\n";
$email_content .= "Mensaje:\n$mensaje<br>\n";

$email_headers = "MIME-Version: 1.0" . "\r\n";
$email_headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$email_headers .= "From: $email" . "\r\n" .
    "Reply-To: servicioalcliente@mappbus.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

if (mail($recipient, $subject, $email_content, $email_headers)){
    header('Location: http://localhost:63342/MappBus/index.html');
}
else{
    echo "Ha ocurrido un error, inténtelo de nuevo más tarde.";
}
?>
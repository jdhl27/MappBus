<?php
$cantidad = $_POST["estrellas"];

$recipient = "independientemedellin.27.03@gmail.com";
$subject = "Nuevo calificacion para MappBus";

$email_content = "La calificacion por parte de un usuario de MappBus es de: " . $cantidad . "\r\n";


$email_headers = "MIME-Version: 1.0" . "\n";
$email_headers .= "Content-type: text/html; charset=iso-8859-1" . "\n";
$email_headers .= "From: MappBus.Web" . "\n" .
    "Reply-To: servicioalcliente@mappbus.com" . "\n" .
    "X-Mailer: PHP/" . phpversion();

if (mail($recipient, $subject, $email_content, $email_headers)) {
    header('Location: http://localhost:63342/MappBus/index.html');
}else{
    echo "error";
}


?>

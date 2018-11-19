<?php
$extrella1 = utf8_decode($_POST['radio5']);
$extrella2 = utf8_decode($_POST["radio4"]);
$extrella3 = utf8_decode($_POST["radio3"]);
$extrella4 = utf8_decode($_POST['radio2']);
$extrella5 = utf8_decode($_POST['radio1']);



$recipient = "independientemedellin.27.03@gmail.com";
$subject = "Calificación desde MappBus";

$email_content = "Extrella 1: $radio5<br>\n";
$email_content .= "Extrella 2: $radio4<br>\n";
$email_content .= "Extrella 3: $radio3<br>\n";
$email_content .= "Extrella 4: $radio2<br>\n";
$email_content .= "Extrella 5:$radio1<br>\n";

$email_headers = "MIME-Version: 1.0" . "\r\n";
$email_headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$email_headers .= "From: $email" . "\r\n" .
    "Reply-To: servicioalcliente@oasismedicinadelbienestar.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

if (mail($recipient, $subject, $email_headers)){
    alert('Gracias por calificarnos!');
}
else{
    echo "Ha ocurrido un error, inténtelo de nuevo más tarde.";
}
?>
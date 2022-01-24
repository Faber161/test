<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['tel'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'andreyka.linchenko@mail.ru';
$mail->Password = 'uWZ2MtGcim3WUrCsCj4p';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('andreyka.linchenko@mail.ru');
$mail->addAddress('rbru-metrika@yandex.ru');
$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
} else {
}
?>
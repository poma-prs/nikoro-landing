<?php
  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(404);
    die();
  }

  $desc = isset($_POST['desc']) ? $_POST['desc'] : null;
  $email = isset($_POST['email']) ? $_POST['email'] : null;
  $name = isset($_POST['name']) ? $_POST['name'] : null;
  $phone = isset($_POST['phone']) ? $_POST['phone'] : null;

  if (!isset($desc) && !isset($email) && !isset($name) && !isset($phone)) {
    http_response_code(400);
    die();
  }

  $message =
    "Имя: " . $name . "\r\n" .
    "Телефон: " . $phone . "\r\n" .
    "Email: " . $email . "\r\n" .
    "Доп. информация: " . $desc;

  include('smtp-func.php');

  if (smtpmail('sk.nikoro@yandex.ru', 'Новая заявка', $message))
      echo 'ok';
  else
      echo 'fail';
?>

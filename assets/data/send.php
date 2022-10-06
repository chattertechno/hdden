<?php

require_once('data_connection.php');

date_default_timezone_set('America/Monterrey');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header("Location: ../../index.php");
    exit;
}

$response = [];
$mail_data['name'] =  isset($_POST['name']) ? $_POST['name']:'';
$mail_data['last_name'] =  isset($_POST['last_name']) ? $_POST['last_name']:'';
$mail_data['email'] = isset($_POST['email']) ? $_POST['email']:'';
$mail_data['country'] = isset($_POST['country']) ? $_POST['country']:'';

foreach ($mail_data as $key => $value):
  if (empty($value)) {
    $txt = $key == 'last_name' ? 'last name': $key;
     $response["error"] = true;
     $response['errors'] = [ $key => "The ".$txt. " field is required." ]; 
     http_response_code(422); 
     echo json_encode($response);
     exit;
  } else if($key == 'email') {

    if (!filter_var($value, FILTER_VALIDATE_EMAIL)):
      $response['errors'] = [ $key => "The ".$key." must be a valid email address." ];
      http_response_code(422);
      echo json_encode($response);
      exit;
    endif;
  } else if($key == 'name') {

    if (!preg_match('/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 .\-]+$/i', $value)):
      $response['errors'] = [ $key => "The ".$key." must be a text string." ];
      http_response_code(422);
      echo json_encode($response);
      exit;
    endif;
  }
endforeach;

$mail_data['remind_auction_dates'] = isset($_POST['remind_auction_dates']) ? $_POST['remind_auction_dates']:'none';
$mail_data['receive_news'] = isset($_POST['receive_news']) ? $_POST['receive_news']:'none';

// Config/HTML correo ------------------------------------------------------------ \\

$to = $mail_data['email']; //getenv('MAIL_TO');
$bcc_1 = getenv('MAIL_BCC_1');
$bcc_2 = getenv('MAIL_BCC_2');

$subject = 'Hdden Forms Website';
$message = "Thank you for subscribing! <br><br>";
$message .= 'Name: '.$mail_data['name'].'<br>';
$message .= 'Last Name: '.$mail_data['last_name'].'<br>';
$message .= 'Email: '.$mail_data['email'].'<br>';
$message .= 'Country: '.$mail_data['country'].'<br><br><br>';
$message .= 'Message sent from website <a href="https://hddenforms.com/" target="_blank">hddenforms.com</a>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Hdden Forms <noreply@hddenforms.com>' . "\r\n";
$headers .= "Bcc: $bcc_1\r\n";
$headers .= "Bcc: $bcc_2\r\n";

// PDO connection ------------------------------------------------------------ \\
$servername = getenv('DB_HOST');
$dbname = getenv('DB_DATABASE');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');

try {
  $opciones = [ PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' ];
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, $opciones);
  # set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  # prepare sql and bind parameters
  $stmt = $conn->prepare("INSERT INTO website_auction_reminder (name, last_name, email, country, remind_auction_dates, receive_news) VALUES (:name, :last_name, :email, :country, :remind_auction_dates, :receive_news)");
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':last_name', $last_name);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':country', $country);
  $stmt->bindParam(':remind_auction_dates', $remind_auction_dates);
  $stmt->bindParam(':receive_news', $receive_news);

  $name = $mail_data['name'];
  $last_name = $mail_data['last_name'];
  $email = $mail_data['email'];
  $country = $mail_data['country'];
  $remind_auction_dates = $mail_data['remind_auction_dates'];
  $receive_news = $mail_data['receive_news'];


  if ($stmt->execute()) {

    $response["error"] = false;
    $response["message"] = "We apreciate your interest, thank you for subscribing!";
    http_response_code(200);

    // Enviar correo
    $date = date("Y-m-d H:i:s");
    $newLine = "\r\n";
    $fp = fopen('logs_auction_reminder.txt', 'a');
    $mail = @mail($to, $subject, $message, $headers);
    if ($mail) {
        fwrite($fp, "[mail sent success]: ".$mail_data['email']." DateTime ".$date.$newLine);  
    } else {
        fwrite($fp, "[error sending mail]: ".$mail_data['email']." DateTime: ".$date.$newLine); 
    }
    fclose($fp);
  }

// Respuesta
echo json_encode($response);

} catch(PDOException $e) {

#   echo "Error: " . $e->getMessage();
  $response["error"] = true;
  $response["message"] = $e->getMessage();
  http_response_code(400);

  echo json_encode($response);
}
$conn = null;

// END PDO connection ---------------------------------------------------------  \\
?>
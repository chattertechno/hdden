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
$mail_data['email'] = isset($_POST['email']) ? $_POST['email']:'';
$mail_data['mobile_code'] =  isset($_POST['mobile_code']) ? $_POST['mobile_code']:'n/a';
$mail_data['mobile'] =  isset($_POST['mobile']) ? $_POST['mobile']:'n/a';
$mail_data['nationality'] = isset($_POST['nationality']) ? $_POST['nationality']:'n/a';
$mail_data['location'] = isset($_POST['location']) ? $_POST['location']:'n/a';
$mail_data['message'] = isset($_POST['message']) ? $_POST['message']:'';


foreach ($mail_data as $key => $value):
  if (empty($value) && $key != 'mobile') {
     $response["error"] = true;
     $response['errors'] = [ $key => "The ".$key. " field is required." ]; 
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
  } else if($key == 'name' || $key == 'nationality') {

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
$mail_data['wallet'] = isset($_POST['wallet']) ? ( !empty($_POST['wallet']) ? $_POST['wallet']:'n/a') :'n/a';
// Config/HTML correo ------------------------------------------------------------ \\

$to =  getenv('MAIL_TO'); # correo del sitio
$cc =  $mail_data['email']; # correo de suscriptor
$bcc_1 = getenv('MAIL_BCC_1'); # copia oculta
$bcc_2 = getenv('MAIL_BCC_2'); # copia oculta
$url_website = getenv('URL_WEBSITE');

$subject = 'Hdden Forms Website';
$mail_message = "Thank you for contacting us! <br><br>";

// $mail_message = "Thank you for contacting us! <br><br>";
// $mail_message .= 'Name: '.$mail_data['name'].'<br>';
// $mail_message .= 'Email: '.$mail_data['email'].'<br>';
// $mail_message .= 'Mobile: ('.$mail_data['mobile_code'].') '.$mail_data['mobile'].'<br>';
// $mail_message .= 'Nationality: '.$mail_data['nationality'].'<br>';
// $mail_message .= 'Location: '.$mail_data['location'].'<br><br>';
// $mail_message .= 'Message: '.$mail_data['message'].'<br><br><br>';
// $mail_message .= "Message sent from website {$url_website}";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Hdden Forms <noreply@hddenforms.com>' . "\r\n";
$headers .= "Bcc: $bcc_1\r\n";
$headers .= "Bcc: $bcc_2\r\n";
$headers .= "Cc: $cc\r\n";

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
  $stmt = $conn->prepare("INSERT INTO website_contact_us (name, email, mobile_code, mobile, nationality, location, message, wallet ) VALUES (:name, :email, :mobile_code, :mobile, :nationality, :location, :message, :wallet)");
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':mobile_code', $mobile_code);
  $stmt->bindParam(':mobile', $mobile);
  $stmt->bindParam(':nationality', $nationality);
  $stmt->bindParam(':location', $location);
  $stmt->bindParam(':message', $message);
  $stmt->bindParam(':wallet', $wallet);

  $name = $mail_data['name'];
  $email = $mail_data['email'];
  $mobile_code = $mail_data['mobile_code'];
  $mobile = empty($mail_data['mobile']) ? 'n/a':$mail_data['mobile'];
  $nationality = $mail_data['nationality'];
  $location = $mail_data['location'];
  $message = $mail_data['message'];
  $wallet = $mail_data['wallet'];
  // mostrar últimos 3 caracteres de wallet
  $str_wallet = $wallet != 'n/a' ? 'xxxxx':'';
  $str_wallet .= substr($wallet,-3);

$mail_message .= 'Name: '.$name.'<br>';
$mail_message .= 'Email: '.$email.'<br>';
$mail_message .= 'Mobile: ('.$mobile_code.') '.$mobile.'<br>';
// $mail_message .= 'Nationality: '.$nationality.'<br>';
// $mail_message .= 'Location: '.$location.'<br>';
$mail_message .= 'Wallet: '.$str_wallet.'<br><br>';
$mail_message .= 'Message: '.$message.'<br><br><br>';
$mail_message .= "Message sent from website {$url_website}";


  if ($stmt->execute()) {

    $response["error"] = false;
    $response["message"] = "We apreciate your interest, thank you for contacting us!";
    http_response_code(200);

    // Enviar correo
    $date = date("Y-m-d H:i:s");
    $newLine = "\r\n";
    $fp = fopen('logs_contact_us.txt', 'a');
    $mail = @mail($to, $subject, $mail_message, $headers);
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
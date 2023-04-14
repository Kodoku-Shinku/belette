<?php
$email = $_POST['email'];

// Configuración de la API de Mailchimp
$api_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-usXX'; // Reemplazar con la clave de API correspondiente
$list_id = 'XXXXXXXXXX'; // Reemplazar con el ID de la lista de suscripción correspondiente
$data_center = substr($api_key,strpos($api_key,'-')+1);
$url = 'https://' . $data_center . '.api.mailchimp.com/3.0/lists/' . $list_id . '/members';

// Datos del nuevo suscriptor
$data = array(
    'email_address' => $email,
    'status' => 'subscribed'
);

// Conversión de los datos en formato JSON
$json_data = json_encode($data);

// Configuración de la solicitud HTTP
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);

// Ejecución de la solicitud HTTP
$result = curl_exec($ch);

// Manejo de errores
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
} else {
    echo 'Te has suscrito satisfactoriamente a nuestra hoja informativa.';
}

// Cierre de la conexión HTTP
curl_close($ch);
?>
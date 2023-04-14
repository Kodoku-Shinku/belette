// Seleccionar el formulario y el elemento de mensaje
const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  const email = document.getElementById('email-input').value;
  subscribeToNewsletter(email);
});

function subscribeToNewsletter(email) {
  // Aquí se puede hacer una solicitud al servidor para agregar el correo electrónico a la lista de suscripción
  // Validar el correo electrónico
  if (!isValidEmail(email)) {
    showMessage('Ingresa un correo electrónico válido', 'error');
    return;
  }

  // Enviar la solicitud al servidor
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/subscribe.php'); // El archivo PHP que maneja la suscripción
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(`Se ha suscrito la dirección de correo electrónico ${email}`);
      showMessage(response.message, response.status);
      form.reset();
    } else {
      console.log('Hubo un error al procesar la solicitud');
      showMessage('Hubo un error al procesar la solicitud', 'error');
    }
  };
  xhr.send(`email=${email}`);
}




// Función para mostrar el mensaje en la página
function showMessage(messageText, messageType) {
  message.textContent = messageText;
  message.classList.remove('success', 'error');
  message.classList.add(messageType);
}


// Función para validar el correo electrónico
function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
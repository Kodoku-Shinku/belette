const chatButton = document.querySelector('.btn-chat');
const chatContainer = document.querySelector('.chat-container');

chatButton.addEventListener('click', () => {
    console.log('chat pressed');
    chatContainer.classList.toggle('d-none');
});


const chat = document.getElementById('chat-form');
const input = document.querySelector('input[type="text"]');
const chatMessages = document.querySelector('.chat-messages');
const socket = io();

chat.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('message emmited');
    const message = input.value;
    socket.emit('chatMessage', message);
    input.value = '';
});

socket.on('message', message => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
    <p class="meta">User <span>${message.time}</span></p>
    <p class="text">${message.text}</p>
  `;
    chatMessages.appendChild(messageElement);
});

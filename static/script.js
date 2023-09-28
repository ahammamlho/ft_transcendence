document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messageList = document.getElementById('messageList');

  const username = prompt('Enter your Name');

  const socketChat = io('http://localhost:3000/chat');
  socketChat.on('chatToClient', (msg) => {
    const messageItem = document.createElement('li');
    messageItem.innerHTML = ` <strong>${msg.sender} : </strong> ${msg.message}`;
    // messageItem.textContent = ` -> `;
    messageList.appendChild(messageItem);
  });

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    // console.log('dasfkahsfjkhasd');
    if (userMessage !== '') {
      socketChat.emit('chatToServer', {
        sender: username,
        message: userMessage,
      });
      messageInput.value = '';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messageList = document.getElementById('messageList');
  const username = prompt('Enter your Name');
  // chat
  const socketChat = io('http://localhost:3000/chat');
  socketChat.on('chatToClient', (msg) => {
    const messageItem = document.createElement('li');
    messageItem.innerHTML = ` <strong>${msg.sender} : </strong> ${msg.message}`;
    // messageItem.textContent = ` -> `;
    messageList.appendChild(messageItem);
  });
  // alert

  const socketAlert = io('http://localhost:3000/alert');
  socketAlert.on('alertToClient', (msg) => {
    const alertsSection = document.querySelector('.alerts');
    const alertElement = document.createElement('div');
    alertElement.className = 'alert';
    console.log(msg);
    alertElement.textContent = msg.message;
    alertsSection.appendChild(alertElement);

    setTimeout(() => {
      alertElement.remove();
    }, 2000);
  });

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    if (userMessage !== '') {
      socketChat.emit('chatToServer', {
        sender: username,
        message: userMessage,
      });
      messageInput.value = '';
    }
  });
});

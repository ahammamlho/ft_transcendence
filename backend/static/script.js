document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messageList = document.getElementById('messageList');
  const clientsList = document.getElementById('clientsList');
  const nameUser = document.getElementById('nameUser');

  const username = prompt('Enter your Name');
  let userToSend = '';
  const socketChat = io('http://localhost:3000/chat');
  // make connection whith server
  socketChat.emit('identify', username);
  //  { action: 'add', username: key }
  socketChat.on('addClient', (value) => {
    if (value.action === 'add' && value.username !== '') {
      let isExist = 0;
      for (let i = 0; i < clientsList.children.length; i++) {
        if (clientsList.children[i].innerHTML === value.username) {
          isExist = 1;
          break;
        }
      }
      if (!isExist && value.username !== username) {
        const clientsItem = document.createElement('button');
        clientsItem.type = 'button';
        clientsItem.className = 'my-button';
        clientsItem.innerHTML = `${value.username}`;
        clientsList.appendChild(clientsItem);
        clientsItem.addEventListener('click', (event) => {
          event.preventDefault();
          for (let i = 0; i < clientsList.children.length; i++) {
            clientsList.children[i].classList.remove('btn');
          }
          event.target.classList.add('btn');
          userToSend = event.target.innerHTML;
        });
      } else {
        nameUser.innerText = `I am ${username}`;
      }
    } else {
      for (let i = 0; i < clientsList.children.length; i++) {
        if (clientsList.children[i].innerHTML === value.username) {
          clientsList.children[i].remove();
          break;
        }
      }
    }
  });

  socketChat.on('chatToClient', (msg) => {
    const messageItem = document.createElement('li');
    messageItem.innerHTML = ` <strong>${msg.sender} : </strong> ${msg.message}`;
    messageList.appendChild(messageItem);
  });

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userToSend);
    const userMessage = messageInput.value.trim();
    // console.log('dasfkahsfjkhasd');
    if (userMessage !== '') {
      socketChat.emit('chatToServer', {
        sender: username,
        sendTo: userToSend,
        message: userMessage,
      });
      messageInput.value = '';
    }
  });
});

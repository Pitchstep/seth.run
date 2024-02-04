function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        showMessage('Me', message);
        messageInput.value = '';
    }
}

function showMessage(who, msg) {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = who + ': ' + msg;
    messages.appendChild(li);

    // Scroll to the bottom of the chat
    messages.scrollTop = messages.scrollHeight;
}

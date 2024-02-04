function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatBox = document.getElementById("chat-box");

    var message = messageInput.value;
    if (message.trim() !== "") {
        var newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);

        // Clear input after sending message
        messageInput.value = "";

        // Scroll to the bottom to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

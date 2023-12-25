const socket = new WebSocket('ws://localhost:3000'); // Sunucuyla bağlantı kur

socket.onopen = function () {
    console.log('Sunucuyla bağlantı sağlandı');
};

socket.onmessage = function (event) {
    const receivedMessage = event.data;
    displayMessage(receivedMessage);
};

function sendMesasge() {
    const messageInput = document.getElementById('messageInput')
    const message = messageInput.value.trim()

    if (message !== '') {
        socket.send(message)
        displayMessage('Ben: ' + message)
        messageInput.value = ''
    } else {
        alert('Boş mesaj göndermeyi denediniz! Lütfen bir şey yazın.')
    }
}

function displayMessage(message) {
    const chatContainer = document.getElementById('chatContainer')
    const messageElement = document.createElement('div')

    messageElement.textContent = message
    chatContainer.append(messageElement)
}

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMesasge()
    }
})
const socket = new WebSocket('ws://localhost:3000'); // Sunucuyla bağlantı kur

socket.onopen = function (event) {
    console.log('Sunucuyla bağlantı sağlandı');
};

socket.onmessage = function (event) {
    const receivedMessage = event.data;
    displayMessage(receivedMessage);
};

// Input alanında 'Enter' tuşuna basıldığında mesaj gönder
document.getElementById('messageInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim(); // Boşlukları temizle

    if (message !== '') {
        socket.send(message);
        displayMessage('Ben: ' + message); // Gönderilen mesajı ekrana da göster
        messageInput.value = ''; // Input'u temizle
    } else {
        alert('Boş mesaj gönderemezsiniz.');
    }
}

function displayMessage(message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
}


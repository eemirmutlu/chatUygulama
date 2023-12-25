// localStorage'dan bilgileri al ve HTML'e yerleştir
document.getElementById('username').textContent = localStorage.getItem('username');
document.getElementById('email').textContent = localStorage.getItem('email');
document.getElementById('bio').textContent = localStorage.getItem('bio');

document.addEventListener("DOMContentLoaded", function() {
    const isOnline = Math.random() < 0.5;

    const onlineIndicator = document.getElementById('onlineIndicator')

    if (isOnline) {
        onlineIndicator.style.backgroundColor= 'green'
        onlineText.textContent = 'Çevrimiçi'
    } else {
        onlineIndicator.style.backgroundColor= 'red'
        onlineText.textContent = 'Çervimdışı'
    }
})

function logOut(){
    alert('Giriş sayfasına dönüyorsunuz.')
}

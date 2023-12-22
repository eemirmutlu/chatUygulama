// localStorage'dan bilgileri al ve HTML'e yerleştir
document.getElementById('username').textContent = localStorage.getItem('username');
document.getElementById('email').textContent = localStorage.getItem('email');
document.getElementById('bio').textContent = localStorage.getItem('bio');
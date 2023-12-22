document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert('Giriş başarılı!');
        window.location.href = '/html/anasayfa.html';
    } else {
        alert('E-posta veya şifre hatalı.');
        window.location.href = '/html/kayit.html';
    }
});

function goToRegisterPage() {
    alert('Kayıt sayfasına yönlendiriliyorsunuz.');
    window.location.href = '/html/kayit.html';
}

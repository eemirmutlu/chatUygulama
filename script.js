document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting normally

    const enteredEmail = document.getElementById('email').value
    const enteredPassword = document.getElementById('password').value

    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    if (enteredEmail == storedEmail && enteredPassword == storedPassword) {
        alert('Giriş başarılı')
        window.location.href = 'anasayfa.html'
    }
})

function goToRegisterPage() {
    alert('Kayıt sayfasına yönlendiriliyorsunuz.')
}

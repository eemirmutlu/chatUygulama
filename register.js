document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;

    if (!username || !email || !password) {
        alert('Lütfen tüm alanları doldurun.');
        return; // Kayıt işlemi durduruluyor
    }


    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('bio', bio);

    alert('Kayıt başarılı! Giriş yapabilirsiniz.');
    window.location.href = 'index.html'; // Kayıt sonrası giriş sayfasına yönlendirme
});


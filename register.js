document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting normally

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const bio = document.getElementById('bio').value

    if (!username || !email || !password) {
        alert('gerekli alanları doldurunuz.')
        return
    }

    alert('Kaydınız oluşturulmuştur.')
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('bio', bio)

    window.location.href = 'index.html'

})

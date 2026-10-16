document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('mensajeError');

    if (username === '' || password === '') {
        mensajeError.textContent = 'Por favor, completa todos los campos obligatorios.';
    } else {
        mensajeError.textContent = '';
        alert('¡Inicio de sesión exitoso!');
    }
});
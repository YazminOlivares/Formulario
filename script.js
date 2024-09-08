document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Obtener los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Limpiar mensajes de error previos
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    // Validar nombre
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validar correo
    if (email === '') {
        document.getElementById('emailError').textContent = 'El correo es obligatorio';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Formato de correo inválido';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validar mensaje
    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio';
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    // Si todos los campos son válidos, enviar el formulario
    if (valid) {
        alert('Formulario enviado exitosamente');
        // Aquí se podría enviar el formulario, por ejemplo, utilizando fetch o AJAX
        // this.submit();
    }
});

// Función para validar el formato del correo
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

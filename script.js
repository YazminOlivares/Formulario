document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'El correo es obligatorio';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Formato de correo inválido';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio';
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Formulario enviado exitosamente');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

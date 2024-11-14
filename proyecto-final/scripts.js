// Registro de usuario
document.getElementById('formRegistro')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const genero = document.getElementById('genero').value;

    const usuario = { nombres, apellidos, correo, contraseña, genero };
    localStorage.setItem(correo, JSON.stringify(usuario));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});

// Inicio de sesión
document.getElementById('formLogin')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const correo = document.getElementById('correoLogin').value;
    const contraseña = document.getElementById('contraseñaLogin').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem(correo));
    if (usuarioGuardado && usuarioGuardado.contraseña === contraseña) {
        localStorage.setItem('usuarioActivo', correo);
        alert('Inicio de sesión exitoso.');
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});

// Mostrar nombre de usuario activo
const usuarioActivo = localStorage.getItem('usuarioActivo');
if (usuarioActivo) {
    const usuario = JSON.parse(localStorage.getItem(usuarioActivo));
    document.getElementById('usuario').innerHTML = `
        <span>Hola, ${usuario.nombres}</span>
        <a href="#" id="cerrarSesion">Cerrar Sesión</a>
    `;
}

// Cerrar sesión
document.getElementById('cerrarSesion')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('usuarioActivo');
    window.location.reload();
});

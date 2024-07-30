document.getElementById('toggleDarkMode').addEventListener('click', function () {
    var body = document.body;
    var header = document.getElementById('encabezado');
    var footer = document.getElementById('footer');
  
    var pfooter = document.getElementById('pe');
    var pfooter1 = document.getElementById('pe1');
  
    var sessions= document.getElementsByClassName('session');
    var textos= document.getElementsByClassName('dark-text');
  
    
  
    body.classList.toggle('dark-mode');
    if (footer.classList.contains('bg-light')) {
               footer.classList.replace('bg-light', 'bg-dark');
           } else {
               footer.classList.replace('bg-dark', 'bg-light');
           }
           
    if (pfooter.classList.contains('text-dark')) {
               pfooter.classList.replace('text-dark', 'text-light');
           } else {
               pfooter.classList.replace('text-light', 'text-dark');
           }
           
    if (pfooter1.classList.contains('text-dark')) {
               pfooter1.classList.replace('text-dark', 'text-light');
           } else {
               pfooter1.classList.replace('text-light', 'text-dark');
           }
  
  
    header.classList.toggle('navbar-light');
    header.classList.toggle('bg-light');
    header.classList.toggle('navbar-dark');
    header.classList.toggle('bg-dark');
    for (var i = 0; i < sessions.length; i++) {
      sessions[i].classList.toggle('section-dark');}

    });
      
      
      
      document.addEventListener("DOMContentLoaded", function() {
        const comentarioInput = document.getElementById("comentario");
        const comentarioCounter = document.getElementById("comentarioCounter");
        const maxChars = 300;
    
        // Inicializar el contador con el número de caracteres permitidos
        comentarioCounter.textContent = `Te quedan ${maxChars} caracteres.`;
    
        comentarioInput.addEventListener("input", function() {
            let inputValue = comentarioInput.value;
    
            // Limitar la longitud del comentario a 300 caracteres
            if (inputValue.length > maxChars) {
                inputValue = inputValue.substring(0, maxChars);
                comentarioInput.value = inputValue;
            }
    
            // Actualizar el contador de caracteres restantes
            const charsLeft = maxChars - inputValue.length;
            comentarioCounter.textContent = `Te quedan ${charsLeft} caracteres.`;
        });
    });
    
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;
        const email = document.getElementById('email').value;
    
        const nombreError = document.getElementById('nombreError');
        const emailError = document.getElementById('emailError');
        const comentarioError = document.getElementById('comentarioError');
    
        // Esconder los mensajes de ayuda
        document.getElementById('nombreHelp').style.display = 'none';
        document.getElementById('emailHelp').style.display = 'none';
        document.getElementById('comentarioHelp').style.display = 'none';
    
        nombreError.textContent = '';
        emailError.textContent = '';
        comentarioError.textContent = '';
    
        document.getElementById('nombre').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('comentario').classList.remove('error');
    
        // Expresión regular para verificar que el nombre solo contenga letras
        const nombreRegex = /^[A-Za-z\s]+$/;
    
        // Expresión regular para verificar que el email sea válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        let isValid = true;
    
        if (!nombre) {
            nombreError.textContent = 'El nombre es obligatorio.';
            document.getElementById('nombre').classList.add('error');
            isValid = false;
        } else if (!nombreRegex.test(nombre)) {
            nombreError.textContent = 'El nombre solo puede contener letras.';
            document.getElementById('nombre').classList.add('error');
            isValid = false;
        }
    
        if (!email) {
            emailError.textContent = 'El email es obligatorio.';
            document.getElementById('email').classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'El email no es válido.';
            document.getElementById('email').classList.add('error');
            isValid = false;
        }
    
        if (!comentario) {
            comentarioError.textContent = 'El comentario es obligatorio.';
            document.getElementById('comentario').classList.add('error');
            isValid = false;
        } else if (comentario.length > 300) {
            comentarioError.textContent = 'El comentario no puede exceder los 300 caracteres.';
            document.getElementById('comentario').classList.add('error');
            isValid = false;
        }
    
        if (isValid) {
            alert('Formulario enviado correctamente.');
        }
    
    });
  
  
  
      

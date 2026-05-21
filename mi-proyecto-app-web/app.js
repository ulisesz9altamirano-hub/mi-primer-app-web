
function mostrarModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function cerrarModal() {
    document.getElementById('login-modal').classList.add('hidden');
}


function procesarLogin(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    
  
    cerrarModal();
    
    
    document.getElementById('btn-login-nav').classList.add('hidden');
    
    const userBadge = document.getElementById('user-badge');
    userBadge.classList.remove('hidden');
    userBadge.innerText = `¡Hola, ${email.split('@')[0]}! 💪`;
}

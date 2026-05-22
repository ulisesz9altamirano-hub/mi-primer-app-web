let planSeleccionadoActual = "";

const linksMercadoPago = {
    "Pase diario": "https://mpago.la/TU_LINK_AQUI_DIARIO",
    "Mensual libre": "https://mpago.la/TU_LINK_AQUI_MENSUAL"
};

function abrirDetallePlan(nombre, precio, beneficios) {
    planSeleccionadoActual = nombre;

    document.getElementById('detalle-titulo').innerText = nombre;
    document.getElementById('detalle-precio').innerText = precio;

    const listaBeneficios = document.getElementById('detalle-beneficios');
    listaBeneficios.innerHTML = ''; 

    beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check"></i> ${beneficio}`;
        listaBeneficios.appendChild(li);
    });

    const seccionPrecios = document.getElementById('precios');
    const seccionDetalle = document.getElementById('vista-detalle-plan');

    seccionPrecios.classList.add('hidden');
    seccionDetalle.classList.remove('detalle-plan-hidden');
    seccionDetalle.classList.add('detalle-plan-active');
}

function volverAPlanes() {
    const seccionPrecios = document.getElementById('precios');
    const seccionDetalle = document.getElementById('vista-detalle-plan');

    seccionDetalle.classList.remove('detalle-plan-active');
    seccionDetalle.classList.add('detalle-plan-hidden');
    seccionPrecios.classList.remove('hidden');
    
    planSeleccionadoActual = "";
}

function procesarPago() {
    const urlPago = linksMercadoPago[planSeleccionadoActual];

    if (urlPago && urlPago !== "https://mpago.la/TU_LINK_AQUI_DIARIO" && urlPago !== "https://mpago.la/TU_LINK_AQUI_MENSUAL") {
        window.open(urlPago, '_blank');
    } else {
        alert(`¡Simulación de Pago!\nRedireccionando a Mercado Pago para abonar el plan: ${planSeleccionadoActual}.\n\n(Para producción, recordá reemplazar el link provisorio en tu archivo app.js)`);
    }
}

function abrirModalLogin() {
    const modal = document.getElementById('login-modal');
    modal.classList.remove('hidden');
}

function cerrarModalLogin() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const btnLoginNav = document.getElementById('btn-login-nav');
    if (btnLoginNav) {
        btnLoginNav.addEventListener('click', abrirModalLogin);
    }

    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModalLogin();
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Inicio de sesión simulado con éxito!');
            cerrarModalLogin();
        });
    }
});

//1. El Escuchador Estándar (addEventListener)
//Es el método moderno y seguro para enlazar un evento a un elemento del DOM.
//Tu misión: Al hacer clic en el botón, dispará un
//console.log() que diga "¡Botón presionado!".

const botonPresionado = document.getElementById(`btn-alerta`);

botonPresionado.addEventListener('click', (e) => {
    console.log("¡Botón presionado!");
});
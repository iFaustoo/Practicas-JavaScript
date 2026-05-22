//Ejercicio 7: Menú desplegable inteligente
//Tu misión: Al hacer clic en #btn-dropdown, debés seleccionar
//la .lista-opciones y cambiarle el estilo o agregarle una clase para
//que se muestre (display: block o una clase activa). Al mismo tiempo
//aplicá lo necesario para que ese clic no burbujee
//hacia el window o elementos superiores.

const btnOpciones = document.getElementById(`btn-dropdown`);

btnOpciones.addEventListener(`click`, (e) => {
    e.stopPropagation();
    const lista = document.querySelector(`.lista-opciones`);
    lista.style.display = "block";
});
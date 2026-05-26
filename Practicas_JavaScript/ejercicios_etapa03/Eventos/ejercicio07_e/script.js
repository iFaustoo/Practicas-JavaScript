//Ejercicio 7: El interruptor de visibilidad (Modo tarjeta)
//Tu misión: Seleccioná el botón por su atributo data-action="reveal"
//Al hacerle click, buscá el párrafo con la clase detalle-oculto (que está dentro
//de esa misma estructura) y metele un classList.toggle('visible')
//para que aparezca y desaparezca.

const mostrarInfo = document.querySelector(`.card-interactiva [data-action="reveal"]`);

mostrarInfo.addEventListener(`click`, (e) => {
    const info = document.querySelector(`.card-interactiva .detalle-oculto`);
    info.classList.toggle('visible');
    console.log(info.textContent);
})
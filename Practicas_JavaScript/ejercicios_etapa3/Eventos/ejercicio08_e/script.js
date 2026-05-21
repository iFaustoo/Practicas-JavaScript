//Ejercicio 8: Agregando elementos dinámicos mediante interfaz
//Tu misión: Al hacer clic en el botón #btn-agregar-nota, debés crear un
//elemento completamente nuevo desde JS, meterle la clase nota-guardada
//asignarle el texto "Nota nueva creada en vivo", y finalmente
//inyectarlo (hijo) adentro del .contenedor-notas.

const agregarNota = document.querySelector(`.app-notas #btn-agregar-nota`);

agregarNota.addEventListener(`click`, (e) => {
    const elementoNuevo = document.createElement(`p`);
    elementoNuevo.classList.add(`nota-guardada`);
    elementoNuevo.textContent = "Nota nueva creada en vivo";

    const contenedorNotas = document.querySelector(`.app-notas .contenedor-notas`);
    contenedorNotas.appendChild(elementoNuevo);
});
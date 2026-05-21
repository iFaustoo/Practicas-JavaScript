//Ejercicio 4: Cambiando texto al hacer click
//Tu misión: Al hacer clic en el botón, manipulá su propio contenido
//de texto (textContent) para que cambie a "Cerrar menú".

const abrirMenu = document.getElementById(`btn-magico`);

abrirMenu.addEventListener(`click`, (e) => {
    abrirMenu.textContent = "Cerrar menú";
});
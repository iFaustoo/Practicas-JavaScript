//Zona de Combinación (Burbujeo + Selección + Manipulación + Eventos)
//Ejercicio 6: El botón de borrar en la lista (Delegación básica)
//Tu misión: Seleccioná todos los botones .btn-borrar. Añadiles el
//evento de clic a cada uno de forma individual. Al tocarlos, debés:
//1) Frenar el burbujeo para que la lista no procese el clic
//2) Eliminar por completo del DOM al elemento  que contiene a ese botón
//en específico. (Pista: podés usar e.target.parentElement
//para encontrar al papá del botón y borrarlo)

const botonesBorrar = document.querySelectorAll(`.btn-borrar`);

botonesBorrar[0].addEventListener(`click`, (e) => {
    e.stopPropagation();
    const itemPadre = e.target.parentElement;
    itemPadre.remove();
});

botonesBorrar[1].addEventListener(`click`, (e) => {
    e.stopPropagation();
    const itemPadre = e.target.parentElement;
    itemPadre.remove();
});
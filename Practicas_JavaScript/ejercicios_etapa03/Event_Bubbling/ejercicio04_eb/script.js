//Ejercicio 4: Descubriendo el origen con e.target
//Tu misión: Clavale un addEventListener de clic únicamente al
//#contenedor-noticias. Dentro de la función, mostrá en consola el e.target
//Probá clickeando directamente en el título  o en el párrafo  y mira cómo
//te devuelve el elemento exacto que tocaste gracias a que el
//evento burbujeó hasta el contenedor.

const noticias = document.getElementById(`contenedor-noticias`);
noticias.addEventListener(`click`, (e) => {
    console.log(e.target);
});
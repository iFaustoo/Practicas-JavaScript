//Ejercicio 6: Selectores descendientes (Estilo CSS avanzado)
//Tu misión: Necesito que selecciones el título (h3), pero
//únicamente el que está dentro de la tarjeta del
//producto (card-producto), ignorando el del banner. Usá un selector combinado
//de CSS dentro de tu querySelector. Guardalo en tituloProducto.

const tituloProducto = document.querySelector(`.card-producto .titulo`);
console.log(tituloProducto.textContent);
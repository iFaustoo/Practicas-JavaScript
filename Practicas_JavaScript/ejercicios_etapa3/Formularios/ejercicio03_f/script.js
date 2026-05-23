//Ejercicio 3: Limpiando la pista tras el envío
//Tu misión: Igual que el anterior (frenar y leer el valor), pero una vez
//que hayas leído el valor, usá JavaScript para borrar lo que quedó escrito
//en el input (asignándole un texto vacío ""), dejándolo
//limpio para un nuevo comentario.

const formComentario = document.getElementById(`form-comentario`);
const comentario = document.getElementById(`input-comentario`);

formComentario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log(comentario.value);
    comentario.value = "";
})
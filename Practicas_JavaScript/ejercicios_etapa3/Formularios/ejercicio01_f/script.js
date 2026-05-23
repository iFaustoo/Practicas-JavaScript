//Ejercicio 1: El secuestro del envío
//Tu misión: Capturá el formulario y agregale un escuchador para
//el evento submit. Frená el envío automático (la recarga) y mostrá
//en consola un mensaje que diga "Envío interceptado".

const form = document.getElementById(`form-login`);

form.addEventListener(`submit`, (e) =>{
    e.stopPropagation();
    e.preventDefault();
    console.log("Envío interceptado");
})
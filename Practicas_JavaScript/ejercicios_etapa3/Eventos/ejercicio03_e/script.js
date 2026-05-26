//Ejercicio 3: Frenando el formulario
//Tu misión: Escuchá el envío del formulario. Evitá a toda costa
//que la página se recargue al apretar el botón de enviar y meté
//un console.log("Formulario frenado con éxito").

const form = document.getElementById(`mi-formulario`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log("Formulario frenado con éxito");
});
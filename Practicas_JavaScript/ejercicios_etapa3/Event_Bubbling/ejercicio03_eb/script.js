//Ejercicio 3: El modal y el fondo (Caso real)
//Tu misión: Queremos que si el usuario hace clic afuera del modal
//(en el #fondo-modal), este se cierre. Pero si hace clic adentro del
//#caja-modal, no queremos que se cierre. Aplica stopPropagation donde sea necesario
//para que los clics dentro de la caja de texto no activen el cierre del fondo.

const fondoModal = document.getElementById(`fondo-modal`);
const cajaModal = document.getElementById(`caja-modal`);

fondoModal.addEventListener(`click`, (e) => {
    console.log("Modal cerrado");
});

cajaModal.addEventListener(`click`, (e) => {
    e.stopPropagation();
    console.log("Click dentro del modal: la ventana no se cierra");
});
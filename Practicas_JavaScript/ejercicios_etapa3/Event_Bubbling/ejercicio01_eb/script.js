//Ejercicio 1: Detectando el burbujeo simple
//Tu misión: Agregale un evento de clic al #padre que muestre en consola
//"Clic en el Padre", y un evento de clic al #hijo que muestre "Clic en el Hijo".
//Hacele clic al botón en tu navegador y observá en la consola cómo se imprimen
//ambos mensajes por culpa del burbujeo. Pasame los dos escuchadores estructurados.

const idPadre = document.getElementById(`padre`);
idPadre.addEventListener(`click`, (e) => {
    console.log("Click en el Padre");
});

const idHijo = document.getElementById(`hijo`);
idHijo.addEventListener(`click`, (e) => {
    console.log("Click en el Hijo");
});
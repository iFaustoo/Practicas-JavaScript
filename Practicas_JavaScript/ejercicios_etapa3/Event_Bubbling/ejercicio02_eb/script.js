//Ejercicio 2: Colocando el tapón (stopPropagation)
//Tu misión: Modificá el código del ejercicio anterior para que, al hacer
//clic en el #hijo, se ejecute su propio mensaje en consola pero se frene
//por completo el burbujeo, logrando que el #padre no se entere de nada.

const idPadre = document.getElementById(`padre`);
idPadre.addEventListener(`click`, (e) => {
    console.log("Click en el Padre");
})

const idHijo = document.getElementById(`hijo`);
idHijo.addEventListener(`click`, (e) => {
    console.log("Click en el Hijo");
    e.stopPropagation();
})
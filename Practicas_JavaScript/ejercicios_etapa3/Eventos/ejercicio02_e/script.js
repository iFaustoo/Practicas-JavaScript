//Ejercicio 2: El espía de teclado (Input en vivo)
//Tu misión: Escuchá el evento de escritura en vivo en ese input.
//Cada vez que el usuario presione una tecla, mostrá en la consola el
//valor exacto de lo que va escrito hasta el momento usando e.target.value.

const primerInput = document.getElementById(`campo-texto`);

primerInput.addEventListener(`input`, (e) => {
    console.log(e.target.value);
});
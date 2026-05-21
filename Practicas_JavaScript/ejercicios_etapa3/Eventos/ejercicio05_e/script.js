//Ejercicio 5: El detector de foco (Opcional pero útil)
//Tu misión: Usando el evento 'input', hacé que cada vez que el usuario
//escriba algo ahí dentro, se le agregue la clase escribiendo
//al mismo input (asumí que la clase ya existe en CSS).

const pintar = document.getElementById(`input-color`);

pintar.addEventListener(`input`, (e) => {
    e.target.classList.add(`escribiendo`);
});
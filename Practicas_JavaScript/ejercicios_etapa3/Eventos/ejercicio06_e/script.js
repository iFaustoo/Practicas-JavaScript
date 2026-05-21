//Zona de Combinación Extrema (Selección + Manipulación + Eventos)
//Ejercicio 6: El contador simple
//Tu misión: Al hacer click en el botón con la clase btn-incrementar, debés
//seleccionar el span que tiene el número, leer su valor actual, sumarle 1
//y volver a volcar el resultado dentro del span para que el usuario
//vea cómo sube el contador
//Pista: acordate de pasar el texto a número con Number() o
//parseInt() antes de sumar si es necesario

const btnIncrementar = document.querySelector(`.contador-box .btn-incrementar`);

btnIncrementar.addEventListener(`click`, (e) => {
    const sumarUno = document.querySelector(`.contador-box .numero`);
    let valorActual = parseInt(sumarUno.textContent);
    valorActual = valorActual + 1;
    sumarUno.textContent = valorActual;
});
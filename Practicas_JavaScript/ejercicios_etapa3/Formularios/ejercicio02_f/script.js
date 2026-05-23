//Ejercicio 2: Capturando el valor manual
//Tu misión: Al enviar el formulario, frená la recarga, capturá el valor
//exacto de lo que el usuario escribió en el input y mostralo por consola.

const formBusqueda = document.getElementById('form-busqueda');
const inputBuscar = document.getElementById('input-buscar');

formBusqueda.addEventListener('submit', (e) => {
    console.log(inputBuscar.value);
    e.preventDefault();
});

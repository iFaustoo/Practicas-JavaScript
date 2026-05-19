//Ejercicio 8: Selectores de hijos específicos
//Tu misión: Seleccioná el segundo botón ("Guardar Cambios") que está
//dentro del contenedor, utilizando la pseudo-clase de CSS correspondiente
//(:last-child o :nth-child()) dentro del querySelector. Guardalo en botonGuardar.

const botonGuardar = document.querySelector(`.contenedor-botones .btn:nth-child(2)`);
console.log(botonGuardar.textContent);
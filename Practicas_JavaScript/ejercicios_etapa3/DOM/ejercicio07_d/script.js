//Ejercicio 7: Destruyendo el elemento deshabilitado
//Tu misión: Seleccioná de forma precisa el elemento de la lista
//que tiene el atributo data-status="deshabilitado" y eliminalo
//por completo del DOM para que el usuario ya no lo vea.

const listaDescargas = document.querySelector(`[data-status="deshabilitado"]`);

listaDescargas.remove();
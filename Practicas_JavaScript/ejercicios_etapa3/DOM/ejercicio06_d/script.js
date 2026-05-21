//Zona de Combinación (Selección + Manipulación)
//A partir de acá, primero vas a tener que usar un selector preciso
//(descendientes, atributos, etc.) y luego aplicar la manipulación.
//Ejercicio 6: Modificando la tarjeta correcta
//Tu misión: Seleccioná únicamente el párrafo del precio que
//pertenece al producto-2 y cambiale el texto a "$30.000"
//No debés tocar el precio del producto 1.

const producto = document.querySelector(`#producto-2 .precio`);

producto.textContent = "$30.000";
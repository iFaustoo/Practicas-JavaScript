//Ejercicio 4: Creando vida desde cero
//Tu misión: Creá un nuevo elemento <li> desde JS, asignale
//el texto "Huevos" y metelo adentro de la lista de supermercado
//para que aparezca abajo de "Leche".

const nuevoItem = document.createElement(`li`);

const listaSuper = document.getElementById(`lista-super`);

nuevoItem.textContent = "Huevos";

listaSuper.appendChild(nuevoItem);
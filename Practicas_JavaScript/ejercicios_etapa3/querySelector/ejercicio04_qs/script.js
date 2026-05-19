//Ejercicio 4: El primero de muchos
//Tu misión: Usando únicamente querySelector, seleccioná el primer
//elemento de la lista y guardalo en una variable llamada primerItem.

const primerItem = document.querySelector(`.lista-tareas :first-child`);
console.log(primerItem.textContent);
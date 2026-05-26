//EJERCICIO ENCONTRAR MÁXIMO
//Tenés este array: const puntajes = [45, 98, 12, 102, 34];
//Tarea: Sin usar métodos raros, usá un simple bucle (o un .forEach()) para encontrar cuál es
//el número más grande y guardalo en una variable.
//Reto: Si querés investigar la forma "pro", buscá Math.max() combinado con el Spread Operator

const puntajes = [45, 98, 12, 102, 34];

const maximo = Math.max(...puntajes);

console.log(maximo);
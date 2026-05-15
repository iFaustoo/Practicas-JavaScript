//EJERCICIO DE DESTRUCTURING DE ARRAY
//Tarea: Usá Destructuring para guardar el primer color en una variable llamada primero y el
//segundo en una llamada segundo.
//Reto extra: ¿Podés capturar el resto de los colores en una lista llamada otros usando el
//operador Rest (...)?

const colores = ["rojo", "verde", "azul", "amarillo"];

const [primero, segundo, ...otros] = colores;

console.log(primero);
console.log(segundo);
console.log(otros);

//PRIMERO = ROJO
//SEGUNDOI = VERDE
//Se ve q se guía según las posiciones en base a parámetro

//El operador REST en este caso se encaga de seleccionar todos aquellos elementos que NO
//fueron seleccionados, repito, aquellos que NO fueron seleccionados, (rojo y verde no cuentan)
//porque los mismos ya se los asigné a las variables primero y segundo
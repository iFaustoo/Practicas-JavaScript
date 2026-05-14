//EJERCICIO DEL .MAP
//RECORDEMOS QUE EL .MAP CREA UN ARRAY NUEVO, NO MODIFICA EL ORIGINAL

//Objetivo: Crear un nuevo array llamado dobles que contenga el doble de cada número usando .map(). Imprimir el nuevo array.

const numeritos = [1, 5, 10, 15];

const dobles = numeritos.map((numero) => numero * 2);

console.log(dobles);


//EJERCICIO DE BUSCAR UNA PAREJA DE NÚMEROS
//Vamos a comparar un elemento con otro
//Mostrá todas las combinaciones posibles de pares.
//Resultado esperado:

const numeros = [2, 5, 8];
const combinaciones = [];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        combinaciones.push([numeros[i], numeros[j]]);
    }
}

console.log(combinaciones);

//Ejemplo bastante práctico para aprender acerca del caso
//de uso de 2 for anidados para la muestra y comparación
//de distintos números, bastante útil wacho


//LO HAGO UNA VEZ MÁS PQ ME GUSTÓ MUCHO xdxd

//const numeros = [1, 2, 3];
//const combinaciones = [];

//for (let i = 0; i < numeros.length; i++) {
//    for (let j = 0; j < numeros.length; j++) {
//        combinaciones.push([numeros[i], numeros[j]]);
//    }
//}

//console.log(combinaciones);
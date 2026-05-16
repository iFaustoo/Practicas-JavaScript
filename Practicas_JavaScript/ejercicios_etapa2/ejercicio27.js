//EJERCICIO DE SUMAR PAREJAS DE NÚMEROS
//Objetivo: aprender a usar el resultado de una comparación
//Con el array: const numeros = [2, 5, 8]
//Mostrá la suma de cada pareja.
//Resultado esperado: 2 + 5 = 7 || 2 + 8 = 10 ||5 + 8 = 13

const numeros = [1, 2, 3];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        const suma = numeros[i] + numeros[j];
        console.log(`${numeros[i]} + ${numeros[j]} = ${suma}`);
    }
}

//Este ejercicio también me gustó mucho voy a aplicarlo de nuevo xd

//const numeros = [2, 4, 6, 8];

//for (let i = 0; i < numeros.length; i++) {
//    for (let j = 0; j < numeros.length; j++) {
//        const sumaNums = numeros[i] + numeros[j];
//        console.log(`${numeros[i]} + ${numeros[j]} = ${suma}`);
//    }
//}
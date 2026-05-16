//EJERCICIO PARECIDO AL TWO SUM
//ENCONTRAR SUMA ESPECÍFICA
//Dado: const numeros = [2, 7, 11, 15] y const target = 9
//Mostrá los dos números cuya suma sea 9
//Resultado esperado: 2 y 7

const numeros = [2, 7, 11, 15];
const target = 9;

for (let i = 0; i < numeros.length; i++) {
    for (let j = 1; j < numeros.length; j++) {
        if (numeros[i] + numeros[j] === target) {
            console.log(`${numeros[i]} y ${numeros[j]}`);
        }
    }
}
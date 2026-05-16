//EJERCICIO TWO SUM (LeetCode classic)
//Vamo con lo heavy
//Tenés un array de números y un número que es el "objetivo" (target):
//const numeros = [2, 7, 11, 15]; const target = 9;
//Tarea: Escribí una función que encuentre los índices de los dos
//números que sumados den el target
//En este caso, como 2 + 7 = 9, debería devolver los índices [0, 1].

const nums = [2, 7, 11, 15];
const target = 18;

for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(`${[i]} y ${[j]}`);
        }
    }
}

//Este costó un poco más que los otros pero me terminó gustando mucho tmb
//Voy a hacerlo un par de veces más para guardar la lógica bien y poder recordarlo

const nums2 = [2, 7, 11, 15];
const target2 = 9;

for (let i = 0; i < nums2.length; i++) {
    for (let j = i; j < nums2.length; j++) {
        if (nums2[i] + nums2[j] === target2) {
            console.log(`${[i]} y ${[j]}`);
        }
    }
}

//

const nums3 = [2, 7, 11, 15];
const target3 = 26;

for (let i = 0; i < nums3.length; i++) {
    for (let j = i; j < nums.length; j++) {
        if (nums3[i] + nums3[j] === target3) {
            console.log(`${[i]} y ${[j]}`);
        }
    }
}

//Que satisfacción entender esto, siento como ni nivel sube, GRINDING 4 EVER
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


//ADJUNTO MANERA **AVANZADA** DE COMO RESOLVER EL TWO SUM

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    const map = new Map(); //CREAMOS UN OBJ TIPO MAP PARA HACER MEMORIA DE LO Q YA VI
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; //CALCULAMOS LO QUE ME FALTA PARA LLEGAR AL TARGET
        
        if (map.has(complement)) { //ACÁ ESTOY PREGUNTANDO, YA VÍ ESE NÚMERO ANTES?
            return [map.get(complement), i]; //DEVUELVO LAS POSICIONES
        }
        
        map.set(nums[i], i); //GUARDO EL NÚMERO ACTUAL PARA FUTURAS COMPARACIONES
    }
}

//Por lo visto, esta solución es mejor ya que hace el ejercicio de una sola pasada
//No me tengo que quedar con la idea de usar un obj tipo map, sino que debo quedarme con la idea de que
//en vez de buscar parejas,
//guardo lo que ya ví y pregunto si falta su complemento
//PENSAR ASÍ:
//busco la pareja, pregunto si la pareja ya apareció...
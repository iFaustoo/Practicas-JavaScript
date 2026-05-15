//EJERCICIO DE CONTAR OCURRENCIAS
//Tarea: Creá una función que devuelva un objeto que cuente cuántas veces aparece cada voto.
//Ejemplo de salida: { si: 3, no: 2, "tal vez": 1 }
//Pista: Usá un .forEach() y recordá que podés acceder a las propiedades de un objeto con
//corchetes objeto[voto].

function contarVotos(votos) {
    // 1. Crear un objeto vacío para almacenar los resultados
    const conteo = {};

    // 2. Recorrer cada voto del array con .forEach()
    votos.forEach(voto => {
        // 3. Si el voto ya existe en el objeto, sumarle 1
        if (conteo[voto]) {
            conteo[voto] += 1;
        } else {
            // 4. Si el voto no existe, inicializarlo en 1
            conteo[voto] = 1;
        }
    });

    // 5. Retornar el objeto con los resultados finales
    return conteo;
}

// --- Prueba de la función ---
const votosEmitidos = ["si", "no", "si", "tal vez", "si", "no"];
const resultado = contarVotos(votosEmitidos);

console.log(resultado); 
// Salida esperada: { si: 3, no: 2, "tal vez": 1 }

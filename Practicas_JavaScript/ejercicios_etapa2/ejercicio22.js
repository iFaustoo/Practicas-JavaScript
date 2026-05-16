//EJERCICIO DE CONTAR OCURRENCIAS
//Tarea: Creá una función que devuelva un objeto que cuente cuántas veces aparece cada voto.
//Ejemplo de salida: { si: 3, no: 2, "tal vez": 1 }
//Pista: Usá un .forEach() y recordá que podés acceder a las propiedades de un objeto con
//corchetes objeto[voto].

const votos = ["si", "no", "si", "si", "no", "tal vez"];

function contarVotos(listaDeVotos) {
  const conteo = {};

  listaDeVotos.forEach(voto => {
    
    // Paso 3 y 4: Condicional para ver si ya existe en la libreta
    if (conteo[voto]) {
      // Si el voto ya existía, le sumamos 1 al contador actual
      conteo[voto]++; 
    } else {
      // Si es la primera vez que aparece, lo registramos con el valor 1
      conteo[voto] = 1;
    }
    
  });

  // Al terminar el bucle, devolvemos el objeto con todos los resultados
  return conteo;
}

// Ejecutamos la función pasando nuestro array de votos
const resultado = contarVotos(votos);
console.log(resultado); 
// Resultado en consola: { si: 3, no: 2, "tal vez": 1 }
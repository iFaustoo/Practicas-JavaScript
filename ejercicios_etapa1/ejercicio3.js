//A partir de ahora acá pegué un salto de nivel podriamos decirle "chiquito"
//porque yo ya vengo de C# y sé manejar todo lo que son bucles, comparadores
//o demás, así que voy a pegar un saltito chiquito nomás y venir a las funciones
//ahora voy a hacer una calculadora

const n1 = 10;
const n2 = 5;
let resultado;
const operacion = "d";

if (operacion === "s") {
    resultado = n1 + n2;
} else if (operacion === "r") {
    resultado = n1 - n2;
} else if (operacion === "m") {
    resultado = n1 * n2;
} else if (operacion === "d") {
    if (n2 === 0) {
        console.log("Error, tratando de realizar una división por cero");
    }
    else {
        resultado = n1 / n2;
    }
} else {
    console.log("Operación inexistente.");
}

if (resultado != undefined) {
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}
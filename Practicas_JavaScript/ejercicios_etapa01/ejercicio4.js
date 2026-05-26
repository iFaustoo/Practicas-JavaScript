function Calculadora(a, b, operacion) {
    let resultado;

    if (operacion === "s") {
        resultado = a + b;
    } else if (operacion === "r") {
        resultado = a - b;
    } else if (operacion === "m") {
        resultado = a * b;
    } else if (operacion === "d") {
        if (b === 0) {
            console.log("Error, división por cero");
        }
        else {
        resultado = a / b;
        }
    } else {
        console.log("Error, operación inexistente.");
    }

    return resultado;
}

const num1 = 10;
const num2 = 10;
const op ="s";

const final = Calculadora(num1, num2, op);

console.log(final);
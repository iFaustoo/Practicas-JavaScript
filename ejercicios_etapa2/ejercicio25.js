//EJERCICIO FIZZBUZZ (clásico de entrevistas)
//Tarea: Escribí un bucle que imprima los números del 1 al 15. Pero:
//Si el número es divisible por 3, imprimí "Fizz" en lugar del número.
//Si es divisible por 5, imprimí "Buzz".
//Si es divisible por ambos (3 y 5), imprimí "FizzBuzz".

for (let i = 1; i < 16; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
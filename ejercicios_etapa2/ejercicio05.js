//EJERCICIO DE MAP + FILTER
//Primero, usá .filter() para quedarte solo con los sueldos mayores a 700.
//A ese resultado, aplicale un .map() para sumarles un bono de 100 pesos.

const sueldos = [500, 1200, 800, 2000, 400];

const mayores = sueldos.filter((element) => element > 700);

const bono = mayores.map((element) => element + 100);

console.log(bono);
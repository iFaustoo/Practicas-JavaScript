//EJERCICIO REDUCE
//Usá .reduce() para obtener el total de la suma de todos los precios e imprimilo.

const carrito = [1500, 3000, 500, 2500];

const totalPrecioFinal = carrito.reduce((ac1, ac2) => ac1 + ac2);

console.log(totalPrecioFinal);
//EJERCICIO ARRAY DE OBJETOS
//Tarea: Usando .map(), creá un nuevo array que contenga solo los nombres de los productos en mayúsculas.
//Pista: Podemos usar .toUpperCase() para pasar a mayúsculas.

const productos = [
    { nombre: "Monitor", precio: 20000 },
    { nombre: "Teclado", precio: 5000 },
    { nombre: "Mouse", precio: 3000 }
];

const mayus = productos.map((element) => element.nombre.toUpperCase());

console.log(mayus);
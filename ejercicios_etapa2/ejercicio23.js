//EJERCICIO ORDENAR POR PROPIEDAD
//Tarea: Usá el método .sort() para ordenar el array de mayor a menor según la nota.
//Ojo: El .sort() de JS es medio mañoso (ordena como texto por defecto), vas a necesitar
//pasarle una función de comparación: (a, b) => b.nota - a.nota.

const alumnos = [
    { nombre: "Fausto", nota: 10 },
    { nombre: "Ana", nota: 7 },
    { nombre: "Pedro", nota: 9 }
];

alumnos.sort((a, b) => b.nota - a.nota);
console.log(alumnos);

//HACEMOS OTRO
//Tarea: Usá el método .sort() para ordenar el array de productos 
//de menor a mayor (precio ascendente) según su precio.

const productos = [
  { nombre: "Teclado Mecánico", precio: 85 },
  { nombre: "Mouse Gamer", precio: 45 },
  { nombre: "Monitor 4K", precio: 320 },
  { nombre: "Pad para Mouse", precio: 15 }
];

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);
// Resultado esperado: Pad (15), Mouse (45), Teclado (85), Monitor (320)

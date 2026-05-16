//EJERCICIO OBJETOS
//Imprimnir en la consola el .tipo de un obj del array stock

const stock = [
    { nombre: "Manzana", tipo: "fruta" },
    { nombre: "Fideos", tipo: "almacen" },
    { nombre: "Banana", tipo: "fruta" },
    { nombre: "Arroz", tipo: "almacen" }
];

//Aprendimos el for...of, podríamos llegar a darle buen uso

for (const prods of stock) {
    console.log(prods.tipo);
}
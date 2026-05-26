//EJERCICIO DETECTAR SI UNA CATEGORÍA EXISTE
//Agregar "Banana" dentro del array ya existente
//Resultado final: { fruta: ["Manzana", "Banana"] }
//Pista: Necesitas usar .push
//La idea es: resultado[algo].push(algo)

const resultado = {
   fruta: ["Manzana"]
};

const producto = {
   nombre: "Banana",
   tipo: "fruta"
};

resultado[producto.tipo].push(producto.nombre);

console.log(resultado);
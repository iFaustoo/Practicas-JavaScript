//EJERCICIO DE OBJETO
//Vamos a crear un objeto acumulador
//Tenemos que lograr obtener: { fruta: "Manzana" }
//PISTA: Pensá en resultado["fruta"] = ["Manzana"];
//pero usando los datos del objeto producto.tipo y producto.nombre

const producto = { nombre: "Manzana", tipo: "fruta" };

const resultado = {};

resultado[producto.tipo] = [producto.nombre];

console.log(resultado);
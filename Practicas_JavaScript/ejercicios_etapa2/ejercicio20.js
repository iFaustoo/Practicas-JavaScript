//REFERENCIA AVANZADA
//Tarea: Creá una función que reciba ese objeto y le agregue una propiedad entregado: true.
//El desafío: Hacé que la función sea inmutable. Es decir, que no modifique el objeto original,
//sino que devuelva uno nuevo con la propiedad agregada (usando el Spread Operator).

//Conceptos clave:
//Encadenamiento: Poner un punto detrás de otro (array.filter().map().reduce()).
//Inmutabilidad: "No toques lo que ya existe, hacé algo nuevo basado en eso". Es la ley de oro en React.

const pedido = { producto: "Pizza", precio: 1000 };

function marcarEntregado(objetoOriginal) {
    return {
        ...objetoOriginal,
        entregado: true
    };
};

const pedidoActualizado = marcarEntregado(pedido);

console.log("Original:", pedido); 
console.log("Nuevo:", pedidoActualizado);

//Es difícil de entender pero, después del return, en JS, al usar las llaves justo después es como
//si estamos diciendo "quiero crear y retornar un objeto completamente nuevo ahora mismo" y ya está.
//Es así como después ya estamos retornando un objeto totalmente nuevo pero que está sin asignar,
//es por eso que hacemos const pedidoActualizado, le estamos asignando nuestro objeto retornado
//a dicha variable para así poder mostrarla en nuestra consola como está hecho más adelante
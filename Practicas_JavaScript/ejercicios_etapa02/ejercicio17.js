//Creá una función llamada sumarTodo que use el Rest Parameter (...numeros) para
//recibir cualquier cantidad de números como argumentos y devuelva la suma de todos.
//Ejemplo: sumarTodo(1, 2, 3) -> 6 | sumarTodo(10, 10, 10, 10) -> 40.

function sumarTodo(...numeros) {
    const resultado = numeros.reduce((a, b) => a + b);
    return resultado;
}

console.log(sumarTodo(10, 40, 50)); //Resultado: 100 | Nos dió bien en la consola (output)
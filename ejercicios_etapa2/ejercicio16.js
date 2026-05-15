//EJERCICIO DE LÓGICA DE DATOS Y MUTABILIDAD
//find e includes
//Usá .includes() para verificar si "Augusto" está en la lista (debe dar true).
//Usá .find() para buscar el primer nombre que empiece con la letra "S".

const invitados = ["Fausto", "Matias", "Augusto", "Sofia"];

console.log(invitados.includes("Augusto"));

//En resumen, el includes() se utiliza para devolver v o f en caso de que exista o no
//dicho texto o elemento dentro de nuestro array u objeto

const empiezaConS = invitados.find((element) => element.startsWithq("S"));

console.log(empiezaConS);

//El find lo utilizamos para buscar cierto dato dentro de nuestro array u objeto en específico
//que se encuentre bajo nuestra condición de la arrow function y procedemos a dsps devolverlo
//imprimiendo la variable a la q le asignamos la función, nashe
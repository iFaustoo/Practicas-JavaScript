//EJERCICIO FUSIONANDO ARRAYS
//Tarea: Creá un tercer array llamado añoCompleto que contenga todas las materias de ambos
//usando el Spread Operator.

const primerSemestre = ["Programación I", "Sistemas"];
const segundoSemestre = ["Programacion II", "Base de Datos"];

const añoCompleto = [...primerSemestre, ...segundoSemestre]; 

console.log(añoCompleto);

//Costó pero se resolvió fácil, hay que recordar que el array nuevo que estamos creando al querer fusionar arrays
//es importante diferenciar el caso de uso en cuanto el REST, en este caso usamos SPREAD.
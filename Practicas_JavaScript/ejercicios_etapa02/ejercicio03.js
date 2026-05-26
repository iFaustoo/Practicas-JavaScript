//EJERCICIO CON FILTER
//Creá un nuevo array llamado aprobados que solo tenga las notas mayores o iguales a 6 usando .filter().

const notas = [4, 8, 3, 10, 5, 7];

const aprobados = notas.filter((aprobados) => aprobados >= 6);

console.log(aprobados);
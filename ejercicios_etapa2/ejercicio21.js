//LÓGICA DE ALGORITMOS
//Eliminar duplicados
//Tenés una lista de IDs de productos que vinieron fallados de la base de datos y algunos están repetidos:
//Tarea: Creá un nuevo array llamado idsUnicos que no tenga repetidos.
//Pista "Criolla": Podés usar un .filter() con .indexOf(), o podés investigar el objeto new
//Set(), que en JS es como un club privado donde no dejan entrar a nadie que ya esté adentro

const ids = [1, 2, 4, 2, 5, 1, 6, 4];

const idsUnicos = ids.filter((num, index) => ids.indexOf(num) !== index);

console.log(idsUnicos); //SOLO DEVOLVEMOS LOS Q ESTÁN REPETIDOS lpm

//

const ids2 = [1, 2, 4, 2, 5, 1, 6, 4];

const idsUnicos2 = ids2.filter((num, index, array) => array.indexOf(num) === index);

console.log(idsUnicos2); //ELIMINAMOS LOS Q ESTÁN REPETIDOS/DUPLICADOS

//
//Hago dos más para guardar bien la info

const duplicados = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10];

const sinDuplicados = duplicados.filter((num, index, array) => array.indexOf(num) === index);

console.log(sinDuplicados);

const duplicados2 = [2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6,];

const sinDuplicados2 = duplicados2.filter((num, index, array) => array.indexOf(num) === index);

console.log(sinDuplicados2);
//EJERCICIO DESTRUCTURING DE OBJETOS
//Tarea: Usá Destructuring para extraer nombreUsuario y email en variables separadas e imprimilas. No vale hacer config.email.

const config = {
    id: 1,
    nombreUsuario: "FaustoProg",
    email: "fausto@mail.com",
    tema: "oscuro"
};

const { nombreUsuario, email } = config;

console.log(nombreUsuario);
console.log(email);

//En resumen, DESTRUCTURING es la extracción de datos de arrays u objetos para asignarlos a variables de forma rápida y limpia
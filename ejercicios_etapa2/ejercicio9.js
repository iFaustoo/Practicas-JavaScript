//OBJETO DENTRO DE OBJETO
//Tarea: Creá un objeto estudiante que tenga nombre, carrera y una propiedad direccion
//que sea otro objeto con calle y ciudad.
//Reto: Imprimí solo la ciudad accediendo desde el objeto padre.

const estudiante = {
    nombre: "Fausto",
    carrera: "Programacion",
    direccion: {
        calle: "25 de Mayo",
        ciudad: "Paraná"
    }
};

console.log(`${estudiante.direccion.ciudad}`);
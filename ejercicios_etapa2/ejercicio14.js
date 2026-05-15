//EJERCICIO OPERADOR SPREAD
//Creá un objeto usuario1 con nombre: "Nico".
//Creá usuario2 pero esta vez hacé una copia real usando el Spread Operator ({...usuario1}).
//Cambiá el nombre de usuario2 a "Pedro".
//Comprobá con un console.log que usuario1 NO cambió.

const usuario1 = {
    nombre: "Nico"
};

const usuario2 = { 
    ...usuario1
};

usuario2.nombre = "Pedro";

console.log(`usuario1: `, usuario1);
console.log(`usuario2: `, usuario2);

//Lo que hicimos acá es básicamente probar el hecho de crear un nuevo objeto que se ve que
//es completamente distinto al anterior, y por ende, el objeto B que en este caso sería usuario2
//lo q hace es recibir con el spread operator (...usuario1) todas las propiedades (datos) de usuario1
//y es así como tenemos objeto A y B, dos objetos distintos, ya que lo único que hice fue clonar los
//datos del objeto A en el B, por eso al modificar el .nombre del B o del A, terminan siendo distintos.
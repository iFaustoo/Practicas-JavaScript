//OBJETO Y ACCESO
//Continuo con el objeto anterior pero le sumo como propiedad una función, (saludar), para después ejecutarla

const persona = {
    nombre: "Fausto",
    edad: 18,
    profesion: "Programador",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y estudio para ejercer como ${this.profesion}`);
    }
}

console.log(`Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años y estudio para ejercer como ${persona.profesion}`);

persona.saludar();
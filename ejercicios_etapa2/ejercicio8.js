//VEMOS EL CUIDADO Q HAY Q TENER CON LA REFERENCIA

//Creá un objeto auto1 con marca: "Fiat".
//Creá una variable auto2 e igualala a auto1.
//Cambiá la marca de auto2 a "Ferrari".
//Hacé un console.log de auto1.marca. ¿Qué pasó? ¿Por qué creés que cambió (o no)?

const auto1 = {
    marca: "Fiat",
}

const auto2 = auto1;

auto2.marca = "Ferrari";

console.log(auto1);
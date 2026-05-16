//VEMOS EL CUIDADO Q HAY Q TENER CON LA REFERENCIA

//Creá un objeto auto1 con marca: "Fiat".
//Creá una variable auto2 e igualala a auto1.
//Cambiá la marca de auto2 a "Ferrari".
//Hacé un console.log de auto1.marca. ¿Qué pasó? ¿Por qué creés que cambió (o no)?

const auto1 = {
    marca: "Fiat",
};

const auto2 = auto1;

auto2.marca = "Ferrari";

console.log(auto1);

//Por lo visto, esto suecede porque los objetos NO se guardan directamente en una variable, sino que se guardan en una REFERENCIA.
//la referencia sería la dirección en la memoria, que por ende, es donde está ubicado el objeto.
//Lo q ocurre en el código:
//const auto1 = { marca: "Fiat", }: Creas el objeto en la memoria y auto1 guarda la referencia a él
//const auto2 = auto1;: Copias la referencia, no el objeto. Ahora auto1 y auto2 apuntan exactamente al mismo objeto en la memoria
//auto2.marca = "Ferrari";: Al modificar la propiedad a través de auto2, estás cambiando el objeto original al que ambos apuntan
//console.log(auto1);: Como auto1 sigue apuntando al mismo objeto modificado, el resultado en consola será { marca: "Ferrari" }
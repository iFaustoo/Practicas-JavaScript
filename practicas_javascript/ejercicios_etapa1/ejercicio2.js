//¿Qué pasa si queremos ser más específicos? Por ejemplo:
//Si tiene más de 60, que diga: "Pasá ${name}, usted va a la cabecera".
//Si tiene entre 18 y 60, "Pasá ${name}, hay asado".
//Si es menor, "Andá a dormir".

const name = "Fausto";
const age = 21;

if (age >= 60) {
    console.log(`Pasá ${name}, usted va a la cabecera.`);
} else if (age >= 18) {
    console.log(`Pasá ${name}, hay asado`);
} else {
    console.log(`Andá a dormir, ${name}`);
}
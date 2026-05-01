// Reto: Crear una variable con tu nombre y otra con tu edad. 
// Si la edad es mayor a 18, mostrar un mensaje que diga: 
// "Pasá [Nombre], hay asado". Si es menor: "Andá a dormir, [Nombre]".

const name = "Fausto";
const age = 18;

if (age >= 18) {
    // Usando la forma moderna con ` ` y ${}
    console.log(`Pasá ${name}, hay asado`);
} else {
    console.log(`Andá a dormir, ${name}`);
}
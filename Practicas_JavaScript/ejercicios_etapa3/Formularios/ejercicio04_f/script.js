//Ejercicio 4: Extrayendo opciones de un Select
//Tu misión: Los  funcionan igual que los inputs. Al enviar,
//capturá qué opción eligió el usuario (te va a devolver el
//atributo value, no el texto) y mostralo en consola.

const form = document.getElementById(`form-pais`);
const btn = document.getElementById(`btn-guardar`);
const opcion = document.getElementById(`select-pais`);

btn.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(opcion.value);
})
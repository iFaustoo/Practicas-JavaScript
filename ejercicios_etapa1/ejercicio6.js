//FUNCION PARA VALIDAR NOMBRE DE USUARIO

function validateUsername(input) {
    if (!input || input.trim().lenght === 0) {
        return "Error. Nombre vacío/En blanco";
    }
    if (input.length < 3) {
        return "Error. No puede ingresar un valor con menos de 3 carácteres";
    }
    if (!isNaN(input)) {
        return "Error. No puede ingresar números";
    }
}

console.log(validateUsername(""));
console.log(validateUsername("Fa"));
console.log(validateUsername("12"));
console.log(validateUsername("123"));
console.log(validateUsername("Fau"))

//Podría hacerlo con un switch pero alta paja
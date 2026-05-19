//Ejercicio 7: Buscando por atributos
//Tu misión: Seleccioná específicamente el campo donde
//el usuario va a poner su contraseña, identificándolo por su atributo
//type="password". Guardalo en inputPassword.

const inputPassword = document.querySelector(`input[type="password"]`);
console.log(inputPassword.placeholder);
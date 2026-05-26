//Ejercicio 3: Encendiendo el Modo Oscuro
//Tu misión: Mediante JavaScript, quitale al body la clase
//light-mode y agregale la clase dark-mode.

const modoClaro = document.querySelector(`light-mode`);

modoClaro.classList.remove(`light-mode`);

modoClaro.classList.add(`dark-mode`);
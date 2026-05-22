//Ejercicio 5: Diferencia entre Target y CurrentTarget
//Tu misión: Poné un escuchador de clic en #caja-clickeable
//Al hacer clic sobre el texto interno, mandá dos logs separados a la consola:
//uno que muestre e.target y otro que muestre e.currentTarget, para
//para ver la diferencia en vivo en tu archivo de pruebas.

const cajaClickeable = document.getElementById(`caja-clickeable`);
cajaClickeable.addEventListener(`click`, (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
});
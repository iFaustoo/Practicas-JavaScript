//FUNCIONES PURAS VS IMPURAS (teoría y práctica)
//Recordar: Una función es pura cuando NO MODIFICA NADA AFUERA DE ELLA
//y cuando PARA LA MISMA ENTRADA, SIEMPRE LA MISMA SALIDA, en cuyo caso, impura

//Tarea: Escribí una función pura que reciba un número y devuelva su cuadrado. Luego,
//escribí una función impura que modifique una variable global contador cada vez que
//se ejecute

function funcionPura(numero) {
    return numero * numero;
}

console.log(funcionPura(10));



let contador = 0;
function funcionImpura(variableGlobal) {
    variableGlobal++;
    return variableGlobal;
}
console.log(funcionImpura(contador));
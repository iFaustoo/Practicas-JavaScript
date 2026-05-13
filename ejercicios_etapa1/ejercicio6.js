const numeros = [10, 20, 30, 40];

function sumarArray(lista) {
    let total = 0;
    
    for (let i = 0; i < lista.length; i++) {
        total += [i];
    }
    return total;
}

console.log(sumarArray(numeros));
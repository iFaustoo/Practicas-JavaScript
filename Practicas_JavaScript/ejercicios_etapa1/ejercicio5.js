function invertirTexto(texto) {
    let textoInvertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

console.log(invertirTexto('Mono-Puto'));
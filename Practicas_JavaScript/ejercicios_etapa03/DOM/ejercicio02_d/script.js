//Ejercicio 2: El cambiazo de HTML
//Tu misión: Inyectá dentro de ese div vacío un párrafo que contenga
//un texto de advertencia, donde la palabra "ERROR:" esté envuelta
//en una etiqueta <strong> para que se vea en negrita.

const alerta = document.getElementById(`contenedor-alerta`);

const nuevoParrafo = document.createElement(`p`);

nuevoParrafo.innerHTML = "<p><strong>ERROR:</strong></p>";

alerta.appendChild(nuevoParrafo);
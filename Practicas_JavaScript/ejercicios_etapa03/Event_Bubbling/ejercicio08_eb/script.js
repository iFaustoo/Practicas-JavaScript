//Ejercicio 8: Capturando datos del hijo dinámicamente
//Tu misión: Colocá un solo escuchador de clics en el contenedor
//#galeria-imagenes. Al hacer clic en cualquiera de las imágenes, capturá el
//valor de su atributo personalizado data-id usando e.target.getAttribute('data-id')
//manipulá el texto del #visor-id para mostrar ese número en pantalla.

    const galeria = document.getElementById(`galeria-imagenes`);

    galeria.addEventListener(`click`, (e) => {
        const idSeleccionado = e.target.getAttribute(`data-id`);
        const visor = document.getElementById(`visor-id`);
        visor.textContent = "ID Seleccionado: " + idSeleccionado;
    });
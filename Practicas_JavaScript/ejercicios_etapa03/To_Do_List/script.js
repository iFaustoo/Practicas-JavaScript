const btnAgregar = document.getElementById(`addBtn`);
const lista = document.getElementById(`taskList`);
const inputTarea = document.getElementById(`taskInput`);

const agregarTarea = () => {
    if (inputTarea.value !== "") {
        const nuevoItem = document.createElement(`li`);
        nuevoItem.textContent = inputTarea.value;

        const btnEliminar = document.createElement(`button`);
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener(`click`, () => {
            nuevoItem.remove();
        });

        const btnCompletar = document.createElement(`button`);
        btnCompletar.textContent = "Listo";
        btnCompletar.classList.add(`btn-listo`)
        btnCompletar.addEventListener(`click`, () => {
            nuevoItem.classList.toggle(`tarea-completada`);
        });

        nuevoItem.appendChild(btnCompletar);
        nuevoItem.appendChild(btnEliminar);
        lista.appendChild(nuevoItem);
        inputTarea.value = "";
    }
};
btnAgregar.addEventListener(`click`, agregarTarea);

inputTarea.addEventListener(`keydown`, (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
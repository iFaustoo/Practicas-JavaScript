export function initTasks() {
    const input = document.getElementById('input-text');
    const addButton = document.getElementById(`add-button`);
    const myList = document.getElementById(`list`);

    let savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    savedTasks.forEach(text => {
        createLiElement(text);
    });

    function createLiElement(text) {
        const item = document.createElement('li');
        item.classList.add('item-class');
        item.innerHTML = `
            <button class="button-completed">✓</button>
            <span class="item-text">${text}</span>
            <button class="button-delete">Delete</button>
        `;

        /*const buttonDelete = document.querySelector('button-delete');
        buttonDelete.addEventListener(`click`, () => {
            item.remove();
            saveTasksToLocalStorage();
        }); ESTA MANERA ESTARÍA MAL*/

        item.querySelector('.button-delete').addEventListener(`click`, () => {
            item.remove();
            saveTasksToLocalStorage();
        });

        /*const buttonCompleted = document.querySelector('button-completed');
        buttonCompleted.addEventListener(`click`, (e) => {
            e.target.classList.toggle('completed');
        }); ESTA MANERA ESTARÍA MAL*/

        item.querySelector('.button-completed').addEventListener(`click`, (e) => {
            e.target.classList.toggle('completed');
            item.querySelector('.item-text').classList.toggle('completed');
        });

        myList.appendChild(item);
    }

    function saveTasksToLocalStorage() {
        const tasks = [];
        const taskElements = document.querySelectorAll('.item-text');
    
        taskElements.forEach(item => {
            tasks.push(item.textContent);
        });
    
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }

    const addTask = () => {
        if (input.value != "") {
            createLiElement(input.value);
            input.value = "";
            saveTasksToLocalStorage();
        }
    };

    addButton.addEventListener('click', addTask);
    
    input.addEventListener(`keydown`, (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    });
}

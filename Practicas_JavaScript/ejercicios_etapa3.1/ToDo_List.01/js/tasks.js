export function initTasks() {
    const input = document.getElementById('input-text');
    const addButton = document.getElementById(`add-button`);
    const myList = document.getElementById(`list`);

    /* logica de mi historial */
    const historyList = document.getElementById('history-list');
    const toggleHistoryBtn = document.getElementById('toggle-history-btn');

    toggleHistoryBtn.addEventListener(`click`, () => {
        historyList.classList.toggle('open');
        
        if (historyList.classList.contains('open')) {
            toggleHistoryBtn.textContent = "▼";
        } else {
            toggleHistoryBtn.textContent = "▲";
        }
    });

    const clearHistoryBtn = document.getElementById('clear-history-btn');
    clearHistoryBtn.addEventListener(`click`, () => {
        historyList.innerHTML = "";
        localStorage.removeItem('deletedTasks');
    });

    function createHistoryItem(text) {
        const historyItem = document.createElement('li');
        historyItem.classList.add('history-item');
        historyItem.textContent = text;
        
        historyList.appendChild(historyItem);
    }

    let deletedTasks = JSON.parse(localStorage.getItem('deletedTask')) || [];

    deletedTasks.forEach(text => {
        createHistoryItem(text);
    });

    function saveDeletedTasksToHistory() {
        const deletedTasks = [];
        const taskElements = document.querySelectorAll('.history-item');

        taskElements.forEach(item => {
            deletedTasks.push(item.textContent);
        });
        localStorage.setItem('deletedTask', JSON.stringify(deletedTasks));
    }
    /* ------------------------ */

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
            const taskText = item.querySelector('.item-text').textContent;
            createHistoryItem(taskText);

            item.remove();

            saveTasksToLocalStorage();
            saveDeletedTasksToHistory();
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
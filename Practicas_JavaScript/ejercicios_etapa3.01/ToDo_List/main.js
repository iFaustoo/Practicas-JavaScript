const input = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const myList = document.getElementById('task-list');

const addTask = () => {
    if (input.value !== "") {
        
        const task = document.createElement('li');
        task.classList.add('task-item');
        
        task.innerHTML = `
            <button class="complete-btn"></button>
            <span class="task-text">${input.value}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        const deleteBtn = task.querySelector('.delete-btn');
        const completeBtn = task.querySelector('.complete-btn');
        const taskText = task.querySelector('.task-text');

        deleteBtn.addEventListener('click', () => {
            task.remove(); 
        });

        completeBtn.addEventListener('click', () => {
            completeBtn.classList.toggle('completed');
            taskText.classList.toggle('completed');
        });
        
        myList.appendChild(task);
        input.value = "";
    }
};

addButton.addEventListener('click', addTask);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
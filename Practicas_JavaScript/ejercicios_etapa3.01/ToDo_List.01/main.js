const input = document.getElementById(`input-text`);
const addButton = document.getElementById(`add-button`);
const myList = document.getElementById(`list`);

const addTask = () => {
    if (input.value != "") {
        const item = document.createElement('li');
        item.classList.add(`item-class`);

        item.innerHTML = `
            <button class="button-completed">✓</button>
            <span class="item-text">${input.value}</span>
            <button class="button-delete">Delete</button>
        `;

        const completeButton = item.querySelector('.button-completed');
        const deleteButton = item.querySelector('.button-delete');
        const itemText = item.querySelector('.item-text');

        deleteButton.addEventListener(`click`, () => {
            item.remove();
        });

        completeButton.addEventListener(`click`, () => {
            completeButton.classList.toggle('completed');
            itemText.classList.toggle('completed');
        });

        myList.appendChild(item);
        input.value = "";
    }
};

addButton.addEventListener(`click`, addTask);

input.addEventListener(`keydown`, (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});


const themeButton = document.createElement('button');
themeButton.classList.add('theme-btn');
themeButton.textContent = '☀️';

themeButton.addEventListener(`click`, () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});

document.body.appendChild(themeButton);
const counter = document.getElementById(`counter`);
const addButton = document.getElementById(`add-button`);
const subtractButton = document.getElementById(`subtract-button`);
const resetButton = document.getElementById(`reset-button`);
let myCounter = 0;

addButton.addEventListener(`click`, () => {
    myCounter++;
    counter.textContent = myCounter;
    if (myCounter > 0) {
        counter.style.color = "green";
    } else if (myCounter == 0) {
        counter.style.color = "black";
    }
});

subtractButton.addEventListener(`click`, () => {
    myCounter--;
    counter.textContent = myCounter;
    if( myCounter < 0) {
        counter.style.color = "red";
    } else if (myCounter == 0) {
        counter.style.color = "black";
    }
});

resetButton.addEventListener(`click`, () => {
    myCounter = 0;
    counter.textContent = "My Counter Here";
    counter.style.color = "black";
});
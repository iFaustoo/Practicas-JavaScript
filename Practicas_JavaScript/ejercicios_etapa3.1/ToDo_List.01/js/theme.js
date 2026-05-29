export function createThemeButton() {
    const themeButton = document.createElement('button');
    themeButton.classList.add('theme-btn');
    themeButton.textContent = '☀️';
    document.body.appendChild(themeButton);
    return themeButton;
}

export function setupThemeLogic(button) {
    button.addEventListener(`click`, () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            button.textContent = "🌙";
        } else {
            button.textContent = "☀️";
        }
    });
}

export function initTheme() {
    const btn = createThemeButton();
    setupThemeLogic(btn);
}


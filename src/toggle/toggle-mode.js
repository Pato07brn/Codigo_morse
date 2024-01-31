let DarkMode = true
const btnToggle = document.getElementById('toggle-mode');

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    /* acessibilidade */
    const mode = DarkMode ? 'Light' : 'Dark';
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`;


    DarkMode = !DarkMode;
})
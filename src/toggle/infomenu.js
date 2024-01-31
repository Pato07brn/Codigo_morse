let Menu = true
const btnToggle = document.getElementById('info');

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('menu-on');

    /* acessibilidade */
    const mode = Menu ? 'Aberto' : 'Fechado';
    event.currentTarget
        .querySelector('span').textContent = `Menu de informações ${mode}!`;


    Menu = !Menu;
})
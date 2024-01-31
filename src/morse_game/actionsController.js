import * as game from "./game.js";
import * as btn from "./elements.js";
import state from "./state.js";

const bgMusic = new Audio('../../assets/sounds/Runaway.mp3')
bgMusic.loop = true

export function Rungame() {
    state.isRunning = document.documentElement.classList.toggle('running')
    game.initGame();
    btn.resposta.focus()
}

export function StopGame() {
    state.isRunning = document.documentElement.classList.toggle('running')
    alert(`O seu total de acertos foi: ${state.acertos}`)
    alert(`O seu total de erros foi: ${state.erros}`)
    state.acertos = 0
    state.erros = 0
}


export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (!state.isMute) {
        console.log('Parando Runaway');
        bgMusic.pause();
        return
    }
    bgMusic.play()
    console.log('Rodando Runaway');
}
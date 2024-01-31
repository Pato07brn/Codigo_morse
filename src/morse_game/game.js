import { Code } from "./morsecode.js";
import * as btn from './elements.js'
import state from "./state.js";

const morsecode = new Code

export function initGame(){
    let sort = morsecode.letrasEnumeros[parseInt(Math.random() * 36)]
    btn.morse.textContent = sort;
    state.resposta = sort
    console.log(`${state.resposta}: ${morsecode.morseCodeMap[state.resposta]}`);
}

export function verefiAnswer(){
    if(!state.isRunning){
        return
    }
    else if(morsecode.morseCodeMap[state.resposta] == btn.resposta.textContent){
        menseger(btn.respostaCerta, 'certo', 2000);
        console.log('Acertou');
        btn.resposta.textContent = ''
        btn.resposta.focus();
        state.acertos ++
        initGame();
        return
    }
    menseger(btn.respostaErrada, 'errado', 2000);
    state.erros ++
    console.log('ERRROUUUU');
}

function menseger(element, classeDestaque, timer) {
    element.classList.add(classeDestaque);
    setTimeout(function () {
        element.classList.remove(classeDestaque);
    }, timer);
}
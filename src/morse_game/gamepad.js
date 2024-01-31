import * as btn from './elements.js';
import * as game from "./game.js";

export function ponto(){
    let limite = btn.resposta.innerText.length
    if(limite == 5){
        return
    }
    btn.resposta.textContent = btn.resposta.textContent+'.'
}

export function traco(){
    let limite = btn.resposta.innerText.length
    if(limite == 5){
        return
    }
    btn.resposta.textContent = btn.resposta.textContent+'-'
    console.log('-');
}

export function apagar(){
    const resposta = btn.resposta.textContent
    btn.resposta.textContent = resposta.slice(0,-1)
}

export function Submit() {
    game.verefiAnswer()
}
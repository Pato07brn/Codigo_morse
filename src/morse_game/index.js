import { controlers, gamePad } from "./event.js";


export function game(){
    gamePad();
    controlers();
    console.log('Iniciou o game');
}
import { controls, gamepad } from './elements.js';
import * as actions from './actionsController.js';
import * as inputs from './gamepad.js';


export function controlers() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}

export function gamePad() {
    gamepad.addEventListener('click', (event) => {
        const button = event.target.dataset.gamepad;

        if(typeof inputs[button] != 'function'){
            return
        }

        inputs[button]()
    })

}

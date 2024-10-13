
import { State } from "./javascript.js";

export class NumberButton {
    #_number;
    
    constructor(state, number) {
        this.state = state;
        this._number = number;
    }

    get number() {
        return this._number;
    }

    press() {
        if (this.state.operator != null && this.state.isPreviousOperationOperator) {
            this.state.memory = this.state.display;
            this.state.display = this.number;
            this.state.isPreviousOperationOperator = false;

            return;
        } 

        this.state.display += this.number;
    }
}

export class ArithmeticButton {
    #arithmeticAction;

    constructor(state, arithmeticAction) {
        this.state = state;
        this.#arithmeticAction = arithmeticAction;
    }

    // ecapsulated only because it makes sense to call it press instead of arithmetic action
    press(a, b) {
        this.state.isPreviousOperationOperator = true;
        if (this.state.memory != null && this.state.memory.length !== 0 && this.state.operator != null) {
            let result = this.state.operator(this.state.memory, this.state.display);

            this.state.display = result;
            this.state.operator = this.#arithmeticAction;
        }

        if (this.state.operator == null) {
            this.state.memory = this.state.display;
            this.state.operator = this.#arithmeticAction;
        }

    }
}


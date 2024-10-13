import { NumberButtonFactory } from "./factories.js"
import { OperatorButtonFactory } from "./factories.js"
function initialize(e) {
    let calculator = new Calculator(document, new State(this.querySelector("#display")));
}

export class State {
    memory = null;
    operator = null;
    isPreviousOperationOperator = false;

    #displayElement;

    constructor(displayElement) {
        this.displayElement = displayElement;
    }


    get display() {
        return this.displayElement.innerHTML;
    }

    set display(number) {
        this.displayElement.innerHTML = number;
    }
}



class Calculator {
    #doc;
    #state;

    constructor(doc, state) {
        this.#doc = doc;
        this.state = state;
        this.#initializeNumberButtons();
        this.initializeOperatorButtons();
    }

    #initializeNumberButtons() {
        let numberButtons = Array.from(document.querySelectorAll(".number-button"));
        numberButtons.forEach(element => {
            let button = NumberButtonFactory.createButton(this.state, element.innerHTML);
            element.addEventListener("click", () => button.press());
        });
    }

    initializeOperatorButtons() {
        let operatorButtons = Array.from(document.querySelectorAll(".operator-button"));
        operatorButtons.forEach(element => {
            let button = OperatorButtonFactory.createButton(this.state, element.id)
            element.addEventListener("click", () => button.press());
        })
    }

    pressNumber(button) {
        // state will be managed by the calculator class 

        if (this.state.action != null && this.state.isPreviousOperationOperator)  {
            this.state.isPreviousOperationOperator = false;
            this.state.display = button.number;
        }

        button.press();
    }

    pressOperator(button) {
        if (this.state.memory != null && this.state.memory.length !== 0 && this.state.action != null) {
            // if something is in memory then an operator button was pressed already
            // calculator should use arithmetic operation on value stored in mem and in display 
            result = state.action.press(state.memory, state.display);

            this.state.display = result;
            this.state.action = button.press;
        }

        if (this.state.action == null) {
            // this means there isn't a previous action
            // this action should be saved and the display should be saved to memory
            this.state.memory = state.display;
            this.state.action = button.press;
        }
    }


}


document.addEventListener("DOMContentLoaded", initialize);

/*
    Notes 

        states

        1: numbers pressed
            a. memory null
            b. display null
            c. action null
            
        2:  after numbers pressed, operator pressed -> check the state 
            a. memory not null
            b  display not null
            c. action not null 

        3: after number pressed, operator pressed and number pressed again
            a. memory not null
            b. display not null 
            c. action not null 
        
*/
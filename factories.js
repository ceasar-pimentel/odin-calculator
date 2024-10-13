import { NumberButton } from "./button_actions.js";
import { ArithmeticButton } from "./button_actions.js";

export class NumberButtonFactory {
    static createButton(state, symbol) {
        switch (symbol) {
            case "0": return new NumberButton(state, 0);
            case "1": return new NumberButton(state, 1);
            case "2": return new NumberButton(state, 2);
            case "3": return new NumberButton(state, 3);
            case "4": return new NumberButton(state, 4);
            case "5": return new NumberButton(state, 5);
            case "6": return new NumberButton(state, 6);
            case "7": return new NumberButton(state, 7);
            case "8": return new NumberButton(state, 8);
            case "9": return new NumberButton(state, 9);
            case "•": return new NumberButton(state, ".");
            default: return null;
        }
    }
}

export class OperatorButtonFactory {
    static createButton(state, id) {
        switch (id) {
            case "add": return new ArithmeticButton(state, ArithmeticAction.add);
            case "subtract": return new ArithmeticButton(state, ArithmeticAction.subtract);
            case "multiply": return new ArithmeticButton(state, ArithmeticAction.multiply);
            case "divide": return new ArithmeticButton(state, ArithmeticAction.divide);
        }
    }
}

export class ArithmeticAction {

    static add(a, b) {
        return Number(a) + Number(b);
    }

    static subtract(a, b) {
        return Number(a) - Number(b);
    }

    static multiply(a, b) {
        return Number(a) * Number(b);
    }

    static divide(a, b) {
        return Number(a) / Number(b);
    }
}

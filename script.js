let firstNumber;
let secondNumber;
let operator;
let displayValue;

const display = document.getElementById("display");
const calculate = document.getElementById("operate");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a/b;
}

function multiply(a,b) {
    return a*b;
}

function operate(firstNumber,operator,secondNumber) {
    if (operator === "+") {
        return add(firstNumber,secondNumber);
    } 
    
    if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    }
    
    if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    }

    if (operator === "/") {
        return divide(firstNumber,secondNumber);
    }
}
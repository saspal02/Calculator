document.addEventListener('DOMContentLoaded', function() {
    // Variables
    let firstNumber = '';
    let secondNumber = '';
    let currentOperator = '';
    const screenCurrent = document.querySelector('.current');
    const screenPrevious = document.querySelector('.previous');

    // Function to update screen display
    function updateScreen() {
        screenCurrent.textContent = `${secondNumber}`;
        screenPrevious.textContent = `${firstNumber} ${currentOperator}`;
    }

    // Function to handle number clicks
    function handleNumberClick(number) {
        if (currentOperator === '') {
            firstNumber += number;
        } else {
            secondNumber += number;
        }
        updateScreen();
    }

    // Function to handle operator clicks
    function handleOperatorClick(operator) {
        if (firstNumber !== '' && secondNumber !== '') {
            let result = operate(currentOperator, firstNumber, secondNumber);
            firstNumber = result.toString();
            secondNumber = '';
        }
        currentOperator = operator;
        updateScreen();
    }

    // Function to handle equals (=) click
    function handleEqualsClick() {
        if (firstNumber !== '' && secondNumber !== '') {
            let result = operate(currentOperator, firstNumber, secondNumber);
            firstNumber = result.toString();
            secondNumber = '';
            currentOperator = '';
            updateScreen();
        }
    }

    // Function to handle clear (C) click
    function handleClearClick() {
        firstNumber = '';
        secondNumber = '';
        currentOperator = '';
        updateScreen();
    }

    // Event listeners for number buttons
    const numberButtons = document.querySelectorAll('.numbers');
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleNumberClick(button.textContent);
        });
    });

    // Event listeners for operator buttons
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperatorClick(button.textContent);
        });
    });

    // Event listener for equals (=) button
    const equalsButton = document.querySelector('.equal');
    equalsButton.addEventListener('click', handleEqualsClick);

    // Event listener for clear (C) button
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', handleClearClick);
});

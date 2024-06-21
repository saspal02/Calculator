const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns = document.querySelectorAll('.number');

//Initialize the variables
let result = '';
let operation = '';
let previousOperand = 0;

//Function to append number
const appendNumber = (number) => {
    if (number === '.' && result.includes('.')) {
        return;
    }
    result +=  number;
    updateDisplay();
}

//Function to select operator
const selectOperator = (operatorValue) => {
    if (result === '') {
        return;
    } 
    
    if (operation !== '' && previousOperand !== '') {
        calculateResult();
    }

    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();

}

//function to calculate result
const calculateResult = () => {
    let evaluatedResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            evaluatedResult = prev + current;
            break;
        case'-':
            evaluatedResult = prev - current;
            break;
        case'*':
            evaluatedResult = prev * current;
            break;
        case'÷':
        if (current === 0) {
            result = 'undefined';
            operation = '';
            previousOperand = '';
            updateDisplay();
            return;
        }
            evaluatedResult = prev / current;
            break;
        default:
            return;
    }

    result = evaluatedResult.toString();
    operation = '';
    
}

//Add event listener to number buttons
numberBtns.forEach(button =>  {
    button.addEventListener('click',() => {
        appendNumber(button.innerText);
    });
});

decimalBtn.addEventListener('click', () => appendNumber('.'));
addBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
divideBtn.addEventListener('click', () => selectOperator('÷'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
equalBtn.addEventListener('click', () => {
    if (result === '') return;
    calculateResult();
    updateDisplay();
})
deleteBtn.addEventListener('click', () => {
    if (operation !== "" && result === "") {
        operation = "";
        result = previousOperand;
        previousOperand = "";
        updateDisplay();
    } else {
        result = result.slice(0, -1);
        updateDisplay();
    }
})

clearBtn.addEventListener('click', () => {
    result = '';
    operation = '';
    previousOperand = '';
    updateDisplay();

})

// Function to handle keyboard events
const handleKeyPress = (event) => {
    const key = event.key;
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendNumber(key);
            break;
        case '.':
            appendNumber('.');
            break;
        case '+':
            selectOperator('+');
            break;
        case '-':
            selectOperator('-');
            break;
        case '*':
            selectOperator('*');
            break;
        case '/':
            selectOperator('÷'); // Use '÷' for divide button
            break;
        case '=':
        case 'Enter':
            if (result !== '') {
                calculateResult();
                updateDisplay();
            }
            break;
        case 'Backspace':
            deleteBtn.click(); // Trigger delete button click
            break;
        case 'Escape':
            clearBtn.click(); // Trigger clear button click
            break;
        default:
            // Handle other keys if needed
            break;
    }
};

// Attach keyboard event listener to the document
document.addEventListener('keydown', handleKeyPress);


//Function to update display
const updateDisplay = () => {
    if (operation) {
        resultElement.innerText = previousOperand + operation + result;
    } else {
        resultElement.innerText = result;
    }
    
 }

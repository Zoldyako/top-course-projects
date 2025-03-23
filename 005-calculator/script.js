let currentNumber       = 0, previousNumber = 0, operator, result = [];
let operators           = ["%", "+", "-", "*", "/"];
let numbers             = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];
let isOperatorClicked   = false;


const BTN_OPERATORS     = document.querySelectorAll('.btn-operator');
const BTN_NUMBERS       = document.querySelectorAll('.btn-number');
const BTN_EQUAL         = document.querySelector('.btn-equal');
const BTN_CLEAR         = document.querySelector('.btn-clear');
const BTN_DOT           = document.querySelector('.btn-dot');
const BTN_DEL           = document.querySelector('.btn-del');
const HISTORY           = document.querySelector('#history');
const CURRENT           = document.querySelector('#current-calc');


function operate(a, b, operator) {
    let computation;
    
    switch (operator) {
        case '%':
            computation = a % b;
            break;
        case '+':
            computation = a + b;
            break;
        case '-':
            computation = a - b;
            break;
        case '*':
            computation = a * b;
            break;
        case '/':
            computation = a / b;
            break;
    }


    if (computation == undefined) {
        CURRENT.innerText = ''
        currentNumber = 0;
        previousNumber = 0;
        alert("You didn't select any operation");
    }

    else if (computation.toString().split('.')[1]?.length > 1) {
        populateDisplay(computation.toFixe(1));
    }
    
    else {
        populateDisplay(computation);
    }
    
    currentNumber = computation;
    operator = '';
}


function populateDisplay(number) {
    let history = document.createElement('p');
    history.innerText = number;
    HISTORY.appendChild(history);
}


function addToCurrentCalc(text) {
    if (CURRENT.innerText.length >= 20) {
        return alert("Máximo de 20 dígitos");
    }

    CURRENT.innerText += text;   
}



BTN_NUMBERS.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (isOperatorClicked) {
            CURRENT.innerText = '';
            isOperatorClicked = false;
        }
        addToCurrentCalc(numbers[index]);
        currentNumber = parseFloat(CURRENT.innerText);
    });
});


BTN_CLEAR.addEventListener('click', () => { 
    CURRENT.innerText = '';
    currentNumber = 0; 
    previousNumber = 0;
});


BTN_OPERATORS.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (!isOperatorClicked) {
            previousNumber = currentNumber;
        }

        operator = operators[index];
        addToCurrentCalc(operator);
        isOperatorClicked = true;
    });
});


BTN_DOT.addEventListener('click', () => {
    if (!CURRENT.innerText.includes('.')) {
        CURRENT.innerText += '.';
    }
});


BTN_DEL.addEventListener('click', () => {
    CURRENT.innerText = CURRENT.innerText.slice(0, -1);
    
    currentNumber = parseFloat(CURRENT.innerText);
});


BTN_EQUAL.addEventListener('click', () => {

    if (previousNumber == 0 &&  currentNumber == 0 && operator == '/') {
        alert("You can't divide nothing for nothing dummy :P");
        return;
    }

    else if (previousNumber == 0 && currentNumber == 0) {
        alert("Please select a number");
        return;
    }

    else {
        operate(previousNumber, currentNumber, operator);
        isOperatorClicked = false;
        CURRENT.innerText = '';
    }    
});
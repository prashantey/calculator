const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.numbers');
const clearButton = document.querySelector('.clear');
const resultButton = document.querySelector('.results');
const operators = document.querySelectorAll('.operators'); 
let display = '';

function updateDisplay(value) {
    display += value;
    result.innerText = display;
}

function calculate() {
    try {
        display = eval(display);
        result.innerText = display;
    } catch (e) {
        result.innerText = 'error';
        display = '';

    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.innerText);
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(` ${button.innerText} `);
    });
});

resultButton.addEventListener('click', () => {
    if(result.innerText !== ''){
        calculate();
    }else{
        result.innerText = 'Error';
        result.innerText = '';
    }
});

clearButton.addEventListener('click', () => {
    display = '';
    result.innerText = '';
});

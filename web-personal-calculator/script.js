const display = document.getElementById('display');

let currentInput = '0';
let storedValue = null;
let pendingOperator = null;
let startsNewInput = true;
let hasError = false;

function show(value) {
    display.textContent = value;
}

function formatResult(value) {
    if (Number.isInteger(value)) return String(value);
    return String(parseFloat(value.toPrecision(12)));
}

function calculate(first, operator, second) {
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '*') return first * second;
    if (operator === '/') return second === 0 ? null : first / second;
    return second;
}

function enterDigit(digit) {
    if (startsNewInput || hasError) {
        currentInput = digit;
        startsNewInput = false;
        hasError = false;
    } else if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    show(currentInput);
}

function enterDecimal() {
    if (startsNewInput || hasError) {
        currentInput = '0.';
        startsNewInput = false;
        hasError = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    show(currentInput);
}

function chooseOperator(operator) {
    const value = hasError ? 0 : parseFloat(currentInput);

    if (pendingOperator !== null && !startsNewInput) {
        const result = calculate(storedValue, pendingOperator, value);
        if (result === null) return showError();
        storedValue = result;
        currentInput = formatResult(result);
        show(currentInput);
    } else if (pendingOperator === null) {
        storedValue = value;
    }

    pendingOperator = operator;
    startsNewInput = true;
    hasError = false;
}

function pressEquals() {
    if (pendingOperator === null || startsNewInput) return;

    const result = calculate(storedValue, pendingOperator, parseFloat(currentInput));
    if (result === null) return showError();

    currentInput = formatResult(result);
    storedValue = null;
    pendingOperator = null;
    startsNewInput = true;
    show(currentInput);
}

function showError() {
    currentInput = 'Cannot divide by zero';
    storedValue = null;
    pendingOperator = null;
    startsNewInput = true;
    hasError = true;
    show(currentInput);
}

function clearCalculator() {
    currentInput = '0';
    storedValue = null;
    pendingOperator = null;
    startsNewInput = true;
    hasError = false;
    show(currentInput);
}

document.querySelectorAll('[data-digit]').forEach((button) => {
    button.addEventListener('click', () => enterDigit(button.dataset.digit));
});

document.querySelectorAll('[data-operator]').forEach((button) => {
    button.addEventListener('click', () => chooseOperator(button.dataset.operator));
});

document.getElementById('decimal').addEventListener('click', enterDecimal);
document.getElementById('equals').addEventListener('click', pressEquals);
document.getElementById('clear').addEventListener('click', clearCalculator);

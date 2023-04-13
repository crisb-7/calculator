function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a, b) {
    let division = a/b;
    return division == Infinity ? "Clever, huh?" : division;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "add":
            return add(firstNumber, secondNumber);
        case "subtract":
            return subtract(firstNumber, secondNumber);
        case "multiply":
            return multiply(firstNumber, secondNumber);
        case "divide":
            return divide(firstNumber, secondNumber);
    }
}

function runEquals() {
    result = operate(operator, Number(displayNum1), Number(displayNum2))
    display.innerHTML = result;
    displayNum1 = String(result);
    displayNum2 = "";
    displayOperator = "";
}

function displayText(number1, number2, operator){
    return number1 + " " + operator + " " + number2;
}

const division = "÷";
const multiplication = "×";
const plus = "+";
const minuts = "-"

let operator;
let result;

let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers button")
numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayNum1.length == 0 || displayOperator.length == 0) {
            displayNum1 += button.id;
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        } else {
            displayNum2 += button.id;
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        }
    });
});

const decimalPoint = document.querySelector(".row #decimal");
decimalPoint.addEventListener("click", () => {
    // 0.1 behavior
    // 000000.1 behavior
    if ((/[0-9][.]/.test(displayNum1))){
        console.log("Cannot use more than one decimal point.")
        return;
    } else {
        displayNum1 += decimalPoint.textContent;
        display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
    }
});

const operators = document.querySelectorAll(".operators button");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        // Division by 0
        if (displayOperator.length == 0 && displayNum2.length == 0) {
            operator = button.id;
            displayOperator += button.textContent;
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        } else {
            runEquals();
            operator = button.id;
            displayOperator += button.textContent;
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        }
    });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    console.log(displayNum1, displayNum2, operator)
    runEquals()
    // only one number (without operator behaviour)
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 = "";
    displayOperator = "";
    num1 = 0;
    num2 = 0;
    operator = "";
    display.innerHTML = num1;
});
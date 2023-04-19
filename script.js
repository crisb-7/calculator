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
    num1 = Number(displayNum1);
    num2 = Number(displayNum2);
    console.log(num1, num2, operator)
    result = operate(operator, num1, num2)
    if (result-parseInt(result) != 0) {
        result = result.toFixed(6)
    }
    display.innerHTML = result;
    displayNum1 = String(result);
    displayNum2 = "";
    displayOperator = "";
}

function limitDecimals(number) {
    let limit = 6;
    if (String(number).length > limit) {
        return Number(number.toFixed(limit));
    } else {
        return number;
    }
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

let num1;
let num2;

let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers button")

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayOperator.length == 0) {
            if (String(displayNum1).length >= 5) {
                return;
            }
            if (String(displayNum1).includes(".0") || String(displayNum1).includes(`${Number(displayNum1)}.`)) {
                displayNum1 += button.id;
            } else {
                displayNum1 += button.id;
                console.log("Don't repeat zeroes pls");
                displayNum1 = limitDecimals(Number(displayNum1));
            }
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        } else {
            if (String(displayNum2).length >= 7) {
                return;
            }
            if (String(displayNum2).includes(".0") || String(displayNum2).includes(`${Number(displayNum2)}.`)) {
                displayNum2 += button.id;
            } else {
                displayNum2 += button.id;
                console.log("Don't repeat zeroes pls");
                displayNum2 = limitDecimals(Number(displayNum2));
            }
            display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
        }
    });
});

// Number.parseFloat(displayNum1).toFixed(6)

const decimalPoint = document.querySelector(".row #decimal");
decimalPoint.addEventListener("click", () => {
    if (/[0-9][.]/.test(displayNum1) && displayOperator.length == 0 || /[0-9][.]/.test(displayNum2)){
        console.log("Cannot use more than one decimal point.")
        return;
    } 
    if (displayOperator.length == 0) {
        displayNum1 += decimalPoint.textContent;
        display.innerHTML = displayText(displayNum1, displayNum2, displayOperator);
    } else {
        displayNum2 += decimalPoint.textContent;
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
    runEquals()
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

/* 
-------------- To-Do ----------------
- Too many decimals
- Pressing equals with only one number, with first number and operator
- Infinity answer caluclating after
*/
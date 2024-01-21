// Suma o resta (según elija el usuario) dos números reales

function initiate(){
let num1 = parseFloat(prompt("Enter the first number:"));

let num2 = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Do you want to 'add' or 'subtract'?").toLowerCase();

let result;

if (operation === 'add') {
    result = num1 + num2;
} else if (operation === 'subtract') {
    result = num1 - num2;
} else {
    alert("Invalid operation. Please choose 'add' or 'subtract'.");

    throw new Error("Invalid operation.");
}

alert(`Result of ${operation}ing ${num1} and ${num2} is: ${result}`);
}

initiate()
// parseint = whole numbers
// parsefloat = numbers including decimals
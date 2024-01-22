function initiate(){
    let number1 = parseFloat(prompt("Enter the first number:"));
    let number2 = parseFloat(prompt("Enter the second number:"));
    let number3 = parseFloat(prompt("Enter the third number:"));
 
 number1
 number2
 number3

 if (number3){
    if (number1 !== number2 && number1 !== number3 && number2 !== number3) {
        alert("All numbers are different.");
    } else {
        alert("Not all numbers are different.");
    }

    if (number1 === number2 && number1 === number3) {
        alert("All numbers are the same.");
    } else {
        alert("Not all numbers are the same.");
    }

    // Find the largest number, math.max finds the largest number
    let largest = Math.max(number1, number2, number3);
    alert("The largest number is: " + largest);

    // Find the smallest number, math.min finds the smallest number
    let smallest = Math.min(number1, number2, number3);
    alert("The smallest number is: " + smallest);

    // Calculate the average
    let average = (number1 + number2 + number3) / 3;
    alert("The average is: " + average.toFixed(2));
}
}

initiate();

/* Desarrolla un programa usando JavaScript y siendo ejecutado desde HTML en el navegador,
que permita a partir de tres números enteros indicar:
(2 puntos cada apartado)

Create a program using JS and being executed through HTML within the navegator
That allows from three whole numbers entered the following:

a. If they are all different
b. If they are all the same
c. The largest
d. The smallest
e. The average between them (sum of all, divided by the number of numbers */
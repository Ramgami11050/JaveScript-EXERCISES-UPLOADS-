// Solicita al usuario tres números enteros e indícale cuál es el menor.
function Button1 () {

var num1
var num2
var num3
var num4
let nummenor
num1 = parseInt(prompt("Please enter #"));
num2 = parseInt(prompt("Please enter #"));
num3 = parseInt(prompt("Please enter #"));

if (num1 <= num2 && num1 <= num3) {
    nummenor = num1;}
else if (num2 <= num1 && num2 <= num3) {
    nummenor = num2;}
else { nummenor = num3;}

alert("The smallest number is" + nummenor);}

// Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
function button1() {
var phrase1
var letter1

phrase1 = prompt("Please enter your phrase")
letter1 = prompt("Please enter your letter")

function countnumber (phrase, letter) {
let count = 0;
for (let i = 0; i < phrase.length; i++) {
    if(phrase [i] == letter)
    count++}

    return count;
}

let numberoftimes = countnumber(phrase1, letter1);
alert("The letter '" + letter1 + "' appears " + numberoftimes + " times throughout the phrase: '" + phrase1 + "'");
}

button1();
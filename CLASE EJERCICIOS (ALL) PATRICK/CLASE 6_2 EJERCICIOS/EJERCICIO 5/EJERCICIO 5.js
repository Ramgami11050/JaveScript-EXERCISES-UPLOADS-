/* Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9,
 si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra *

Ask the user to insert a letter.
If they insert the letter a, show the number 7.
If it is a b, show the number 9.
If i it is a c, show the number 101.
If it is none of the above, say that they have the incorrect letter.*/

/*
HTML
form, table, ol, ul, dl
strong, b, i, header, nav, footer, article, hgroup

Selectores CSS
https://github.com/daviniadelarosa/ASPASIA_IFCD0210/blob/main/teoria/clase3/clase3_3.md
*/

function initiate() {
    let letterinput = prompt("Insert your letter.");
  
    let result1 = letterinput === 'a'; // Result1 checks to see if letterinput is equal to a.
    let result2 = letterinput === 'b'; // Result1 checks to see if letterinput is equal to b.
    let result3 = letterinput === 'c'; // Result1 checks to see if letterinput is equal to c.
  
    if (result1) {
      alert("7");
    } else if (result2) {
      alert("9");
    } else if (result3) {
      alert("101");
    } else {
      throw new Error("Invalid input.");
    }
  }
  
  initiate();
  



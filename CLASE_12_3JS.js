function onclick1() {

    var lol = document.getElementById('contenidos_1'); /* gets element Id */
    var hidecontenido = document.getElementById('enlace_1');

    if (lol.style.display !== 'none') { /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol.style.display = 'none';
        hidecontenido.innerHTML = "Ocultar contenidos" // hides content

        if (lol.style.display = 'none') {
            lol.innerHTML = "Text change!"; // changes text
            hidecontenido.innerHTML = "Mostar contenidos"; //shows content
        } 
    }
    else {
        lol.style.display = 'block';
        hidecontenido.innerHTML = "Ocultar contenidos"; // hides content

    }
 
}


function onclick2() {

    var lol2 = document.getElementById('contenidos_2'); /* gets element Id */
    var hidecontenido2 = document.getElementById('enlace_2');

    if (lol2.style.display !== 'none') { /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol2.style.display = 'none';
        hidecontenido2.innerHTML = "Ocultar contenidos" // hides content

        if (lol2.style.display = 'none') {
            lol2.innerHTML = "Text change!"; // changes text
            hidecontenido2.innerHTML = "Mostar contenidos"; //shows content
        } 
    }
    else {
        lol2.style.display = 'block';
        hidecontenido2.innerHTML = "Ocultar contenidos"; // hides content

    }
 
}

function onclick3() {

    var lol3 = document.getElementById('contenidos_3'); /* gets element Id */
    var hidecontenido3 = document.getElementById('enlace_3');

    if (lol3.style.display !== 'none') { /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol3.style.display = 'none';
        hidecontenido3.innerHTML = "Ocultar contenidos" // hides content

        if (lol3.style.display = 'none') {
            lol3.innerHTML = "Text change!"; // changes text
            hidecontenido3.innerHTML = "Mostar contenidos"; //shows content
        } 
    }
    else {
        lol3.style.display = 'block';
        hidecontenido3.innerHTML = "Ocultar contenidos"; // hides content

    }
 
}
function onclick1() {

    var content = document.getElementById('contenidos_1').textContent; /* fetches text content */
    var lol = document.getElementById('contenidos_1'); /* gets element Id */

    if(lol.style.display !== 'none'){ /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol.style.display = 'none';
    }
    else{
        lol.style.display = 'block';
    }
}

function onclick2() {

    var content = document.getElementById('contenidos_2').textContent; /* fetches text content */
    var lol2 = document.getElementById('contenidos_2'); /* gets element Id */

    if(lol2.style.display !== 'none'){ /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol2.style.display = 'none';
    }
    else{
        lol2.style.display = 'block';
    }
}


function onclick3() {

    var content = document.getElementById('contenidos_3').textContent; /* fetches text content */
    var lol3 = document.getElementById('contenidos_3');

    if(lol3.style.display !== 'none'){ /* adds style and display to lol, resulting in:
    document.getElementById('contenidos_1').style.display */
        lol3.style.display = 'none';
    }
    else{
        lol3.style.display = 'block';
    }
}




/*
When you click on the first link, its related section is hidden

When you click on the same link again, that content section is shown again

Complete the rest of the links on the page so that their behavior is identical to that of the first link

When a section is hidden, you must change the associated link message (hint: innerHTML property)
*/


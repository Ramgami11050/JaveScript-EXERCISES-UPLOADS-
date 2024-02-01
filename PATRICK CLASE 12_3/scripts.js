console.log(document.title);
console.log(document.querySelector('.infocard'));

/* changes title */
var lol = document.getElementById('gen-1');
lol.innerHTML = "Generasión 1 Pokimon"

/* background color */
var lool = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');
lool[0].style.backgroundColor = "#000000";

/* imprime por consola la URL de la pagina */
console.log(document.URL);


/* imprime for consola the domain of the page */
console.log(document.location);

/* imprime imagenes */
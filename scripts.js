console.log(document.title);
console.log(document.querySelector('.infocard'));

/* changes title */
var lol = document.getElementById('gen-1');
lol.innerHTML = "Generasión 1 Pokimon"

/* background color */
var lool = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');
lool[0].style.backgroundColor = "#000000";

/* prints url to console */
console.log(document.URL);

/* prints domain to console */
console.log(window.location.hostname);

/* prints images */
let pokemon = document.querySelectorAll('.infocard img');
for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].src);
  }

/* changes all to nicholas cages */
let pokemonpics = document.querySelectorAll('.infocard img');
for (let i = 0; i < pokemonpics.length; i++) {
    pokemonpics[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}
function initiate() {

// displays URL
let url = 'https://api.github.com/users/Ramgami11050';
fetch(url)
.then(result=>result.json())
.then((data) => {
let datastring = console.log(data)
datastring
let display = JSON.stringify(data, null, 1)
let P1 = document.getElementById("text1");
let P2 = document.createTextNode(display);
P1.appendChild(P2);


})
}

// Searches username vv
function OnClick1 () {
let display2 = document.getElementById("Search").value;
if (OnClick1) {
let url2 = 'https://api.github.com/users/'+display2;
fetch(url2)
.then(result2=>result2.json())
.then((data) => {
let datastring = console.log(data)
datastring
})

OnClick1()

// Replace the {username} part of https://api.github.com/users/{username}
// with the search value of display2
}
}

initiate()

// let input10 = prompt("Input your number")

// let numb1 = [input1]

/*
    fetch('https://api.github.com/users/daviniathebridge')
            .then(res=>res.json())
            .then(json=>console.log(json));
*/


/*
The first thing we will do is create a text input and a search button. (done)
The user will write in the input the GitHub username they want to search for.
Then we will create a function that is executed when the search button is pressed and that contains
a request to the API to obtain information about that user and thus display it on our page:

What we want to be printed by console will be:

name
number of repositories
avatar (image)
If you have already obtained all the information, use the DOM tree tools to make this information appear on the screen.
*/
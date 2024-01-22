
function initiate(){
// Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
// Store in two variables validation data (username and password) and allow the user to validate it.
// 

// Store validation data
let userInputUsername = prompt("Enter your username:");
let userInputPassword = prompt("Enter your password:");

userInputUsername
userInputPassword

if(userInputPassword){
    alert("Account created successfully!");
    let loginUsername = prompt("Enter your username:");
    let loginPassword = prompt("Enter your password:");
    if (loginUsername === userInputUsername && loginPassword === userInputPassword) {
        alert("Account valid!");
    } else {
        alert("Incorrect username or password.");
    };}
}

initiate()
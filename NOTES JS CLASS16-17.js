



// ARRAY CLASS (class14_5)
// traditional equivalent; filter creates a new array filtered by a function
function validar(elemento) {
    return elemento >= 10;
}
let filtrados = [false, 22, 4, 2, null, "Bye", 31].filter(validar);
console.log(filtrados);

// using FILTER, it creates a new array filtered by a function
// returns any value under 10, including false and null 
let filtrados2 = [false, 22, 4, 2, null, "Bye", 31].filter((elemento) => { return elemento < 10 });
console.log(filtrados2);
// ———————————————

// traditional equivalent
let lista = [2, -1, 1, 3, 5, 8];
let acumulacion = 0;

for (let i = 0; i < lista.length; i++) {
    acumulacion += lista[i];
}
console.log(acumulacion); // 18

// using REDUCE, it minimizes the string down to a more readable code
let lista2 = [2, -1, 1, 3, 5, 8];
let acumulado2 = lista2.reduce(function (anterior, actual) {
    return anterior + actual;
});
console.log(acumulado2); // 18
// ———————————————// ———————————————

//for tradicional equivalente

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//forEach - Reads entire data structure with much less code.
frutas.forEach(element => {
    console.log(element);
});
// ———————————————// ———————————————// ———————————————






// AMPLIFICATION OF FUNCTIONS AND DESTRUCTION (class17_1)
// enables to establish predetermined values to functions
function f(x, y = 3, z = 22) {
    return x + y + z
}

console.log(f(3));
console.log(f(3, 0));
console.log(f(3, 0, 0));
// ———————————————

// deconstruction of arrays
let [a, b] = [10, 20];
console.log(a);
console.log(b);

// assigning values
const user = {
    id: 42,
    is_verified: true
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
// ———————————————// ———————————————

// asignar nuevos nombres de constantes que recojan los valores de o
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

// valores predeterminados
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
// ———————————————// ———————————————// ———————————————


// SPREAD Y REST (class17_2)
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(this, [4, 5, 6])); //15

const numbers2 = [1, 2, 3, 5];
console.log(sum(...numbers2)); // 6

// REST OPERATOR 
// rest is the operator that is used to destruct arrays and objects
function operacion(x, y, ...a) {
    return (x + y) * a.length
}

console.log(operacion(1, 2, 3, 4));//6

function sum(...a) {
    return a.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3)); //6

console.log(sum(1, 2, 3, 4)); //10

function xyz(x, y, ...z) {
    console.log(x, ' ', y); // hey hello

    console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]); // wassup
    console.log(z.length); // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")

// EXCEPTIONS (class17_3)

/*function f(){
    console.log('Hola');
    }*/

// this is an alternative:
try {
    f();
} catch {
    console.log("Se ha producido una excepción");
} finally {
    console.log("El finally se ejecuta sí o sí");
}

// try 
// code thats used to try (and it cant be used by itself)

// catch
// block ofcode that executes if an exception occurs
try {
    try_statements;
} catch (exception_var) {
    catch_statements;
}

// throw
// enables the ability to create exceptions which can be statements, objects, results of functions, etc
try {
    throw "Error creado por Davinia";
} catch (e) {
    console.log("Se ha producido una excepción: " + e);
} finally {
    console.log("El finally se ejecuta sí o sí");
}


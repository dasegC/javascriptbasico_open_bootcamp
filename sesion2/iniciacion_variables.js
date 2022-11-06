var variable;
//let variableLet;

//const constante = 0;
const constante = "Hola soy una constante";
console.log(constante)
//constante = "adios" Nos da un error

var a = 1;
console.log(a);

var a = 4;
console.log(a);


let b = 3;
console.log(b);

b = 5;
console.log(b);

/* 
    var ==> Afecta a todo el cógido, variable global
    let ==> Afecta al codigo donde fue declarado, variable local

*/

var variable = "Hola soy una variable var";
for (var i = 0; i < 3; i++){
    variable = 'soy la segunda variable var'
}

console.log(variable);

let variableLet = "Hola soy una variable let";
for (var i = 0; i < 3; i++){
    let variableLet = 'soy la segunda variable let'
    console.log(variableLet)
}

console.log(variableLet)
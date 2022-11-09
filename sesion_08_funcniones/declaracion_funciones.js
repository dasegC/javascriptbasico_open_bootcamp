// QUÉ SON LAS FUNCNIOES, COMO SE DECLARA Y COMO SE UTILIZAN
const nom = 'Daro'
saludar(nom);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
};
////
let nombre_2 = 'Juan';

despedir(nombre_2);

function despedir() {
    console.log(`Adios ${nombre_2}`);
};


let persona = {
    nombre: 'Juan',
    apellido: 'González'
}

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
};

function imprimeNumero(numero = 7) { //Parámetros por defecto
    console.log(numero);
};

imprimeNumero();

/////
function imprimir(...parametros) {
    console.log(parametros);
};

imprimir(1, 2, 3, 4, 'hola', { id: 9 });

///
function suma(...nums) {
    return nums.reduce((a, b) => a + b)
};

const s = suma(1, 2, 3, 4, 9, 15, 16);
console.log(s)

////
function multiplicar(a = 0, b = 0) {
    return a * b
}

console.log(multiplicar(4, 9));
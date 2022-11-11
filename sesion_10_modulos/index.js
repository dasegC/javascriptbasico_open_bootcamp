// Formas de importar y exportar módulos
//1. CommonJS - require
// 2. Import ES6 - import

/* const moduloMatematicas = require('./modulos/matematicas.js')
console.log(moduloMatematicas);

const factorial = moduloMatematicas.factorial;
console.log(factorial(5));

const suma = moduloMatematicas.suma;
console.log(suma(12,90)); */

const { factorial, suma } = require('./modulos/matematicas');
const fact = factorial(5);
const sum = suma(12,90);
console.log(fact);
console.log(sum);
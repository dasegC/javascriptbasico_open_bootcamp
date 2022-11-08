// Strings
let str = "Hola soy un texto";
console.log(str);

let str_comillas = "El otro dio me dijo literalmente \"Ve a sacar la basura\"";
let str_comillas_simples = 'El otro dio me dijo literalmente "Ve a sacar la basura"'
let str_comillas_dobles = "El otro dio me dijo literalmente 'Ve a sacar la basura'"

console.log(str_comillas_simples);
console.log(str_comillas);
console.log(str_comillas_dobles);

// Backticks - COmillas invertidas
let str_backticks = `Esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Daro";
let saludo = `Hola ${nombre}, bienvenido`;
console.log(saludo);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>`;
console.log(plantilla);

// Introducción de variables en HTML
let lista = ['Empieza por el por qué', 'El monje que vendió su Ferrari', 'El poder del ahora'];

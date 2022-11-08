// Métodos de cadenas de texto (parte 3)
// https:regexr.com

let texto_largo_mayuscula = 'TITO NO ES UN MONO CUALQUIERA. A TITO NO LE GUSTA TREPAR POR LOS ÁRBOLES Y ODIA COMER BANANAS. ELPREFIERE PASEAR POR EL BOSQUE, OLER LAS     FLORES Y RECOGER LAS NUECES QUE SE CAEN DE LOS ÁRBOLES'
let texto_largo = texto_largo_mayuscula.toLowerCase();
console.log(texto_largo.match(/los/g));

// ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes('prefiere'));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith('tito no es un mono'));

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith('árboles'));
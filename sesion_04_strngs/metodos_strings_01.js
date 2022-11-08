// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = 'Hola soy un string';
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto

let cadena = 'Hola mi nombre es Daro';
console.log(cadena);

// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Daro', 'Sebastian'));

let texto_largo = 'TITO NO ES UN MONO CUALQUIERA. A TITO NO LE GUSTA TREPAR POR LOS ÁRBOLES Y ODIA COMER BANANAS. ELPREFIERE PASEAR POR EL BOSQUE, OLER LAS     FLORES Y RECOGER LAS NUECES QUE SE CAEN DE LOS ÁRBOLES'
// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace('LOS', 'cinco'));

// Al utilizar la exoresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/LOS/g, "cinco"));


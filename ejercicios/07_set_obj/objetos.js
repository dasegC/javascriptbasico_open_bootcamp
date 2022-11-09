/* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const datosPersonales = {
    nombre: 'Dario',
    apellido: 'Gimenez',
    edad: 36,
    altura: 170,
    isDeveloper: true
};
const miEdad = datosPersonales.edad;
console.log(miEdad)

const listaDatos = [datosPersonales];
console.log(listaDatos)

const listaDatosAmigos = [
    {
        nombre: 'Paola',
        apellido: 'Contreras',
        edad: 36,
        altura: 168,
        isDeveloper: false
    },
    {
        nombre: 'Belén',
        apellido: 'Rial',
        edad: 35,
        altura: 163,
        isDeveloper: false
    }
];

const listaAmigosOrdenada = listaDatosAmigos.sort((a, b) => a.edad - b.edad);
console.log(listaAmigosOrdenada);
const lista_Compras = ['Pan', 'Leche', 'azucar', 'Café', 'Yerba'];
lista_Compras.push('Aceite de Girasol');
//console.log(lista_Compras);
lista_Compras.pop();
//console.log(lista_Compras);

const peliculas = [
    {
        titulo: 'The Avengers',
        director: 'Josh Whedon',
        fecha: new Date(2012, 04, 25),
    },
    {
        titulo: 'The Avengers: Age of Ultron',
        director: 'Josh Whedon',
        fecha: new Date(2015, 05, 01),
    },
    {
        titulo: 'The Avengers: Infinity War',
        director: 'Josh Whedon',
        fecha: new Date(2018, 04, 27),
    }
];

const peliculas_Nuevas = peliculas.filter(obj => obj.fecha > new Date(2010, 0, 1));
//console.log(peliculas_Nuevas);
const directores = peliculas.map((valor) => valor.director);
//console.log(directores)
const titulos = peliculas.map(titulo => titulo.titulo);
//console.log(titulos);
const director_pelicula = directores.concat(titulos);
console.log(director_pelicula);
const director_pelicula2 = [...directores, ...titulos];
//console.log(director_pelicula2);
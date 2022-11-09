// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: 'juan',
    apellido: 'Gonzalez',
    is_Developer: true,
    libros_favoritos: ['El método', 'El código de la manifestación'],
    "4-juegos": [1, 2, 3, 4]
};

console.log(obj["4-juegos"]);
console.log(obj.id);

const prop = 'is_Developer';
console.log(obj[prop]);

const obj2 = obj; // Cambia el valor en la dirección de memoria
console.log(obj2);

obj2.nombre = 'Daro';
console.log(obj2.nombre);

console.log(obj.nombre);

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = 'Sebastian';
console.log(obj.nombre);
console.log(obj3.nombre);

// Cómo ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    { titulo: 'Lo que el viento se llevó', anyo: 1939 },
    { titulo: 'Titanic', anyo: 1997 },
    { titulo: 'Moana', anyo: 2016 },
    { titulo: 'El efecto mariposa', anyo: 2004 },
    { titulo: 'TED', anyo: 2012 }
];

console.log(listaPeliculas);
// .sort() --> Muta el valor de la lista original
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);
// Trabajando con fechas
const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(1987,10,20);
console.log(fecha2);

const fecha3 = new Date(0);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(1987,10,20);
console.log(fecha5);

console.log(fecha5 === fecha2); // ERROR - no se puede comparar fechas de esta maner, hay que convertir a milisegundos
console.log(fecha2.getTime() === fecha5.getTime()); //OK - Esta es la forma de comparar la igualdad entre fechas

// Cómo obtener el día, el mes y el año de una fecha
// Obtener el día tenemos el .getDate()
console.log(fecha2.getDate());

//Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1);

//Obtener el año .getFullYear
console.log(fecha2.getFullYear());

// .toLocale.DateString

console.log(fecha2.toLocaleDateString('es-Ar'));
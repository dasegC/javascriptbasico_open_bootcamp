/* 

Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

*/

const hoy = new Date();

const nacimiento = new Date(1986, 08,21);

const esMasTarde = hoy > nacimiento;

const dia = nacimiento.getDate();

const mes = nacimiento.getMonth()+1;

const anio = nacimiento.getFullYear();

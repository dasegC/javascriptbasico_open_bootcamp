const nombre = 'Dario', apellido = 'Gimenez';

const persona = new Object({nombre, apellido});

//sessionStorage.setItem('persona', JSON.stringify(persona));
//localStorage.setItem('persona', JSON.stringify(persona));

//console.log(JSON.parse(sessionStorage.getItem('persona')))
//console.log(JSON.parse(localStorage.getItem('persona')))

const now = new Date()
document.cookie = `data=${JSON.stringify(persona)};expires=` + new Date(now.getTime() + 2 * 60000).toUTCString
console.log(document.cookie);
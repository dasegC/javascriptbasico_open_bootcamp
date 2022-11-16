/* localStorage.setItem('Nombre', 'Gorka')
localStorage.setItem('Nombre', 'MIguel') //Cambiar el valor */

//console.log(localStorage.getItem('Nombre'));

localStorage.setItem('persona', JSON.stringify({nombre: 'Daro', edad: 36}))
//console.log(JSON.parse(localStorage.getItem('persona')))

//JSON.stringify -> Convierte un objeto/array en string
//JSON.parse -> COnvierte un objeto/array convertido en string a través de stringify en un onjeto en javascript

// Eliminar un item del local storage
localStorage.removeItem('Nombre')

// Sesion Storage
sessionStorage.setItem('nombre-sesion', 'gorka')

/* Cookies */
document.cookie = 'nombreCookie=GorkaCoockie'

document.cookie = 'nombreCaducidad=Nombre;expires=' + new Date(2023,0,1).toUTCString()

console.log(document.cookie)
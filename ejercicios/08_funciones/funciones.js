/* 
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/
function devolverTrue(){
    return true;
};

const miAsync = new Promise((resolve, reject) =>{
    return setTimeout(()=>console.log('Hola soy una promesa'), 5000);
});

function* generarPares(){
    let par = 0;
    while (true){
        yield par +=2;
    }
    return par
};

let pares = generarPares()



console.log(devolverTrue())
console.log(miAsync)
console.log(pares)

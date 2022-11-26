/* Combinando una función y una promesa con arrow function */
// function miFunction() {
//     return new Promise((resolve, reject) => {
//         /* 
//         Contenido de la promesa.
//         ¿Que me vas a prometer ?
//     */
//     });
// }

// console.log(miFunction());

/* const miPrimeraPromesa = new Promise((resolve, reject) => {
    /* 
        Contenido de la promesa.
        ¿Que me vas a prometer ?
    
});

console.log(miPrimeraPromesa);*/

/* 
                                EJERCICIO 1
    Imaginaos que os prometo que si lanzamos una moneda al aire saldrá cara.
    Aunque es una promesa con una probabilidad del 50 % existe otro 50 % de que no se cumpla.
*/

// const caraCruz = new Promise((resolve, reject) => {
//     //Número aleatorio del 0 al 1
//     numeroAleatorio = Math.floor(Math.random() * 2);
//     if (numeroAleatorio == 0) { //Si el número es 0 = cara
//         resolve('Cara'); //Fulfilled successfully
//     }
//     else { // Si el número es 1 = cruz
//         reject('Cruz') // error, rejected
//     }
// });

// /* 
//     Para evaluar correctamente el resultado una promesa tenemos que utilizar 
//     los métodos .then y .catch sobre la promesa en sí. Vamos a ver un ejemplo
// */
// caraCruz
// .then( (resolveMsj) => {console.log(resolveMsj);})
// .catch( (error)=> {console.log(error);});
// /* 
//     .then → captura el valor cuando se cumple la promesa (fullfilled)
//     catch → captura el valor cuando se produce un error o no se cumple la promesa (rejected)
// */

// console.log(caraCruz);

/* 
    EJERCICIO 2 PORTERO DE DISCOTEC CON UNA PROMESA DENTRO DE UNA FUNCÓN
    Si hacemos un portero de discoteca que controle el acceso de las personas restringiendo a los menos de 18.
*/

// function porteroDiscoteca(edad){
//     return new Promise((resolve, reject)=> {
//         if (edad >=18){
//             resolve('Puedes pasar!!')
//         }
//         else{
//             reject('NO puedes pasar!!!')
//         }
//     });
// }

// porteroDiscoteca(2)
//     .then((msg)=> {console.log(msg);})
//     .catch((error)=>{console.log(error)});

/* 
        GENERANDO ERRORES
*/
/* function porteroDiscoteca(edad) {
    return new Promise((resolve, reject) => {
        if (edad == 'number') {
            if (edad >= 18) {
                resolve('Puedes pasar!!')
            }
            else {
                reject('NO puedes pasar!!!')
            }
        }else{
            throw new Error('Tronco! Tronco! Me estás cabreando!!!')
        }
    })
}

porteroDiscoteca('ejemplo')
    .then((msg)=>{console.log(msg)})
    .catch((error)=>{console.error(error)}) */

/* PROMESAS EN CADENA (PROMISE CHAINING) */
/* El promise chaining, nos permite encadenar varias promesas a la vez. 
    Para ello, definimos una promesa y vamos concatenando las respuestas con .then
 */
/* Promise chaining manera asíncrona, pero todas a la vez */
/* function inputNumber(num){
    return new Promise((resolve, reject) => {
        if (typeof num == 'number'){
            setTimeout(() => {
                resolve(num);
            }, 2000);
        } else{
            reject('NO has introducido un número');
        }
    })
};

inputNumber(5).then((result)=>{
    console.log(result);
    return result *2;
}).then((result)=>{
    console.log(result);
    return result * 3;
}).then((result)=>{
    console.log(result);
    return result * 4;
}).catch((error)=> console.error('Error: ' + error)) */

/* 
    Promise chaining manera asíncrona, pero de una a una
    En cambio, si queremos resolver las promesas una a una, de forma asíncrona, podemos hacer
*/

function inputANumber(num){
    return new Promise((resolve, reject) => {
        if (typeof num == 'number'){
            resolve(num);
        }else{
            reject('NO has introducido un número')
        }
    })
};

inputANumber(5).then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 2)
        }, 3 * 1000);
    })
}).then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 3)
        }, 3 * 1000);
    })
}).then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 4)
        }, 3 * 1000);
    })
}).catch((err)=> {console.error('Error: ' + err)})
const miFuncion = val => {
    if (typeof val  === 'number'){
        return 2 * val
    }
    throw new Error('El valor debe ser de tipo número.')
}

//const elDoble = miFuncion('a1a');
const numero = prompt('Ingrese un número: ');
try {
    // Código que puede fallar
    console.log('Está ejecutándose de manera correcta');
    const doble = miFuncion(numero);
    console.log(doble);
} catch(e) {
    // en caso de falla, quiero que ejecutes
    console.log('ERROR!!');
    console.error(`El error de e es: ${e} `)
    
} finally {
    console.log('Estos se va a ejecutar tanto si se produce algún error, como si no existiese ninguno');   
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// Errores de developer mozilla
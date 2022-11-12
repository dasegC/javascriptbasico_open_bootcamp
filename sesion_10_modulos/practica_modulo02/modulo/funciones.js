export function mayorNumero(numero_uno, numero_dos) {
    if (numero_uno > numero_dos) { return `El número ${numero_uno} es mayor que el número ${numero_dos}` };
    return `El número ${numero_dos} es mayor que el número ${numero_uno}`;
};


export function compararNumeros(numero_uno, numero_dos, numero_tres) {
    if ((numero_uno > numero_dos) && (numero_uno > numero_tres)) { return `El número ${numero_uno} es mayor que el resto` }
    else if ((numero_dos > numero_uno) && (numero_dos > numero_tres)) { return `El número ${numero_dos} es mayor que el resto` }
    return `El número ${numero_tres} es mayor que el resto`
};


export function divisibleDos(numero) {
    if (numero % 2 === 0) { return `El número ${numero} es divisible por 2` }
    return `El número ${numero} no es divisible por 2`;
};

export function divisibilidad(numero) {
    if ((numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) || (numero % 7 === 0)) {
        return `El número ${numero} es divisible por 2, 3, 5 o 7`
    }
    return `El número ${numero} NO es divisible por 2, 3, 5 o 7` 
};

export function divisibilePor(numero) {
    let divisores = [];
    if ((numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) || (numero % 7 === 0)) {
        if (numero % 2 === 0) { 
            divisores.push(2)
         }
        if (numero % 3 === 0) { 
            divisores.push(3)
         }
        if (numero % 5 === 0) { 
            divisores.push(5)
         }
        if (numero % 7 === 0) { 
            divisores.push(7)
         }
        console.log(`El número ${numero} es divisible por ${String(divisores)} .`)
    } else {
        console.log(`El número ${numero} NO es divisible ni por 2, ni por 3, ni por 5 ni por 7.`)
    }
};

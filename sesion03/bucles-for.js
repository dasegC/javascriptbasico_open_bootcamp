// Bucles For

for (let i = 0; i < 10; i++) {
    console.log(i);
};

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
};

// En el caso de las listas se puede usar el for...of o for... each
// Estructura for ... of
for (let valor of lista) {
    console.log(valor);
}

// Estructura for ... each
lista.forEach(valor => {
    console.log(valor);
});

// Estructura for..in
let persona = {
    nombre: "Daro",
    apellido: "Gmnz",
    edad: 36,
    isDevelopver: true
};

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}


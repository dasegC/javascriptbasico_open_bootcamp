// Cómo trabajar con listas (arrays, arreglos, vectores)
let var1 = 45;
let array = [1, 'hola', false, { id: 5 }, null, var1];
console.log(array);

// Acceder a los valores de un array a través de su posiciónconsole.log(array[2]);
// array[indice]
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() ==> Mutan el valor de nuestro array
// Valores al final -> .push()
array.push('final', 45, 100, false);
console.log(array);
// Valores al principio -> .unshift()
array.unshift('Inicio');
console.log(array);

// Métodos para eliminar valores en nuestros arrays
// .pop()  .shift() ==> Mutan el valor de nuestro array
const array2 = [1, 3, 'hola', false];
// Valores al final -> .pop()
array2.pop();
console.log(array2);

// Valores al principio -> .shift()
array2.shift();
console.log(array2);

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];
// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, 'hola');
console.log(array3);

// Modificar valores  .splice(indice, 1, valores)
array3.splice(2,1,3);
console.log(array3);
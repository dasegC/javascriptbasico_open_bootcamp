// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
const familiares = ['Aurora', 'Victoria', 'Vicky', 'Miguel'];
const nombres_familia = new Set(familiares);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombres_familia.add('Victoria');
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombres_familia.add = ('Javascript');

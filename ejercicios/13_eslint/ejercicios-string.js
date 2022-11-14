const nombre ="Daro";
const apellido = "Giménez";
const estudiante = `${nombre} ${apellido};`;

const estudianteMayus = estudiante.toUpperCase();
const estudianteMin = estudiante.toLowerCase();

const estudiante_length = estudiante.length;

const inicial_nombre = nombre.substring(0,1);
const final_apellido = apellido[apellido.length -1];

const estudiante_sin_espacios = estudiante.replace(/ /g, "");
const esta_Contenido = estudiante.includes(nombre);

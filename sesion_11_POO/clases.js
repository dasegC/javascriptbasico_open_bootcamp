// Declarar clase
class Persona {
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre // This --> Hace referencia al atributo del objeto
        this.edad = edad
        this.idDeveloper = isDeveloper
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años` );       
    }
};

const nueva_persona = new Persona('Gorka', 34, true); //Crear un nuevo objeto
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // Inicializando
console.log(typeof numero)
let persona_2 = new Persona('María', 34, false) //Instanciar
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona)

// instanceof --> similar a typeof pero para clases
// Inheritance - Herencia
class Persona {
    constructor(nombre, edad, isDeveloper){
        this._nombre = nombre // This --> Hace referencia al atributo del objeto
        this._edad = edad
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años` );       
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo(){ //Override
        super.saludo()
        console.log(`Y soy Desarrollador de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrollador('Gorka', 34,  'Javascript');
console.log(nuevoDev);
nuevoDev.saludo();

// Polimorfismo ==> varias formas

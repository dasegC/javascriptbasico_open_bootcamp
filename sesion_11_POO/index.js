const persona = {
    nombre: "Daro",
    eda: 36,
    isDeveloper: true,
    saludo: function(){
        console.log('Hola');  
    }
};

//console.log(persona);
persona.saludo();

// Factory Function --> Creando una función que genera un objeto 
const crearPersona = (nombre, edad, isDeveloper)=>{
    return {
        nombre, // nombre: nombre
        edad, // edad: edad
        isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    };
};

const nueva_persona = crearPersona('Juan', 23, true);
console.log(nueva_persona);

const nueva_persona_2 = crearPersona('María', 44, true);

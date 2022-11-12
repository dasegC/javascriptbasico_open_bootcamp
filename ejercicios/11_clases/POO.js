class Estudiante {
    constructor(nombre, ...asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos(){
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas 
        };
    };
};

const estudiante_uno = new Estudiante('Daro', 'Javascript', 'HTML', 'CSS');
console.log(estudiante_uno.obtenDatos());
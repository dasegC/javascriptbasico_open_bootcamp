// Sentencias Switch

let nota = 5;

switch (nota) {
     case 5:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero oodrías haberlo hehco mejor");
        break;
    case 3:
        console.log("Haz obtenido un insuficiente");
        break;
    case 2:
        console.log("NO has aprobado por poco");
        break;
    case 1:
        console.log("NO has estudiado nada, trabaja un poquito mas para la próxima");
        break;
    default:
        console.log("Error, introduce una nota entre el 1 y el 5");
}
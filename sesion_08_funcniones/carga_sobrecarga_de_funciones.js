// Carga y Sobrecarga de funciones

function saludar(){
    hola()
};

function hola(){
    console.log('Hola" Soy la función hola()');
};

saludar();
/* Carga de funciones - stack*/
/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()


/* SObrecarga de funciones - stack overflow */
function recursiva(){
    recursiva();
};
recursiva()
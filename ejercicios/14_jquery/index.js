/* eslint-disable */
$(()=>{
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => alert('Click en el botón'))
    
    const boton = document.querySelector('#btn')
    boton.addEventListener('click', () => {
        console.log('Hola, estoy usando JQuery :D')
    })
})

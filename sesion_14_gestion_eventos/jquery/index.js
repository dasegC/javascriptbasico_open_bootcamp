/* eslint-disable*/
//$(selector).acción
//$('h1').hide(); 

//Para que se ejecute el script luego de cargar la pagina
/* $(document).ready(() => {

}); */

// Forma sintética igual a la anterior
$(() => {
    // Selectores:
    // id='el-1 ==> '#el-1'
    // class='el-1' ==> '.el-1'
    //$('#el-1').hide()
    let new_element = 'Elemento 4'

    $('.hide-btn').click(() => {
        //$('h1').hide();
        $('h1').fadeOut();
    })

    $('.show-btn').click(() => {
        //$('h1').show();
        $('h1').fadeIn();
    })

    $('li').dblclick(()=>{
        $('h1').css({color: 'red'})
    })

    $('.new-element').click(()=> {
        //$('ul').append(`<li>${new_element}</li>`) //Añade elemento al final de la lista
        $('ul').prepend(`<li>${new_element}</li>`); // añade elemento al final de la lista
    })

    $('li').mouseenter((elem)=>{
        elem.target.style.color = 'blue'
    })

    $('li').mouseleave((elem)=>{
        elem.target.style.color = 'black'
    })
})
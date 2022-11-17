const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event =>{
        console.log(`Estoy arrastrando el párrafo ${parrafo.innerText}`)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
        const elemento_fantasma = document.querySelector('.imagen-fantasma')
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener('dragend', ()=>{
        //console.log(`He terminado de arrastrar el párrafo ${parrafo.innerText}`)
        parrafo.classList.remove('dragging')
        
    })
})

secciones.forEach(secciones => {
    secciones.addEventListener('dragover', event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy' //Copy ṕor defecto
        //console.log('DragOver')
        //
       
    })

    secciones.addEventListener('drop', event =>{
        console.log('DROP')
        const id_parrafo = event.dataTransfer.getData('id')
        //console.log(`Párrafo id: ${id_parrafo}`)
        const parrafo = document.getElementById(id_parrafo)
        secciones.appendChild(parrafo)
        
    })
})

const papelera = document.querySelector('.papelera')

papelera.addEventListener('dragover', event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
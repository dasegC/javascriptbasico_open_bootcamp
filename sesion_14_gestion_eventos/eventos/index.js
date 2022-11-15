/* eslint-disable-next-line */
const hTexto = document.getElementById('h-texto');

console.log(hTexto);

hTexto.addEventListener('cambioTexto', evento => {
    console.log(evento.detail);
    hTexto.innerHTML = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
});

function cambioTexto(nuevoTexto, color){
    const evento = new CustomEvent('cambioTexto', { /* eslint-disable-line */
        detail: {
            texto: nuevoTexto,
            color
        }
    });
    hTexto.dispatchEvent(evento);
}
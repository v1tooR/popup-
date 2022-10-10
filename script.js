const opening = document.getElementById('opening');
const popup_container = document.getElementById('popup_container');
const closing = document.getElementById('closing');
const cad = document.getElementById('cadastro')

opening.addEventListener('click', () => {
    popup_container.classList.add('show');
});

closing.addEventListener('click', () => {
    popup_container.classList.remove('show');
});

cad.addEventListener('click', () => {
    popup_container.classList.remove('show');
});
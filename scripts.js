const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
let imagens = document.querySelectorAll('.small_img');
// let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img'); 
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', () => {
        console.log(imagens[i]);
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
    })
}

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')    
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
})
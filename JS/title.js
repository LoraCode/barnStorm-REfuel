// TITLE PAGE

const titleContainer = document.querySelector('#titleContainer');
const instructionsContainer = document.querySelector('#instructions');
const instructionsBtn = document.querySelector('#instructBtn');
const mainMenuBtn = document.querySelector('#mainMenuBtn');

instructionsBtn.addEventListener('click', () => {
    titleContainer.style.zIndex = -1;
    instructionsContainer.style.zIndex = 1;
});

mainMenuBtn.addEventListener('click', () =>{
    titleContainer.style.zIndex = 1;
    instructionsContainer.style.zIndex = -1;
});
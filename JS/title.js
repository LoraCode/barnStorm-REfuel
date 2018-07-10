// TITLE PAGE

const titleContainer = document.querySelector('#titleContainer');
const instructionsContainer = document.querySelector('#instructions');
const instructionsBtn = document.querySelector('#instructBtn');
const mainMenuBtn = document.querySelector('#mainMenuBtn');
// Hiding tilte container and replacing it with instructions
instructionsBtn.addEventListener('click', () => {
    titleContainer.style.zIndex = -1;
    instructionsContainer.style.zIndex = 1;
});
// Reversing it
mainMenuBtn.addEventListener('click', () =>{
    titleContainer.style.zIndex = 1;
    instructionsContainer.style.zIndex = -1;
});
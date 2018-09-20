# barnSTORM:REfuel
barnSTORM:REfuel places you on the driver's seat of a spacecraft. Your skills are put to the test when you're forced to collect fuel for your ship while trying to dodge incoming missiles. One hit from those, and you're a goner.
http://jonathanlora.com/barnStorm-REfuel/

# Motivation
I'm a fan of using gifs and manipulating them in creating illusions within my code. For this particular project, I already had the idea of using a static gif as my stage and have that be the main attraction of my entire game. Approaching never-before-faced challenges became a whole lot easier knowing I had creativity on my side. 

# Screenshot
![alt text](https://github.com/LoraCode/barnStorm-REfuel/blob/master/Images/Screen%20Shot.png "Game Page")

# Features
Gifs, replay value, and creativity.

# Tech/framework used
HTML
CSS
JAVASCRIPT

# Code Example
let arrayMoveDown = new Array;

window.addEventListener('keydown', (evt) => {
    const code = evt.code;
    switch (code) {
        case 'ArrowDown':
            moveDown();
            arrayMoveDown.push(moverDown);
            break;
            
window.addEventListener('keyup', (e) => {
    const code = e.code;
    switch (code) {
        case 'ArrowDown':
            for (let i = 0; i < arrayMoveDown.length; i += 1) {
                clearInterval(arrayMoveDown[i]);
            }
            break;

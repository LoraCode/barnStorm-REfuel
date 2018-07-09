const player = document.querySelector('#player');
const playerDeath = document.querySelector('#explosion');
const bomb1 = document.querySelector('#bomb1');
const bomb2 = document.querySelector('#bomb2');
const fuel = document.querySelector('#fuel');
const fuelAmount = document.querySelector('#fuelAmount');
const container = document.querySelector('#testContainer');

// PLAYER MOVEMENT

function moveDown() {
    let posTop = player.getBoundingClientRect().top;
    this.moverDown = setInterval(move, 5);
    // const moverDown = setInterval(move, 5);

    function move() {
        if (posTop === 660) { // doesn't work full screen 
            clearInterval(moverDown);
        } else {
            posTop += 1;
            player.style.top = posTop + 'px';
        }
    }
}

function moveUp() {
    let posTop = player.getBoundingClientRect().top;
    this.moverUp = setInterval(move, 5);

    function move() {
        if (posTop === 0) {
            clearInterval(moverUp);
        } else {
            posTop -= 1;
            player.style.top = posTop + 'px';
        }
    }
}

// EVENT LISTENER TO INIT PLAYER MOVEMENT

window.addEventListener('keydown', (evt) => {
    const code = evt.code;
    switch (code) {
        case 'ArrowDown':
            moveDown();
            break;

        case 'ArrowUp':
            moveUp();
            break;
    }
});

window.addEventListener('keyup', (e) => {
    const code = e.code;

    switch (code) {
        case 'ArrowDown':
        clearInterval(moverDown);
        break;

        case 'ArrowUp':
        clearInterval(moverUp);
        break;
    }
});

// let lastEvent;
// const heldKeys = {};

// window.onkeydown = function(event) {
//     if (lastEvent && lastEvent.keyCode == event.keyCode) {
//         return;
//     }
//     lastEvent = event;
//     heldKeys[event.keyCode] = true;
//     if (heldKeys === true && lastEvent.keyCode === 38) {
//         moveUp();
//     }
// };

// window.onkeyup = function(event) {
//     lastEvent = null;
//     delete heldKeys[event.keyCode];
    
// };

// FUEL & BOMB MOVEMENT

function fallingFuel() {
    let posLeft = 1500;
    let posTop = Math.floor(Math.random() * 660);
    this.fuelFall = setInterval(fallingF, 5);

    function fallingF() {

        if (posLeft === -50) {
            clearInterval(this.fuelFall);
            fallingFuel();
        }
        else {
            posLeft -= 1;

            fuel.style.left = posLeft + 'px';
            fuel.style.top = posTop + 'px';

            this.fuelCheck = fuelCheckCollision();
            fuelCollisionDetected();
        }
        
    }
}

fallingFuel();

function fallingBomb1() {
    let posLeft1 = 1600;
    let posTop1 = Math.floor(Math.random() * 660);

    this.bombFall1 = setInterval(fallingB1, 10);

    function fallingB1() {

        if (posLeft1 === -50) {
            clearInterval(this.bombFall1);
            fallingBomb1();
        }
        else {
            posLeft1 -= 2;

            bomb1.style.left = posLeft1 + 'px';
            bomb1.style.top = posTop1 + 'px';

            this.bomb1Check = bomb1CheckCollision();
            bombCollisionDetected();
        }
        
    }
}

fallingBomb1();

function fallingBomb2() {
    let posLeft2 = 1600;
    let posTop2 = Math.floor(Math.random() * 660);

    this.bombFall2 = setInterval(fallingB2, 10);

    function fallingB2() {

        if (posLeft2 === -50) {
            clearInterval(this.bombFall2);
            fallingBomb2();
        }
        else {
            posLeft2 -= 5;

            bomb2.style.left = posLeft2 + 'px';
            bomb2.style.top = posTop2 + 'px';

            this.bomb2Check = bomb2CheckCollision();
            bombCollisionDetected();
        }
        
    }
}

fallingBomb2();

// ADDED MOVEMENT

let i = 0; 
let fuelTop = fuel.getBoundingClientRect().top

function upAndDown() {

    while (i < 100) {

        fuelTop = `${i}px`;

    }
    i += 1;
}

// COLLISION DETECTION

//FUEL

function fuelCheckCollision() {

    if (player.getBoundingClientRect().top > fuel.getBoundingClientRect().bottom ||
        player.getBoundingClientRect().right < fuel.getBoundingClientRect().left ||
        player.getBoundingClientRect().bottom < fuel.getBoundingClientRect().top ||
        player.getBoundingClientRect().left > fuel.getBoundingClientRect().right) {

            return false;

        }

    return true;

}

let addFuel = 0;

function fuelCollisionDetected() {
   
    if (this.fuelCheck === true) {
        addFuel += 10;
        fuelAmount.style.width = addFuel + 'px';
        clearInterval(this.fuelFall);
        fallingFuel();
    }
}

// BOMBS

function bomb1CheckCollision() {

    if (player.getBoundingClientRect().top > bomb1.getBoundingClientRect().bottom ||
        player.getBoundingClientRect().right < bomb1.getBoundingClientRect().left ||
        player.getBoundingClientRect().bottom < bomb1.getBoundingClientRect().top ||
        player.getBoundingClientRect().left > bomb1.getBoundingClientRect().right) {

            return false;

        }

    return true;

}

function bomb2CheckCollision() {

    if (player.getBoundingClientRect().top > bomb2.getBoundingClientRect().bottom ||
    player.getBoundingClientRect().right < bomb2.getBoundingClientRect().left ||
    player.getBoundingClientRect().bottom < bomb2.getBoundingClientRect().top ||
    player.getBoundingClientRect().left > bomb2.getBoundingClientRect().right) {

        return false;

    }
    return true;
}

function bombCollisionDetected() {
    if (bomb1Check === true || bomb2Check === true) {
        playerDeath.style.display = 'block';
    }
}

// TIMER

let minHolder = document.querySelector('#minutes');
let secHolder = document.querySelector('#seconds');
let mins = 1
let secs = 60;

function countDownTimer() {
    secs -= 1;

    if (secs < 10) {
        secs = `0${secs}`;
    }
    if (secs == 0 && mins === 0) {
        alert('Game Over');
    }
    if (secs == 0) {
        secs = 59;
        mins = 0;
    }

    minHolder.innerHTML = mins;
    secHolder.innerHTML = ': ' + secs;
}

setInterval(countDownTimer, 1000);

// MODAL INSTRUCTIONS & GAME OVER

// MUSIC


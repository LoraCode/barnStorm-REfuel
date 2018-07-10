//GAME PAGE

const player = document.querySelector('#player');
const playerDeath = document.querySelector('#explosion');
const bomb1 = document.querySelector('#bomb1');
const bomb2 = document.querySelector('#bomb2');
const bomb3 = document.querySelector('#bomb3');
const fuel = document.querySelector('#fuel');
const fuelAmount = document.querySelector('#fuelAmount');

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

function moveRight() {
    let posLeft = player.getBoundingClientRect().left;
    this.moverRight = setInterval(move, 5);

    function move() {
        if (posLeft === 1250) { // doesn't work full screen 
            clearInterval(moverRight);
        } else {
            posLeft += 1;
            player.style.left = posLeft + 'px';
        }
    }
}

function moveLeft() {
    let posLeft = player.getBoundingClientRect().left;
    this.moverLeft = setInterval(move, 5);

    function move() {
        if (posLeft === 0) { // doesn't work full screen 
            clearInterval(moverLeft);
        } else {
            posLeft -= 1;
            player.style.left = posLeft + 'px';
        }
    }
}


// EVENT LISTENER TO INIT PLAYER MOVEMENT

// Empty array to store all the times functinos are being called 
let arrayMoveDown = new Array;
let arrayMoveUp = new Array;
let arrayMoveRight = new Array;
let arrayMoveLeft = new Array;

window.addEventListener('keydown', (evt) => {
    const code = evt.code;
    switch (code) {
        case 'ArrowDown':
            moveDown();
            arrayMoveDown.push(moverDown);
            break;

        case 'ArrowUp':
            moveUp();
            arrayMoveUp.push(moverUp);
            break;

        case 'ArrowRight':
            moveRight();
            arrayMoveRight.push(moverRight);
            break;

        case 'ArrowLeft':
            moveLeft();
            arrayMoveLeft.push(moverLeft);
            break;
    }
});

window.addEventListener('keyup', (e) => {
    const code = e.code;

    switch (code) {
        case 'ArrowDown':

            for (let i = 0; i < arrayMoveDown.length; i += 1) {
                clearInterval(arrayMoveDown[i]);
            }

        break;

        case 'ArrowUp':

            for (let n = 0; n < arrayMoveUp.length; n += 1) {
                clearInterval(arrayMoveUp[n]);
            }
        
        break;

        case 'ArrowRight':

            for (let x = 0; x < arrayMoveRight.length; x += 1) {
                clearInterval(arrayMoveRight[x]);
            }
        
            break;
        
        case 'ArrowLeft':
            
            for (let y = 0; y < arrayMoveLeft.length; y += 1) {
                clearInterval(arrayMoveLeft[y]);
            }

            break;
    }
});

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
            posLeft -= 2;

            fuel.style.left = posLeft + 'px';
            fuel.style.top = posTop + 'px';

            this.fuelCheck = fuelCheckCollision();
            fuelCollisionDetected();
        }
        
    }
}

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

function fallingBomb3() {
    let posLeft3 = 1600;
    let posTop3 = Math.floor(Math.random() * 660);

    this.bombFall3 = setInterval(fallingB3, 10);

    function fallingB3() {

        if (posLeft3 === -50) {
            clearInterval(this.bombFall3);
            fallingBomb3();
        }
        else {
            posLeft3 -= 10;

            bomb3.style.left = posLeft3 + 'px';
            bomb3.style.top = posTop3 + 'px';

            this.bomb3Check = bomb3CheckCollision();
            bombCollisionDetected();
        }
        
    }
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

function bomb3CheckCollision() {

    if (player.getBoundingClientRect().top > bomb3.getBoundingClientRect().bottom ||
    player.getBoundingClientRect().right < bomb3.getBoundingClientRect().left ||
    player.getBoundingClientRect().bottom < bomb3.getBoundingClientRect().top ||
    player.getBoundingClientRect().left > bomb3.getBoundingClientRect().right) {

        return false;

    }
    return true;
}

function bombCollisionDetected() {
    if (bomb1Check === true || bomb2Check === true || bomb3Check === true) {
        playerDeath.style.display = 'block';
        alert('you lose');
    }
}

// TIMER

let minHolder = document.querySelector('#minutes');
let secHolder = document.querySelector('#seconds');
let secs = 60;

function countDownTimer() {
    secs -= 1;

    if (secs < 10) {
        secs = `0${secs}`;
    }
    if (secs === 59) {
        fallingFuel();
        fallingBomb1();
    }
    if (secs === 45) {
        fallingBomb2();
    }
    if (secs === 25) {
        fallingBomb3();
    }
    if (secs == 0) {
        alert('Game Over');
    }

    secHolder.innerHTML = secs;
}

setInterval(countDownTimer, 1000);

// CHECK FOR WIN

function checkForWin() {
    if (fuelAmount.style.width === 200 + 'px') {
        alert('you win');
    }
}

setInterval(checkForWin, 1000);
// MODAL INSTRUCTIONS & GAME OVER

// MUSIC

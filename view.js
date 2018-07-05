//press an arrow key to move player
//code gratefully comandeered from Eric Lewis (http://wakeful-baritone.glitch.me/)
document.addEventListener('keydown', evt => {
    const keyCode = evt.keyCode;
    if ([37, 38, 39, 40].includes(keyCode)) {
        evt.preventDefault();
    }
    switch (keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
})

const moveCharacterTo = (x, y) => {
    const govith = document.querySelector('.player1');
    govith.style.top = (y * 50).toString() + 'px';
    govith.style.left = (x * 50).toString() + 'px';
}

const moveRight = () => {
    if (canMoveTo(govith.x + 1, govith.y)) {
        govith.x += 1;
        moveCharacterTo(govith.x, govith.y);
    }
}

const moveLeft = () => {
    if (canMoveTo(govith.x - 1, govith.y)) {
        govith.x -= 1;
        moveCharacterTo(govith.x, govith.y);
    }
}

const moveDown = () => {
    if (canMoveTo(govith.x, govith.y + 1)) {
        govith.y += 1;
        moveCharacterTo(govith.x, govith.y);
    }
}

const moveUp = () => {
    if (canMoveTo(govith.x, govith.y - 1)) {
        govith.y -= 1;
        moveCharacterTo(govith.x, govith.y);
    }
}

// If player tries to enter a goblin tile, alert player they've been spotted and call 'battle' function.
spottedAlert = () => {
    debugger;
    if (isThereAGoblinAt(x, y) === true){
        alert("You've been spotted by a Goblin!");
    }
}
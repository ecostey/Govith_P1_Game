//'govith' is Player1
class Player1Govith {
    constructor() {
        this.totalHealth = 12;
        this.currentHealth = 12;
        this.attack = 2;
    }
}
const govith = {
    x: 0,
    y: 0
};

//press an arrow key to move Govith
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

//keep Govith within the game grid.
const isCoordinateInGrid = (x, y) => {
    if (x < 0 || y < 0 || x > 9 || y > 9) {
        return false;
    }
    return true;
}

const canMoveTo = (x, y) => {
    
    if (!isCoordinateInGrid(x, y)) {
        return false;
    }
    return true;
    if (isThereAGoblinAt(x, y)) {
    return false;
      }
    return true;
}

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

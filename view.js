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










//Add coin gif to treasure tiles
const treasure = document.querySelectorAll('.treasure');
let treasureImage0 = document.createElement('img');
let treasureImage1 = document.createElement('img');
let treasureImage2 = document.createElement('img');
treasureImage0.src = "img/coin.gif";
treasureImage0.style.height = "50px";
treasureImage0.style.width = "50px";
treasureImage1.src = "img/coin.gif";
treasureImage1.style.height = "50px";
treasureImage1.style.width = "50px";
treasureImage2.src = "img/coin.gif";
treasureImage2.style.height = "50px";
treasureImage2.style.width = "50px";

let treasure0 = treasure[0];
let treasure1 = treasure[1];
let treasure2 = treasure[2];
treasure0.appendChild(treasureImage0);
treasure1.appendChild(treasureImage1);
treasure2.appendChild(treasureImage2);

//Add goblin gif to goblin tiles
const goblin = document.querySelectorAll('.goblin');
let goblinImage0 = document.createElement('img');
let goblinImage1 = document.createElement('img');
let goblinImage2 = document.createElement('img');
let goblinImage3 = document.createElement('img');
goblinImage0.src = "img/gargoyle_fly.gif";
goblinImage0.style.height = "50px";
goblinImage0.style.width = "50px";
goblinImage1.src = "img/gargoyle_fly.gif";
goblinImage1.style.height = "50px";
goblinImage1.style.width = "50px";
goblinImage2.src = "img/gargoyle_fly.gif";
goblinImage2.style.height = "50px";
goblinImage2.style.width = "50px";
goblinImage3.src = "img/gargoyle_fly.gif";
goblinImage3.style.height = "50px";
goblinImage3.style.width = "50px";

let goblin0 = goblin[0];
let goblin1 = goblin[1];
let goblin2 = goblin[2];
let goblin3 = goblin[3];
goblin0.appendChild(goblinImage0);
goblin1.appendChild(goblinImage1);
goblin2.appendChild(goblinImage2);
goblin3.appendChild(goblinImage3);

//Add shade pic to shade tiles
const shade = document.querySelectorAll('.shade');
let shadeImage0 = document.createElement('img');
let shadeImage1 = document.createElement('img');
let shadeImage2 = document.createElement('img');
shadeImage0.src = "img/shade.png";
shadeImage0.style.height = "50px";
shadeImage0.style.width = "50px";
shadeImage1.src = "img/shade.png";
shadeImage1.style.height = "50px";
shadeImage1.style.width = "50px";
shadeImage2.src = "img/shade.png";
shadeImage2.style.height = "50px";
shadeImage2.style.width = "50px";

let shade0 = shade[0];
let shade1 = shade[1];
let shade2 = shade[2];
shade0.appendChild(shadeImage0);
shade1.appendChild(shadeImage1);
shade2.appendChild(shadeImage2);

//Add door pic to exit tiles
const exit = document.querySelectorAll('.exit');
let exitImage0 = document.createElement('img');
exitImage0.src = "img/door3.png";
exitImage0.style.height = "50px";
exitImage0.style.width = "50px";
let exit0 = exit[0];
exit0.appendChild(exitImage0);
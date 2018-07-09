class View {}
const goblinClan = new GoblinClan();
const shades = new Shades();
const treasures = new Treasures();
const exitLvl1 = new Exit();
const player1Govith = new Player1Govith();

//press an arrow key to move player
//code gratefully comandeered from Eric Lewis (http://wakeful-baritone.glitch.me/)
document.addEventListener('keydown', evt => {
    const keyCode = evt.keyCode;
    if ([37, 38, 39, 40].includes(keyCode)) {
        evt.preventDefault();
    }
    switch (keyCode) {
        case 37:
            player1Govith.moveLeft();
            break;
        case 38:
            player1Govith.moveUp();
            break;
        case 39:
            player1Govith.moveRight();
            break;
        case 40:
            player1Govith.moveDown();
            break;
    }
})

// If player tries to enter a goblin tile, alert player they've been spotted & turn goblin image visible.
const spottedAlertGob = (x, y) => {
    if (goblinClan.isThereAGoblinAt(x, y) === true) {
        let currentGoblin = goblinClan.returnGoblin(x, y);
        if (currentGoblin.hidden === true) {
            document.getElementById("goblin" + x + y).childNodes[0].style.visibility = "visible";
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Look out! Goblin Attack!";
        }
    }
}

//Govith fights Goblins.
const gBattlesGob = (x, y) => {
    if (goblinClan.isThereAGoblinAt(x, y) === true) {
        document.getElementsByClassName("playerUpdates")[0].innerHTML = "Govith Attacks Goblin!";
        let currentGoblin = goblinClan.returnGoblin(x, y);
        currentGoblin.currentHealth -= player1Govith.attack;
        if (currentGoblin.currentHealth <= 0) {
            goblinClan.removeGoblinInst(x, y);
            goblinClan.updateScore();
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Goblin Defeated! Onward, Friend.";
        }
    }
}

// If player tries to enter a shade tile, alert player they've been spotted & turn shade image visible.
const spottedAlertShade = (x, y) => {
    if (shades.isThereAShadeAt(x, y) === true) {
        let currentShade = shades.returnShade(x, y);
        if (currentShade.hidden === true) {
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "A Poisonous Shade Attacks!";
            document.getElementById("shade" + x + y).childNodes[0].style.visibility = "visible";
        }
    }
}

//Govith fights shades.
const gBattlesShade = (x, y) => {
    if (shades.isThereAShadeAt(x, y) === true) {
        document.getElementsByClassName("playerUpdates")[0].innerHTML = "Govith Battles the Shade!";
        let currentShade = shades.returnShade(x, y);
        currentShade.currentHealth -= player1Govith.attack;
        if (currentShade.currentHealth <= 0) {
            shades.removeShadeInst(x, y);
            shades.updateScore();
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Shade Defeated! Our Glory Grows!";
        }
    }
}

//When Govith collects Treasures: 
//1) console.log "found hidden treasure"
//2) add 20pts to player's score
//3) and remove treasure from dom & array. 
const treasureAlert = (x, y) => {
    if (treasures.isThereTreasureAt(x, y) === true) {
        document.getElementsByClassName("playerUpdates")[0].innerHTML = "Found Hidden Treasures!";
        treasures.removeTreasureInst(x, y);
        treasures.updateScore();
    }
}














//Add coin gif to treasure tiles
const treasurepic = document.querySelectorAll('.treasure');
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

let treasure0 = treasurepic[0];
let treasure1 = treasurepic[1];
let treasure2 = treasurepic[2];
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

// let mobjects [{
//     name: 'shade',
//     height: '50px',
//     width: '50px'
//     },
//     {
//     name: 'goblin',
//     height: '50px',
//     width: '50px',
//     }
//     `img/${mobjects[0].name}.png`
class Player1Govith {
    constructor() {
        this.totalHealth = 12;
        this.currentHealth = 12;
        this.attack = 2;
        this.govithLocation = {
            x: 0, y: 0
        };
    }

    moveCharacterTo(x, y) {
        const govith = document.querySelector('.player1');
        govith.style.top = (y * 50).toString() + 'px';
        govith.style.left = (x * 50).toString() + 'px';
    }

    //keep player within the game grid.
    isCoordinateInGrid(x, y) {
        if (x < 0 || y < 0 || x > 9 || y > 9) {
            return false;
        }
        return true;
    }

    canMoveTo(x, y) {
        spottedAlertGob(x, y);
        spottedAlertShade(x, y);
        gBattlesGob(x, y);
        gBattlesShade(x, y);
        treasureAlert(x, y);
        if (!this.isCoordinateInGrid(x, y)) {
            return false;
        } else if (goblinClan.isThereAGoblinAt(x, y)) {
            return false;
        } else if (shades.isThereAShadeAt(x, y)) {
           return false;
        } else if (!!exitLvl1.isTheExitAt(x, y)) {
            exitLvl1.playerWins(x, y); 
        } else {
            return true;
        }
    }
    
    moveRight(){
        if (this.canMoveTo(this.govithLocation.x + 1, this.govithLocation.y)) {
            this.govithLocation.x += 1;
            this.moveCharacterTo(this.govithLocation.x, this.govithLocation.y);
        }
    }
    
    moveLeft() {
        if (this.canMoveTo(this.govithLocation.x - 1, this.govithLocation.y)) {
            this.govithLocation.x -= 1;
            this.moveCharacterTo(this.govithLocation.x, this.govithLocation.y);
        }
    }
    
    moveDown(){
        if (this.canMoveTo(this.govithLocation.x, this.govithLocation.y + 1)) {
            this.govithLocation.y += 1;
            this.moveCharacterTo(this.govithLocation.x, this.govithLocation.y);
        }
    }
    
    moveUp(){
        if (this.canMoveTo(this.govithLocation.x, this.govithLocation.y - 1)) {
            this.govithLocation.y -= 1;
            this.moveCharacterTo(this.govithLocation.x, this.govithLocation.y);
        }
    }

};
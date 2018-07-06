class Player1Govith {
    constructor() {
        this.totalHealth = 12;
        this.currentHealth = 12;
        this.attack = 2;
        this.govith = {
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
        spottedAlert(x, y);
        attack(x, y);
        if (!this.isCoordinateInGrid(x, y)) {
            return false;
        } else if (goblinClan.isThereAGoblinAt(x, y)) {
            return false;
        //} else if (isThereAShadeAt(x, y)) {
        //    return false;
        } else {
            return true;
        }
    }
    
    moveRight(){
        if (this.canMoveTo(this.govith.x + 1, this.govith.y)) {
            this.govith.x += 1;
            this.moveCharacterTo(this.govith.x, this.govith.y);
        }
    }
    
    moveLeft() {
        if (this.canMoveTo(this.govith.x - 1, this.govith.y)) {
            this.govith.x -= 1;
            this.moveCharacterTo(this.govith.x, this.govith.y);
        }
    }
    
    moveDown(){
        if (this.canMoveTo(this.govith.x, this.govith.y + 1)) {
            this.govith.y += 1;
            this.moveCharacterTo(this.govith.x, this.govith.y);
        }
    }
    
    moveUp(){
        if (this.canMoveTo(this.govith.x, this.govith.y - 1)) {
            this.govith.y -= 1;
            this.moveCharacterTo(this.govith.x, this.govith.y);
        }
    }

};
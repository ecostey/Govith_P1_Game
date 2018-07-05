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

class Goblins {
    constructor(){
        this.location = [
            {x: 5, y: 4},
            {x: 9, y: 5},
            {x: 5, y: 8},
            {x: 1, y: 9}
        ];
        this.totalHealth = 8;
        this.currentHealth = 8;
        this.attack = 2;
    }
    // Loop through goblins, and check if any goblin is at the given point.    
    isThereAGoblinAt(x, y) {
        for (let i = 0; i < location.length; i++) {
            const location = location[i];
            if (location.x === x && location.y === y) {
                return true;
            }
        }
        return false;
    }
    battle() {
        debugger;
        document.addEventListener('keydown', evt => {
            const keyA = evt.keyCode;
           if (keyA === 65){
               monster.currentHealth -= playerAttack;
           } 
        }
    )}
    
    // If player defeats the goblin, remove goblin from game (Returns nothing)
    removeMob(x, y) {
        for (let i = 0; i < this.location.length; i++) {
            const removed = this.location[i];
            if (removed.x === x && removed.y === y) {
                this.location.splice(i, 1);
            return true
            }
        }
    }
    UpdateScore() {
        if (this.removeMob() === true) {
            document.getElementsById('Score')  += 10;
        }
    }    
}    


//keep player within the game grid.
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









class Shades {
    constructor() { 
        this.location = [
            {x: 3, y: 0},
            {x: 2, y: 3},
            {x: 2, y: 7}
        ];
        this.totalHealth = 4;
        this.currentHealth = 4;
        this.attack = 4;
    }
}

class Treasures {
    constructor() {
        this.location = [
            {x: 0, y: 4},
            {x: 7, y: 2},
            {x: 9, y: 6}
        ];
        this.bonusPoints = 10;
    }
    removeMob(x, y) {
        for (let i = 0; i < this.location.length; i++) {
            const removed = this.location[i];
            if (removed.x === x && removed.y === y) {
                this.location.splice(i, 1);
            }
        }
    }
    UpdateScore() {
        score += 10;
        document.getElementsById('Score')
    }
}

const exit1 = [
    {x: 9, y: 9},
];
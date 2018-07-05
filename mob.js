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
// Goblins Fight the player! 
    attackAlert() {
        if (isThereAGoblinAt(x, y)===true){
            alert("You've been spotted by a Goblin!");
        }
    }
    attack() {
        if (isThereAGoblinAt(x, y) === true){
            document.addEventListener('keydown', evt => {
                const keyA = evt.keyCode;
               if (keyA === 65){
                   monster.currentHealth -= playerAttack
               } 
            }
            )}
    }

    }
// If player defeats the goblin, remove goblin from game (Returns nothing)
    removeMob(x, y) {
        for (let i = 0; i < this.location.length; i++) {
            const removed = this.location[i];
        if (removed.x === x && removed.y === y) {
            this.location.splice(i, 1);
      }
    }
    }
};
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
}

const exit1 = [
    {x: 9, y: 9},
];



  
  
class GoblinClan {
    constructor(){
        this.mobs = [
            {x: 5, y: 4, totalHealth: 8, currentHealth: 8, attack: 2},
            {x: 9, y: 5, totalHealth: 8, currentHealth: 8, attack: 2},
            {x: 5, y: 8, totalHealth: 8, currentHealth: 8, attack: 2},
            {x: 1, y: 9, totalHealth: 8, currentHealth: 8, attack: 2}
        ];
    }
    // Loop through goblins, and check if any goblin is at the given point.    
    isThereAGoblinAt(x, y) {
        for (let i = 0; i < this.mobs.length; i+=1) {
            const mobs = this.mobs[i];
            if (mobs.x === x && mobs.y === y) {
                return true;
            }
        }
        return false;
    }
    //Loop through goblins, if a goblin is present, return the mob's coordinates.
    returnGoblinAt(x, y) {
        for (let i = 0; i < this.mobs.length; i+=1) {
            const mobs = this.mobs[i];
            if (mobs.x === x && mobs.y === y) {
                return (mobs);
            }
        }
        return undefined;
    }
    
    // If player defeats the goblin, remove goblin from game (Returns nothing)
    removeMob(x, y) {
        debugger;
        for (let i = 0; i < this.mobs.length; i+=1) {
            const removed = this.mobs[i];
            if (removed.x === x && removed.y === y) {
                this.mobs.splice(i, 1);
            return true
            }
        }
    }
    //If goblin is defeated, Update the score (add 15 points).
    UpdateScore() {
        if (this.removeMob(x, y) === true) {
            document.getElementsById('Score')  += 15;
        }
    }    
}    
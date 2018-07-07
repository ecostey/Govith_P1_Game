class GoblinClan {
    constructor() {
        this.goblinsArr = [{
                x: 5,
                y: 4,
                totalHealth: 8,
                currentHealth: 8,
                attack: 2,
                hidden: true
            },
            {
                x: 9,
                y: 5,
                totalHealth: 8,
                currentHealth: 8,
                attack: 2,
                hidden: true
            },
            {
                x: 5,
                y: 8,
                totalHealth: 8,
                currentHealth: 8,
                attack: 2,
                hidden: true
            },
            {
                x: 1,
                y: 9,
                totalHealth: 8,
                currentHealth: 8,
                attack: 2,
                hidden: true
            }
        ];
    }
    // Loop through goblins, and check if any goblin is at the given point.    
    isThereAGoblinAt(x, y) {
        for (let i = 0; i < this.goblinsArr.length; i += 1) {
            const gobLocation = this.goblinsArr[i];
            if (gobLocation.x === x && gobLocation.y === y) {
                return true;
            }
        }
        return false;
    }
    //Loop through goblins, if a goblin is present, return the mob's coordinates.
    returnGoblin(x, y) {
        for (let i = 0; i < this.goblinsArr.length; i += 1) {
            const goblin = this.goblinsArr[i];
            if (goblin.x === x && goblin.y === y) {
                return (goblin);
            }
        }
        return undefined;
    }

    // If player defeats the goblin, remove goblin from game (Returns nothing)
    // removeMob(x, y) {
    //     for (let i = 0; i < this.mobs.length; i+=1) {
    //         const removed = this.mobs[i];
    //         if (removed.x === x && removed.y === y) {
    //             this.mobs.splice(i, 1);
    //         return true
    //         }
    //     }
    // }
    removeGoblinInst(x, y) {
        for (let i = 0; i < this.goblinsArr.length; i += 1) {
            const currentGoblin = this.goblinsArr[i];
            debugger;
            if (currentGoblin.x === x && currentGoblin.y === y) {
                this.goblinsArr.splice(i, 1);
               debugger;
                document.getElementById("goblin" + x + y).childNodes[0].style.visibility = "hidden";
            }
        }
    }

    //If goblin is defeated, Update the score (add 15 points).
    UpdateScore() {
        if (this.removeGoblinInst() === true) {
            document.getElementsById('Score') += 15;
        }
    }
}
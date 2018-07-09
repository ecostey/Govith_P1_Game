class GoblinClan {
    constructor() {
        this.goblinsArr = [{
                x: 5,
                y: 4,
                totalHealth: 10,
                currentHealth: 10,
                attack: 2,
                hidden: true
            },
            {
                x: 9,
                y: 5,
                totalHealth: 10,
                currentHealth: 10,
                attack: 2,
                hidden: true
            },
            {
                x: 5,
                y: 8,
                totalHealth: 10,
                currentHealth: 10,
                attack: 2,
                hidden: true
            },
            {
                x: 1,
                y: 9,
                totalHealth: 10,
                currentHealth: 10,
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
    //Loop through goblins, if a goblin is present, return the mob's properties.
    returnGoblin(x, y) {
        for (let i = 0; i < this.goblinsArr.length; i += 1) {
            const goblin = this.goblinsArr[i];
            if (goblin.x === x && goblin.y === y) {
                return (goblin);
            }
        }
        return undefined;
    }

    removeGoblinInst(x, y) {
        for (let i = 0; i < this.goblinsArr.length; i += 1) {
            const currentGoblin = this.goblinsArr[i];
            if (currentGoblin.x === x && currentGoblin.y === y) {
                this.goblinsArr.splice(i, 1);
                document.getElementById("goblin" + x + y).childNodes[0].style.visibility = "hidden";
            }
        }
    }

}
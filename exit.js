class Exit {
    constructor() {
        this.exit1 = {
            x: 9,
            y: 9
        };
    }
    isTheExitAt(x, y) {
        if (this.exit1.x === x && this.exit1.y === y) {
            console.log("Found the exit!");
            return true;
        }
        return false;
    }

    playerWins(x, y) {
        if (this.isTheExitAt(x, y) === true) {
            console.log("Level 1 Complete!");
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Cleared Dungeon Level 1!";
        }
    }

}
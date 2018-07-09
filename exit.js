class Exit {
    constructor() {
        this.exit1 = {
            x: 9,
            y: 9
        };
    }
    isTheExitAt(x, y) {
        if (this.exit1.x === x && this.exit1.y === y) {
            return true;
        }
        return false;
    }

    playerWins(x, y) {
        if (this.isTheExitAt(x, y) === true) {
            console.log("Level 1 Complete!");
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Cleared Dungeon Level 1!";
            const nextLevelElement = document.createElement('LINK');
            nextLevelElement.className = 'nxt-lvl-message';
            nextLevelElement.innerHTML = 'Procede to Level 2';
            nextLevelElement.setAttribute("href", "#" );
            document.querySelector('.hero').appendChild(nextLevelElement);
        }
    }

}
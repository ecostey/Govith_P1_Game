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
    
//If player makes it to tile (9,9), then they've completed level 1
    playerWins(x, y) {
        if (document.getElementsByClassName("playerUpdates")[0].innerHTML === "Cleared Dungeon Level 1!"){
            return;
        }else if (this.isTheExitAt(x, y) === true) {
            console.log("Level 1 Complete!");
            document.getElementsByClassName("playerUpdates")[0].innerHTML = "Cleared Dungeon Level 1!";
            const nextLevelElement = document.createElement('LINK');
            nextLevelElement.className = 'nxt-lvl-message';
            nextLevelElement.innerHTML = 'Proceed to Level 2';
            nextLevelElement.setAttribute("href", "#" );
            document.querySelector('.hero').appendChild(nextLevelElement);
        }
    }

}
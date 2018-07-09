class Treasures {
    constructor() {
        this.treasureArr = [{
                x: 0,
                y: 4,
                bonusPoints: 10
            },
            {
                x: 7,
                y: 2,
                bonusPoints: 10
            },
            {
                x: 9,
                y: 6,
                bonusPoints: 10
            }
        ];
    }

    isThereTreasureAt(x, y) {
        for (let i = 0; i < this.treasureArr.length; i += 1) {
            const treasureLoc = this.treasureArr[i];
            if (treasureLoc.x === x && treasureLoc.y === y) {
                console.log("There's treasure here!");
                return true;
            }
        }
        return false;
    }

    updateScore() {
        let scoreHolder = document.getElementById('score');
        let playerScore = parseInt(scoreHolder.innerText);
        console.log(playerScore)
        playerScore += 20;
        console.log(playerScore)
        scoreHolder.innerText = playerScore;
    }

    removeTreasureInst(x, y) {
        for (let i = 0; i < this.treasureArr.length; i += 1) {
            const currentTreasure = this.treasureArr[i];
            if (currentTreasure.x === x && currentTreasure.y === y) {
                this.treasureArr.splice(i, 1);
                document.getElementById("treasure" + x + y).childNodes[0].style.visibility = "hidden";
            }
        }
    }
}
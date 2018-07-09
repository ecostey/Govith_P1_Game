class Shades {
    constructor() {
        this.shadesArr = [{
                x: 3,
                y: 0,
                totalHealth: 10,
                currentHealth: 10,
                attack: 4,
                hidden: true
            },
            {
                x: 2,
                y: 3,
                totalHealth: 10,
                currentHealth: 10,
                attack: 4,
                hidden: true
            },
            {
                x: 2,
                y: 7,
                totalHealth: 10,
                currentHealth: 10,
                attack: 4,
                hidden: true
            }
        ];
    }

    // Loop through shades, and check if any shade is at the given point.    
    isThereAShadeAt(x, y) {
        for (let i = 0; i < this.shadesArr.length; i += 1) {
            const shadeLocation = this.shadesArr[i];
            if (shadeLocation.x === x && shadeLocation.y === y) {
                return true;
            }
        }
        return false;
    }
    //Loop through shades, if a shade is present, return the shade's properties.
    returnShade(x, y) {
        for (let i = 0; i < this.shadesArr.length; i += 1) {
            const shade = this.shadesArr[i];
            if (shade.x === x && shade.y === y) {
                return (shade);
            }
        }
        return undefined;
    }

    updateScore() {
        let scoreHolder = document.getElementById('score');
        let playerScore = parseInt(scoreHolder.innerText);
        console.log(playerScore)
        playerScore += 10;
        console.log(playerScore)
        scoreHolder.innerText =  playerScore;
    }

    removeShadeInst(x, y) {
        for (let i = 0; i < this.shadesArr.length; i += 1) {
            const currentShade = this.shadesArr[i];
            if (currentShade.x === x && currentShade.y === y) {
                this.shadesArr.splice(i, 1);
                document.getElementById("shade" + x + y).childNodes[0].style.visibility = "hidden";
            }
        }
    }

}
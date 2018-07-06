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
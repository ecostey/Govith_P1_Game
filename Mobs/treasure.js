class Treasures {
    constructor() {
        this.mobs = [
            {x: 0, y: 4, bonusPoints: 10},
            {x: 7, y: 2, bonusPoints: 10},
            {x: 9, y: 6, bonusPoints: 10}
        ];
    }
    isThereTreasureAt(x, y) {
        for (let i = 0; i < this.mobs.length; i+=1) {
            const mobs = this.mobs[i];
            if (mobs.x === x && mobs.y === y) {
                return true;
            }
        }
        return false;
    }
    removeMob(x, y) {
        for (let i = 0; i < this.mobs.length; i++) {
            const removed = this.mobs[i];
            if (removed.x === x && removed.y === y) {
                this.mobs.splice(i, 1);
            }
        }
    }
    UpdateScore() {
        score += 10;
        document.getElementsById('Score')
    }
}
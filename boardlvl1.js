function makeBoard() {
    const arrTiles = [
        [0, 0, 0, 'goblin', 0, 'exit'],
        ['goblin', 0, 'treasure', 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        ['treasure', 'goblin', 0, 0, 0, 'goblin'],
        [0, 0, 0, 0, 0, 0],
        [0, 'start', 0, 0, 0, 0]
    ];
    const board1 = document.getElementById('board1');
    for (let i = 0; i < arrTiles.length; i += 1) {
        for (let j = 0; j < arrTiles.length; j += 1) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            board1.appendChild(tile);
         }
    }

}
makeBoard ();

function addTileClass () {

}
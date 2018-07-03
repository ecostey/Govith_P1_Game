function makeBoard() {
    const arrTiles = [
        ['O', 'O', 'O', 'goblin', 'O', 'exit'],
        ['goblin', 'O', 'treasure', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O'],
        ['treasure', 'goblin', 'O', 'O', 'O', 'goblin'],
        ['O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'start', 'O', 'O', 'O', 'O']
    ];
    const board1 = document.getElementById('board1');
    for (let i = 0; i < arrTiles.length; i += 1) {
        for (let j = 0; j < arrTiles.length; j += 1) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            const X = addTileClass(tile, arrTiles[i][j]);
            tile.className = X;
            board1.appendChild(tile);
         }
    }
}
makeBoard ();

function addTileClass (element , cName){
    return(element.className = cName);
}
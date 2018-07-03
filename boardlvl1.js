function makeBoard() {
    const arrTiles = [
        [0, 0, 0, 'goblin', 'exit'],
        ['goblin', 0, 'treasure', 0, 0],
        [0, 0, 0, 0, 0],
        ['treasure', 'goblin', 0, 0, 'goblin'],
        [0, 0, 0, 0, 0],
        [0, 'start', 0, 0, 0],
    ];
    const board1 = document.getElementById('board1');
    arrTilesLength = arrTiles.length;
    for (i = 0; i < arrTilesLength; i += 1) {
        for (j = 0; j < arrTilesLength; j += 1) {
            const tile = document.createElement("div");
            board1.appendChild(tile);
            text(arrTilesLength[i]).appendTo('board1');
        }
    }

}
makeBoard ();
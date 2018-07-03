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
            const tileDivs = document.createElement('div');
            tileDivs.className = 'tile';
            tileDivs.classList.add(arrTiles[i][j]);
            board1.appendChild(tileDivs);
        }
    }
}
makeBoard();


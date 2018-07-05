function makeBoard() {
    const arrTiles = [
        ['start', 'O', 'O', 'shade', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'treasure', 'O', 'O'],
        ['O', 'O', 'shade', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['treasure', 'O', 'O', 'O', 'O', 'goblin', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'goblin'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'treasure'],
        ['O', 'O', 'shade', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'goblin', 'O', 'O', 'O', 'O'],
        ['O', 'goblin', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'exit']
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


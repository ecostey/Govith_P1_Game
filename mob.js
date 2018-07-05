const goblins = [
    {x: 5, y: 4},
    {x: 9, y: 5},
    {x: 5, y: 8},
    {x: 1, y: 9}
  ];

  const shades = [
    {x: 3, y: 0},
    {x: 2, y: 3},
    {x: 2, y: 7}
  ];

  const treasures = [
    {x: 0, y: 4},
    {x: 7, y: 2},
    {x: 9, y: 6}
  ];

  const exit1 = [
    {x: 9, y: 9},
  ];

  const isThereAGoblinAt = (x, y) => {
    // Loop through goblins, and check if any goblin is at the given point.
    for (let i = 0; i < goblins.length; i++) {
      const goblins = goblins[i];
      if (goblin.x === x && goblin.y === y) {
        return true;
      }
    }
    return false;
  };

  
  
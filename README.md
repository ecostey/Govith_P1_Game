# Govith dungeon.crawl

**What is GOVITH?**

Govith is a classic Dungeon Crawl game created in the likeness of Rogue and NetHack.

**How To Play:** 

Govith begins each level in the top, left corner and must make it to the bottom, right corner in order to reach the next level of the dungeon.
Along the way, players can score extra points by fighting monsters and collecting treasure. While monsters are currently harmless in level 1, in later levels I intend to make the game more interactive & challanging.
To move Govith, use the arrow keys. To fight, simply use the arrow key that points in the direction of the monster you are fighting.

**Installation**
- Fork, clone, & have fun!


**Some Background on the Making of Govith**

![Sketched wire frame for Govith](/img/govith-wireframe.jpg "Govith Wire Frame")

The following is an overview of Govith's inception:

- First thing's first... Govith needed a board. To avoid over-complicating the game right off the bat, I went with a 10x10, square board. 
The board was created using a 2d Array and nested for loop. This allowed me to neatly construct the board with class names and coordinates basically pre-assigned to each tile. 

- After creating the 'board', I began breaking down my pieces (player/govith, monsters, treasure, etc) into classes- each on their own page. 
This part was very tricky from a strategic standpoint. Should I take the safe route and keep all my js in one long, but organized file? Or should I venture into View/Model theory? In the end, I compromised- multiple pages with classes per piece.
This compromise was both a blessing and a curse. It simplified my code and made it easier to navigate. However, it also made calling the functions/methods on different pages very tricky.

As a final note, I had a lot of fun with this project, but I could feel myself faltering near the end- running out of steam. As the code became denser and denser I was discouraged by how complicated even simple things became. Eventually, I'd like to revisit the way I set up my code and clean it up a bit.

Constructing Govith was a great experience, and I look forward to working on it more over time. Until then, "Fight on to glory, friends!"

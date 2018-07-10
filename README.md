# dungeon.crawl

**What is GOVITH?**

Govith is a classic Dungeon Crawl game created in the likeness of Rogue and NetHack.

**How To Play:** 

Govith begins each level in the top, left corner and must make it to the bottom, right corner in order to reach the next level of the dungeon.
Along the way, players can score extra points by fighting monsters and collecting treasure. While monsters are currently harmless in level 1, in later levels I intend to make the game more interactive & challanging.
To move Govith, use the arrow keys. To fight, simply use the arrow key that points in the direction of the monster you are fighting.

**Some Background on the Making of Govith**

![Sketched wire frame for Govith](/img/govith-wireframe.jpg "Govith Wire Frame")

As my first attempt coding a game of this nature, there were many stumbling blocks. The following is an overview of Govith's inception:

- First thing's first... Govith needed a board. To avoid over-complicating the game right off the bat, I went with a 10x10, square board. 
The board was created using a 2d Array and nested for loop. This allowed me to neatly construct the board with class names and coordinates basically pre-assigned to each tile. 

- For better or worse, after creating the 'board', I began breaking down my pieces (player/govith, monsters, treasure, etc) into classes- each on their own page. 
This part was very tricky from a strategic standpoint. With my still elementary js knowledge, should I take the safe route and keep all my js in one long, but clean file? Or should I venture into View/Model theory? In the end, I resorted to a compromise- hence the multiple pages with classes per piece.
Was it the best approach? Nope. Probably not. Was it the worst approach? Well... I hope not. Worst comes to worst, at least I got a lot of practice with classes & objects in this project.

As a final note, I had a lot of fun with this project, but I could feel myself faltering near the end- running out of steam. As the code became denser and denser I was discouraged by how complicated even simple things became.
However, despite the stress towards the end, constructing Govith was a great experience, and I look forward to working on it more over time.

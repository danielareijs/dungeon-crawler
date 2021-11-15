// --------
// Task 4.1
// --------

/**
 * A dungeon crawler is a game where the goal is to explore a dungeon, find loot and
 * survive by batteling beasts that appear along the route.
 *
 * We can think of such a dungeon as a matrix. So an array that contains arrays. Leaving
 * each tile in the dungeon with a coordinate. For example would the top left tile of the
 * dungeon be dungeon[0][0] so the first element in the first array inside the dungeon array.
 *
 * The following variable is a predefined dungeon array. `null` tiles represent tiles that are
 * walls. Meaning tiles where the player can't move. Moveable tiles are represented with an
 * object. This is handy so that we can give different tiles different properties later on.
 */

 const dungeon = [
   [{ type: 'start' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
   [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
   [null, null, null, null, null, { type: 'path' }],
   [{ type: 'path' }, { type: 'path' }, { type: 'path' }, { type: 'path' }, null, { type: 'path' }],
   [{ type: 'path' }, null, null, { type: 'path' }, { type: 'path' }, { type: 'path' }],
   [{ type: 'end' }, null, null, null, null, null],
 ]

 /**
  * This gives us a dungeon with this layout (o is moveable tiles, X are walls)
  *
  * oXXooo
  * ooooXo
  * XXXXXo
  * ooooXo
  * oXXooo
  * oXXXXX
  *
  * Your task is to create a command line application that allows the player to navigate the
  * dungeon with commands such as "go down", "go left" etc. Until the player reaches the goal
  * tile.
  *
  * This is useful to get input from the terminal:
  * https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
  */

// --------
// Task 4.2
// --------

/**
 * From here on in, it's your call. This is your game. So make it awesome!
 *
 * I have some suggestions to things you can implement:
 *
 * - Random loot on the path. So each walkable tile would have a random chance of generating
 * some random loot, such as gold and so on. You could for example put a "randomLootChance"
 * property in the object to make some tiles lucky and other not. Different kind of
 * loot could also have different likelyness of appearing. New commands for the user could be
 * "inventory" "pick up" "drop <item>" "use <item>"
 *
 * - Random enemy spawning. Same as with the loot. But something that needs to be fought
 * to move on. New commands could be "punch with fist" "hit with sword" "shoot with bow"
 * "hide", "run back", "health". You would probably need a function to handle turnbased
 * combat. And both the player and the enemy would need health and attack damage.
 *
 * - Generate new, completely random dungeons. Keep in mind that there need to be a moveable
 * path trough. But there could also be dead ends. Multiple leveles etc.
 *
 * - Visualize the dungeon and the game in the browser, using CSS and HTML. Remember that the
 * parts of the dungeon that hasn't yet been traveled, should be obscured.
 */

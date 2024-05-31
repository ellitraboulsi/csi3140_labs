```javascript
// Function to create the game board
function createGame(n) {
    // Initialize an array with pellets
    let gameBoard = new Array(n).fill(".");

    // Randomly place Pacman, Ghost, and Fruit
    const pacmanPosition = Math.floor(Math.random() * n);
    let ghostPosition;
    let fruitPosition;

    do {
        ghostPosition = Math.floor(Math.random() * n);
    } while (ghostPosition === pacmanPosition);

    do {
        fruitPosition = Math.floor(Math.random() * n);
    } while (fruitPosition === pacmanPosition || fruitPosition === ghostPosition);

    // Place the characters on the board
    gameBoard[pacmanPosition] = "C";
    gameBoard[ghostPosition] = "^";
    gameBoard[fruitPosition] = "@";

    return gameBoard;
}

// Function to move Pacman to the left
function moveLeft(game) {
    const pacmanIndex = game.indexOf("C");

    if (pacmanIndex > 0) {
        game[pacmanIndex] = ".";
        game[pacmanIndex - 1] = "C";
    }

    return game;
}

// Function to move Pacman to the right
function moveRight(game) {
    const pacmanIndex = game.indexOf("C");

    if (pacmanIndex < game.length - 1) {
        game[pacmanIndex] = ".";
        game[pacmanIndex + 1] = "C";
    }

    return game;
}

// Example usage:
let game = createGame(10);
console.log(game);
console.log("Move Left:", moveLeft([...game]));
console.log("Move Right:", moveRight([...game]));
```

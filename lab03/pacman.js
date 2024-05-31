```javascript
// pacman.js

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

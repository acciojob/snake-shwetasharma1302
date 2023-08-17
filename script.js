// Get necessary elements
const gameContainer = document.getElementById("gameContainer");
const scoreSpan = document.getElementById("score");

// Initialize game variables
const gridSize = 40;
const pixelSize = 10;
const totalPixels = gridSize * gridSize;
const snake = [{ row: 20, col: 1 }];
let direction = "right";
let score = 0;
let foodPosition = generateRandomPosition();

// Function to create a pixel element
function createPixel(row, col, className) {
    const pixel = document.createElement("div");
    pixel.className = "pixel " + className;
    pixel.id = "pixel" + (row * gridSize + col);
    return pixel;
}

// Function to generate a random position for food
function generateRandomPosition() {
    return {
        row: Math.floor(Math.random() * gridSize),
        col: Math.floor(Math.random() * gridSize)
    };
}

// Function to update the game state
function updateGame() {
    // Clear previous snake position
    snake.forEach(pixel => {
        const pixelElement = document.getElementById("pixel" + (pixel.row * gridSize + pixel.col));
        pixelElement.classList.remove("snakeBodyPixel");
    });

    // Update snake position based on direction

    // Check for collisions with food

    // Update snake array

    // Draw snake on the game board

    // Move snake every 100ms

    // Check for game over

    // Call updateGame recursively
}

// Start the game loop
updateGame();

// Listen for arrow key events to change the snake's direction

// Initialize the game board
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        gameContainer.appendChild(createPixel(row, col, ""));
    }
}

// Place food on the game board

// Function to handle food consumption

// Function to handle game over

// Function to restart the game

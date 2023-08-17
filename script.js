//your code here
const gameContainer = document.getElementById("gameContainer");
const scoreSpan = document.getElementById("score");

let snake = [{ row: 20, col: 1 }];
let direction = "right";
let score = 0;

function createPixel(row, col, className) {
    const pixel = document.createElement("div");
    pixel.className = "pixel " + className;
    pixel.id = "pixel" + (row * 40 + col);
    return pixel;
}

function updateGame() {
    // Clear previous snake position
    snake.forEach(pixel => {
        const pixelElement = document.getElementById("pixel" + (pixel.row * 40 + pixel.col));
        pixelElement.classList.remove("snakeBodyPixel");
    });

    // Update snake position based on direction
    const head = { ...snake[0] };
    switch (direction) {
        case "up":
            head.row--;
            break;
        case "down":
            head.row++;
            break;
        case "left":
            head.col--;
            break;
        case "right":
            head.col++;
            break;
    }

    // Check for collision with food
    const foodPixel = document.querySelector(".food");
    if (foodPixel && foodPixel.id === "pixel" + (head.row * 40 + head.col)) {
        score++;
        scoreSpan.innerText = score;
        foodPixel.classList.remove("food");
        snake.push({});
    }

    // Update snake array
    snake.pop();
    snake.unshift(head);

    // Draw snake on the game board
    snake.forEach(pixel => {
        const pixelElement = document.getElementById("pixel" + (pixel.row * 40 + pixel.col));
        pixelElement.classList.add("snakeBodyPixel");
    });

    // Move snake every 100ms
    setTimeout(updateGame, 100);
}

// Initialize the game
gameContainer.innerHTML = "";
for (let row = 0; row < 40; row++) {
    for (let col = 0; col < 40; col++) {
        gameContainer.appendChild(createPixel(row, col, ""));
    }
}

// Place food randomly on the game board
const randomRow = Math.floor(Math.random() * 40);
const randomCol = Math.floor(Math.random() * 40);
const foodPixel = createPixel(randomRow, randomCol, "food");
gameContainer.appendChild(foodPixel);

// Start the game loop
updateGame();

// Change direction with arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
            direction = "right";
            break;
    }
});

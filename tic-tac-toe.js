
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.querySelector("#status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;

    // Winning combinations: rows, columns and diagonals
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Exercise 4: Check whether a player has won
    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[b] === board[c]
            ) {
                status.textContent =
                    "Congratulations! " + board[a] + " is the Winner!";

                status.classList.add("you-won");
                return true;
            }
        }

        return false;
    }

    // Exercises 1, 2, 3 and 6: Set up and control each square
    squares.forEach(function (square, index) {
        // Exercise 1: Apply the square styling
        square.classList.add("square");

        // Exercise 2 and 6: Place X or O without changing occupied squares
        square.addEventListener("click", function () {
            if (gameOver || board[index] !== "") {
                return;
            }

            board[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Exercise 4: Check for a winner after each move
            if (checkWinner()) {
                gameOver = true;
                return;
            }

            // Switch to the other player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        // Exercise 3: Add hover effect when mouse enters
        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        // Exercise 3: Remove hover effect when mouse leaves
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });
    });

    // Exercise 5: Restart the game
    newGameButton.addEventListener("click", function () {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent =
            "Move your mouse over a square and click to play an X or an O.";

        status.classList.remove("you-won");
    });
});

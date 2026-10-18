
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            if (board[index] !== "") {
                return;
            }

            board[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    });
});

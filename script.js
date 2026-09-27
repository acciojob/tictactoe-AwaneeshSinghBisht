const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");
const submitBtn = document.getElementById("submit");

const playerForm = document.getElementById("playerForm");
const game = document.getElementById("game");
const message = document.querySelector(".message");

let player1;
let player2;

let currentPlayer = "X";
let gameOver = false;

const board = [
    "", "", "",
    "", "", "",
    "", ""
];

submitBtn.addEventListener("click", function () {

    player1 = player1Input.value;
    player2 = player2Input.value;

    if (player1 === "" || player2 === "") {
        return;
    }

    playerForm.style.display = "none";
    game.style.display = "block";

    message.innerText = `${player1}, you're up`;
});


const cells = document.querySelectorAll(".cell");

cells.forEach(function (cell) {

    cell.addEventListener("click", function () {

        if (gameOver) {
            return;
        }

        const index = Number(cell.id) - 1;

        // Don't allow already-filled cells
        if (board[index] !== "") {
            return;
        }

        // Put X or O
        board[index] = currentPlayer;
        cell.innerText = currentPlayer.toLowerCase();

        // Check winner
        if (checkWinner()) {

            const winner =
                currentPlayer === "X" ? player1 : player2;

            message.innerText =
                `${winner} congratulations you won!`;

            gameOver = true;
            return;
        }

        // Check draw
        if (!board.includes("")) {
            message.innerText = "It's a draw!";
            gameOver = true;
            return;
        }

        // Change player
        if (currentPlayer === "X") {
            currentPlayer = "O";
            message.innerText = `${player2}, you're up`;
        } else {
            currentPlayer = "X";
            message.innerText = `${player1}, you're up`;
        }
    });
});


function checkWinner() {

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return true;
        }
    }

    return false;
}//your JS code here. If required.
const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");
const submitBtn = document.getElementById("submit");

const playerForm = document.getElementById("playerForm");
const game = document.getElementById("game");
const message = document.querySelector(".message");

let player1;
let player2;

let currentPlayer = "X";
let gameOver = false;

const board = [
    "", "", "",
    "", "", "",
    "", ""
];

submitBtn.addEventListener("click", function () {

    player1 = player1Input.value;
    player2 = player2Input.value;

    if (player1 === "" || player2 === "") {
        return;
    }

    playerForm.style.display = "none";
    game.style.display = "block";

    message.innerText = `${player1}, you're up`;
});


const cells = document.querySelectorAll(".cell");

cells.forEach(function (cell) {

    cell.addEventListener("click", function () {

        if (gameOver) {
            return;
        }

        const index = Number(cell.id) - 1;

        // Don't allow already-filled cells
        if (board[index] !== "") {
            return;
        }

        // Put X or O
        board[index] = currentPlayer;
        cell.innerText = currentPlayer.toLowerCase();

        // Check winner
        if (checkWinner()) {

            const winner =
                currentPlayer === "X" ? player1 : player2;

            message.innerText =
                `${winner} congratulations you won!`;

            gameOver = true;
            return;
        }

        // Check draw
        if (!board.includes("")) {
            message.innerText = "It's a draw!";
            gameOver = true;
            return;
        }

        // Change player
        if (currentPlayer === "X") {
            currentPlayer = "O";
            message.innerText = `${player2}, you're up`;
        } else {
            currentPlayer = "X";
            message.innerText = `${player1}, you're up`;
        }
    });
});


function checkWinner() {

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return true;
        }
    }

    return false;
}
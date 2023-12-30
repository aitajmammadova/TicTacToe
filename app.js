 
// ..................tic-tac-toe..................
const xScore = document.querySelector(".x-score")
const oScore = document.querySelector(".o-score")
const board = document.getElementById("board")
const sound = new Audio("./1.mp3")

const tryAgain = document.createElement("button")
tryAgain.classList.add("try-again")
tryAgain.textContent = "Try Again"
board.append(tryAgain)
let winner = null

let gameArray = Array(9).fill(null)
let xs = 0
let os = 0
const winingPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let firstPlayer = true
const newGame = (a, b) => {
    console.log(gameArray + "nn")
    gameArray.map((a, b) => {
        const div = document.createElement("div")
        div.classList.add("board-div")
        board.append(div)
        div.addEventListener("click", () => {
            if (div.textContent.length || winner) {
                return;
            }
            div.textContent = firstPlayer ? "X" : "O"
            gameArray[b] = firstPlayer ? "X" : "O"
            div.classList.add("filled")
            firstPlayer = !firstPlayer
            winningChecking()
            noWinner()
        })
    })
}
const noWinner = () => {
    emptyBoxes = gameArray.filter((a) => !a)
    if (!emptyBoxes.length && !winner) {
        console.log("yes it is null")
        tryAgain.classList.add("display")
    }
}
const winningChecking = () => {
    winingPositions.forEach((position) => {
        if (gameArray[position[0]] !== null &&
            gameArray[position[0]] === gameArray[position[1]] &&
            gameArray[position[1]] === gameArray[position[2]]) {
            sound.play();
            winner = gameArray[position[0]]
            console.log(winner + " is winner")
            tryAgain.classList.add("display")
            board.classList.add("display-none")
            xs = gameArray[position[0]] === "X" ? xs + 1 : xs
            os = gameArray[position[0]] === "O" ? os + 1 : os
            xScore.textContent = xs
            oScore.textContent = os
            const filledBoxes = [...document.querySelectorAll(".filled")]
            filledBoxes.map((a) => {
                if (a.textContent === gameArray[position[0]]) {
                    a.classList.add("winner")
                } else {
                    a.classList.add("loser")
                }
            })
        }
    })


}
tryAgain.addEventListener("click", () => {
    tryAgain.classList.remove("display")
    winner = null
    console.log("Try again")
    let erase = [...document.querySelectorAll(".board-div")]
    erase.map((a) => {
        a.classList.remove("filled")
        a.classList.remove("winner")
        a.classList.remove("loser")
        a.textContent = ""
    })
    gameArray = Array(9).fill(null)
    console.log(gameArray)
    winner = null

})
newGame()





// ..................tic-tac-toe..................
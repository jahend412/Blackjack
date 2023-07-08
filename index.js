let firstCard = 9
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭";
    }
    // Cash Out!
    console.log(message);
}
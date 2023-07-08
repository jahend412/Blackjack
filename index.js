let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
console.log(messageEl)

let sumEl = document.getElementById("sum-el");
console.log(sumEl)

let cardEl = document.getElementById("card-el");

function startGame() {
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
    }
    // Cash Out!
    messageEl.textContent = message;
    console.log(message);
}
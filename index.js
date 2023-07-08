let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard] // Array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

//Create a function for Random Card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame();
}

function renderGame() {
    // Render out all of the cards we have
    cardsEl.textContent = "Cards: ";
    // for loop to render cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    // Render out the sum
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
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    //Push the card to the cards array
    cards.push(card);
    renderGame();
}
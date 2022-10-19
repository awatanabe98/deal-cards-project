suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
newDeck = [];

for (var suitsCount = 0; suitsCount < 4; suitsCount++) {
    suits[suitsCount];
for (var ranksCount = 0; ranksCount < 13; ranksCount++) {
    ranks[ranksCount];
    newDeck.push(`${ranks[ranksCount]} of ${suits[suitsCount]}`);
    }
}

console.log(newDeck);

function drawFiveCards () {
  draw = 1;
  while (newDeck.length > 0 && draw <= 5) {
    randomNumber = Math.floor(Math.random()*newDeck.length);
    newHandCard = newDeck[randomNumber];
    newDeck.splice(randomNumber, 1);
    console.log(`You were dealt ${newHandCard}.`);
    draw++;
  }
}
drawFiveCards ()
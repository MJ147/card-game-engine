import { CardStack } from "./card-stack";

const deck = new CardStack();
deck.shuffle();
console.log(deck.cards);
const twoCards = deck.takeCards(2);
console.log(deck.cards);
deck.addCardsToTop(...twoCards);
console.log(deck.cards);

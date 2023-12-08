import { CardStack } from "./card-stack";
import { Card } from "./models/card.interface";

export class Hand extends CardStack {
    constructor(cards?: Card[]) {
        super(cards);
    }

    takeSpecificCards(...selectedCards: Card[]): Card[] {
        return selectedCards.filter(selectedCard => {
            const selectedCardIdx = this._cards.indexOf(selectedCard);

            if (selectedCardIdx === -1) {
                return true;
            }

            this.takeCards(selectedCardIdx);
        })
    }
}
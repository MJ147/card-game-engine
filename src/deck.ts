import { Rank } from "./enum/rank.enum";
import { Suit } from "./enum/suit.enum";
import { Card } from "./models/card.interface";

export class Deck {
    cards: Card[] = [];

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.createFreshDeck();
        }
    }

    createFreshDeck(ranks?: Rank[], suits?: Suit[]): void {
        suits = suits || Object.keys(Suit).map((v) => (Number(v))).filter((v) => !isNaN(v));
        ranks = ranks || Object.keys(Rank).map((v) => (Number(v))).filter((v) => !isNaN(v));

        this.cards = suits.flatMap((suit) => {
            return ranks!.map((rank) => ({rank, suit}));
        });
    }

    shuffle(): void {
        for (let i = 0; i < this.numberOfCards; i++) {
            const card = this.cards[i];
            const newIndex = Math.floor(Math.random() * (this.numberOfCards - 1))
            this.cards[i] = this.cards[newIndex]
            this.cards[newIndex] = card;
        }
    }

    get numberOfCards(): number {
        return this.cards.length;
    }
}
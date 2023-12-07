import { CardStack } from "./card-stack";
import { Rank } from "./enum/rank.enum";
import { Suit } from "./enum/suit.enum";
import { Card } from "./models/card.interface";

class Deck extends CardStack {
    constructor(cards?: Card[]) {
        super(cards);
    }

    createFreshDeck(ranks?: Rank[], suits?: Suit[]): void {
        this._cards = this._getFreshDeck(ranks, suits)
    }

    private _getFreshDeck(ranks?: Rank[], suits?: Suit[]): Card[] {
        suits = suits || Object.keys(Suit).map((v) => (Number(v))).filter((v) => !isNaN(v));
        ranks = ranks || Object.keys(Rank).map((v) => (Number(v))).filter((v) => !isNaN(v));

        return suits.flatMap((suit) => {
            return ranks!.map((rank) => ({rank, suit}));
        });
    }
}
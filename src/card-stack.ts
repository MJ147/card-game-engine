import { Card } from "./models/card.interface";

export class CardStack {
    protected _cards: Card[];

    constructor(cards: Card[] = []) {
        this._cards = cards;
    }

    shuffle(): void {
        for (let i = 0; i < this.numberOfCards; i++) {
            const card = this._cards[i];
            const newIndex = this.randomIdx;
            this._cards[i] = this._cards[newIndex]
            this._cards[newIndex] = card;
        }
    }

    get numberOfCards(): number {
        return this._cards.length;
    }

    get cards(): Card[] {
        return this._cards.map((card) => ({...card}));
    }

    get randomIdx(): number {
        return Math.floor(Math.random() * (this.numberOfCards - 1))
    }

    protected _removeCards(numberOfCards: number, idx: number = 0): Card[] {
        return this._cards.splice(idx, numberOfCards);
    }

    addCardsToBottom(...cards: Card[]): void {
        this._cards = [...this._cards, ...cards];
    }

    addCardsToTop(...cards: Card[]): void {
        this._cards = [...cards, ...this._cards];
    }

    addCardsRandomly(...cards: Card[]): void {
        cards.forEach((card) => this._cards.splice(this.randomIdx, 0, card))
    }
}
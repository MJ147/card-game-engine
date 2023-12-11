import { CardStack } from "src/card-stack";
import { Card } from "./models/card.interface";
import { Hand } from "./hand";
import { PlayerState } from "./enum/player-state.enum";

export class Player {
    private _name: string;
    private _score: number = 0;
    private _cards: Hand = new Hand();
    state: PlayerState = PlayerState.OutOfGame;

    constructor(name: string) {
        this._name = name;
    }

    addCards(cards: Card[]): void {
        this._cards.addCardsToTop(...cards);
    }

    playCards(cards: Card[]): Card[] {
        return this._cards.takeSpecificCards(...cards)
    }

    addToScore(points: number): void {
        this._score =+ points;
    }

    get score(): number {
        return this._score
    }

    set score(score: number) {
        this._score = score;
    }
}
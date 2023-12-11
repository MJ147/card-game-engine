import { GameRules } from "./models/rules.interface";
import _ from "lodash";
import { Player } from "./player";
import { Deck } from "./deck";

export class CardGame {
    private _rules: GameRules;
    private _deck: Deck;
    private _players: Player[];

    constructor(rules: GameRules, deck?: Deck, players?: Player[]) {
        this._rules = rules;
        this._deck = deck ?? new Deck();
        this._players = players ?? [];
    }

    private dealOneCard(player: Player): void {
        const cardToDeal = this._deck.dealCards(1);
        player.addCards(cardToDeal);
    }

    dealCardsToPlayers(numberOfCardsForOnePlayer: number, players: Player[] = this._players): void {
        for (let i = 0; i < numberOfCardsForOnePlayer; i++) {
            players.forEach(player => this.dealOneCard(player));
        }
    }

    addPlayer(playerName: string): boolean {
        if (this._players.length >= this._rules.numberOfPlayers) {
            return false;
        }

        this._players.push(new Player(playerName));
        
        return true;
    }

    updateRules(rules: Partial<GameRules>): void {
        this._rules = {...this._rules, ...rules};
    }

    get rules(): GameRules {
        return _.cloneDeep(this._rules);
    }

    get players(): Player[] {
        return {...this._players}
    }

    set players(players: Player[]) {
        this._players = players;
    }
}
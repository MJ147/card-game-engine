import { GameRules } from "./models/rules.interface";
import _ from "lodash";
import { Player } from "./player";
import { Deck } from "./deck";

export class CardGame {
    private _rules: GameRules;
    private _deck: Deck = new Deck();
    private _players: Player[] = [];

    constructor(rules: GameRules) {
        this._rules = rules;
    }

    updateRules(rules: Partial<GameRules>): void {
        this._rules = {...this._rules, ...rules};
    }

    get rules(): GameRules {
        return _.cloneDeep(this._rules);
    }
}
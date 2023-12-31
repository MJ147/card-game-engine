import { BeatenCardsBehavior } from "src/enum/beaten-cards-behavior";
import { Rank } from "src/enum/rank.enum";
import { Suit } from "src/enum/suit.enum";
import { WinningCondition } from "src/enum/winning-condition";

export interface GameRules {
    numberOfPlayers: number;
    numberOfDecks: number;
    suitsInDeck?: Suit[];
    ranksInDeck?: Rank[];
    isAceTheStrongest: boolean;
    higherBeatsLower?: boolean;
    reverseCardOrder?: boolean;
    beatenCardBehavior: BeatenCardsBehavior;
    winningCondition: WinningCondition;
}
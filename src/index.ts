import { CardGame } from "./card-game";
import { CardStack } from "./card-stack";
import { BeatenCardsBehavior } from "./enum/beaten-cards-behavior";
import { WinningCondition } from "./enum/winning-condition";
import { GameRules } from "./models/rules.interface";

const rules: GameRules = {
    beatenCardBehavior: BeatenCardsBehavior.CardsGoToWinner, 
    numberOfDecks: 1,
    isAceTheStrongest: true,
    numberOfPlayers: 4,
    higherBeatsLower: true,
    winningCondition: WinningCondition.HavingAllCards,
}
const game = new CardGame(rules);

game.addPlayer('Player1');
game.addPlayer('Player2');
game.addPlayer('Player3');
game.addPlayer('Player4');




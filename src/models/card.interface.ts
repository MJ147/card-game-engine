import type { Rank } from "src/enum/rank.enum";
import type { Suit } from "src/enum/suit.enum";

export interface Card {
    rank: Rank;
    suit: Suit;
}
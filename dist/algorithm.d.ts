import { Chess } from "logichess/dist/chess";
import { Move } from "logichess/dist/move";
export declare abstract class Algorithm {
    chess: Chess;
    moves: Move[];
    constructor(chess: Chess);
    abstract getMove(): Move;
}

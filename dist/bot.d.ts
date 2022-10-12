import { Chess } from "logichess/dist/chess";
import { Move } from "logichess/dist/move";
import { Algorithm } from "./algorithm";
export declare type BotAlgorithm = "random" | "alphabet" | "shortest" | "longest";
export declare class Bot {
    chess: Chess;
    algorithm: BotAlgorithm;
    bot: Algorithm;
    move: Move;
    constructor(chess: Chess, algorithm: BotAlgorithm);
    private getBot;
}

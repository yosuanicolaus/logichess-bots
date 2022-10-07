import { Chess } from "logichess/dist/chess";
import { Move } from "logichess/dist/move";
import { Algorithm } from "./algorithm";
declare type AlgoChoice = "random" | "alphabet" | "shortest" | "longest";
export declare class Bot {
    chess: Chess;
    algorithm: AlgoChoice;
    bot: Algorithm;
    move: Move;
    constructor(chess: Chess, algorithm: AlgoChoice);
    private getBot;
}
export {};

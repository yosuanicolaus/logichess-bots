import { Chess } from "../../logichess/dist/chess";
import { Move } from "../../logichess/dist/move";
import { Algorithm } from "../algorithm";
export declare class Random extends Algorithm {
    constructor(chess: Chess);
    getMove(): Move;
}

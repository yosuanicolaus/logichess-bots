import { Chess } from "../../logichess/dist/chess";
import { Algorithm } from "../algorithm";
export declare class Random extends Algorithm {
    constructor(chess: Chess);
    getMove(): import("../../logichess/dist/move").Move;
}

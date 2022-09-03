import { Chess } from "../logichess/dist/chess";
import { Move } from "../logichess/dist/move";

export abstract class Algorithm {
  chess: Chess;

  constructor(chess: Chess) {
    this.chess = chess;
  }

  abstract getMove(): Move;
}

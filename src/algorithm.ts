import { Chess } from "logichess/dist/chess";
import { Move } from "logichess/dist/move";

export abstract class Algorithm {
  chess: Chess;
  moves: Move[];

  constructor(chess: Chess) {
    this.chess = chess;
    this.moves = chess.data.moves;
  }

  abstract getMove(): Move;
}

import { Chess } from "../../logichess/dist/chess";
import { Algorithm } from "../algorithm";

export class Alphabet extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    const moves = this.chess.data.moves;
    moves.sort((moveA, moveB) => moveA.san.localeCompare(moveB.san));
    return moves[0];
  }
}

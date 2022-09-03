import { Chess } from "../../logichess/dist/chess";
import { Algorithm } from "../algorithm";

export class Alphabet extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    this.moves.sort((moveA, moveB) => {
      return moveA.san.localeCompare(moveB.san);
    });
    return this.moves[0];
  }
}

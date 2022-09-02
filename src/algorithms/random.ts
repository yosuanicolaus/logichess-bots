import Chess from "../../logichess/dist/chess";
import Move from "../../logichess/dist/move";
import { Algorithm } from "../algorithm";
import { getRandomMove } from "../utils";

export class Random extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    const moves = this.chess.data?.moves as Move[];
    return getRandomMove(moves);
  }
}

import { Chess } from "../../logichess/dist/chess";
import { Algorithm } from "../algorithm";
import { getRandomMove } from "../utils";

export class Random extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    return getRandomMove(this.moves);
  }
}

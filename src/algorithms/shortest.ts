import { Chess } from "../../logichess/dist/chess";
import { Move } from "../../logichess/dist/move";
import { Algorithm } from "../algorithm";
import { getMoveDistance, getRandomMove } from "../utils";

export class Shortest extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    let shortestDist = 10;
    let shortestMoves: Move[] = [];

    this.moves.forEach((move) => {
      const moveDist = getMoveDistance(move);
      if (moveDist < shortestDist) {
        shortestDist = moveDist;
        shortestMoves = [move];
      } else if (moveDist === shortestDist) {
        shortestMoves.push(move);
      }
    });

    return getRandomMove(shortestMoves);
  }
}

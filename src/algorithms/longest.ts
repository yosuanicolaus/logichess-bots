import { Chess } from "../../logichess/dist/chess";
import { Move } from "../../logichess/dist/move";
import { Algorithm } from "../algorithm";
import { getMoveDistance, getRandomMove } from "../utils";

export class Longest extends Algorithm {
  constructor(chess: Chess) {
    super(chess);
  }

  getMove() {
    let longestDist = 0;
    let longestMoves: Move[] = [];

    this.moves.forEach((move) => {
      const moveDist = getMoveDistance(move);
      if (moveDist > longestDist) {
        longestDist = moveDist;
        longestMoves = [move];
      } else if (moveDist === longestDist) {
        longestMoves.push(move);
      }
    });

    return getRandomMove(longestMoves);
  }
}

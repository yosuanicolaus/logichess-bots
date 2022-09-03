import { Move } from "../logichess/dist/move";

export function getRandomMove(moves: Move[]) {
  const randIdx = Math.floor(Math.random() * moves.length);
  return moves[randIdx];
}

export function getMoveDistance(move: Move) {
  const rankDist = Math.abs(move.to.rank - move.from.rank);
  const fileDist = Math.abs(move.to.file - move.from.file);
  return Math.max(rankDist, fileDist);
}

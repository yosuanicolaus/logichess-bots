import Move from "../logichess/dist/move";

export function getRandomMove(moves: Move[]) {
  const randIdx = Math.floor(Math.random() * moves.length);
  return moves[randIdx];
}

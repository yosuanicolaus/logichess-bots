import Chess from "../logichess/dist/chess";

type Algorithm = "random" | "mirror";

export class Bot {
  chess: Chess;
  algorithm: Algorithm;

  constructor(chess: Chess, algorithm: Algorithm) {
    this.chess = chess;
    this.algorithm = algorithm;
  }
}

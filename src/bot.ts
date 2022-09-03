import { Chess } from "../logichess/dist/chess";
import { Move } from "../logichess/dist/move";
import { Algorithm } from "./algorithm";
import { Alphabet } from "./algorithms/alphabet";
import { Random } from "./algorithms/random";
import { Shortest } from "./algorithms/shortest";

type AlgoChoice = "random" | "alphabet" | "shortest";

export class Bot {
  chess: Chess;
  algorithm: AlgoChoice;
  bot: Algorithm;
  move: Move;

  constructor(chess: Chess, algorithm: AlgoChoice) {
    this.chess = chess;
    this.algorithm = algorithm;
    this.bot = this.getBot(algorithm);
    this.move = this.bot.getMove();
  }

  private getBot(algorithm: AlgoChoice) {
    switch (algorithm) {
      case "random":
        return new Random(this.chess);
      case "alphabet":
        return new Alphabet(this.chess);
      case "shortest":
        return new Shortest(this.chess);
      default:
        throw new Error("algorithm not found!");
    }
  }
}

import { Chess } from "logichess/dist/chess";
import { Move } from "logichess/dist/move";
import { Algorithm } from "./algorithm";
import { Alphabet } from "./algorithms/alphabet";
import { Longest } from "./algorithms/longest";
import { Random } from "./algorithms/random";
import { Shortest } from "./algorithms/shortest";

export type BotAlgorithm = "random" | "alphabet" | "shortest" | "longest";

export class Bot {
  chess: Chess;
  algorithm: BotAlgorithm;
  bot: Algorithm;
  move: Move;

  constructor(chess: Chess, algorithm: BotAlgorithm) {
    this.chess = chess;
    this.algorithm = algorithm;
    this.bot = this.getBot(algorithm);
    this.move = this.bot.getMove();
  }

  private getBot(algorithm: BotAlgorithm) {
    switch (algorithm) {
      case "random":
        return new Random(this.chess);
      case "alphabet":
        return new Alphabet(this.chess);
      case "shortest":
        return new Shortest(this.chess);
      case "longest":
        return new Longest(this.chess);
      default:
        throw new Error("algorithm not found!");
    }
  }
}

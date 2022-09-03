"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const alphabet_1 = require("./algorithms/alphabet");
const random_1 = require("./algorithms/random");
class Bot {
    constructor(chess, algorithm) {
        this.chess = chess;
        this.algorithm = algorithm;
        this.bot = this.getBot(algorithm);
        this.move = this.bot.getMove();
    }
    getBot(algorithm) {
        switch (algorithm) {
            case "random":
                return new random_1.Random(this.chess);
            case "alphabet":
                return new alphabet_1.Alphabet(this.chess);
            default:
                throw new Error("algorithm not found!");
        }
    }
}
exports.Bot = Bot;

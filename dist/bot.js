"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const alphabet_1 = require("./algorithms/alphabet");
const longest_1 = require("./algorithms/longest");
const random_1 = require("./algorithms/random");
const shortest_1 = require("./algorithms/shortest");
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
            case "shortest":
                return new shortest_1.Shortest(this.chess);
            case "longest":
                return new longest_1.Longest(this.chess);
            default:
                throw new Error("algorithm not found!");
        }
    }
}
exports.Bot = Bot;

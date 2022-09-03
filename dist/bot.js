"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
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
            default:
                throw new Error("algorithm not found!");
        }
    }
}
exports.Bot = Bot;

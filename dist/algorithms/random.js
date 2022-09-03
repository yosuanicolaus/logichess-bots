"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const algorithm_1 = require("../algorithm");
const utils_1 = require("../utils");
class Random extends algorithm_1.Algorithm {
    constructor(chess) {
        super(chess);
    }
    getMove() {
        const moves = this.chess.data.moves;
        return (0, utils_1.getRandomMove)(moves);
    }
}
exports.Random = Random;

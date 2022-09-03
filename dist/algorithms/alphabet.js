"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alphabet = void 0;
const algorithm_1 = require("../algorithm");
class Alphabet extends algorithm_1.Algorithm {
    constructor(chess) {
        super(chess);
    }
    getMove() {
        const moves = this.chess.data.moves;
        moves.sort((moveA, moveB) => moveA.san.localeCompare(moveB.san));
        return moves[0];
    }
}
exports.Alphabet = Alphabet;

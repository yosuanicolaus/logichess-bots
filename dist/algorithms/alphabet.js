"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alphabet = void 0;
const algorithm_1 = require("../algorithm");
class Alphabet extends algorithm_1.Algorithm {
    constructor(chess) {
        super(chess);
    }
    getMove() {
        this.moves.sort((moveA, moveB) => {
            return moveA.san.localeCompare(moveB.san);
        });
        return this.moves[0];
    }
}
exports.Alphabet = Alphabet;

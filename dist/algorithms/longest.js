"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Longest = void 0;
const algorithm_1 = require("../algorithm");
const utils_1 = require("../utils");
class Longest extends algorithm_1.Algorithm {
    constructor(chess) {
        super(chess);
    }
    getMove() {
        let longestDist = 0;
        let longestMoves = [];
        this.moves.forEach((move) => {
            const moveDist = (0, utils_1.getMoveDistance)(move);
            if (moveDist > longestDist) {
                longestDist = moveDist;
                longestMoves = [move];
            }
            else if (moveDist === longestDist) {
                longestMoves.push(move);
            }
        });
        return (0, utils_1.getRandomMove)(longestMoves);
    }
}
exports.Longest = Longest;

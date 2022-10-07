"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shortest = void 0;
const algorithm_1 = require("../algorithm");
const utils_1 = require("../utils");
class Shortest extends algorithm_1.Algorithm {
    constructor(chess) {
        super(chess);
    }
    getMove() {
        let shortestDist = 10;
        let shortestMoves = [];
        this.moves.forEach((move) => {
            const moveDist = (0, utils_1.getMoveDistance)(move);
            if (moveDist < shortestDist) {
                shortestDist = moveDist;
                shortestMoves = [move];
            }
            else if (moveDist === shortestDist) {
                shortestMoves.push(move);
            }
        });
        return (0, utils_1.getRandomMove)(shortestMoves);
    }
}
exports.Shortest = Shortest;

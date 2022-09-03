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
        var _a;
        const moves = (_a = this.chess.data) === null || _a === void 0 ? void 0 : _a.moves;
        return (0, utils_1.getRandomMove)(moves);
    }
}
exports.Random = Random;

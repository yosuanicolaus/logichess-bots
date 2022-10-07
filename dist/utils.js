"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveDistance = exports.getRandomMove = void 0;
function getRandomMove(moves) {
    const randIdx = Math.floor(Math.random() * moves.length);
    return moves[randIdx];
}
exports.getRandomMove = getRandomMove;
function getMoveDistance(move) {
    const rankDist = Math.abs(move.to.rank - move.from.rank);
    const fileDist = Math.abs(move.to.file - move.from.file);
    return Math.max(rankDist, fileDist);
}
exports.getMoveDistance = getMoveDistance;

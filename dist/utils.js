"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMove = void 0;
function getRandomMove(moves) {
    const randIdx = Math.floor(Math.random() * moves.length);
    return moves[randIdx];
}
exports.getRandomMove = getRandomMove;

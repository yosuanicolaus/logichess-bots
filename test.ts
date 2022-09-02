import Chess from "./logichess/dist/chess";
import { Bot } from "./src/bot";

const c = new Chess();
const t1 = Date.now();
const b = new Bot(c, "random");
const t2 = Date.now();

console.log(b.move);
console.log(t2 - t1, "ms");

import { Bot } from "./src/bot";
import { Chess } from "./logichess/dist/chess";

const c = new Chess();
const b = new Bot(c, "longest");

console.log(b.move);

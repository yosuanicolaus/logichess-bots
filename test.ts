import Chess from "./logichess/dist/chess";
import { Bot } from "./src/bot";

const c = new Chess();
const b = new Bot(c, "random");

console.log(b);

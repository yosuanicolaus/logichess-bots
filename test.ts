import { Bot } from "./src/bot";
import { Chess } from "./logichess/dist/chess";
import { getMoveDistance } from "./src/utils";

const c = new Chess();
const b = new Bot(c, "shortest");

console.log(b.move);

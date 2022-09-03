import { Chess } from "./logichess/dist/chess";

const t1 = Date.now();
let a;

a = new Chess();
a = new Chess();
a = new Chess();
a = new Chess();
a = new Chess();

const t2 = Date.now();

console.log(t2 - t1, "ms");

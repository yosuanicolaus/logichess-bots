mkdir dist/esm

cat >dist/esm/wrapper.js <<!EOF
import cjsModule from "../index.js";
export const Bot = cjsModule.Bot;
export default Bot;
!EOF

cat >dist/esm/package.json <<!EOF
{
  "type": "module"
}
!EOF
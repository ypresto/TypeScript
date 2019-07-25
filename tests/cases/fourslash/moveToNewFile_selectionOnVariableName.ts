/// <reference path='fourslash.ts' />

// @Filename: /a.ts
////export {};
////const e[|f|]f = () => { gee(); }
////function gee() { eff(); }

verify.moveToNewFile({
    newFileContents: {
        "/a.ts":
`import { eff } from "./eff";

export {};
export function gee() { eff(); }`,
        "/eff.ts":
`import { gee } from "./a";
export const eff = () => { gee(); };
`,
    },
});

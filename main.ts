// The Funniest Toaster Error Message — writes one line to /output/entry.txt.
// Gate: UTF-8, 1–120 chars, one line. The entry is a deadpan appliance error:
// a fork in Slot 1, and a toaster that has seen this before.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "ERROR 09: Slot 1 contains a fork. I am not doing this again.";
const FILE = "entry.txt";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, FILE), ENTRY, "utf8");

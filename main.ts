// The World in One Day — Wednesday 25 November 2026
// Copies the composed front-page image (entry.png, next to this file)
// into the directory named by MAKEFUN_OUTPUT_DIR (default: /output).

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`error: source image not found: ${source}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

// Verify the copy landed intact: it must exist and match the source size.
if (!existsSync(destination)) {
  console.error(`error: copy failed, destination missing: ${destination}`);
  process.exit(1);
}
const sourceBytes = statSync(source).size;
const copiedBytes = statSync(destination).size;
if (copiedBytes !== sourceBytes) {
  console.error(
    `error: size mismatch after copy: source is ${sourceBytes} bytes, ` +
      `destination is ${copiedBytes} bytes`,
  );
  process.exit(1);
}
console.log(`Copied ${source} -> ${destination} (${copiedBytes} bytes, verified)`);

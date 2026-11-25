// The World in One Day — Wednesday 25 November 2026.
//
// Entry program: place the composed front-page image (entry.png, sitting
// next to this file) into the output directory the harness names through
// MAKEFUN_OUTPUT_DIR, falling back to /output when it is unset.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JPEG_MAGIC = [0xff, 0xd8, 0xff];

function fail(message: string): never {
  console.error(`entry failed: ${message}`);
  process.exit(1);
}

function isJpeg(bytes: Buffer): boolean {
  return JPEG_MAGIC.every((byte, i) => bytes[i] === byte);
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, "entry.png");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const targetPath = join(outputDir, "entry.png");

  if (!existsSync(sourcePath)) {
    fail(`no front-page image at ${sourcePath}`);
  }
  if (!isJpeg(readFileSync(sourcePath).subarray(0, 3))) {
    fail(`front-page image at ${sourcePath} is not a JPEG`);
  }
  const expectedBytes = statSync(sourcePath).size;

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, targetPath);

  if (!existsSync(targetPath)) {
    fail(`copy produced no file at ${targetPath}`);
  }
  const actualBytes = statSync(targetPath).size;
  if (actualBytes !== expectedBytes) {
    fail(`copied ${actualBytes} bytes but the source has ${expectedBytes}`);
  }
  if (!isJpeg(readFileSync(targetPath).subarray(0, 3))) {
    fail(`copied file at ${targetPath} is not a JPEG`);
  }
  console.log(`wrote ${targetPath} (${actualBytes} bytes, JPEG verified)`);
}

main();

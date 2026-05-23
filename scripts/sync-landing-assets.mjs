import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "..", "good-beef-html", "goodbeef-landing-page", "assets");
const dst = join(root, "public", "landing", "assets");

if (!existsSync(src)) {
  console.error(`Source not found: ${src}`);
  process.exit(1);
}

mkdirSync(dirname(dst), { recursive: true });
if (existsSync(dst)) {
  rmSync(dst, { recursive: true, force: true });
}
cpSync(src, dst, { recursive: true });
console.log(`Synced landing assets to ${dst}`);

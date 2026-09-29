import { cp, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(projectRoot, ".output", "public");

await access(path.join(output, "index.html"));
await cp(output, projectRoot, { recursive: true, force: true });
console.log("Published .output/public to the repository root; CNAME is preserved.");

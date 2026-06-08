import { copyFile, access } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

async function copyIfPresent(sourcePath, targetPath) {
  await access(sourcePath);
  await copyFile(sourcePath, targetPath);
}

await copyIfPresent(
  path.join(distDir, "index.html"),
  path.join(distDir, "404.html")
);

await copyIfPresent(
  path.join(rootDir, "google181a4069f4054165.html"),
  path.join(distDir, "google181a4069f4054165.html")
);

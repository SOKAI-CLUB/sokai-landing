import { cp, mkdir, rename, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const assets = resolve(dist, "assets");
const server = resolve(dist, "server");

await rm(dist, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await cp(resolve(root, "out"), assets, { recursive: true });
await cp(resolve(root, "sites-worker", "index.js"), resolve(server, "index.js"));

// Next exports the 404 page as 404.html. Keep a conventional directory route
// available for asset routers that probe it before falling back to index.html.
await mkdir(resolve(assets, "404"), { recursive: true });
await rename(resolve(assets, "404.html"), resolve(assets, "404", "index.html"));

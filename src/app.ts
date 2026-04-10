import { readFile } from "fs/promises";

async function readFileJson() {
  const data = await readFile("./package.json", "utf-8");
  const result = JSON.parse(data);
  return result;
}

export { readFileJson };

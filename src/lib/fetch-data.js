import path from "path";
import fs from "fs/promises";

export async function fetchData() {
  const filePath = path.join(process.cwd(), "public/data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

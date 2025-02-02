import { Planet } from "@/types/planet";
import { readFile } from "fs/promises";
import path from "path";

export async function fetchData(): Promise<Planet[]> {
  const jsonPath = path.join(process.cwd(), "public", "data", "data.json");
  const jsonData = JSON.parse(await readFile(jsonPath, "utf8"));
  return jsonData;
}

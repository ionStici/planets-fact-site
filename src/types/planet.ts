export type Planet = {
  name: string;
  planetColor: string;
  navColor: string;
  overview: { content: string; source: string };
  structure: { content: string; source: string };
  geology: { content: string; source: string };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: { planet: string; internal: string; geology: string };
};

export type PlanetParams = { planet: string; view: string };

export enum PlanetView {
  OVERVIEW = "overview",
  STRUCTURE = "structure",
  SURFACE = "surface",
}

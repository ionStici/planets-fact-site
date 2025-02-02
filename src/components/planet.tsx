import classes from "@/styles/planet.module.scss";
import { Planet as PlanetType } from "@/types/planet";
import SubMenu from "./submenu";
import AboutPlanet from "./about-planet";
import { Images } from "./images";
import StatsBoxes from "./stats-boxes";

type PlanetProps = { planetData: PlanetType; params: { planet: string; view: string } };

export function Planet({ planetData, params }: PlanetProps) {
  return (
    <section className={classes.layout}>
      <Images planetData={planetData} view={params.view} />
      <SubMenu planetData={planetData} view={params.view} />
      <AboutPlanet planetData={planetData} view={params.view} />
      <StatsBoxes planetData={planetData} />
    </section>
  );
}

import classes from "@/styles/about-planet.module.scss";
import { Planet } from "@/types/planet";
import Image from "next/image";

type AboutPlanetProps = { planetData: Planet; view: string };

function AboutPlanet({ planetData, view }: AboutPlanetProps) {
  const data =
    view === "overview"
      ? planetData.overview
      : view === "structure"
      ? planetData.structure
      : planetData.geology;

  return (
    <div className={classes.wrapper}>
      <h1>{planetData.name}</h1>
      <p>{data.content}</p>
      <div>
        <span>Source :</span>
        <a href={data.source}>
          <span>Wikipedia</span>
          <Image
            src="/planets-fact-site/assets/icon-source.svg"
            alt="Source"
            width={12}
            height={12}
          />
        </a>
      </div>
    </div>
  );
}

export default AboutPlanet;

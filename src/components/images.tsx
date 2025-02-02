import classes from "@/styles/planet.module.scss";
import { Planet, PlanetView } from "@/types/planet";
import Image from "next/image";

type ImagesProps = {
  planetData: Planet;
  view: string;
};

export function Images({ planetData, view }: ImagesProps) {
  return (
    <div className={classes.imgWrapper}>
      <div className={classes[planetData.name.toLowerCase()]}>
        <Image
          src={
            view === PlanetView.STRUCTURE ? planetData.images.internal : planetData.images.planet
          }
          alt={planetData.name}
          width={250}
          height={250}
          priority
          className={classes.planet}
        />
        {view === "surface" && (
          <Image
            src={planetData.images.geology}
            alt={planetData.name}
            width={163}
            height={199}
            className={classes.geology}
          />
        )}
      </div>
    </div>
  );
}

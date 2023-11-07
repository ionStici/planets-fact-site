import classes from "./about-planet.module.scss";
import Image from "next/image";

function AboutPlanet({ aboutPlanet }) {
  return (
    <div className={classes.wrapper}>
      <h1>{aboutPlanet[0]}</h1>
      <p>{aboutPlanet[1]}</p>
      <div>
        <span>Source :</span>
        <a href={aboutPlanet[2]}>
          <span>Wikipedia</span>
          <Image src="assets/icon-source.svg" alt="" width={12} height={12} />
        </a>
      </div>
    </div>
  );
}

export default AboutPlanet;

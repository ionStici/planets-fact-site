import StatsBoxes from "@/components/stats-boxes";
import SubMenu from "@/components/submenu";
import AboutPlanet from "@/components/about-planet";

import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";

import classes from "./../styles/planet.module.scss";

import { fetchData } from "@/lib/fetch-data";

function PlanetPage({ data, planet }) {
  const planetNames = data.map((planet) => planet.name);
  const planetColors = data.map((planet) => planet.planetColor);

  const { name, rotation, revolution, radius, temperature } = planet;
  const { content: overviewContent, source: overviewSource } = planet.overview;
  const { content: structContent, source: structSource } = planet.structure;
  const { content: geologyContent, source: geologySource } = planet.geology;
  const {
    planet: planetImg,
    internal: internalImg,
    geology: geologyImg,
  } = planet.images;

  const idx = planetNames.findIndex((planetName) => planetName === name);
  const currentColor = planetColors[idx];

  let currentPlanetClass;
  if (name === "Mercury") currentPlanetClass = classes.mercury;
  if (name === "Venus") currentPlanetClass = classes.venus;
  if (name === "Earth") currentPlanetClass = classes.earth;
  if (name === "Mars") currentPlanetClass = classes.mars;
  if (name === "Jupiter") currentPlanetClass = classes.jupiter;
  if (name === "Saturn") currentPlanetClass = classes.saturn;
  if (name === "Uranus") currentPlanetClass = classes.uranus;
  if (name === "Neptune") currentPlanetClass = classes.neptune;

  const [planetImage, setPlanetImage] = useState(planetImg);
  const [aboutPlanet, setAboutPlanet] = useState([]);
  const [surfaceImg, setSurfaceImg] = useState(false);

  useEffect(() => {
    setAboutPlanet([name, overviewContent, overviewSource]);
    setPlanetImage(planetImg);
    setSurfaceImg(false);
  }, [name]);

  const handleClick = function (type) {
    if (type === "overview") {
      setAboutPlanet([name, overviewContent, overviewSource]);
      setPlanetImage(planetImg);
      setSurfaceImg(false);
    }

    if (type === "structure") {
      setAboutPlanet([name, structContent, structSource]);
      setPlanetImage(internalImg);
      setSurfaceImg(false);
    }

    if (type === "surface") {
      setAboutPlanet([name, geologyContent, geologySource]);
      setPlanetImage(planetImg);
      setSurfaceImg(geologyImg);
    }
  };

  return (
    <>
      <Head>
        <title>{name} | Planet Facts</title>
      </Head>
      <Header planetNames={planetNames} planetColors={planetColors} />

      <section className={classes.layout}>
        <div className={classes.imgWrapper}>
          <div className={currentPlanetClass}>
            <Image
              src={planetImage}
              alt={name}
              width={250}
              height={250}
              priority
              className={classes.planet}
            />
            {surfaceImg && (
              <Image
                src={surfaceImg}
                alt={name}
                width={163}
                height={199}
                className={classes.geology}
              />
            )}
          </div>
        </div>

        <SubMenu currentColor={currentColor} onClick={handleClick} />

        <AboutPlanet aboutPlanet={aboutPlanet} />

        <StatsBoxes
          rotation={rotation}
          revolution={revolution}
          radius={radius}
          temperature={temperature}
        />
      </section>
    </>
  );
}

export default PlanetPage;

export async function getStaticProps(context) {
  const data = await fetchData();

  const urlSegment = context.params.planet;
  const planet = data.find((planet) => {
    if (urlSegment === planet.name.toLowerCase()) {
      return planet;
    }
  });

  return {
    props: { data, planet },
  };
}

export async function getStaticPaths() {
  const data = await fetchData();
  const paths = data.map((planet) => ({
    params: { planet: planet.name.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

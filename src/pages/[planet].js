import StatsBoxes from "@/components/stats-boxes";
import SubMenu from "@/components/submenu";
import AboutPlanet from "@/components/about-planet";

import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

import classes from "./../styles/planet.module.scss";

import { fetchData } from "@/lib/fetch-data";

function PlanetPage({ data, planet }) {
  const planetNames = data.map((planet) => planet.name);
  const planetColors = data.map((planet) => planet.planetColor);

  const { name, rotation, revolution, radius, temperature } = planet;

  const overviewContent = planet.overview.content;
  const overciewSource = planet.overview.source;

  const structureContent = planet.structure.content;
  const structureSource = planet.structure.source;

  const geologyContent = planet.geology.content;
  const geologySource = planet.geology.source;

  const imagePlanet = planet.images.planet;
  const imageInternal = planet.images.internal;
  const imageGeology = planet.images.geology;

  const idx = planetNames.findIndex((planetName) => planetName === name);
  const currentColor = planetColors[idx];

  return (
    <>
      <Head>
        <title>{name} | Planet Facts</title>
      </Head>
      <Header planetNames={planetNames} planetColors={planetColors} />

      <section className={classes.layout}>
        <Image src={imagePlanet} alt={name} width={111} height={111} />

        <SubMenu currentColor={currentColor} />
        <AboutPlanet />

        <h1>{name}</h1>

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

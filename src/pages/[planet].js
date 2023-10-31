import Header from "@/components/header";
import Head from "next/head";

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

  return (
    <>
      <Head>
        <title>{name} | Planet Facts</title>
      </Head>
      <Header planetNames={planetNames} planetColors={planetColors} />
      <p>{name}</p>
      <p>{overviewContent}</p>
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

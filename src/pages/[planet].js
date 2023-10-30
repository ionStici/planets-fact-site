import { fetchData } from "@/lib/fetch-data";

function PlanetPage({ data }) {
  return (
    <>
      <p>{data[0].name}</p>
    </>
  );
}

export default PlanetPage;

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
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

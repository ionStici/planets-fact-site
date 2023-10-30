import Header from "@/components/header";
import { fetchData } from "@/lib/fetch-data";

export default function Home(props) {
  const { data } = props;

  const planetNames = data.map((planet) => planet.name);
  const planetColors = data.map((planet) => planet.planetColor);

  return (
    <>
      <Header planetNames={planetNames} planetColors={planetColors} />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
  };
}

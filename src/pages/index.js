import Link from "next/link";
import Image from "next/image";

import { fetchData } from "@/lib/fetch-data";

import classes from "./../styles/index.module.scss";

export default function Home({ data }) {
  return (
    <>
      <section className={classes.section}>
        {data.map((planet, i) => {
          return (
            <div key={i} className={classes.box}>
              <Link href={planet.name.toLowerCase()}>
                <Image
                  src={planet.images.planet}
                  alt={planet.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h2>{planet.name}</h2>
                  <p>Click for more..</p>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
  };
}

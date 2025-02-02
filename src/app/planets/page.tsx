import { fetchData } from "@/lib/fetch-data";
import styles from "@/styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await fetchData();

  return (
    <section className={styles.section}>
      {data.map((planet, i) => {
        return (
          <div key={i} className={styles.box}>
            <Link href={`/${planet.name.toLowerCase()}/overview`}>
              <Image src={`${planet.images.planet}`} alt={planet.name} width={100} height={100} />
              <div>
                <h2>{planet.name}</h2>
                <p>Click for more..</p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

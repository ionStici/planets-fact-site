import Header from "@/components/header";
import { Planet } from "@/components/planet";
import { fetchData } from "@/lib/fetch-data";
import { PlanetParams } from "@/types/planet";
import { notFound } from "next/navigation";
import { views } from "@/constants/views";

type PageProps = { params: Promise<PlanetParams> };

export default async function Page({ params }: PageProps) {
  const { planet, view } = await params;

  const data = await fetchData();
  const planetData = data.find((planetData) => planetData.name.toLowerCase() === planet);

  if (!planetData || !view || !views.includes(view as string)) notFound();

  return (
    <>
      <Header data={data} planetParam={planet} />
      <Planet planetData={planetData} params={{ planet, view }} />
    </>
  );
}

export async function generateStaticParams() {
  const data = await fetchData();
  const params = data
    .map((planet) => views.map((view) => ({ planet: planet.name.toLowerCase(), view })))
    .flat();
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { planet } = await params;
  const data = await fetchData();
  const planetData = data.find((planetData) => planetData.name.toLowerCase() === planet);
  const metadata = { title: planetData?.name, description: planetData?.overview.content };
  return metadata;
}

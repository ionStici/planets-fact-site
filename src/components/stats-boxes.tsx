import { Planet } from "@/types/planet";
import Stat from "./stat";
import classes from "@/styles/stats-boxes.module.scss";

function StatsBoxes({ planetData }: { planetData: Planet }) {
  const { rotation, revolution, radius, temperature } = planetData;

  return (
    <section className={classes.wrapper}>
      <Stat title="Rotation Time" data={rotation} />
      <Stat title="Revolution Time" data={revolution} />
      <Stat title="Radius" data={radius} />
      <Stat title="Average Temp." data={temperature} />
    </section>
  );
}

export default StatsBoxes;

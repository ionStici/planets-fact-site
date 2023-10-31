import Stat from "./stat";

function StatsBoxes({ rotation, revolution, radius, temperature }) {
  return (
    <section>
      <Stat title="Rotation Time" data={rotation} />
      <Stat title="Revolution Time" data={revolution} />
      <Stat title="Radius" data={radius} />
      <Stat title="Average Temp." data={temperature} />
    </section>
  );
}

export default StatsBoxes;

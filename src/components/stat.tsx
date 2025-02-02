type StatProps = { title: string; data: string };

function Stat({ title, data }: StatProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{data}</p>
    </div>
  );
}

export default Stat;

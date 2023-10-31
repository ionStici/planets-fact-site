import Image from "next/image";

function AboutPlanet() {
  return (
    <div>
      <p></p>
      <p>
        <span>Source:</span>
        <a href="https://www.wikipedia.org/">
          <span>Wikipedia</span>
          <Image src="assets/icon-source.svg" alt="" width={12} height={12} />
        </a>
      </p>
    </div>
  );
}

export default AboutPlanet;

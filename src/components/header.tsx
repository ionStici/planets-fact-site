"use client";

import classes from "@/styles/header.module.scss";
import { Planet } from "@/types/planet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = { data: Planet[]; planetParam: string };

function Header({ data, planetParam }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const planetNames = data.map((planet) => planet.name);
  const planetColors = data.map((planet) => planet.planetColor);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link className={classes.logoLink} href="/planets">
          The Planets
        </Link>
        <button className={classes.navBtn} onClick={() => setIsOpen((p) => !p)}>
          <Image
            src="/planets-fact-site/assets/icon-hamburger.svg"
            alt="Menu hamburger"
            width={24}
            height={17}
          />
        </button>
        <nav className={`${classes.nav} ${!isOpen ? classes.hideNav : ""}`}>
          <ul className={classes.ul}>
            {planetNames.map((planetName, i) => {
              const activeOpacity =
                planetParam === `${planetName.toLowerCase()}` ? { opacity: 1 } : {};

              return (
                <li key={planetName} className={classes.li}>
                  <Link href={`/${planetName.toLowerCase()}/overview`} style={{ ...activeOpacity }}>
                    <div
                      style={{ backgroundColor: `${planetColors[i]}`, ...activeOpacity }}
                      className={classes.bar}
                    />
                    <span>{planetName}</span>
                    <Image
                      src="/planets-fact-site/assets/chevron.svg"
                      alt=""
                      width={6}
                      height={8}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

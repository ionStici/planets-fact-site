import Link from "next/link";
import Image from "next/image";

import { useState, useRef } from "react";

import classes from "./header.module.scss";

function Header({ planetNames, planetColors }) {
  const [navState, setNavState] = useState(false);
  const navEl = useRef(null);

  function toggleNav() {
    const nav = navEl.current;

    if (!navState) {
      nav.classList.remove(classes.hideNav);
      setNavState(true);
      return;
    }

    if (navState) {
      nav.classList.add(classes.hideNav);
      setNavState(false);
      return;
    }
  }

  return (
    <header className={classes.header}>
      <Link
        className={classes.logoLink}
        href="/"
        onClick={() => {
          navState ? toggleNav() : "";
        }}
      >
        The Planets
      </Link>

      <button className={classes.navBtn} onClick={toggleNav}>
        <Image src="/assets/icon-hamburger.svg" alt="" width={24} height={17} />
      </button>

      <nav className={`${classes.nav} ${classes.hideNav}`} ref={navEl}>
        <ul className={classes.ul}>
          {planetNames.map((planetName, i) => (
            <li key={planetName} className={classes.li}>
              <Link
                href={planetName.toLowerCase()}
                onClick={() => {
                  navState ? toggleNav() : "";
                }}
              >
                <div style={{ backgroundColor: `${planetColors[i]}` }} />
                <span>{planetName}</span>
                <Image src="/assets/chevron.svg" alt="" width={6} height={8} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

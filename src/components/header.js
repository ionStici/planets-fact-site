import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.scss";

function Header({ planetNames, planetColors }) {
  return (
    <header className={classes.header}>
      <Link className={classes.logoLink} href="/">
        The Planets
      </Link>

      <button className={classes.navBtn}>
        <Image src="/assets/icon-hamburger.svg" alt="" width={24} height={17} />
      </button>

      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {planetNames.map((planetName, i) => (
            <li key={planetName} className={classes.li}>
              <Link href={planetName.toLowerCase()}>
                <div style={{ backgroundColor: `${planetColors[i]}` }}></div>
                <span>{planetName}</span>
                <Image src="/assets/chevron.svg" alt="" width={4} height={8} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
